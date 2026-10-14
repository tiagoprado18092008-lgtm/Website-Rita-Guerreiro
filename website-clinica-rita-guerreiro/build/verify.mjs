// Verificação do output: node build/verify.mjs  (depois de npm run build)
//  1. HTML bruto de cada rota (sem JS): H1, texto, title, description, canonical, og, JSON-LD
//  2. Browser: hydration sem recriar o DOM, sem erros na consola, GSAP ativo, idioma EN
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { serve } from './serve.mjs';
import { routeFor, SITE } from './seo.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public');
const PORT = 5733;
const server = await serve(OUT, PORT);
const fails = [];
const fail = (m) => { fails.push(m); console.log('  ✗', m); };

// ── 1. HTML bruto ──────────────────────────────────────────────────────────
const files = fs.readdirSync(OUT).filter(f => f.endsWith('.html'));
const sitemap = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
for (const f of files) {
  const r = routeFor(f);
  const res = await fetch(`http://localhost:${PORT}${r.path}`);
  const html = await res.text();
  const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(m => strip(m[1]));
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(m => m[1]);
  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
  const ogT = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1];
  const ogD = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const rootText = strip(html.match(/<div id="root">([\s\S]*)<\/div>\s*<script/)?.[1] || '');
  const types = ld.map(x => x['@type']);
  console.log(`${r.path.padEnd(40)} H1="${h1.join(' | ').slice(0, 70)}" texto=${rootText.length}c ld=[${types}]`);
  if (res.status !== 200) fail(`${r.path}: HTTP ${res.status}`);
  if (h1.length !== 1) fail(`${r.path}: ${h1.length} H1`);
  if (rootText.length < 500) fail(`${r.path}: pouco texto pré-renderizado (${rootText.length})`);
  if (!title || !desc || !ogT || !ogD) fail(`${r.path}: falta title/description/og`);
  if (canon.length !== 1 || canon[0] !== r.url || ogUrl !== r.url) fail(`${r.path}: canonical/og:url ${canon} ${ogUrl}`);
  if (!sitemap.includes(`<loc>${r.url}</loc>`)) fail(`${r.path}: fora do sitemap`);
  if (r.kind === 'home') {
    const mb = ld.find(x => x['@type'] === 'MedicalBusiness');
    if (!mb || mb.alternateName?.length !== 3 || !mb.sameAs?.length || !mb.priceRange || !mb.logo) fail('home: MedicalBusiness incompleto');
    if (!h1[0].includes('Rita Guerreiro — Centro de Terapias & Bem-Estar em Loulé')) fail('home: H1 sem marca');
  }
  if (r.kind === 'service' && !types.includes('BreadcrumbList')) fail(`${r.path}: sem BreadcrumbList`);
  if (/unpkg\.com|text\/babel|\.development\.js/.test(html)) fail(`${r.path}: ainda carrega Babel/React dev`);
}
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`sitemap: ${locs.length} URLs; robots: ${fs.readFileSync(path.join(OUT, 'robots.txt'), 'utf8').replace(/\n/g, ' | ')}`);
if (locs.some(u => u !== SITE + '/' && u.endsWith('/'))) fail('sitemap com barra final em subpáginas');

// ── 2. browser ─────────────────────────────────────────────────────────────
const browser = await chromium.launch();
// minTriggers = número de ScrollTriggers medido no site em produção (antes desta alteração)
async function check(url, { lang, mobile, expectHydrate = true, minTriggers = 1 } = {}) {
  const ctx = await browser.newContext(mobile ? { viewport: { width: 390, height: 844 }, isMobile: true } : { viewport: { width: 1440, height: 900 } });
  if (lang) await ctx.addInitScript((l) => localStorage.setItem('rg_lang', l), lang);
  // marca os nós pré-renderizados antes de qualquer script correr
  await ctx.addInitScript(() => {
    new MutationObserver((_, obs) => {
      const root = document.getElementById('root');
      if (root && root.firstElementChild && !window.__mark) { window.__mark = root.firstElementChild; obs.disconnect(); }
    }).observe(document, { childList: true, subtree: true });
  });
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text().slice(0, 200)); });
  page.on('pageerror', e => errs.push(e.message));
  await page.goto(`http://localhost:${PORT}${url}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.mouse.wheel(0, 1600);
  await page.waitForTimeout(1200);
  const res = await page.evaluate(() => ({
    kept: window.__mark ? document.contains(window.__mark) : null,
    gsap: typeof gsap !== 'undefined',
    triggers: typeof ScrollTrigger !== 'undefined' ? ScrollTrigger.getAll().length : 0,
    tweened: [...document.querySelectorAll('#root [style]')].some(e => /translate|matrix/.test(e.style.transform) && e.style.opacity !== ''),
    lang: document.documentElement.lang,
    h1: document.querySelector('h1')?.textContent.trim().slice(0, 60),
    title: document.title,
  }));
  console.log(`${(url + (lang ? ' [' + lang + ']' : '') + (mobile ? ' [mobile]' : '')).padEnd(46)} DOM pré-render mantido=${res.kept} gsap=${res.gsap} scrollTriggers=${res.triggers} lang=${res.lang} title="${res.title}"`);
  if (errs.length) fail(`${url}: consola: ${errs.join(' || ')}`);
  if (expectHydrate && !res.kept) fail(`${url}: hydration recriou o DOM`);
  if (minTriggers && (!res.gsap || res.triggers < minTriggers)) fail(`${url}: GSAP/ScrollTrigger inativo (${res.triggers} < ${minTriggers})`);
  await ctx.close();
  return res;
}
await check('/', { minTriggers: 6 });
await check('/', { mobile: true, minTriggers: 4 });
await check('/servico/fisioterapia', { minTriggers: 0 }); // categoria: 0 também em produção
await check('/servico/psicologia', { minTriggers: 3 });
await check('/servico/psicologia', { mobile: true, minTriggers: 1 });
await check('/servico/tecarterapia-winback');
await check('/sobre');
await check('/contactos');
await check('/termos', { minTriggers: 0 }); // não carrega GSAP (igual ao original)
const en = await check('/', { lang: 'EN', expectHydrate: false });
if (!/Recover/.test(en.h1) || en.lang !== 'en') fail('EN não aplicado');
await check('/sobre?prof=1', { expectHydrate: false });
await browser.close();
server.close();

console.log(fails.length ? `\n${fails.length} FALHAS` : '\nTUDO OK');
process.exit(fails.length ? 1 : 0);

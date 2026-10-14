// Build de produção: project/ -> public/
//  1. copia project/ para public/
//  2. pré-compila o JSX (esbuild) num bundle minificado; React em modo produção (self-hosted)
//  3. pré-renderiza o #root de cada página (renderToString no Chromium, em PT)
//  4. injeta SEO por página (meta, canonical, og, JSON-LD) e gera sitemap.xml
// Uso: npm run build
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';
import { chromium } from 'playwright';
import { serve } from './serve.mjs';
import { SITE, BUSINESS, routeFor } from './seo.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'project');
const OUT = path.join(ROOT, 'public');
const require_ = (p) => path.join(ROOT, 'node_modules', p);

const log = (...a) => console.log('[build]', ...a);
const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 10);
const readText = (f) => fs.readFileSync(f, 'utf8').replace(/^\uFEFF/, '');

// ── 1. copiar ──────────────────────────────────────────────────────────────
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(SRC, OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, 'vendor'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'js'), { recursive: true });
for (const [from, to] of [
  ['react/umd/react.production.min.js', 'react-18.3.1.production.min.js'],
  ['react-dom/umd/react-dom.production.min.js', 'react-dom-18.3.1.production.min.js'],
]) fs.copyFileSync(require_(from), path.join(OUT, 'vendor', to));

// ── 2. compilar ────────────────────────────────────────────────────────────
const JSX_OPTS = { loader: 'jsx', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment', target: 'es2018' };

// Monta a app: hydrateRoot sobre o HTML pré-renderizado quando o idioma é PT (o do
// pré-render); senão createRoot substitui o conteúdo (o #root fica escondido até lá,
// como acontecia antes, para não piscar o texto em PT).
const PRELUDE = `
window.__rgMount = function (el, node) {
  if (window.__RG_PRERENDER) { window.__RG_NODE = node; return; }
  if (el.hasChildNodes() && !document.documentElement.classList.contains('rg-nopre')) {
    ReactDOM.hydrateRoot(el, node);
  } else {
    var root = ReactDOM.createRoot(el);
    ReactDOM.flushSync(function () { root.render(node); });
    document.documentElement.classList.remove('rg-nopre');
  }
};`;

// Corre no <head>: decide se o HTML pré-renderizado (PT, sem query) pode ser hidratado.
const HEAD_GUARD = `<style>.rg-nopre #root{visibility:hidden}</style><script>(function(){try{var l=localStorage.getItem('rg_lang');if((l&&l!=='PT'&&['EN','FR','ES'].indexOf(l)>-1)||location.search)document.documentElement.classList.add('rg-nopre')}catch(e){}})();</script>`;

const bundles = new Map(); // lista de src -> url
async function bundleFor(srcList) {
  const key = srcList.join('|');
  if (bundles.has(key)) return bundles.get(key);
  const parts = [PRELUDE];
  for (const s of srcList) {
    const { code } = await esbuild.transform(readText(path.join(SRC, s)), { ...JSX_OPTS, sourcefile: s });
    parts.push(`// ${s}\n${code}`);
  }
  const { code } = await esbuild.transform(parts.join('\n;\n'), { loader: 'js', minify: true, target: 'es2018', legalComments: 'none' });
  const name = `js/app-${hash(code)}.js`;
  fs.writeFileSync(path.join(OUT, name), code);
  bundles.set(key, '/' + name);
  return '/' + name;
}

const htmlFiles = fs.readdirSync(SRC).filter(f => f.endsWith('.html'));
const MOUNT_RE = /ReactDOM\.createRoot\(document\.getElementById\('root'\)\)\.render\(/;

for (const file of htmlFiles) {
  let html = readText(path.join(SRC, file));
  // remover React dev + Babel do browser
  html = html.replace(/<script src="https:\/\/unpkg\.com\/(react|react-dom|@babel\/standalone)@[^"]+"[^>]*><\/script>\s*/g, '');
  // ficheiros JSX externos -> bundle
  const srcList = [...html.matchAll(/<script type="text\/babel" src="\/(src\/[^"?]+)(\?[^"]*)?"><\/script>/g)].map(m => m[1]);
  if (!srcList.length) throw new Error(`${file}: sem scripts JSX`);
  const bundleUrl = await bundleFor(srcList);
  let first = true;
  html = html.replace(/<script type="text\/babel" src="[^"]+"><\/script>\s*/g, () => {
    if (!first) return '';
    first = false;
    return `<script src="/vendor/react-18.3.1.production.min.js"></script>\n<script src="/vendor/react-dom-18.3.1.production.min.js"></script>\n<script src="${bundleUrl}"></script>\n`;
  });
  // script inline (JSX) -> JS compilado
  html = html.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/, (_, code) => {
    if (!MOUNT_RE.test(code)) throw new Error(`${file}: padrão de montagem não encontrado`);
    code = code.replace(MOUNT_RE, "__rgMount(document.getElementById('root'), ");
    return `<script>${esbuild.transformSync(code, { ...JSX_OPTS, minify: true }).code}</script>`;
  });
  if (/text\/babel|unpkg\.com/.test(html)) throw new Error(`${file}: restos de Babel/unpkg`);
  html = html.replace('</head>', `${HEAD_GUARD}\n</head>`);
  fs.writeFileSync(path.join(OUT, file), html);
}
log(`${htmlFiles.length} páginas compiladas, ${bundles.size} bundles`);

// ── 3. pré-renderizar ──────────────────────────────────────────────────────
const PORT = 5711;
const server = await serve(OUT, PORT);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.addInitScript(() => { window.__RG_PRERENDER = true; });
// o pré-render não precisa de GSAP/animações nem de imagens
await ctx.route(/cdnjs\.cloudflare\.com|premium\.js|transitions\.js|\.(png|jpe?g|webp|mp4|svg)(\?|$)/i, r => r.abort());
const serverUmd = require_('react-dom/umd/react-dom-server-legacy.browser.production.min.js');

const pages = [];
for (const file of htmlFiles) {
  const route = routeFor(file);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__RG_NODE, null, { timeout: 15000 });
  await page.addScriptTag({ path: serverUmd });
  const data = await page.evaluate(() => {
    // Os atributos style saem do renderToString em bruto ("#6FB5B0", sem espaços); o
    // mobile.css usa seletores [style*=] na forma serializada pelo browser e o
    // hydrateRoot não reescreve atributos -> normalizar via CSSOM.
    const tpl = document.createElement('template');
    tpl.innerHTML = ReactDOMServer.renderToString(window.__RG_NODE);
    tpl.content.querySelectorAll('[style]').forEach(el => el.setAttribute('style', el.style.cssText));
    const html = tpl.innerHTML;
    const S = window.getServices ? window.getServices('PT') : {};
    const prices = [];
    for (const c of Object.values(S)) for (const it of c.items || []) {
      const n = parseFloat(String(it.price || '').replace(',', '.'));
      if (!isNaN(n)) prices.push(n);
    }
    const cats = Object.entries(S).map(([id, c]) => ({ id, label: c.label, items: (c.items || []).map(i => ({ slug: i.slug, name: i.name })) }));
    return { html, prices, cats };
  });
  if (errs.length) throw new Error(`${file}: ${errs.join('; ')}`);
  pages.push({ file, route, ...data });
  await page.close();
}
await browser.close();
server.close();
log(`${pages.length} páginas pré-renderizadas`);

// ── 4. SEO ─────────────────────────────────────────────────────────────────
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const unesc = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const getMeta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`));
  return m ? unesc(m[1]) : null;
};
const setMeta = (html, attr, name, value) => {
  const tag = `<meta ${attr}="${name}" content="${esc(value)}" />`;
  const re = new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`);
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `${tag}\n</head>`);
};
const ldTag = (obj) => {
  const json = JSON.stringify(obj);
  JSON.parse(json); // valida
  return `<script type="application/ld+json">${json.replace(/</g, '\\u003c')}</script>`;
};

const allPrices = pages.find(p => p.prices.length)?.prices || [];
const cats = pages.find(p => p.cats.length)?.cats || [];
const priceRange = allPrices.length ? `${Math.min(...allPrices)}€ - ${Math.max(...allPrices)}€` : '€€';

function breadcrumbFor(route) {
  if (route.kind !== 'service') return null;
  const items = [{ name: 'Início', url: SITE + '/' }];
  const slug = route.slug;
  const cat = cats.find(c => c.id === slug);
  if (cat) items.push({ name: cat.label, url: route.url });
  else {
    const owner = cats.find(c => c.items.some(i => i.slug === slug));
    if (owner) items.push({ name: owner.label, url: `${SITE}/servico/${owner.id}` });
    const it = owner?.items.find(i => i.slug === slug);
    items.push({ name: it ? it.name : route.fallbackName, url: route.url });
  }
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, item: x.url })),
  };
}

const today = new Date().toISOString().slice(0, 10);
const lastmodOf = (file) => {
  try {
    const d = execSync(`git log -1 --format=%cs -- "project/${file}"`, { cwd: ROOT, encoding: 'utf8' }).trim();
    // a página também muda quando mudam os componentes partilhados
    const s = execSync('git log -1 --format=%cs -- project/src', { cwd: ROOT, encoding: 'utf8' }).trim();
    return [d, s].filter(Boolean).sort().pop() || today;
  } catch { return today; }
};

const sitemap = [];
for (const p of pages) {
  const { file, route } = p;
  let html = fs.readFileSync(path.join(OUT, file), 'utf8');

  // conteúdo pré-renderizado
  if (!html.includes('<div id="root"></div>')) throw new Error(`${file}: #root não vazio`);
  html = html.replace('<div id="root"></div>', () => `<div id="root">${p.html}</div>`);

  // meta
  const title = unesc(html.match(/<title>([^<]*)<\/title>/)[1]);
  const desc = getMeta(html, 'name', 'description');
  if (!title || !desc) throw new Error(`${file}: falta title/description`);
  html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, '');
  html = html.replace('</head>', `<link rel="canonical" href="${route.url}" />\n</head>`);
  if (!getMeta(html, 'property', 'og:title')) html = setMeta(html, 'property', 'og:title', title);
  if (!getMeta(html, 'property', 'og:description')) html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'property', 'og:url', route.url);
  for (const [k, v] of [['og:type', 'website'], ['og:locale', 'pt_PT'], ['og:site_name', BUSINESS.name], ['og:image', BUSINESS.image]])
    if (!getMeta(html, 'property', k)) html = setMeta(html, 'property', k, v);

  // JSON-LD gerado aqui (fonte única: build/seo.mjs)
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  const ld = [];
  if (route.kind === 'home') {
    ld.push({ '@context': 'https://schema.org', '@type': 'WebSite', name: BUSINESS.name, alternateName: BUSINESS.alternateName, url: SITE + '/' });
    ld.push({ ...BUSINESS.jsonld, priceRange });
  }
  const bc = breadcrumbFor(route);
  if (bc) ld.push(bc);
  if (ld.length) html = html.replace('</head>', `${ld.map(ldTag).join('\n')}\n</head>`);

  // validação mínima
  const h1s = (p.html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) throw new Error(`${file}: ${h1s} H1`);

  fs.writeFileSync(path.join(OUT, file), html);
  if (route.sitemap) sitemap.push({ loc: route.url, lastmod: lastmodOf(file), priority: route.priority });
}

const order = (u) => (u.endsWith('/') ? 0 : 1);
sitemap.sort((a, b) => order(a.loc) - order(b.loc) || b.priority - a.priority || a.loc.localeCompare(b.loc));
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemap.map(s => `  <url><loc>${s.loc}</loc><lastmod>${s.lastmod}</lastmod><priority>${s.priority.toFixed(1)}</priority></url>`).join('\n') +
  `\n</urlset>\n`);
log(`sitemap.xml: ${sitemap.length} URLs · priceRange ${priceRange}`);
log('OK ->', path.relative(ROOT, OUT));

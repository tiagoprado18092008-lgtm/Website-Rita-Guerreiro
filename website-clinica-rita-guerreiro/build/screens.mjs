// Screenshots desktop+mobile de páginas-chave: node build/screens.mjs <dir> <outDir>
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { serve } from './serve.mjs';

const [dir, out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const server = await serve(path.resolve(dir), 5601);
const PAGES = { home: '/', fisioterapia: '/servico/fisioterapia', psicologia: '/servico/psicologia', winback: '/servico/tecarterapia-winback' };
const VIEWS = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 } };
const browser = await chromium.launch();
const errors = [];
for (const [vn, v] of Object.entries(VIEWS)) {
  const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, isMobile: !!v.isMobile, deviceScaleFactor: v.deviceScaleFactor || 1, reducedMotion: 'reduce' });
  for (const [pn, url] of Object.entries(PAGES)) {
    const page = await ctx.newPage();
    page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${vn} ${pn}] ${m.type()}: ${m.text().slice(0, 300)}`); });
    page.on('pageerror', e => errors.push(`[${vn} ${pn}] pageerror: ${e.message}`));
    await page.goto(`http://localhost:5601${url}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    // força reveals/lazy a aparecerem: percorre a página
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); } await new Promise(r => setTimeout(r, 1200)); window.scrollTo(0, 0); });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${out}/${pn}-${vn}.png`, fullPage: true });
    await page.close();
  }
  await ctx.close();
}
await browser.close(); server.close();
fs.writeFileSync(`${out}/console.txt`, errors.join('\n'));
console.log(errors.length ? errors.join('\n') : 'sem erros na consola');

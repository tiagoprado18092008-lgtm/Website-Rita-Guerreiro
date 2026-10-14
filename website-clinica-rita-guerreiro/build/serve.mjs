// Servidor estático local que imita o Vercel (cleanUrls + rewrites /servico/<slug>)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.jsx': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json', '.mp4': 'video/mp4' };

export function serve(root, port) {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const m = p.match(/^\/servico\/([a-z0-9-]+)$/);
    if (m) p = `/servico-${m[1]}`;
    if (p === '/') p = '/index.html';
    let file = path.join(root, p);
    if (!path.extname(file) && fs.existsSync(file + '.html')) file += '.html';
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end('404'); }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(r => server.listen(port, () => r(server)));
}

if (process.argv[1] && process.argv[1].endsWith('serve.mjs')) {
  const [root = 'public', port = '5500'] = process.argv.slice(2);
  serve(path.resolve(root), +port).then(() => console.log(`http://localhost:${port} -> ${root}`));
}

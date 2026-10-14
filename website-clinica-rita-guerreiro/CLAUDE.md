# Website Clínica Rita Guerreiro

Bundle de handoff vindo do Claude Design (claude.ai/design). Centro de Terapias & Bem-Estar em Loulé.

## Stack

- **Fonte em `project/`** (HTML + JSX com `<script type="text/babel">`, corre como está em dev com Babel no browser).
- **Produção: `npm run build`** (`build/build.mjs`) gera `public/`: JSX pré-compilado com esbuild, React em produção (self-hosted em `/vendor`), `#root` pré-renderizado por página (renderToString no Playwright) + hydrateRoot, JSON-LD/canonical/og e `sitemap.xml` gerados a partir de `build/seo.mjs`. `npm run verify` valida tudo.
- O Vercel **não** faz build: serve o `public/` commitado. Depois de mexer em `project/`, correr `npm run build && npm run verify` e commitar `public/`.
- Páginas HTML em `project/` (uma por rota: `index.html`, `sobre.html`, `contactos.html`, `servico-*.html`).
- Componentes JSX em `project/src/`:
  - `tokens.jsx` — design tokens (cores, espaçamentos, tipografia)
  - `logo.jsx` — componente do logo
  - `data.jsx` — dados estáticos (lista de serviços, testemunhos, etc.)
  - `ui.jsx` — componentes partilhados (Nav, Footer, WAFab, etc.)
  - `home.jsx` — secções da homepage (Hero, ServicesCard, WhyUs, Testimonials, HomeCTA)
  - `sobre.jsx` — secções da página Sobre
  - `pages.jsx` — secções partilhadas das páginas de serviço
- Estilos em `project/src/styles.css`.
- Imagens em `project/assets/` e `project/uploads/`.

## Como correr localmente

A partir de `project/`:

```
python -m http.server 5500
```

Abrir `http://localhost:5500` no browser. Cada HTML é uma página separada (não é SPA com routing — é multi-page).

## Workflow para alterações

1. Editar o ficheiro JSX/CSS relevante em `project/src/`.
2. Refrescar o browser (não há HMR — Babel recompila no load).
3. Inspecionar consola se algo não renderiza: cada página tem um `ready()` que espera por `window.<Componente>` antes de fazer `ReactDOM.createRoot(...).render(...)`.

## O que NÃO fazer sem confirmação

- Não migrar para Next.js / Vite / outra stack sem o utilizador pedir — o handoff foi feito assumindo este formato.
- Não renomear ficheiros que estão referenciados nos `<script src="src/X.jsx">` dos HTML.

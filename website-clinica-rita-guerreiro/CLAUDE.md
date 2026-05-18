# Website Clínica Rita Guerreiro

Bundle de handoff vindo do Claude Design (claude.ai/design). Centro de Terapias & Bem-Estar em Loulé.

## Stack

- **Sem build, sem package.json.** É HTML estático que carrega React 18 + ReactDOM + Babel standalone via CDN (unpkg) e compila JSX no browser em runtime.
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
- Não instalar node_modules nem criar package.json.
- Não renomear ficheiros que estão referenciados nos `<script src="src/X.jsx">` dos HTML.

# Mobile 100% — Redesign mobile-first do website Clínica Rita Guerreiro

**Data:** 2026-05-23
**Scope:** Todas as páginas do site (homepage, sobre, contactos, 5 categorias, ~20 serviços, privacidade, termos).
**Stack:** HTML estático multi-page com React 18 + Babel standalone via CDN. Sem build. Sem package.json.
**Objectivo:** Site totalmente operacional e polido em telemóveis (320–768px), com foco em 375–430px.

---

## 1. Arquitectura técnica

### Ficheiros novos
- `project/src/mobile.css` — toda a lógica responsive mobile (≤768px).

### Ficheiros JSX a tocar (mínimo, cirúrgico)
- `home.jsx` — adicionar classes `rg-hero-home`, `rg-hero-home-photo`, `rg-hero-home-content` ao hero da homepage. Reorganização ligeira do markup para permitir layout "foto-em-cima/texto-em-baixo" via CSS sem `!important` excessivo.
- `ui.jsx` — adicionar classes `rg-nav-row`, `rg-burger-btn`, `rg-mobile-overlay` (algumas já existem), e classes ao Footer (`rg-footer-col-N`).
- `sobre.jsx` / `pages.jsx` — provavelmente nada; as classes existentes (`rg-hero-grid`, `rg-values-grid`, `rg-steps-grid`) já são suficientes para CSS overrides.

### Inclusão nos HTMLs
Adicionar `<link rel="stylesheet" href="src/mobile.css">` depois de `premium.css` em todos os 27 HTMLs:
- `index.html`, `sobre.html`, `contactos.html`, `privacidade.html`, `termos.html`
- 5 categorias: `fisioterapia.html`, `saude.html`, `massagens.html`, `holisticas.html`, `estetica.html`
- ~20 serviços: `servico-*.html`

### Breakpoints unificados
- `@media (max-width: 768px)` — entrada em modo mobile (tablet pequeno).
- `@media (max-width: 480px)` — phone padrão (375–430px confortável).
- `@media (max-width: 360px)` — phone muito pequeno (iPhone SE, Androids antigos).

O CSS desktop existente continua a controlar ≥1180px. mobile.css sobrepõe-se em ≤768px. A faixa intermédia 769–1180px (tablet/laptop pequeno) continua com as media queries existentes em `styles.css` e `premium.css`.

---

## 2. Nav e menu mobile

### Header
- Top bar (utility bar com telefone/morada) escondida em ≤768px (já está).
- Altura do `.rg-nav-row` reduzida de 88px para 64px em mobile.
- Logo: altura 56px em mobile (atualmente 110px desktop).

### Burger
- Touch target ≥44×44px (atualmente ~32px). Aumentar padding do botão.
- Visível em ≤1180px (já está).

### Mobile overlay (já existe — polir)
- Slide-in da direita (não fade) com `transform: translateX(100%)` → `translateX(0)`, transição 350ms cubic-bezier.
- Fundo sólido `#0F2A2A` (teal escuro) — não cream.
- Texto cream/branco para contraste.
- Items grandes: font-size 24px, padding vertical 18px, divider entre cada.
- Toggle "Serviços" com chevron animado (já está; mantém).
- CTA bottom-area: WhatsApp full-width verde + telefone outline. Sempre visíveis com sticky bottom.
- Lock do scroll do body quando overlay aberto (`document.body.style.overflow = 'hidden'`).
- Toggle PT/EN/FR/ES no fundo, pequeno.

### Header on scroll
- Threshold do hide-on-scroll aumenta para 120px em mobile (atualmente esconde com pouco scroll).

---

## 3. Homepage

### Hero (redesenhado de raiz)
Layout vertical: foto em cima, texto em baixo.

**Foto (topo, full-width)**
- Altura: `45vh`, min 320px, max 480px.
- `<img>` da equipa (`assets/foto-equipa-nova.png`), `object-fit: cover`, `object-position: center 20%` para garantir caras visíveis.
- Eyebrow pill "Centro de Terapias & Bem-Estar" sobreposta topo-esquerda da foto, fundo `rgba(15,42,42,0.65)` + blur + texto branco.
- Gradiente em baixo `linear-gradient(to bottom, transparent 60%, #ffffff 100%)` para transição suave.

**Texto (bloco branco abaixo)**
- Padding: 32px 20px 40px.
- H1: clamp(34px, 9vw, 44px), line-height 1.05, peso 600.
- Subtítulo: 16px, line-height 1.55, cor charcoal, max-width 320px.
- 2 CTAs empilhados full-width gap 12px:
  - "Marcar consulta" → primário teal (#6FB5B0), height 56px, font 16px, border-radius 12px.
  - "Falar no WhatsApp" → outline teal escuro (border 1.5px, transparente).
- Linha de prova social (rating Google) por baixo.

### Trust band (StatsStrip)
- 2×2 grid em mobile (não 1col, não 3col) com dividers internos finos.
- Padding interno reduzido.

### ServicesCard menu
- Grid colapsa para 1 coluna (já faz a 960px).
- Painel imagem reactiva esconde-se em ≤768px — passa a thumbnail pequena dentro do item ativo.
- Cada item: padding 20px, número + título grande + chevron.

### WhyUs (accordion)
- Grid colapsa para 1col (já faz).
- Foto abaixo do accordion, full-width, aspect 4/5, border-radius 16px.

### MeetRita
- Foto da Rita primeiro (full-width, 4/5).
- Card "Sobre Rita" passa de `absolute` para inline abaixo (já tem CSS para isto em `.rg-meet-card` — manter mas garantir margin-top correto).
- Texto + facts grid 3col passa para 1col em ≤480px.

### Testimonials
- 1 coluna empilhada em mobile.
- Testemunho destaque grande no topo, restantes abaixo.
- Padding reduzido.

### HomeCTA
- 3 opções colapsam para 1 coluna (já faz).
- Cards mantêm grandeza e padding generoso.
- Linha de info inferior empilha vertical (já faz).

---

## 4. Sobre

- `SobreHero`: padding reduzido (top 100px), h1 clamp adequado.
- `Mission`: grid 1col, eyebrow + texto stack.
- `Pillars`: 4 cols → 2x2 a ≤768px, 1col a ≤420px.
- `Story`: foto em cima, texto em baixo.
- `Team`: cards 2col → 1col a ≤480px.
- `Espaco`: mason layout 3col → 2col → 1col (já está).

---

## 5. Contactos

- Hero 2col → 1col empilhado.
- Cards canais (WhatsApp/Telefone) 2col → 1col, min-height reduzido.
- Mapa altura 360px em mobile (era 500px).
- "Como chegar" 3 cards → 1col.
- Telefone sempre clicável `tel:`, morada com link Maps.

---

## 6. Categorias (fisioterapia, saude, massagens, holisticas, estetica)

- Hero compacto: padding-top 100px, h1 menor (clamp 40px–64px).
- Grid serviços `auto-fill minmax(300px)` → 1col real em ≤480px.
- Cards com imagem 16/9 + título + blurb + preço + chevron.
- CTA banner final stack vertical (já tem `flexWrap`).

---

## 7. Páginas de serviço individuais

- Hero grid 2col → 1col com `order: -1` na imagem (já tem) — confirma que texto vem primeiro.
- Breadcrumb scroll-x se não couber.
- Pill de preço: stack vertical se 2 preços (já com flexWrap).
- CTAs "Agendar" + "Ligar" full-width em ≤480px.
- "Descrição + Áreas de Atuação" grid 2col → 1col.
- "Como funciona" grid de steps 1col em ≤480px (já tem).
- CTA banner final stack vertical.
- "Outros serviços" cards 1col.

---

## 8. Footer

- Grid 4col → 1col empilhado em ≤640px (já está). Manter mas:
  - Logo + tagline centrados em mobile.
  - Cada coluna com padding 12px 0, divider entre colunas.
  - Social row centrada.
- Sub-faixa (multibanco + livro reclamações) empilhada centrada em mobile.
- Barra final (copyright + privacidade/termos + alphascale) stack vertical centrada.
- Logo AlphaScale tamanho reduzido para 80px height em mobile (era 130px).

---

## 9. WhatsApp FAB

- Mantém 56×56px bottom-right.
- Tooltip desligado em mobile (já está).
- Garantir que não tapa CTAs: blocos finais da home têm padding-bottom 90px em mobile.

---

## 10. Performance & UX

- `loading="lazy"` em todas as imagens exceto hero (verificar; maioria já tem).
- Ken Burns animation já desligada em mobile via `.rg-ken-burns { animation: none; }`.
- Reduzir parallax/blur em ≤768px (usa `prefers-reduced-motion` quando faz sentido).
- Touch targets ≥44px em todos os botões, links de nav, items de menu.
- Tap highlight: `-webkit-tap-highlight-color: rgba(111,181,176,0.2)`.
- Smooth scroll já está global.
- Sem horizontal scroll: `overflow-x: clip` em html/body (já está).

---

## 11. Testes & validação

Após implementação, testar via Chrome DevTools nos viewports:
- 320×568 (iPhone SE 1ª gen)
- 375×667 (iPhone 6/7/8/SE 2)
- 414×896 (iPhone 11 Pro Max)
- 768×1024 (iPad portrait)

Para cada viewport, navegar:
- index.html
- sobre.html
- contactos.html
- 5 categorias
- 4–5 serviços representativos (1 por categoria)
- privacidade.html, termos.html

Verificar: sem overflow-x, hero legível, CTAs alcançáveis, menu burger funciona com lock, footer não sobrepõe FAB, fotos carregam.

---

## 12. Trade-offs e decisões

- **Não migrar para framework com build**: stack atual sem package.json é restrição dura. mobile.css separado mantém princípio.
- **Não criar variants JSX mobile/desktop**: SSR-less com Babel runtime faria flicker visível ao detectar viewport. Só fazemos ajustes JSX cirúrgicos onde CSS sozinho não chega (hero da home).
- **Selectores com `!important` onde necessário**: porque React serializa estilos inline com alta especificidade. Tratamento já existente no resto do CSS, continuamos no mesmo padrão.
- **Não tocar conteúdo (texto, traduções)**: scope é puramente visual/layout.

---

## 13. Risk register

- Risco de regressão desktop: mitigado por mobile.css só atuar em ≤768px.
- Risco de CDN não permitir os ficheiros novos: vercel.json deve servir estáticos como está. Verificar após primeira mudança.
- Risco de o ficheiro mobile.css crescer demasiado (>1500 linhas): se for o caso, dividir em `mobile-home.css` + `mobile-pages.css`. Provavelmente não atinge.

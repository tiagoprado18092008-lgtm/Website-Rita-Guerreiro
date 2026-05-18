# Premium Redesign — Clínica Rita Guerreiro

**Data:** 2026-05-11  
**Abordagem:** Surgical Lift (Opção A) — sobreposição não-destrutiva  
**Stack:** HTML estático + React 18 CDN + Babel (sem alteração)

---

## Contexto

Stack: HTML estático + React 18 CDN + Babel standalone. Sem build. CSS em `project/src/styles.css`, componentes JSX em `project/src/`. O objetivo é elevar o visual para luxury/premium sem tocar na estrutura JSX nem migrar de stack.

---

## Arquitetura

### Ficheiros novos
- `project/src/premium.css` — sistema CSS de sobreposição
- `project/src/premium.js` — animações GSAP + Lenis smooth scroll

### Ficheiros modificados (adições mínimas)
Todos os HTML em `project/` recebem os mesmos 5 tags antes de `</body>`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="src/premium.css">
<script src="src/premium.js" defer></script>
```

O `<link>` para premium.css vai depois de `styles.css` no `<head>` para garantir cascade correto.

### Lista de HTML a atualizar
- `index.html`
- `sobre.html`, `contactos.html`
- `fisioterapia.html`, `massagens.html`, `holisticas.html`
- `servico-acupuntura.html`, `servico-depilacao-laser.html`, `servico-drenagem-linfatica.html`
- `servico-fisioterapia.html`, `servico-massagem-relaxamento.html`, `servico-massagem-terapeutica.html`
- `servico-mesoterapia.html`, `servico-nutricao.html`, `servico-pilates-clinico.html`
- `servico-psicologia.html`, `servico-terapia-bowen.html`, `servico-massagem-criancas.html`
- `servico-massagem-assinatura-rg.html`, `servico-massagem-profunda.html`
- `servico-massagem-pre-pos-natal.html`, `servico-massagem-sacro-craniana.html`
- `servico-reflexologia.html`, `servico-shiatsu.html`, `servico-massagem-indiana.html`
- `servico-head-spa.html`, `servico-facial.html`, `servico-pacotes-tratamento.html`

### Reversibilidade
Remover os 5 tags restaura o estado anterior. Zero alteração a ficheiros JSX existentes.

---

## Design Visual — premium.css

### CSS Variables (raiz do ficheiro)

```css
:root {
  /* Superfícies */
  --rg-surface-1: #FFFFFF;
  --rg-surface-2: #FAFAF8;
  --rg-surface-3: #F1F7F6;

  /* Sombras multicamada */
  --rg-shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --rg-shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --rg-shadow-lg: 0 20px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06);

  /* Gradientes */
  --rg-gradient-teal: linear-gradient(135deg, #6FB5B0 0%, #2F6B68 100%);
  --rg-gradient-hero-overlay: linear-gradient(90deg, #FAFAF8 55%, transparent 100%);

  /* Transições */
  --rg-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --rg-ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### Tipografia Global

| Elemento | Font | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| H1 hero | Open Sans | 300 | clamp(64px, 7vw, 96px) | -0.03em |
| H2 secções | Open Sans | 300 | clamp(40px, 4.5vw, 64px) | -0.03em |
| H3 cards | Open Sans | 400 | clamp(20px, 2.2vw, 26px) | -0.01em |
| Eyebrow | DM Sans | 500 | 10px | 0.16em |
| Body | DM Sans | 400 | 17px | normal |
| Body max-width | — | — | — | 52ch (mais estreito = mais elegante) |

Sobrepor via `premium.css`:
```css
h1 { font-size: clamp(64px, 7vw, 96px); letter-spacing: -0.03em; }
h2 { font-size: clamp(40px, 4.5vw, 64px); letter-spacing: -0.03em; }
body { font-size: 17px; line-height: 1.7; }
```

### Spacing & Layout

- Secções: `padding: clamp(80px, 10vw, 140px) 0` — muito mais generoso que o atual
- Container max-width: `1200px` (desce de 1280px — mais margens laterais)
- Section dividers: linha `1px solid #E8E6DF` com fade nas pontas via `mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`

---

## Hero Section

### Layout Desktop

- Altura: `100svh`, mínimo `620px`
- Grid: texto 45% esquerda, imagem placeholder 55% direita
- Fundo texto: `#FAFAF8`
- Transição texto→imagem: overlay gradient `var(--rg-gradient-hero-overlay)`

### Imagem Placeholder (até ter foto real)

Retângulo com:
- `background: linear-gradient(135deg, #2F6B68 0%, #1F4846 100%)`
- SVG pattern orgânico subtil overlay (círculos overlapping, opacidade 0.06)
- `border-radius: 24px 0 0 24px` no desktop, `border-radius: 0` no mobile
- Classe `.rg-hero-img-placeholder`

### Elementos do Texto

1. **Linha decorativa vertical** — `.rg-hero-line`: `width: 2px; height: 80px; background: #6FB5B0`. Animada via GSAP: `scaleY: 0 → 1`, origin top, delay 0.3s
2. **Badge** — pill existente, refinado: `border: 1.5px solid #5AAFAA`, dot pulsante verde, texto "Loulé · Algarve · Desde 2022"
3. **Headline** — `clamp(64px, 7vw, 96px)`, Open Sans 300, entrada palavra a palavra via GSAP stagger 80ms
4. **Underline animado** — na última linha "boas mãos." um pseudoelemento `::after` teal desenha-se via `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)`, transition `0.8s ease`, trigger após headline entrar
5. **Parágrafo** — `DM Sans 400 17px`, `max-width: 52ch`, fade in após headline (delay 600ms)
6. **CTAs** — botão primário `#141412` + botão outline telefone. Hover: `translateY(-2px)` + `var(--rg-shadow-lg)`
7. **Social proof inline** — "★★★★★ +500 pacientes felizes" abaixo dos CTAs

### Scroll Indicator

`.rg-scroll-indicator`: chevron duplo animado na base da hero, `animation: bounce 1.5s ease-in-out infinite`. Desaparece via GSAP quando scroll > 200px.

### Mobile

- Empilhado: imagem topo `55svh`, texto por baixo com `padding: 48px 24px`
- Headline: `clamp(40px, 9vw, 56px)`
- CTAs: `flex-direction: column`, gap `12px`
- Grid overlay desativado

---

## Navegação

Classe `.rg-header` já existe. Adicionar via `premium.css`:

```css
.rg-header {
  transition: background 300ms var(--rg-ease-standard),
              box-shadow 300ms var(--rg-ease-standard),
              backdrop-filter 300ms var(--rg-ease-standard);
}
.rg-header.scrolled {
  background: rgba(250, 250, 248, 0.88) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--rg-shadow-sm);
}
```

Classe `.scrolled` adicionada via `premium.js` no evento `scroll` (threshold 40px).

Links: hover com `::after` underline teal `scaleX(0→1)`, `transform-origin: left`.

---

## Cards de Serviços

```css
/* sobrepõe estilos existentes dos cards */
.rg-service-card, [class*="service-card"] {
  border-radius: 20px;
  border: 1px solid #E8E6DF;
  background: #FFFFFF;
  transition: transform 400ms var(--rg-ease-out),
              box-shadow 400ms var(--rg-ease-out),
              border-color 400ms var(--rg-ease-out);
  will-change: transform;
}
.rg-service-card:hover, [class*="service-card"]:hover {
  transform: translateY(-8px);
  box-shadow: var(--rg-shadow-lg);
  border-color: #6FB5B0;
}
```

Imagem placeholder cards: `background: var(--rg-gradient-teal)` com ícone SVG da categoria centrado.
Tag categoria: pill `8px 14px`, `background: #F1F7F6`, `color: #2F6B68`, `font-size: 11px`.

---

## Secções Alternadas

Criar ritmo visual entre secções com fundos alternados:
- Secções 1, 3, 5 (ímpar): `background: var(--rg-surface-1)` (#FFFFFF)
- Secções 2, 4 (par): `background: var(--rg-surface-3)` (#F1F7F6)

Aplicado via seletores de classe das secções existentes em `premium.css`.

---

## Testimonials

```css
.rg-testimonial-card {
  background: #FFFFFF;
  border: 1px solid #E8E6DF;
  border-radius: 20px;
  box-shadow: var(--rg-shadow-md);
  padding: 40px;
  position: relative;
}
/* Quote mark decorativa */
.rg-testimonial-card::before {
  content: '"';
  font-family: 'Open Sans', sans-serif;
  font-size: 120px;
  font-weight: 300;
  color: #F1F7F6;
  position: absolute;
  top: 16px; left: 24px;
  line-height: 1;
  pointer-events: none;
}
```

---

## Footer

```css
footer, .rg-footer {
  background: #141412 !important;
  color: #FAFAF8 !important;
}
footer a, .rg-footer a {
  color: rgba(250,250,248,0.7);
  transition: color 200ms;
}
footer a:hover, .rg-footer a:hover {
  color: #6FB5B0;
}
```

---

## Animações — premium.js

### Estrutura do ficheiro

```js
// 1. Aguardar React renderizar
document.addEventListener('DOMContentLoaded', () => {
  // Alguns componentes React demoram ~200ms a renderizar via Babel CDN
  setTimeout(initPremium, 300);
});

function initPremium() {
  initLenis();
  initScrolledNav();
  initHeroAnimations();
  initScrollReveals();
  initCounters();
  initScrollIndicator();
}
```

### Lenis Smooth Scroll

```js
function initLenis() {
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
```

### Nav Scrolled

```js
function initScrolledNav() {
  const nav = document.querySelector('header, nav, [class*="nav"], [class*="header"]');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}
```

### Hero Animations (GSAP)

```js
function initHeroAnimations() {
  // Linha decorativa
  gsap.from('.rg-hero-line', { scaleY: 0, transformOrigin: 'top', duration: 0.8, ease: 'power3.out', delay: 0.3 });

  // Parallax na imagem hero
  const heroImg = document.querySelector('.rg-hero-img-placeholder, .rg-hero-img');
  if (heroImg) {
    gsap.to(heroImg, { y: -30, ease: 'none', scrollTrigger: { trigger: heroImg, start: 'top top', end: 'bottom top', scrub: 1.5 } });
  }

  // Scroll indicator desaparece
  const scrollInd = document.querySelector('.rg-scroll-indicator');
  if (scrollInd) {
    ScrollTrigger.create({ start: 200, onEnter: () => gsap.to(scrollInd, { opacity: 0, y: 10, duration: 0.4 }) });
  }
}
```

### Scroll Reveals

```js
function initScrollReveals() {
  // Adicionar classe rg-reveal a elementos alvo
  const selectors = ['section > div > h2', 'section > div > p', '.rg-card', '.rg-stat', '[class*="card"]'];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.closest('header') && !el.closest('nav')) el.classList.add('rg-reveal');
    });
  });

  gsap.utils.toArray('.rg-reveal').forEach((el, i) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      delay: (i % 4) * 0.12  // stagger máximo 4 elementos por grupo
    });
  });
}
```

### Counter Animation (Stats Strip)

```js
function initCounters() {
  document.querySelectorAll('[class*="stat"] [class*="number"], [class*="count"]').forEach(el => {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    if (!target) return;
    const suffix = el.textContent.replace(/[\d]/g, '').trim();
    gsap.from({ val: 0 }, {
      val: target, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; }
    });
  });
}
```

### Reduced Motion

```js
// Respeitar prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(100); // skip animações
}
```

---

## Performance

- GSAP e Lenis carregam de CDN com `crossorigin="anonymous"` — sem bloquear render
- `premium.js` com `defer` — não bloqueia parsing HTML
- `will-change: transform` apenas em elementos que animam (hero img, cards)
- Animações com `once: true` no ScrollTrigger — não reativam
- Timeout de 300ms antes de init para aguardar render do Babel CDN

---

## Ordem de Implementação

1. Criar `premium.css` com todas as variáveis, tipografia, hero, nav, cards, testimonials, footer
2. Criar `premium.js` com Lenis, nav scroll, hero GSAP, reveals, counters
3. Atualizar `index.html` (homepage — testar primeiro)
4. Após validação visual, atualizar todos os outros HTML

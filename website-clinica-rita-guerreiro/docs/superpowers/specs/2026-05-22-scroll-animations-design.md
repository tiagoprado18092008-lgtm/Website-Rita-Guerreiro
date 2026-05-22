# Scroll Animations — Design Spec
**Date:** 2026-05-22  
**Ficheiro alvo:** `project/src/premium.js`

## Contexto

O site da Clínica Rita Guerreiro já usa GSAP + ScrollTrigger em todas as páginas. O `premium.js` anima alguns elementos (cards de serviços, testemunhos, h2, stats) mas faltam muitos outros e os grupos de elementos não têm stagger — entram todos ao mesmo tempo.

Princípio-guia: **clínica, não marketing**. As animações devem ser suaves, quase imperceptíveis. O utilizador não deve notar a animação — apenas sentir que a página "respira bem".

## Parâmetros base

| Parâmetro | Valor |
|---|---|
| `y` (deslocamento) | `16px` (reduzido — menos movimento) |
| `duration` | `0.85s` |
| `ease` | `power2.out` (mais suave que power3) |
| `start` | `'top 82%'` (elemento quase centrado antes de animar) |
| `once` | `true` (anima só uma vez) |
| Stagger entre cards | `0.12s` |

## Elementos a animar

### Já existentes (melhorar com stagger e novos parâmetros)
- `.rg-service-card` — stagger `0.12s` por grupo de grid
- `.rg-testimonial-card` — stagger `0.12s`
- `.rg-icon-card` — stagger `0.12s`
- `.rg-stat` — stagger `0.12s`
- `section h2` — sem stagger, animação individual

### Novos elementos
- `.rg-eyebrow` (fora da hero) — fade + `y: 12px`, antes do h2
- `section p` lead text (fora da hero) — fade + `y: 12px`, delay após h2
- `.rg-meet-card` — fade + `y: 16px`
- `.rg-steps-grid > *` — stagger `0.12s`
- `.rg-values-grid > *` — stagger `0.12s`
- `.rg-cta-option` — stagger `0.12s`

### Excluídos (não animar)
- Hero e efeitos próprios (word reveal, parallax, scroll indicator)
- Nav e Footer
- Imagens de secção (sem scale — demasiado chamativo para clínica)

## Implementação

Tudo dentro da função `initScrollReveals()` em `premium.js`. Substituir a lógica actual por:

1. Função helper `animateGroup(selector, extraProps)` que faz `gsap.from` com os parâmetros base + stagger, excluindo elementos dentro da hero.
2. Função helper `animateSingle(selector, extraProps)` para elementos individuais (sem stagger).
3. Chamar os helpers para cada grupo/elemento listado acima.

Não tocar noutras funções (`initScrollIndicator`, `initHeroParallax`, `initCounters`).

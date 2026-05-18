# Rita Guerreiro — Redesign Visual: Spec

**Data:** 2026-04-26  
**Stack:** HTML estático + React 18 via CDN + Babel standalone + Tailwind-free CSS  
**Scope:** 4 elementos novos — Hero rebuild, Processo nas páginas de serviço, Page transitions, WhatsApp FAB melhorado + limpeza da página de Contactos

---

## Contexto

O site existe em `project/` e corre localmente via `python -m http.server 5500`. Muitos elementos do prompt original já existem no código (Reveal animations, hover nos cards, navbar scroll, mega-menu, testimonials, stats strip). Este spec cobre **apenas o que genuinamente não existe**.

---

## 1. Hero Rebuild (`src/home.jsx` — função `Hero`)

### Problema atual
Layout 2 colunas: texto à esquerda, `<img src="assets/equipa-4.png">` à direita. Sem impacto visual. A foto pode não existir ou ter qualidade insuficiente.

### Solução
Manter a estrutura 2 colunas mas substituir a coluna direita por um painel animado que não depende de foto real.

**Coluna esquerda:**
- O `<h1>` passa a ter cada palavra/linha num `<span class="rg-word">` com stagger de 80ms entre cada span
- A animação `rg-word` já existe em `styles.css` — apenas aplicar ao markup do título
- Resto da coluna (badge, linha decorativa, subtítulo, CTAs, horário) mantém-se igual

**Coluna direita — painel animado:**
- Container `div` com `borderRadius: 20`, `overflow: hidden`, `height: 520`, `background: linear-gradient(135deg, #E8F5F4 0%, #C5E8E5 100%)`
- 3 círculos SVG sobrepostos em posições absolutas diferentes, com `animation: rg-float-N` (duração 20–28s, `ease-in-out infinite`, `translateY ±12px`), opacidade 0.15–0.35 — orgânico, não agressivo
- Card de credenciais sobreposto no fundo (posição `absolute bottom: 20 left: 20 right: 20`) — mantém exatamente o que já existe
- Placeholder de texto `[ Foto da equipa ]` em canto superior direito, `fontFamily: F_MONO`, `fontSize: 10`, `color: RG.muted`, `opacity: 0.4` — remover quando foto for adicionada

**CSS a adicionar em `styles.css`:**
```css
@keyframes rg-float-1 {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
@keyframes rg-float-2 {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(10px); }
}
@keyframes rg-float-3 {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
```

**Migração para foto real (futura):** substituir o `div` de fundo por `<img src="assets/equipa-4.png">` com `objectFit: cover`. Os círculos e o card de credenciais ficam sobrepostos com `position: absolute`.

---

## 2. Secção de Processo (`src/pages.jsx` — função `ServicePage`)

### Problema atual
Não existe nenhuma secção de processo/timeline nas páginas de serviço individuais.

### Solução
Nova `<Section>` inserida entre "áreas de atuação" e "outros serviços em categoria".

**Título:** `"Como funciona."` com `<span style={{ color: RG.tealDark }}>.</span>`

**5 passos fixos (iguais para todos os serviços):**
1. Primeira consulta — "Falamos sobre o teu caso e historial de saúde."
2. Avaliação — "Diagnóstico preciso e identificação das causas."
3. Plano personalizado — "Criamos um plano adaptado aos teus objetivos."
4. Tratamento — "Sessões focadas com acompanhamento contínuo."
5. Acompanhamento — "Seguimos a tua evolução ao longo do tempo."

**Layout:**
- Container com `position: relative`
- Linha vertical teal (`width: 2px, background: RG.teal`) em `position: absolute, left: 19px, top: 0, bottom: 0`
- Cada passo: `display: flex, gap: 24px, alignItems: flex-start`
  - Círculo numerado: `width: 40px, height: 40px, borderRadius: 50%, background: RG.teal, color: white, fontFamily: F_BODY, fontWeight: 700, fontSize: 14` — número centrado
  - Texto: título em `F_DISPLAY, fontSize: 20, fontWeight: 300` + descrição em `F_BODY, fontSize: 14, color: RG.charcoal`
- Cada passo envolto em `<Reveal delay={i * 80}>` para cascata ao scroll
- `bg={RG.white}`, `pad="lg"`

---

## 3. Page Transitions (`src/transitions.js` — ficheiro novo)

### Problema atual
Não existe. Navegação entre páginas é instantânea.

### Solução
CSS puro + `localStorage`. Zero dependências. Funciona em multi-page HTML estático.

**Ficheiro novo: `project/src/transitions.js`**

```javascript
(function () {
  var STORAGE_KEY = 'rg-pt';

  // On page load: check flag → play enter animation
  if (localStorage.getItem(STORAGE_KEY) === '1') {
    localStorage.removeItem(STORAGE_KEY);
    document.documentElement.classList.add('page-enter');
  }

  // Intercept all internal link clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')) return;
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, '1');
    document.documentElement.classList.add('page-exit');
    setTimeout(function () { window.location.href = href; }, 260);
  });

  // WhatsApp FAB slide-in
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var fab = document.querySelector('.rg-wafab');
      if (fab) fab.classList.add('rg-wafab-visible');
    }, 2000);
  });
})();
```

**CSS a adicionar em `styles.css`:**
```css
@keyframes rg-page-enter {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes rg-page-exit {
  to { opacity: 0; transform: translateY(-8px); }
}
html.page-enter { animation: rg-page-enter 350ms cubic-bezier(.16,1,.3,1) both; }
html.page-exit  { animation: rg-page-exit  260ms ease forwards; pointer-events: none; }
```

**HTML:** adicionar `<script src="src/transitions.js"></script>` em **todos** os ficheiros HTML do projeto, antes do `</body>`.

---

## 4. WhatsApp FAB Melhorado (`src/ui.jsx` + `styles.css`)

### Problema atual
`rg-wafab-pulse` é apenas box-shadow a pulsar — subtil. Sem ripple visível, sem tooltip, sem slide-in de entrada.

### Solução

**Ripple ring (`styles.css`):**
```css
.rg-wafab { position: relative; /* já tem */ }
.rg-wafab::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: 999px;
  border: 2px solid rgba(37,211,102,0.6);
  animation: rg-ripple 3s ease-out 2.5s infinite;
}
@keyframes rg-ripple {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(1.75); opacity: 0; }
}
```

**Tooltip (`styles.css`):**
```css
.rg-wafab::after {
  content: 'Fala connosco!';
  position: absolute;
  right: calc(100% + 12px);
  top: 50%; transform: translateY(-50%) translateX(6px);
  background: white;
  color: #141412;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms, transform 200ms;
}
.rg-wafab:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
```

**Slide-in de entrada (`styles.css`):**
```css
.rg-wafab {
  transform: translateX(80px);
  opacity: 0;
  transition: transform 600ms cubic-bezier(.34,1.4,.64,1), opacity 400ms ease;
}
.rg-wafab.rg-wafab-visible {
  transform: translateX(0);
  opacity: 1;
}
```
A classe `rg-wafab-visible` é adicionada via `transitions.js` após 2s (já incluído no Secção 3).

**Nota:** o `transition` no slide-in conflitua com o `transition: transform 220ms` existente na regra `.rg-wafab`. Consolidar numa só regra.

---

## 5. Página de Contactos (`src/pages.jsx` — função `ContactosPage`)

### Alterações
- **Remover** o bloco `<div>` com o formulário ("Envia uma mensagem") — o `<Reveal delay={80}>` com o `<form>` e tudo dentro
- **Remover** o email da grelha de info (item `{ k: 'Email', v: 'geral@ritaguerreiro.pt' }`)
- **Remover** Instagram e Facebook da grelha de info (items com `k: 'Instagram'` e `k: 'Facebook'`) — estas redes sociais passam a existir apenas como ícones no footer
- A grelha de info passa de 6 items para 3: Morada, Telefone, Horário
- O layout passa de `gridTemplateColumns: '1fr 1.3fr'` (texto + formulário) para uma grelha horizontal de 3 cards de info (Morada · Telefone · Horário) em `gridTemplateColumns: 'repeat(3, 1fr)'`, seguida do mapa full-width em baixo

---

## Ficheiros afetados

| Ficheiro | Operação |
|---|---|
| `project/src/home.jsx` | Modificar função `Hero` |
| `project/src/pages.jsx` | Modificar `ServicePage` (adicionar processo) + `ContactosPage` (limpar contactos) |
| `project/src/styles.css` | Adicionar keyframes float, page transitions, ripple, tooltip, slide-in FAB |
| `project/src/transitions.js` | Criar ficheiro novo |
| `project/*.html` | Adicionar `<script src="src/transitions.js">` em todos |

---

## Ordem de implementação

1. `styles.css` — adicionar todos os novos keyframes e classes CSS
2. `transitions.js` — criar ficheiro
3. Todos os HTML — adicionar script tag
4. `home.jsx` — Hero rebuild (coluna direita + word animation no título)
5. `pages.jsx` — Processo/timeline na ServicePage
6. `pages.jsx` — Limpar ContactosPage (remover form, email, social info)

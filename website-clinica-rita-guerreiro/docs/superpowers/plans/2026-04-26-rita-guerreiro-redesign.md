# Rita Guerreiro — Redesign Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar 4 elementos novos ao site estático da Rita Guerreiro: hero com painel animado, timeline de processo nas páginas de serviço, page transitions CSS, e WhatsApp FAB melhorado — mais limpeza da página de Contactos.

**Architecture:** HTML estático multi-page com React 18 via CDN + Babel standalone. Sem build step. Cada página HTML carrega os JSX diretamente. Toda a lógica vive em `project/src/`. As alterações CSS vão todas para `styles.css`. O novo ficheiro `transitions.js` é JavaScript puro (não JSX) incluído em todos os HTML.

**Tech Stack:** React 18 (CDN), Babel Standalone, CSS custom properties, IntersectionObserver (já presente via `Reveal`), localStorage para page transitions.

---

## File Map

| Ficheiro | Operação | Responsabilidade |
|---|---|---|
| `project/src/styles.css` | Modificar | Adicionar keyframes: float, page-enter/exit, ripple, tooltip, FAB slide-in |
| `project/src/transitions.js` | Criar | Page transitions + FAB slide-in trigger |
| `project/src/home.jsx` | Modificar | Hero: coluna direita animada + word-stagger no título |
| `project/src/pages.jsx` | Modificar | ServicePage: secção processo/timeline; ContactosPage: remover form + email + social info |
| `project/index.html` | Modificar | Adicionar `<script src="src/transitions.js">` |
| `project/sobre.html` | Modificar | Adicionar `<script src="src/transitions.js">` |
| `project/contactos.html` | Modificar | Adicionar `<script src="src/transitions.js">` |
| `project/servico-*.html` (13 ficheiros) | Modificar | Adicionar `<script src="src/transitions.js">` em cada um |

---

## Task 1: CSS — Keyframes e classes novas

**Files:**
- Modify: `project/src/styles.css`

- [ ] **Step 1: Abrir `styles.css` e adicionar ao fim do ficheiro o bloco seguinte**

```css
/* ── Hero panel float animations ────────────────────────── */
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

/* ── Page transitions ────────────────────────────────────── */
@keyframes rg-page-enter {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes rg-page-exit {
  to { opacity: 0; transform: translateY(-8px); }
}
html.page-enter { animation: rg-page-enter 350ms cubic-bezier(.16,1,.3,1) both; }
html.page-exit  { animation: rg-page-exit  260ms ease forwards; pointer-events: none; }

/* ── WhatsApp FAB — ripple ring ──────────────────────────── */
@keyframes rg-ripple {
  0%   { transform: scale(1);    opacity: 0.8; }
  100% { transform: scale(1.75); opacity: 0; }
}
.rg-wafab::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: 999px;
  border: 2px solid rgba(37,211,102,0.6);
  animation: rg-ripple 3s ease-out 2.5s infinite;
  pointer-events: none;
}

/* ── WhatsApp FAB — tooltip ──────────────────────────────── */
.rg-wafab::after {
  content: 'Fala connosco!';
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(6px);
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

/* ── WhatsApp FAB — slide-in de entrada ─────────────────── */
/* Substitui a regra existente .rg-wafab (mantém pulse via rg-wafab-visible) */
.rg-wafab {
  transform: translateX(80px) !important;
  opacity: 0 !important;
  transition: transform 600ms cubic-bezier(.34,1.4,.64,1), opacity 400ms ease !important;
  animation: none !important;
}
.rg-wafab.rg-wafab-visible {
  transform: translateX(0) !important;
  opacity: 1 !important;
  animation: rg-wafab-pulse 3s ease-in-out 0.6s infinite !important;
}
```

- [ ] **Step 2: Verificar que não há conflito com a regra `.rg-wafab` existente**

A regra existente em `styles.css` (linha ~427–434) define `animation: rg-wafab-pulse` e `transition: transform 220ms`. A nova regra com `!important` sobrepõe-se correctamente. Confirmar visualmente que o ficheiro tem apenas uma regra `.rg-wafab` base — a nova — e a `.rg-wafab:hover` existente (que não precisa de alterar).

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/src/styles.css
git commit -m "feat(css): add float, page-transition, ripple, tooltip, FAB slide-in keyframes"
```

---

## Task 2: Criar `transitions.js`

**Files:**
- Create: `project/src/transitions.js`

- [ ] **Step 1: Criar o ficheiro `project/src/transitions.js` com o seguinte conteúdo**

```javascript
(function () {
  var STORAGE_KEY = 'rg-pt';

  // Page enter: se flag activo, animar entrada e limpar flag
  if (localStorage.getItem(STORAGE_KEY) === '1') {
    localStorage.removeItem(STORAGE_KEY);
    document.documentElement.classList.add('page-enter');
  }

  // Interceptar cliques em links internos
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;
    // Ignorar links externos, tel:, mailto:, anchors, WhatsApp
    if (
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('#') ||
      a.target === '_blank'
    ) return;
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, '1');
    document.documentElement.classList.add('page-exit');
    setTimeout(function () { window.location.href = href; }, 260);
  });

  // FAB slide-in após 2s
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var fab = document.querySelector('.rg-wafab');
      if (fab) fab.classList.add('rg-wafab-visible');
    }, 2000);
  });
})();
```

- [ ] **Step 2: Verificar que o ficheiro foi criado**

```bash
ls "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro/project/src/transitions.js"
```

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/src/transitions.js
git commit -m "feat(transitions): add page transitions + FAB slide-in trigger"
```

---

## Task 3: Adicionar `transitions.js` a todos os HTML

São 16 ficheiros HTML. O script deve ser adicionado **antes do `</body>`**, como último `<script>` (após todos os scripts Babel/React mas sem `type="text/babel"` — é JS puro).

**Files:**
- Modify: `project/index.html`, `project/sobre.html`, `project/contactos.html`, e todos os `project/servico-*.html`

- [ ] **Step 1: Em `project/index.html`, adicionar antes de `</body>`**

Encontrar a linha `</body>` e inserir antes dela:
```html
<script src="src/transitions.js"></script>
```

O bloco final do `index.html` deve ficar:
```html
...
ready();
</script>
<script src="src/transitions.js"></script>
</body>
</html>
```

- [ ] **Step 2: Repetir para `project/sobre.html`**

Mesmo padrão: adicionar `<script src="src/transitions.js"></script>` antes de `</body>`.

- [ ] **Step 3: Repetir para `project/contactos.html`**

Mesmo padrão.

- [ ] **Step 4: Repetir para todos os 13 `project/servico-*.html`**

Lista completa de ficheiros a editar:
- `servico-acupuntura.html`
- `servico-depilacao-laser.html`
- `servico-drenagem-linfatica.html`
- `servico-fisioterapia.html`
- `servico-massagem-relaxamento.html`
- `servico-massagem-terapeutica.html`
- `servico-mesoterapia.html`
- `servico-nutricao.html`
- `servico-osteopatia.html`
- `servico-pilates-clinico.html`
- `servico-psicologia.html`
- `servico-terapia-bowen.html`
- `servico-treino-personalizado.html`

Em cada um: adicionar `<script src="src/transitions.js"></script>` antes de `</body>`.

- [ ] **Step 5: Verificar manualmente que um ficheiro de serviço tem o script**

```bash
grep -c "transitions.js" "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro/project/servico-fisioterapia.html"
```
Resultado esperado: `1`

- [ ] **Step 6: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/*.html
git commit -m "feat(html): add transitions.js script to all pages"
```

---

## Task 4: Hero — painel direito animado + word-stagger no título

**Files:**
- Modify: `project/src/home.jsx` — função `Hero`

- [ ] **Step 1: Substituir a coluna direita do Hero (o `<Reveal y={24} delay={100}>` com a imagem `equipa-4.png`)**

Localizar o bloco (linhas 75–88 de `home.jsx`):
```jsx
{/* Right — equipa photo */}
<Reveal y={24} delay={100}>
  <div style={{ borderRadius: 20, overflow: 'hidden', height: 520, background: RG.creamSoft, position: 'relative' }}>
    <img src="assets/equipa-4.png" ... />
    <div style={{ position: 'absolute', bottom: 20, ... }}>
      ...card de credenciais...
    </div>
  </div>
</Reveal>
```

Substituir por:
```jsx
{/* Right — animated panel (foto a adicionar depois) */}
<Reveal y={24} delay={100}>
  <div style={{
    borderRadius: 20, overflow: 'hidden', height: 520,
    background: 'linear-gradient(135deg, #E8F5F4 0%, #C5E8E5 60%, #A8D8D4 100%)',
    position: 'relative',
  }}>
    {/* Placeholder label */}
    <div style={{
      position: 'absolute', top: 16, right: 16,
      fontFamily: F_MONO, fontSize: 9, color: RG.muted, opacity: 0.4,
      letterSpacing: '0.1em', textTransform: 'uppercase',
    }}>[ Foto da equipa ]</div>

    {/* Círculos orgânicos animados */}
    <div style={{
      position: 'absolute', width: 280, height: 280, borderRadius: '50%',
      background: 'rgba(91,175,170,0.18)', top: -60, right: -60,
      animation: 'rg-float-1 24s ease-in-out infinite',
    }} />
    <div style={{
      position: 'absolute', width: 180, height: 180, borderRadius: '50%',
      background: 'rgba(111,181,176,0.14)', bottom: 80, left: -40,
      animation: 'rg-float-2 28s ease-in-out infinite',
    }} />
    <div style={{
      position: 'absolute', width: 100, height: 100, borderRadius: '50%',
      background: 'rgba(47,107,104,0.12)', top: 160, left: 80,
      animation: 'rg-float-3 20s ease-in-out infinite',
    }} />

    {/* Card de credenciais — igual ao original */}
    <div style={{
      position: 'absolute', bottom: 20, left: 20, right: 20,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
      borderRadius: 12, padding: '14px 18px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div>
        <div style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 700, color: RG.ink }}>Centro de Terapias Rita Guerreiro</div>
        <div style={{ fontFamily: F_BODY, fontSize: 11, color: RG.muted, marginTop: 2 }}>Rua Padre António Vieira 58, Loulé</div>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="10" height="10" viewBox="0 0 12 12" fill={RG.tealDark}>
            <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/>
          </svg>
        ))}
      </div>
    </div>
  </div>
</Reveal>
```

- [ ] **Step 2: Adicionar word-stagger ao `<h1>` do Hero**

Localizar o bloco do `<h1>` (dentro do primeiro `<Reveal delay={180}>`):
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: RG.ink }}>
  <span style={{ display: 'block' }}>Onde podes</span>
  <span style={{ display: 'block' }}>cuidar de ti</span>
  <span style={{ display: 'block', color: '#5AAFAA' }}>à tua maneira.</span>
</h1>
```

Substituir por:
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: RG.ink }}>
  <span style={{ display: 'block' }}>
    {'Onde podes'.split(' ').map((w, i) => (
      <span key={i} className="rg-word" style={{ animationDelay: `${i * 80}ms` }}>{w}{' '}</span>
    ))}
  </span>
  <span style={{ display: 'block' }}>
    {'cuidar de ti'.split(' ').map((w, i) => (
      <span key={i} className="rg-word" style={{ animationDelay: `${(i + 2) * 80 + 180}ms` }}>{w}{' '}</span>
    ))}
  </span>
  <span style={{ display: 'block', color: '#5AAFAA' }}>
    {'à tua maneira.'.split(' ').map((w, i) => (
      <span key={i} className="rg-word" style={{ animationDelay: `${(i + 5) * 80 + 360}ms` }}>{w}{' '}</span>
    ))}
  </span>
</h1>
```

- [ ] **Step 3: Abrir `http://localhost:5500` no browser e verificar**

- O painel direito mostra gradiente teal suave com 3 círculos a flutuar lentamente
- O card de credenciais aparece no fundo do painel
- O título do hero aparece palavra a palavra com stagger
- O placeholder `[ Foto da equipa ]` é visível mas subtil no canto superior direito

- [ ] **Step 4: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/src/home.jsx
git commit -m "feat(hero): animated panel + word-stagger title"
```

---

## Task 5: Secção de Processo nas páginas de serviço

**Files:**
- Modify: `project/src/pages.jsx` — função `ServicePage`

- [ ] **Step 1: Localizar o ponto de inserção em `ServicePage`**

Em `pages.jsx`, a função `ServicePage` tem esta estrutura (aproximada):
```jsx
{detail?.sub && (
  <div style={{ marginTop: 48 }}>
    ...áreas de atuação grid...
  </div>
)}
```
seguido de:
```jsx
{catItems.length > 0 && (
  <Section bg={RG.cream} pad="lg">
    ...outros serviços...
  </Section>
)}
```

A nova secção de Processo vai ser inserida **entre** estes dois blocos, ou seja, após o fecho do `</Section>` de `bg={RG.creamSoft}` e antes do `{catItems.length > 0 && ...}`.

- [ ] **Step 2: Inserir a secção de Processo**

Adicionar após o `</Section>` que contém as áreas de atuação (o `<Section bg={RG.creamSoft} pad="lg">`):

```jsx
{/* Secção: Como funciona */}
<Section bg={RG.white} pad="lg">
  <Container>
    <Reveal>
      <Eyebrow style={{ marginBottom: 12 }}>O processo</Eyebrow>
      <Heading level="h2">
        Como funciona<span style={{ color: RG.tealDark }}>.</span>
      </Heading>
    </Reveal>
    <div style={{ marginTop: 56, position: 'relative' }}>
      {/* Linha vertical */}
      <div style={{
        position: 'absolute', left: 19, top: 20, bottom: 20,
        width: 2, background: RG.teal, opacity: 0.3,
      }} />
      {[
        { t: 'Primeira consulta', d: 'Falamos sobre o teu caso e historial de saúde.' },
        { t: 'Avaliação', d: 'Diagnóstico preciso e identificação das causas.' },
        { t: 'Plano personalizado', d: 'Criamos um plano adaptado aos teus objetivos.' },
        { t: 'Tratamento', d: 'Sessões focadas com acompanhamento contínuo.' },
        { t: 'Acompanhamento', d: 'Seguimos a tua evolução ao longo do tempo.' },
      ].map((step, i) => (
        <Reveal key={i} delay={i * 80}>
          <div style={{
            display: 'flex', gap: 24, alignItems: 'flex-start',
            marginBottom: i < 4 ? 36 : 0, position: 'relative',
          }}>
            {/* Círculo numerado */}
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: RG.tealDark, color: RG.white, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: F_BODY, fontWeight: 700, fontSize: 14,
              position: 'relative', zIndex: 1,
            }}>{i + 1}</div>
            {/* Texto */}
            <div style={{ paddingTop: 8 }}>
              <div style={{
                fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 300,
                letterSpacing: '-0.01em', color: RG.ink, lineHeight: 1.2,
              }}>{step.t}</div>
              <div style={{
                fontFamily: F_BODY, fontSize: 14, color: RG.charcoal,
                lineHeight: 1.6, marginTop: 4,
              }}>{step.d}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Container>
</Section>
```

- [ ] **Step 3: Verificar no browser**

Abrir `http://localhost:5500/servico-fisioterapia.html`. Fazer scroll até ao fim da página — a secção "Como funciona." deve aparecer com a timeline vertical e os 5 passos em cascata ao entrar em viewport.

- [ ] **Step 4: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/src/pages.jsx
git commit -m "feat(service-page): add process/timeline section"
```

---

## Task 6: Limpar página de Contactos

**Files:**
- Modify: `project/src/pages.jsx` — função `ContactosPage`

- [ ] **Step 1: Remover o formulário e o segundo `<Reveal>` da secção de info**

Na função `ContactosPage`, localizar o bloco do grid `1fr 1.3fr`:
```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60 }} className="rg-hero-grid">
  <Reveal>
    ...grelha de 6 items info...
  </Reveal>
  <Reveal delay={80}>
    <div style={{ background: RG.white, padding: 36, ... }}>
      ...formulário completo...
    </div>
  </Reveal>
</div>
```

Substituir **todo este bloco** por:
```jsx
<Reveal>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32,
  }} className="rg-values-grid">
    {[
      {
        k: 'Morada',
        v: 'Rua Padre António Vieira 58\n8100-611 Loulé',
      },
      {
        k: 'Telefone',
        v: '(+351) 961 899 364',
        href: 'tel:+351961899364',
      },
      {
        k: 'Horário',
        v: 'Seg-Sex · 10:00-19:00\nSab-Dom · Encerrado',
      },
    ].map(it => (
      <div key={it.k} style={{
        background: RG.white, borderRadius: 12, padding: '28px 24px',
        border: `1px solid ${RG.line}`,
      }}>
        <div style={{
          fontFamily: F_BODY, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: RG.tealDark, marginBottom: 12,
        }}>{it.k}</div>
        {it.href
          ? <a href={it.href} style={{
              fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 300,
              color: RG.ink, lineHeight: 1.35, letterSpacing: '-0.01em',
              textDecoration: 'none',
            }}>{it.v}</a>
          : <div style={{
              fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 300,
              color: RG.ink, lineHeight: 1.35, letterSpacing: '-0.01em',
              whiteSpace: 'pre-line',
            }}>{it.v}</div>
        }
      </div>
    ))}
  </div>
</Reveal>
```

- [ ] **Step 2: Verificar no browser**

Abrir `http://localhost:5500/contactos.html`. A página deve mostrar:
- Título "Vem ter connosco."
- 3 cards horizontais: Morada · Telefone · Horário
- Mapa em baixo (não alterado)
- **Sem** formulário, **sem** email, **sem** handles de redes sociais

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git add project/src/pages.jsx
git commit -m "feat(contactos): remove form and email, simplify to 3 info cards"
```

---

## Task 7: Verificação final + push

- [ ] **Step 1: Testar page transitions**

1. Abrir `http://localhost:5500` (homepage)
2. Clicar em "Fisioterapia" no nav → deve haver fade-out da homepage e fade-in da página de serviço
3. Clicar em "Início" no nav → mesmo efeito na volta

- [ ] **Step 2: Testar FAB**

1. Abrir qualquer página
2. Aguardar 2 segundos — o botão WhatsApp deve deslizar da direita com bounce
3. Fazer hover — tooltip "Fala connosco!" deve aparecer à esquerda
4. O ripple ring deve ser visível a pulsar a cada 3 segundos

- [ ] **Step 3: Testar hero**

1. Abrir homepage
2. Os 3 círculos do painel direito devem estar a flutuar suavemente
3. O título deve aparecer palavra a palavra com stagger

- [ ] **Step 4: Testar timeline de processo**

1. Abrir `http://localhost:5500/servico-osteopatia.html`
2. Fazer scroll — a secção "Como funciona." deve aparecer com os 5 passos em cascata

- [ ] **Step 5: Push para GitHub**

```bash
cd "c:/Users/Notpr/OneDrive/Ambiente de Trabalho/Website Fisio Rita Guerreiro/website-clinica-rita-guerreiro"
git push
```

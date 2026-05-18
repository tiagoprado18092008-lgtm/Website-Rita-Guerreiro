# Homepage Elevação — Clínica Rita Guerreiro

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar a homepage da Clínica Rita Guerreiro para um nível sofisticado, persuasivo e de fácil acesso, inspirado no Del Rio Med Estética — sem mudar a stack (HTML estático + React CDN + Babel).

**Architecture:** Alterações cirúrgicas apenas a `home.jsx` e `ui.jsx` (copy, estrutura visual, hero com foto real) e `premium.css` (refinamentos visuais). Zero mudança a páginas HTML, tokens, data ou ficheiros de serviço.

**Tech Stack:** HTML estático, React 18 CDN, Babel standalone, CSS puro, GSAP (já presente).

---

## Ficheiros Modificados

| Ficheiro | O que muda |
|---|---|
| `project/src/home.jsx` | Hero (foto Unsplash), StatsStrip (copy), ServicesCard (copy), WhyUs (copy), Testimonials (avatares), HomeCTA (copy + telefone) |
| `project/src/ui.jsx` | Nav: telefone no canto direito do header |
| `project/src/premium.css` | Refinamentos: hero foto, nav telefone, avatar testemunhos, HomeCTA duplo CTA |

---

## Task 1: Nav — telefone visível no header

**Files:**
- Modify: `project/src/ui.jsx` (zona do header, após os nav links, antes do botão CTA)

- [ ] **Step 1: Localizar o ponto de inserção no Nav**

No ficheiro `ui.jsx`, procura o bloco que contém o botão "Marcar Consulta" no header (cerca da linha 240-280). É o elemento após `rg-nav` e antes do fim do `rg-nav-row`.

- [ ] **Step 2: Adicionar número de telefone visível no desktop**

Imediatamente antes do botão "Marcar Consulta" no header, adicionar:

```jsx
{/* Telefone desktop — visível só acima de 900px */}
<a href="tel:+351961899364" className="rg-nav-tel" style={{
  display: 'inline-flex', alignItems: 'center', gap: 7,
  fontFamily: F_BODY, fontSize: 13, fontWeight: 500,
  color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
  letterSpacing: '0.01em',
}}>
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
  961 899 364
</a>
```

- [ ] **Step 3: Adicionar CSS para esconder em mobile**

Em `premium.css`, adicionar:

```css
/* Nav telefone — esconde em mobile */
.rg-nav-tel { display: inline-flex !important; }
@media (max-width: 860px) {
  .rg-nav-tel { display: none !important; }
}
```

- [ ] **Step 4: Verificar no browser**

Abrir `http://localhost:5500` (correr `python -m http.server 5500` a partir de `project/`). O telefone deve aparecer no header desktop, desaparecer em mobile.

- [ ] **Step 5: Commit**

```bash
git add project/src/ui.jsx project/src/premium.css
git commit -m "feat(nav): add phone number to desktop header"
```

---

## Task 2: Hero — substituir placeholder por foto Unsplash profissional

**Files:**
- Modify: `project/src/home.jsx` (função `Hero`, lado direito do grid — linha ~87-137)

- [ ] **Step 1: Substituir o div placeholder pela foto**

Na função `Hero`, o lado direito do grid (depois do comentário `{/* Right — animated panel */}`) tem um `div` com `background: linear-gradient(...)` e círculos animados. Substituir esse `div` interior por:

```jsx
{/* Right — foto profissional */}
<Reveal y={24} delay={100}>
  <div style={{
    borderRadius: 20, overflow: 'hidden', height: 520,
    position: 'relative', background: '#C5E8E5',
  }} className="rg-hero-img-wrap">
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
      alt="Tratamento de fisioterapia na Clínica Rita Guerreiro"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      loading="eager"
    />
    {/* Overlay gradiente suave na base para o card de credenciais */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
      background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
    }} />
    {/* Card de credenciais */}
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

- [ ] **Step 2: Melhorar o copy da hero — headline mais emocional**

Na mesma função `Hero`, substituir o bloco H1 atual (3 spans com "O lugar onde", "a tua saúde", "está em boas mãos.") por:

```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: RG.ink }}>
  <span style={{ display: 'block' }}>
    {'Recupera.'.split(' ').map((w, i) => (
      <React.Fragment key={i}><span className="rg-word" style={{ animationDelay: `${i * 80}ms` }}>{w}</span>{' '}</React.Fragment>
    ))}
  </span>
  <span style={{ display: 'block' }}>
    {'Equilibra.'.split(' ').map((w, i) => (
      <React.Fragment key={i}><span className="rg-word" style={{ animationDelay: `${(i + 1) * 80 + 120}ms` }}>{w}</span>{' '}</React.Fragment>
    ))}
  </span>
  <span style={{ display: 'block', color: '#5AAFAA' }}>
    {'Sente-te bem.'.split(' ').map((w, i) => (
      <React.Fragment key={i}><span className="rg-word" style={{ animationDelay: `${(i + 2) * 80 + 240}ms` }}>{w}</span>{' '}</React.Fragment>
    ))}
  </span>
</h1>
```

- [ ] **Step 3: Melhorar o parágrafo da hero**

Substituir o `<p>` atual na hero por:

```jsx
<p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.7, margin: '24px 0 0', maxWidth: '40ch' }}>
  Fisioterapia, Osteopatia, Pilates Clínico, Psicologia e muito mais — numa clínica em Loulé onde cada pessoa é tratada com atenção e cuidado real.
</p>
```

- [ ] **Step 4: Adicionar "social proof inline" abaixo dos CTAs**

Após o bloco de horário (Reveal delay 820), adicionar:

```jsx
<Reveal delay={900}>
  <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={RG.tealDark}>
          <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/>
        </svg>
      ))}
    </div>
    <span style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted }}>+500 pacientes acompanhados · Google 5★</span>
  </div>
</Reveal>
```

- [ ] **Step 5: Verificar no browser**

A foto deve carregar no painel direito. O headline deve ler "Recupera. Equilibra. Sente-te bem." O social proof deve aparecer abaixo dos CTAs.

- [ ] **Step 6: Commit**

```bash
git add project/src/home.jsx
git commit -m "feat(hero): replace placeholder with Unsplash photo, improve copy"
```

---

## Task 3: StatsStrip — copy mais persuasivo

**Files:**
- Modify: `project/src/home.jsx` (função `StatsStrip`, linha ~144-167)

- [ ] **Step 1: Atualizar os dados dos stats**

Substituir o array `stats` por:

```js
const stats = [
  { value: '20', label: 'Anos de experiência', suffix: '+' },
  { value: '500', label: 'Pacientes acompanhados', suffix: '+' },
  { value: '25', label: 'Terapias disponíveis', suffix: '' },
  { value: '100', label: 'Dedicação à tua saúde', suffix: '%' },
];
```

- [ ] **Step 2: Verificar no browser**

Os stats devem mostrar "20+", "500+", "25", "100%".

- [ ] **Step 3: Commit**

```bash
git add project/src/home.jsx
git commit -m "feat(stats): update copy to be more persuasive"
```

---

## Task 4: ServicesCard — copy com pergunta retórica

**Files:**
- Modify: `project/src/home.jsx` (função `ServicesCard`, linha ~169-224)

- [ ] **Step 1: Substituir o eyebrow e heading**

Na função `ServicesCard`, substituir o `<Eyebrow>` e o `<Heading>`:

```jsx
<Eyebrow style={{ marginBottom: 16 }}>Os nossos serviços</Eyebrow>
<Heading level="h2" style={{ maxWidth: '22ch', lineHeight: 1.1 }}>
  Dores, tensão, stress? Temos a resposta — e a pessoa certa para ti.
</Heading>
```

- [ ] **Step 2: Substituir o body text**

```jsx
<Body size={15} style={{ marginTop: 16, color: RG.charcoal, maxWidth: '38ch' }}>
  Fisioterapia, massagens, holísticas, psicologia, estética — tudo disponível na mesma clínica, em Loulé. Sem listas de espera longas, sem deslocações desnecessárias.
</Body>
```

- [ ] **Step 3: Adicionar os 4 serviços em destaque com foto Unsplash**

Substituir o grid de `featured` por cards com foto (substituir a estrutura `rg-icon-card` existente):

```jsx
const featured = [
  { name: 'Fisioterapia', href: 'servico-fisioterapia.html', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80' },
  { name: 'Pilates Clínico', href: 'servico-pilates-clinico.html', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
  { name: 'Psicologia', href: 'servico-psicologia.html', img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80' },
  { name: 'Massagem Assinatura RG', href: 'servico-massagem-assinatura-rg.html', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80' },
];
```

E o JSX do grid:

```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
  {featured.map((s, i) => (
    <Reveal key={s.name} delay={i * 60}>
      <a href={s.href} className="rg-icon-card" style={{
        display: 'block', textDecoration: 'none', borderRadius: 14,
        overflow: 'hidden', border: `1px solid ${RG.lineSoft}`,
        background: RG.white, position: 'relative',
      }}>
        <div style={{ aspectRatio: '3/2', overflow: 'hidden' }}>
          <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms cubic-bezier(.16,1,.3,1)' }} className="rg-card-img" />
        </div>
        <div style={{ padding: '10px 14px 12px' }}>
          <span style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.ink }}>{s.name}</span>
        </div>
      </a>
    </Reveal>
  ))}
</div>
```

- [ ] **Step 4: Adicionar CSS hover para as imagens dos cards**

Em `premium.css`:

```css
.rg-icon-card:hover .rg-card-img {
  transform: scale(1.05);
}
```

- [ ] **Step 5: Verificar no browser**

Os 4 cards devem mostrar foto real com hover zoom suave.

- [ ] **Step 6: Commit**

```bash
git add project/src/home.jsx project/src/premium.css
git commit -m "feat(services-card): persuasive copy + photo cards"
```

---

## Task 5: WhyUs — copy emocional orientado a benefícios

**Files:**
- Modify: `project/src/home.jsx` (função `WhyUs`, linha ~226-276)

- [ ] **Step 1: Substituir o heading da secção**

```jsx
<Eyebrow style={{ marginBottom: 12 }}>Porquê a Clínica Rita Guerreiro</Eyebrow>
<Heading level="h2" style={{ maxWidth: '24ch', lineHeight: 1.1 }}>
  Porque a tua saúde merece mais do que uma consulta rápida.
</Heading>
```

- [ ] **Step 2: Substituir os 4 pontos com copy mais emocional**

```js
const points = [
  { t: 'Tratamento feito para ti, não para a média', d: 'O teu corpo, a tua história, o teu ritmo. Cada plano de tratamento começa por ouvir — e só depois agir.' },
  { t: 'Tudo no mesmo sítio, sem deslocações', d: 'Fisioterapia, psicologia, estética, nutrição — num só espaço em Loulé. Mais tempo para ti, menos stress logístico.' },
  { t: 'Profissionais que te acompanham de verdade', d: 'Não mudas de terapeuta a cada consulta. A tua equipa conhece-te, acompanha-te e preocupa-se com os teus resultados.' },
  { t: 'Sem listas de espera intermináveis', d: 'Marcação rápida por WhatsApp ou telefone. A maioria dos utentes consegue consulta na mesma semana.' },
];
```

- [ ] **Step 3: Verificar no browser**

Clicar em cada ponto e verificar que o texto expande corretamente.

- [ ] **Step 4: Commit**

```bash
git add project/src/home.jsx
git commit -m "feat(why-us): emotional benefit-driven copy"
```

---

## Task 6: Testimonials — adicionar avatares iniciais com cor

**Files:**
- Modify: `project/src/home.jsx` (função `Testimonials`, linha ~324-368)

- [ ] **Step 1: Adicionar cor de avatar a cada testemunho**

Substituir o array `list` por:

```js
const list = [
  { q: 'A minha fisioterapeuta (Rita Guerreiro) é uma peça fundamental na minha vida. Procuro-a todas as semanas para cuidar da minha musculatura e aliviar dores.', who: 'Irina Mendes Martins', what: 'Fisioterapia', color: '#A8D8D4', initials: 'IM' },
  { q: 'Durante anos e muitas dores crónicas de costas, a abordagem que a Rita Guerreiro fez ao problema foi sem dúvida como ter um corpo novo.', who: 'Miguel Moreira', what: 'Fisioterapia', color: '#C5E8E5', initials: 'MM' },
  { q: 'Aulas de Pilates com a Rita Guerreiro são excelentes. A Rita tem uma componente humana aliada às terapias fundamental. Compreende os problemas e necessidades dos utentes.', who: 'Mitchelle Sousa', what: 'Pilates Clínico', color: '#B8D4D2', initials: 'MS' },
];
```

- [ ] **Step 2: Substituir o avatar genérico pelo avatar com iniciais**

No JSX do card de testemunho, substituir o `<div>` do avatar (o círculo com ícone SVG de user) por:

```jsx
<div style={{ width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
  <span style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 700, color: RG.tealDark }}>{t.initials}</span>
</div>
```

- [ ] **Step 3: Melhorar o heading da secção**

```jsx
<Eyebrow style={{ marginBottom: 12 }}>Testemunhos reais</Eyebrow>
<Heading level="h2">O que dizem quem já sentiu a diferença.</Heading>
```

- [ ] **Step 4: Verificar no browser**

Cada card de testemunho deve mostrar um círculo colorido com as iniciais do utente.

- [ ] **Step 5: Commit**

```bash
git add project/src/home.jsx
git commit -m "feat(testimonials): colored initials avatars + improved heading"
```

---

## Task 7: HomeCTA — copy mais forte + mapa Google Maps

**Files:**
- Modify: `project/src/home.jsx` (função `HomeCTA`, linha ~370-399)

- [ ] **Step 1: Substituir o copy da HomeCTA**

```jsx
function HomeCTA() {
  return (
    <section style={{ background: RG.teal, padding: '80px 0' }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <Eyebrow color="rgba(255,255,255,0.65)" style={{ marginBottom: 16 }}>Dá o primeiro passo hoje</Eyebrow>
            <Heading level="h2" style={{ color: RG.white, marginBottom: 16 }}>
              A tua recuperação começa com uma mensagem.
            </Heading>
            <p style={{ fontFamily: F_BODY, fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 12, lineHeight: 1.7 }}>
              Fala connosco agora — a maioria das marcações fica resolvida em menos de 5 minutos.
            </p>
            <p style={{ fontFamily: F_BODY, fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 36, lineHeight: 1.6 }}>
              Rua Padre António Vieira 58, Loulé · Seg–Sex 9h–19h · Sáb sob marcação
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="rg-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.tealDeep, background: RG.white, padding: '14px 28px', borderRadius: 999, textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
                WhatsApp agora
              </a>
              <a href="tel:+351961899364" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.white, background: 'transparent', border: '1px solid rgba(255,255,255,0.45)', padding: '14px 28px', borderRadius: 999, textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                961 899 364
              </a>
              <a href="https://maps.google.com/?q=Rua+Padre+António+Vieira+58+Loulé" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: F_BODY, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '14px 16px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                Como chegar
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

3 CTAs: WhatsApp, Telefone e Como chegar. O endereço deve aparecer por cima dos botões.

- [ ] **Step 3: Commit**

```bash
git add project/src/home.jsx
git commit -m "feat(cta): stronger copy + address + maps link"
```

---

## Task 8: Footer — telefone em destaque + link Google Maps

**Files:**
- Modify: `project/src/ui.jsx` (função `Footer`)

- [ ] **Step 1: Localizar a função Footer em ui.jsx**

Pesquisar por `function Footer` em `ui.jsx`. Encontrar a coluna de contactos (normalmente contém o telefone e o WhatsApp).

- [ ] **Step 2: Garantir que o telefone está em destaque no footer**

Na coluna de contactos do footer, verificar se o telefone aparece com `fontWeight: 600` e tamanho legível. Se não, ajustar para:

```jsx
<a href="tel:+351961899364" style={{ fontFamily: F_BODY, fontSize: 15, fontWeight: 600, color: RG.white, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
  961 899 364
</a>
```

- [ ] **Step 3: Adicionar link Google Maps ao endereço no footer**

Onde o endereço aparece no footer, envolvê-lo num link:

```jsx
<a href="https://maps.google.com/?q=Rua+Padre+António+Vieira+58+Loulé" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(250,250,248,0.6)', textDecoration: 'none', fontSize: 13, lineHeight: 1.6, fontFamily: F_BODY, transition: 'color 200ms' }}>
  Rua Padre António Vieira 58<br />Loulé, Algarve
</a>
```

- [ ] **Step 4: Verificar no browser**

Footer deve mostrar telefone destacado e endereço clicável.

- [ ] **Step 5: Commit**

```bash
git add project/src/ui.jsx
git commit -m "feat(footer): highlight phone + clickable Google Maps address"
```

---

## Task 9: CSS — refinamentos premium finais

**Files:**
- Modify: `project/src/premium.css`

- [ ] **Step 1: Adicionar estilos de hover para os cards de serviços featured**

```css
/* Cards de serviços featured — zoom na imagem ao hover */
.rg-icon-card {
  transition: transform 320ms cubic-bezier(.16,1,.3,1), box-shadow 320ms cubic-bezier(.16,1,.3,1);
}
.rg-icon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.10);
}
```

- [ ] **Step 2: Melhorar espaçamento da hero em mobile**

```css
@media (max-width: 700px) {
  .rg-hero-img-wrap {
    height: 320px !important;
    border-radius: 12px !important;
  }
}
```

- [ ] **Step 3: Adicionar separador visual entre secções alternadas**

```css
/* Secções alternadas — ritmo visual */
#todos-servicos {
  border-top: 1px solid #E8E6DF;
}
```

- [ ] **Step 4: Verificar no browser em mobile (DevTools)**

Abrir DevTools → modo mobile (iPhone SE). A imagem hero deve ter 320px de altura, os cards devem ter hover correto no desktop.

- [ ] **Step 5: Commit**

```bash
git add project/src/premium.css
git commit -m "feat(css): card hover, mobile hero height, section divider"
```

---

## Task 10: Push final para GitHub

- [ ] **Step 1: Verificar que não há nada por commitar**

```bash
git status
```

Esperado: `nothing to commit, working tree clean`

- [ ] **Step 2: Push para GitHub**

```bash
git push origin main
```

- [ ] **Step 3: Confirmar no browser que tudo funciona**

Abrir `http://localhost:5500` e verificar:
- [ ] Hero mostra foto profissional com card de credenciais
- [ ] Headline lê "Recupera. Equilibra. Sente-te bem."
- [ ] Social proof "+500 pacientes" aparece abaixo dos CTAs
- [ ] Nav tem telefone 961 899 364 no desktop
- [ ] ServicesCard tem 4 cards com foto e hover zoom
- [ ] WhyUs tem copy emocional nos 4 pontos
- [ ] Testimonials têm avatares com iniciais coloridas
- [ ] HomeCTA tem 3 botões: WhatsApp, Telefone, Como chegar
- [ ] Footer tem telefone destacado e endereço clicável

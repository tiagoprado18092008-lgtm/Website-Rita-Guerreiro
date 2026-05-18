# Copywriting Reformulação — Clínica Rita Guerreiro Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir todo o copywriting do website da Clínica Rita Guerreiro por um tom mais acolhedor, empático e próximo — voz na primeira pessoa do plural, cuidador humano com seriedade profissional.

**Architecture:** Dois ficheiros JSX contêm todo o texto visível do site — `home.jsx` e `sobre.jsx`. As alterações são puramente de conteúdo textual, sem mudanças de estrutura ou estilo. Cada ficheiro é editado num único task com commit próprio.

**Tech Stack:** HTML estático + React 18 via CDN + Babel standalone (JSX inline)

---

## File Map

| Ficheiro | Ação |
|---|---|
| `project/src/home.jsx` | Modificar — Hero, StatsStrip, ServicesCard, WhyUs, ServicesOverview, Testimonials, HomeCTA |
| `project/src/sobre.jsx` | Modificar — SobreHero, Mission, Pillars, Story, Team |

---

### Task 1: Atualizar copywriting em home.jsx

**Files:**
- Modify: `project/src/home.jsx`

- [ ] **Step 1: Abrir o ficheiro e localizar a função Hero (linha 3)**

Confirmar que o ficheiro começa com `// Home — improved with animations...`

- [ ] **Step 2: Substituir o badge no Hero (linha 22)**

Antes:
```jsx
<span style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 500, color: '#2F6B68', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loulé · Algarve · Desde 2016</span>
```

Depois:
```jsx
<span style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 500, color: '#2F6B68', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loulé · Algarve · Desde 2022</span>
```

- [ ] **Step 3: Substituir o headline do Hero (linhas 33–36)**

Antes:
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: RG.ink }}>
  <span style={{ display: 'block' }}>Onde podes</span>
  <span style={{ display: 'block' }}>cuidar de ti</span>
  <span style={{ display: 'block', color: '#5AAFAA' }}>à tua maneira.</span>
</h1>
```

Depois:
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: RG.ink }}>
  <span style={{ display: 'block' }}>O lugar onde</span>
  <span style={{ display: 'block' }}>a tua saúde</span>
  <span style={{ display: 'block', color: '#5AAFAA' }}>está em boas mãos.</span>
</h1>
```

- [ ] **Step 4: Substituir o subtítulo do Hero (linhas 40–42)**

Antes:
```jsx
<p style={{ fontFamily: F_BODY, fontSize: 15, color: RG.charcoal, lineHeight: 1.65, margin: '24px 0 0', maxWidth: '38ch' }}>
  Centro de Terapias &amp; Bem-Estar em Loulé. Fisioterapia, Osteopatia, Pilates Clínico e muito mais — tudo num só lugar.
</p>
```

Depois:
```jsx
<p style={{ fontFamily: F_BODY, fontSize: 15, color: RG.charcoal, lineHeight: 1.65, margin: '24px 0 0', maxWidth: '38ch' }}>
  Na Clínica Rita Guerreiro, em Loulé, cada pessoa é recebida com atenção e cuidado. Fisioterapia, Osteopatia, Pilates Clínico e muito mais — tudo numa equipa que te conhece.
</p>
```

- [ ] **Step 5: Substituir o CTA principal do Hero (linha 51)**

Antes:
```jsx
Agendar agora
```

Depois:
```jsx
Marcar consulta
```

- [ ] **Step 6: Substituir os stats no StatsStrip (linhas 97–101)**

Antes:
```jsx
const stats = [
  { value: '14', label: 'Serviços', suffix: '' },
  { value: '500', label: 'Clientes tratados', suffix: '+' },
  { value: '8', label: 'Anos de experiência', suffix: '' },
  { value: '100', label: 'Satisfação', suffix: '%' },
];
```

Depois:
```jsx
const stats = [
  { value: '14', label: 'Serviços', suffix: '' },
  { value: '500', label: 'Pessoas acompanhadas', suffix: '+' },
  { value: '20', label: 'Anos de experiência', suffix: '' },
  { value: '100', label: 'Dedicação', suffix: '%' },
];
```

- [ ] **Step 7: Substituir o eyebrow e título da secção ServicesCard (linhas 139–142)**

Antes:
```jsx
<Eyebrow style={{ marginBottom: 16 }}>O nosso centro</Eyebrow>
<Heading level="h2" style={{ maxWidth: '20ch', lineHeight: 1.1 }}>Temos Todos os Serviços de Saúde e Bem-Estar no nosso Centro</Heading>
<Body size={15} style={{ marginTop: 16, color: RG.charcoal, maxWidth: '38ch' }}>
  A nossa abordagem é única. Oferecemos todos os serviços personalizados para atender às necessidades de cada pessoa.
</Body>
```

Depois:
```jsx
<Eyebrow style={{ marginBottom: 16 }}>A nossa clínica</Eyebrow>
<Heading level="h2" style={{ maxWidth: '20ch', lineHeight: 1.1 }}>Tudo o que precisas para te sentires bem, num só lugar.</Heading>
<Body size={15} style={{ marginTop: 16, color: RG.charcoal, maxWidth: '38ch' }}>
  Desde a primeira consulta até ao último tratamento, estamos aqui. A nossa equipa acompanha-te ao teu ritmo — com o cuidado que mereces e os profissionais certos para o teu caso.
</Body>
```

- [ ] **Step 8: Substituir eyebrow, título e os 4 pontos do WhyUs (linhas 178–183 e 191–192)**

Antes:
```jsx
const points = [
  { t: 'Totalmente Personalizado', d: 'Cada serviço é adaptado às tuas necessidades específicas e objetivos.' },
  { t: 'Clínica Completa', d: 'Vários serviços de saúde e bem-estar no mesmo espaço — sem te deslocares.' },
  { t: 'Profissionais de Excelência', d: 'Equipa com experiência clínica avançada e foco nos teus resultados.' },
  { t: 'Foco na Individualidade', d: 'Não somos um tamanho único — valorizamos a tua história e o teu caso.' },
];
```
```jsx
<Eyebrow style={{ marginBottom: 12 }}>Porquê nós</Eyebrow>
<Heading level="h2" style={{ maxWidth: '22ch', lineHeight: 1.1 }}>
  Vantagens que fazem a diferença
</Heading>
```

Depois:
```jsx
const points = [
  { t: 'Tratamento à tua medida', d: 'Não há dois casos iguais. Cada plano começa por te ouvir.' },
  { t: 'Tudo no mesmo espaço', d: 'Fisioterapia, psicologia, estética, nutrição — sem te deslocares a sítios diferentes.' },
  { t: 'Uma equipa que se preocupa', d: 'Profissionais experientes que te acompanham com atenção e continuidade.' },
  { t: 'Respeito pela tua história', d: 'A tua vida, o teu corpo e o teu tempo são sempre respeitados.' },
];
```
```jsx
<Eyebrow style={{ marginBottom: 12 }}>Porquê a Clínica Rita Guerreiro</Eyebrow>
<Heading level="h2" style={{ maxWidth: '22ch', lineHeight: 1.1 }}>
  O que nos move é o teu bem-estar.
</Heading>
```

- [ ] **Step 9: Substituir o título da ServicesOverview (linhas 240–241)**

Antes:
```jsx
<Reveal><Eyebrow>Serviços</Eyebrow></Reveal>
<Reveal delay={60}>
  <Heading level="h2" style={{ marginTop: 12, maxWidth: '18ch' }}>Tudo o que precisas, num só lugar.</Heading>
</Reveal>
```

Depois:
```jsx
<Reveal><Eyebrow>Serviços</Eyebrow></Reveal>
<Reveal delay={60}>
  <Heading level="h2" style={{ marginTop: 12, maxWidth: '18ch' }}>Seja qual for o motivo que te traz, temos alguém para ti.</Heading>
</Reveal>
```

- [ ] **Step 10: Substituir testimoniais e títulos (linhas 276–278 e 292–293)**

Antes:
```jsx
const list = [
  { q: 'Cada sessão começa por me ouvir. Voltei a mexer-me sem dor.', who: 'Marta S.', what: 'Fisioterapia' },
  { q: 'Espaço calmo, equipa atenciosa. Mãos que sabem o que fazem.', who: 'João P.', what: 'Osteopatia' },
  { q: 'Faço Pilates Clínico semanal — a minha postura mudou em três meses.', who: 'Inês L.', what: 'Pilates Clínico' },
];
```
```jsx
<Eyebrow style={{ marginBottom: 12 }}>O que dizem</Eyebrow>
<Heading level="h2">Palavras de quem já tratamos.</Heading>
```

Depois:
```jsx
const list = [
  { q: 'Pela primeira vez senti que alguém me ouviu de verdade antes de tratar.', who: 'Marta S.', what: 'Fisioterapia' },
  { q: 'Fui com dores que já duravam anos. Saí sem elas.', who: 'João P.', what: 'Osteopatia' },
  { q: 'Em três meses de Pilates, o meu corpo mudou — e eu também.', who: 'Inês L.', what: 'Pilates Clínico' },
];
```
```jsx
<Eyebrow style={{ marginBottom: 12 }}>O que dizem de nós</Eyebrow>
<Heading level="h2">As palavras de quem já sentiu a diferença.</Heading>
```

- [ ] **Step 11: Substituir o HomeCTA (linhas 326–329)**

Antes:
```jsx
<Eyebrow color="rgba(255,255,255,0.65)" style={{ marginBottom: 16 }}>Pronto para começar?</Eyebrow>
<Heading level="h2" style={{ color: RG.white, marginBottom: 12 }}>Marca a tua primeira sessão hoje.</Heading>
<p style={{ fontFamily: F_BODY, fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.6 }}>
  Estamos em Loulé, prontos para te receber. Fala connosco pelo WhatsApp ou telefone.
</p>
```

Depois:
```jsx
<Eyebrow color="rgba(255,255,255,0.65)" style={{ marginBottom: 16 }}>Pronto para dar o primeiro passo?</Eyebrow>
<Heading level="h2" style={{ color: RG.white, marginBottom: 12 }}>Estamos aqui, em Loulé, à tua espera.</Heading>
<p style={{ fontFamily: F_BODY, fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.6 }}>
  Fala connosco pelo WhatsApp ou telefone. Sem complicações — só uma conversa para perceber como te podemos ajudar.
</p>
```

- [ ] **Step 12: Commit**

```bash
git add project/src/home.jsx
git commit -m "copy: reformular copywriting home.jsx para tom acolhedor e empático"
```

---

### Task 2: Atualizar copywriting em sobre.jsx

**Files:**
- Modify: `project/src/sobre.jsx`

- [ ] **Step 1: Substituir o headline e subtítulo do SobreHero (linhas 9–16)**

Antes:
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(44px, 7vw, 104px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '24px 0 0', color: RG.ink, maxWidth: '18ch' }}>
  A equipa e a visão por trás do centro.
</h1>
...
<Body size={19} style={{ marginTop: 28, maxWidth: '58ch' }}>
  No Rita Guerreiro — Centro de Terapias &amp; Bem-Estar, dedicamo-nos a melhorar a tua saúde,
  bem-estar e desempenho. Essa dedicação começa com a nossa equipa e os nossos valores.
</Body>
```

Depois:
```jsx
<h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(44px, 7vw, 104px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '24px 0 0', color: RG.ink, maxWidth: '18ch' }}>
  A equipa que cuida de ti como se fosses da família.
</h1>
...
<Body size={19} style={{ marginTop: 28, maxWidth: '58ch' }}>
  Na Clínica Rita Guerreiro dedicamo-nos a melhorar a tua saúde, bem-estar e qualidade de vida — com atenção, continuidade e respeito por quem és.
</Body>
```

- [ ] **Step 2: Substituir título e corpo da Mission (linhas 35–43)**

Antes:
```jsx
<Heading level="h2" style={{ maxWidth: '20ch' }}>Impulsionar o teu potencial para a saúde, bem-estar e desempenho.</Heading>
...
<Body size={17} style={{ marginTop: 24, color: RG.charcoal }}>
  Com sede em Loulé, somos o lar de uma equipa multidisciplinar composta por profissionais
  qualificados. Estamos preparados para receber quem procura uma melhor qualidade de vida,
  com ou sem histórico desportivo. Temos condições para responder da lesão mais complexa
  à mais simples — de forma única e personalizada.
</Body>
```

Depois:
```jsx
<Heading level="h2" style={{ maxWidth: '20ch' }}>Ajudar cada pessoa a viver melhor, sem limitações.</Heading>
...
<Body size={17} style={{ marginTop: 24, color: RG.charcoal }}>
  Em Loulé, reunimos uma equipa multidisciplinar pronta a receber qualquer pessoa — com ou sem histórico clínico, com mais ou menos urgência. Aqui não há casos simples nem complicados: há pessoas. E cada uma merece um plano pensado para ela.
</Body>
```

- [ ] **Step 3: Substituir os 4 pillars (linhas 58–63)**

Antes:
```jsx
const items = [
  { t: 'Personalizado', d: 'Cada serviço é adaptado às tuas necessidades específicas.' },
  { t: 'Clínica completa', d: 'Vários serviços de saúde e bem-estar no mesmo espaço.' },
  { t: 'Profissionais dedicados', d: 'Equipa com experiência clínica e foco em resultados.' },
  { t: 'Individualidade', d: 'Não somos um tamanho único — valorizamos o teu caso.' },
];
```

Depois:
```jsx
const items = [
  { t: 'Personalizado', d: 'Não há dois casos iguais. Cada plano começa por te ouvir.' },
  { t: 'Clínica completa', d: 'Vários serviços de saúde e bem-estar no mesmo espaço.' },
  { t: 'Uma equipa que se preocupa', d: 'Profissionais experientes com foco em ti.' },
  { t: 'Respeito pela tua história', d: 'A tua vida e o teu corpo são sempre respeitados.' },
];
```

- [ ] **Step 4: Substituir título e corpo da Story (linhas 91–107)**

Antes:
```jsx
<Reveal delay={80}><Heading level="h2" style={{ marginTop: 16 }}>Um projeto nascido da paixão pelo cuidado.</Heading></Reveal>
<Reveal delay={140}>
  <Body size={17} style={{ marginTop: 22 }}>
    O centro foi idealizado pela Rita Guerreiro — fisioterapeuta — como um espaço distinto,
    com serviço de qualidade e atenção ao detalhe.
  </Body>
  <Body size={17} style={{ marginTop: 16 }}>
    Desde 2020 que recebemos utentes de todas as idades, com histórias e necessidades
    diferentes. Cada um com o seu plano, cada plano com o mesmo fio condutor: escuta,
    cuidado e continuidade.
  </Body>
</Reveal>
```

Depois:
```jsx
<Reveal delay={80}><Heading level="h2" style={{ marginTop: 16 }}>Um projeto nascido do amor por cuidar das pessoas.</Heading></Reveal>
<Reveal delay={140}>
  <Body size={17} style={{ marginTop: 22 }}>
    A Clínica Rita Guerreiro nasceu da visão de criar um espaço diferente — onde a qualidade do cuidado é tão importante quanto a qualidade do tratamento.
  </Body>
  <Body size={17} style={{ marginTop: 16 }}>
    Desde 2022 recebemos pessoas de todas as idades, com histórias muito diferentes. O que fica igual em todas elas é a forma como as recebemos: com escuta, com atenção e com continuidade.
  </Body>
</Reveal>
```

- [ ] **Step 5: Substituir título, corpo e banner da equipa no Team (linhas 121–144)**

Antes:
```jsx
<Reveal delay={60}><Heading level="h2" style={{ marginTop: 16 }}>Especialistas em cada área do teu bem-estar.</Heading></Reveal>
<Reveal delay={100}>
  <p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.65, marginTop: 16, maxWidth: '58ch' }}>
    A nossa equipa é composta por profissionais qualificados e experientes em diversas áreas da saúde. Cada especialista trabalha de forma integrada para te oferecer o melhor acompanhamento possível.
  </p>
</Reveal>
```
```jsx
<div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, color: RG.tealDark }}>Quer fazer parte da nossa equipa?</div>
<div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, marginTop: 6 }}>Estamos sempre abertos a receber profissionais apaixonados pela saúde e bem-estar.</div>
```

Depois:
```jsx
<Reveal delay={60}><Heading level="h2" style={{ marginTop: 16 }}>Especialistas que se preocupam com quem têm à frente.</Heading></Reveal>
<Reveal delay={100}>
  <p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.65, marginTop: 16, maxWidth: '58ch' }}>
    A nossa equipa é composta por profissionais qualificados em diversas áreas da saúde, que trabalham juntos para te oferecer o melhor acompanhamento possível — coordenado, humano e eficaz.
  </p>
</Reveal>
```
```jsx
<div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, color: RG.tealDark }}>Tens paixão pela saúde e pelo cuidado das pessoas?</div>
<div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, marginTop: 6 }}>Adorávamos conhecer-te. Estamos sempre abertos a receber profissionais apaixonados pelo bem-estar.</div>
```

- [ ] **Step 6: Commit**

```bash
git add project/src/sobre.jsx
git commit -m "copy: reformular copywriting sobre.jsx para tom acolhedor e empático"
```

---

### Task 3: Push para GitHub

- [ ] **Step 1: Verificar que os commits estão prontos**

```bash
git log --oneline -5
```

Esperado: os dois commits de copy aparecem no topo.

- [ ] **Step 2: Push**

```bash
git push
```

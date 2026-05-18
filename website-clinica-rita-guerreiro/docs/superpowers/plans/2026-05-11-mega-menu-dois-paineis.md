# Mega-menu dois painéis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o mega-menu desktop em `ui.jsx` por um dropdown de dois painéis com fundo teal — categorias à esquerda, subserviços à direita — mantendo o comportamento mobile intacto.

**Architecture:** Só muda o componente `Nav` em `project/src/ui.jsx`. Adiciona `activeCol` state (índice da categoria em hover). O array `megaCols` é reescrito com todos os serviços reais. O bloco JSX do dropdown é substituído pelo novo layout de dois painéis.

**Tech Stack:** React 18 (via CDN, JSX compilado em runtime pelo Babel), inline styles

---

### Task 1: Atualizar `megaCols` e adicionar state `activeCol`

**Files:**
- Modify: `project/src/ui.jsx:66-128`

- [ ] **Step 1: Adicionar `activeCol` state** — dentro de `Nav`, a seguir ao state `langOpen` (linha ~72):

```jsx
const [activeCol, setActiveCol] = React.useState(0);
```

- [ ] **Step 2: Substituir o array `megaCols`** (linhas 87–128) pelo seguinte:

```jsx
const megaCols = [
  {
    label: 'Fisioterapia',
    href: 'fisioterapia.html',
    items: [
      { label: 'Fisioterapia Geral', href: 'servico-fisioterapia.html' },
      { label: 'Fisioterapia ATM / Mesoterapia', href: 'servico-mesoterapia.html' },
      { label: 'Fisioterapia Vestibular / Acupuntura', href: 'servico-acupuntura.html' },
    ],
  },
  {
    label: 'Cuidados de Saúde',
    href: null,
    items: [
      { label: 'Nutrição', href: 'servico-nutricao.html' },
      { label: 'Terapia de Bowen', href: 'servico-terapia-bowen.html' },
      { label: 'Psicologia', href: 'servico-psicologia.html' },
    ],
  },
  {
    label: 'Massagens',
    href: 'massagens.html',
    items: [
      { label: 'Massagem de Relaxamento', href: 'servico-massagem-relaxamento.html' },
      { label: 'Massagem para Crianças', href: 'servico-massagem-criancas.html' },
      { label: 'Massagem Assinatura RG', href: 'servico-massagem-assinatura-rg.html' },
      { label: 'Massagem Profunda', href: 'servico-massagem-profunda.html' },
      { label: 'Massagem Pré/Pós Natal', href: 'servico-massagem-pre-pos-natal.html' },
      { label: 'Massagem Sacro-Craniana', href: 'servico-massagem-sacro-craniana.html' },
      { label: 'Drenagem Linfática Manual', href: 'servico-drenagem-linfatica.html' },
      { label: 'Drenagem Pós-Op / Terapêutica', href: 'servico-massagem-terapeutica.html' },
    ],
  },
  {
    label: 'Holísticas',
    href: 'holisticas.html',
    items: [
      { label: 'Reflexologia', href: 'servico-reflexologia.html' },
      { label: 'Shiatsu', href: 'servico-shiatsu.html' },
      { label: 'Massagem Indiana', href: 'servico-massagem-indiana.html' },
      { label: 'Head Spa', href: 'servico-head-spa.html' },
    ],
  },
  {
    label: 'Estética & Tratamentos',
    href: null,
    items: [
      { label: 'Faciais', href: 'servico-facial.html' },
      { label: 'Pacotes de Tratamento', href: 'servico-pacotes-tratamento.html' },
      { label: 'Depilação a Laser', href: 'servico-depilacao-laser.html' },
      { label: 'Pilates Clínico', href: 'servico-pilates-clinico.html' },
    ],
  },
];
```

---

### Task 2: Substituir o bloco JSX do dropdown desktop

**Files:**
- Modify: `project/src/ui.jsx:179-219`

- [ ] **Step 1: Substituir o bloco `{openDrop === 'servicos' && ...}` (linhas 179–219)** pelo seguinte:

```jsx
{openDrop === 'servicos' && (<>
  {/* Full-screen invisible overlay — hover-out closes menu */}
  <div
    onMouseEnter={() => setOpenDrop(null)}
    style={{ position: 'fixed', inset: 0, zIndex: 9, top: scrolled ? 60 : 76 }}
  />
  <div style={{ position: 'fixed', top: scrolled ? 60 : 76, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 10, pointerEvents: 'none' }}>
    <div
      onMouseLeave={() => setOpenDrop(null)}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="rg-mega" style={{
        maxWidth: 700, width: '100vw',
        display: 'flex',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
        boxShadow: '0 32px 80px -16px rgba(14,14,12,0.28), 0 0 0 1px rgba(14,14,12,0.06)',
      }}>
        {/* Painel esquerdo: categorias */}
        <div style={{ width: 220, background: '#7ab5ae', flexShrink: 0 }}>
          {megaCols.map((col, ci) => (
            <div key={col.label}>
              <div
                onMouseEnter={() => setActiveCol(ci)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 20px', cursor: 'pointer',
                  background: activeCol === ci ? '#5a9e97' : 'transparent',
                  transition: 'background 150ms',
                }}
              >
                <span style={{
                  fontFamily: F_BODY, fontSize: 13.5,
                  fontWeight: activeCol === ci ? 600 : 400,
                  color: 'white',
                }}>{col.label}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1 }}>›</span>
              </div>
              {ci < megaCols.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '0 0' }} />
              )}
            </div>
          ))}
        </div>

        {/* Painel direito: subserviços */}
        <div style={{ flex: 1, background: '#5a9e97', padding: '18px 24px' }}>
          <div style={{
            fontFamily: F_BODY, fontSize: 9.5, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)', marginBottom: 14,
          }}>{megaCols[activeCol].label}</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {megaCols[activeCol].items.map((item, ii) => (
              <div key={item.href}>
                <a href={item.href} className="rg-drop-item-dark" style={{
                  display: 'block', padding: '9px 4px',
                  fontFamily: F_BODY, fontSize: 13.5, fontWeight: 400,
                  color: 'rgba(255,255,255,0.88)', textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.88)'}
                >{item.label}</a>
                {ii < megaCols[activeCol].items.length - 1 && (
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />
                )}
              </div>
            ))}
          </div>
          {megaCols[activeCol].href && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <a href={megaCols[activeCol].href} style={{
                fontFamily: F_BODY, fontSize: 12, fontWeight: 600,
                color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >→ Ver todos os serviços de {megaCols[activeCol].label}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</>)}
```

---

### Task 3: Reset `activeCol` ao abrir o menu

**Files:**
- Modify: `project/src/ui.jsx:163`

- [ ] **Step 1:** Na linha onde `onMouseEnter` abre o menu (linha ~163), resetar também `activeCol`:

```jsx
onMouseEnter={() => { if (link.mega) { setOpenDrop('servicos'); setActiveCol(0); } }}
```

---

### Task 4: Testar no browser

- [ ] Abre `http://localhost:5500` e faz hover em "Serviços"
- [ ] Verifica que o painel esquerdo tem fundo teal `#7ab5ae` com 5 categorias
- [ ] Faz hover nas categorias — painel direito muda e a categoria ativa fica com fundo `#5a9e97`
- [ ] Verifica separadores entre categorias e entre serviços
- [ ] Verifica que "Fisioterapia", "Massagens" e "Holísticas" mostram o link "Ver todos"
- [ ] Verifica mobile: burger → "Serviços" → accordion com todas as categorias e serviços
- [ ] Move o rato para fora do menu — fecha corretamente

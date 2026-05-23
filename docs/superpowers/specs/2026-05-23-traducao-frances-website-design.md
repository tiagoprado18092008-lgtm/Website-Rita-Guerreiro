# Tradução completa em Francês — Website Clínica Rita Guerreiro

**Data:** 2026-05-23
**Âmbito:** Adicionar suporte 100% operacional ao Francês (FR-France) em todo o website estático da Clínica Rita Guerreiro, aproveitando a infraestrutura i18n já existente.

---

## 1. Contexto

O site (`website-clinica-rita-guerreiro/project/`) é **HTML estático multi-página** que carrega React 18 + Babel standalone via CDN. Cada página HTML (`index.html`, `sobre.html`, `contactos.html`, `servico-*.html`, etc.) tem o seu próprio `ReactDOM.createRoot(...)` envolvido em `<LangProvider>`.

A infraestrutura i18n **já existe e funciona**:

- `tokens.jsx` define `LangContext`, `LangProvider`, `useLang()`/`t(path)`.
- Estado guardado em `localStorage` sob a chave `rg_lang`.
- `changeLang` aceita já os códigos `'PT' | 'EN' | 'FR' | 'ES'` e mapeia para `document.documentElement.lang` (`pt-PT`, `en`, `fr`, `es`).
- O dicionário `TRANSLATIONS` em `tokens.jsx` (~230 chaves por idioma) contém **apenas PT, EN, ES**. **Falta o bloco `FR:`.**
- `data_i18n.jsx` (catálogo de serviços + páginas de detalhe) **já tem FR completo**.
- O seletor de idioma no `Nav` (em `ui.jsx`) lista apenas PT/EN/ES — **falta a entrada FR**.

## 2. Objetivo

Após esta intervenção, o utilizador deve poder:

1. Abrir qualquer página do site.
2. Clicar no seletor de idioma do Nav e escolher **Français**.
3. Ver **todo o texto visível** dessa página (e de todas as outras) traduzido para FR-Fr profissional, sem ficar nenhum string em PT por engano.
4. O idioma persiste em `localStorage` e é aplicado automaticamente nas próximas visitas.
5. `document.title` e `<meta name="description">` são atualizados dinamicamente para FR via JS quando o utilizador alterna para FR.

## 3. Não-objetivos (out of scope)

- **Não** criar páginas HTML separadas em `/fr/` para SEO real (fica para fase 2 se o tráfego FR justificar).
- **Não** alterar o stack (continua a ser HTML+React+Babel via CDN, sem build).
- **Não** traduzir os ficheiros HTML standalone que NÃO usam `LangProvider` (não há nenhum — todos passam por `<LangProvider>`, confirmado por grep).
- **Não** usar DeepL/Google Translate API (site estático sem backend, e tradução manual minha tem qualidade superior para terminologia clínica).
- **Não** refatorar arquitetura i18n (a atual é suficiente).

## 4. Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│  Página HTML (ex: index.html)                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  <LangProvider>  (lê rg_lang do localStorage)            │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │  Nav (com seletor PT/EN/FR/ES) → changeLang()      │  │   │
│  │  │  Hero, ServicesCard, ... → useLang().t('hero.h1')  │  │   │
│  │  │  Footer, WAFab → t(...)                            │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
   tokens.jsx                                     data_i18n.jsx
   ┌────────────────────┐                         ┌──────────────────────┐
   │ TRANSLATIONS = {   │                         │ SERVICES_I18N = {    │
   │   PT: {...},       │                         │   EN: {...},         │
   │   EN: {...},       │                         │   FR: {...} ← já OK  │
   │   FR: {...} ← NOVO │ ← bloco a adicionar     │   ES: {...},         │
   │   ES: {...},       │                         │ }                    │
   │ }                  │                         │ getServices(lang)    │
   └────────────────────┘                         │ getServiceDetail(...)│
                                                  └──────────────────────┘
```

**Princípio:** zero refactoring estrutural. Apenas:
- adicionar dados (bloco FR em `TRANSLATIONS`),
- adicionar uma entrada no array `langs` em `ui.jsx`,
- adicionar atualização dinâmica de meta tags,
- caçar e migrar strings PT hardcoded que ainda não passam por `t()`.

## 5. Plano de trabalho (5 fases)

### Fase 1 — Auditoria de strings hardcoded

Antes de traduzir, identificar TODO o texto PT que ainda está hardcoded fora de `TRANSLATIONS` e `data_i18n.jsx`. Ficheiros a varrer:

- `src/ui.jsx` (Nav, Footer, WAFab, etc.)
- `src/home.jsx` (Hero, StatsStrip, ServicesCard, WhyUs, ServicesOverview, MeetRita, Testimonials, HomeCTA)
- `src/sobre.jsx`
- `src/pages.jsx` (CategoryPage, ServicePage)
- Páginas HTML que têm React inline: `privacidade.html`, `termos.html`, `contactos.html`
- `src/data.jsx` (descrições longas — confirmar se passam por `data_i18n.jsx` ou estão em PT direto)

**Output:** lista de strings PT que precisam de ser movidas para `TRANSLATIONS` (a maior parte já lá deve estar, mas pode haver lacunas).

### Fase 2 — Adicionar bloco `FR:` em `tokens.jsx`

Inserir o bloco `FR: { ... }` entre `EN` e `ES` no objeto `TRANSLATIONS`. Estrutura espelha PT chave-por-chave (mesma forma do bloco `EN`, ~230 chaves), com traduções profissionais FR-Fr:

- **Terminologia clínica preservada:** ATM → "ATM", drenagem linfática → "drainage lymphatique", fisioterapia vestibular → "physiothérapie vestibulaire", etc.
- **Tom luxo/clínico:** próximo do tom existente em EN (e do que já está em `data_i18n.jsx` FR).
- **Marcadores `[REVER ...]`** mantidos como `[À VÉRIFIER ...]` para a Rita poder rever depois.
- **Strings com placeholders** (ex: arrays de h1, listas de testemunhos) — manter mesma cardinalidade.

### Fase 3 — Adicionar FR ao seletor de idioma

Em `src/ui.jsx`, no array `langs` (linhas 79-83):

```jsx
const langs = [
  { code: 'PT', label: 'Portugal',  flagUrl: 'https://flagcdn.com/w40/pt.png' },
  { code: 'EN', label: 'English',   flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'FR', label: 'Français',  flagUrl: 'https://flagcdn.com/w40/fr.png' },  // ← NOVO
  { code: 'ES', label: 'Español',   flagUrl: 'https://flagcdn.com/w40/es.png' },
];
```

Verificar visualmente que o dropdown desktop e o menu mobile mostram 4 entradas alinhadas. Se quebrar layout (4 itens vs 3), ajustar largura/spacing.

### Fase 4 — Atualização dinâmica de `<title>` e meta tags

Adicionar ao `LangProvider` (em `tokens.jsx`) ou criar componente `<HeadSync>` que use `useLang()` para:

- Atualizar `document.title` com tradução de `meta.title` (chave nova por página).
- Atualizar `document.querySelector('meta[name=description]').content` com `meta.description`.
- Atualizar `og:title`, `og:description`, `og:locale` (`pt_PT` ↔ `fr_FR`).

**Como saber qual é a página atual?** Adicionar `<meta name="rg-page" content="home">` (ou `sobre`, `contactos`, `servico-X`, `categoria-Y`) no `<head>` de cada HTML. O `HeadSync` lê este meta e indexa em `TRANSLATIONS[lang].meta[pageKey]`. Zero-disruption: não toca em assinatura de componentes, é leitura DOM-side, e cada HTML já está a ser editado para outros fins.

**Adicionar a `TRANSLATIONS`** uma secção por página:
```js
meta: {
  home: { title: '...', description: '...' },
  sobre: { title: '...', description: '...' },
  contactos: { title: '...', description: '...' },
  // 21 páginas de serviço (5 categorias + 16 serviços)
}
```

### Fase 5 — Validação manual

Para cada uma de **5 páginas-amostra** (`index.html`, `sobre.html`, `contactos.html`, `fisioterapia.html`, `servico-massagem-assinatura-rg.html`):

1. Servir `python -m http.server 5500` em `project/`.
2. Abrir no browser, alternar para Français.
3. Scroll completo verificando:
   - Nenhum string aparece em PT por engano (especialmente Footer, WAFab, CTAs, badges).
   - Layout não quebra com strings FR mais compridas (botões, headings).
   - `document.title` e `<meta description>` actualizam (DevTools → Elements).
   - `localStorage.rg_lang === 'FR'`.
   - Refresh mantém FR.
4. Voltar para PT e confirmar simetria.

**Critério de aceitação:** zero strings PT visíveis no FR em qualquer das 5 páginas-amostra; restantes 17 páginas de serviço inspecionadas mais rapidamente (smoke test).

## 6. Risco e mitigação

| Risco | Mitigação |
|---|---|
| Strings FR mais longas quebram layout (botões, eyebrows) | Validar visualmente em fase 5; usar `textWrap: 'balance'` onde necessário; aceitar pequena quebra-de-linha se inevitável |
| Marcadores `[REVER ...]` PT vs `[À VÉRIFIER ...]` FR desincronizados | Manter mesmo conteúdo entre `[]` e idêntica posição na string — facilita o diff |
| Páginas standalone (`privacidade.html`, `termos.html`) com texto PT inline | Auditar na fase 1; se confirmado, mover para `TRANSLATIONS` ou aceitar como fora-de-âmbito documentado |
| `data.jsx` (descrições longas de serviço) só em PT | Confirmar na fase 1 — se for o caso, ou estender `data_i18n.jsx` ou criar `data_i18n_long.jsx`. Adicionar ao plano |
| Bundle JS no browser cresce (~30 KB de FR) | Aceitável — é texto, comprime bem, não há build optimization |

## 7. Critério de "100% operacional"

- ✅ Toggle PT/FR funciona em **todas** as 27 páginas HTML.
- ✅ Zero strings PT visíveis quando idioma = FR (auditoria manual em 5 páginas-amostra + smoke nas restantes).
- ✅ `data_i18n.jsx` continua a servir nomes/blurbs de serviços em FR (já estava OK).
- ✅ Meta tags (`title`, `description`, `og:*`) atualizam para FR ao alternar.
- ✅ Preferência persiste em `localStorage` e é restaurada em recargas.
- ✅ Não há regressões em PT/EN/ES.
- ✅ Tradução FR-Fr profissional, terminologia clínica correta, marcadores `[À VÉRIFIER]` para a Rita rever entradas específicas.

## 8. Entregáveis

1. `src/tokens.jsx` — bloco `FR:` adicionado a `TRANSLATIONS` (~230 chaves).
2. `src/tokens.jsx` — `LangProvider` (ou novo `HeadSync`) atualiza meta tags.
3. `src/ui.jsx` — entrada FR no array `langs`.
4. Eventuais correções a `home.jsx`, `sobre.jsx`, `pages.jsx`, `ui.jsx`, ou HTMLs standalone se forem encontradas strings PT hardcoded fora de `TRANSLATIONS`.
5. Eventualmente `data_i18n.jsx` se descrições longas em `data.jsx` precisarem de FR adicional.
6. Verificação manual documentada (5 páginas-amostra) antes do commit.

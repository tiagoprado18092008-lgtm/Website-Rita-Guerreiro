# Tradução Francês Website Rita Guerreiro — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar suporte 100% operacional ao Francês (FR-Fr, vouvoyer) em todo o website estático da Clínica Rita Guerreiro, aproveitando a infraestrutura i18n já existente (`LangProvider`, `useLang`, `t()`).

**Architecture:** Site estático HTML+React+Babel via CDN. Já existe `TRANSLATIONS` em `tokens.jsx` com PT/EN/ES; falta o bloco `FR:`. Já existe `data_i18n.jsx` com FR completo para serviços. Já existe `LangProvider` que aceita PT/EN/FR/ES. Plano: adicionar bloco FR a `TRANSLATIONS`, adicionar entrada FR ao seletor do Nav, adicionar `HeadSync` para meta tags dinâmicas, varrer e migrar strings PT hardcoded encontradas, validar manualmente.

**Tech Stack:** HTML5 + React 18 (via CDN unpkg) + Babel standalone (compila JSX no browser) + localStorage. Sem build, sem package.json.

---

## Convenções de tradução FR-Fr (manter consistente em todo o plano)

- **Forma de tratamento:** vouvoyer (`vous`, `votre`, `vous êtes`) em TODOS os textos visíveis ao utilizador.
- **Marcadores de revisão:** `[REVER ...]` (PT) → `[À VÉRIFIER ...]` (FR), mantendo idêntico o conteúdo entre `[]`.
- **Terminologia clínica:**
  - ATM → "ATM" (idem; explicar "(articulation temporo-mandibulaire)" só se já era explicado em PT)
  - fisioterapia → "physiothérapie" / "kinésithérapie" — usar **"physiothérapie"** consistentemente (já é o termo usado em `data_i18n.jsx`)
  - drenagem linfática → "drainage lymphatique"
  - terapia → "thérapie"
  - sacro-craniana → "crânio-sacrée"
  - shiatsu, head spa, reflexologia, acupuntura, pilates, mesoterapia → manter como em `data_i18n.jsx`
- **Números/horários:** "Lun.–Ven. 9h–19h · Samedi sur rendez-vous", "961 899 364" (sem alterar formato).
- **Loulé · Algarve** mantido (nomes próprios).
- **WhatsApp/Google Maps** mantidos.
- **Botões de ação:** "Prendre rendez-vous", "Découvrir nos traitements", "Appeler maintenant" — não traduzir literalmente.

## Estrutura de ficheiros

| Ficheiro | Ação |
|---|---|
| `project/src/tokens.jsx` | Modificar: adicionar bloco `FR: { ... }` no objeto `TRANSLATIONS` (entre EN e ES); adicionar componente `HeadSync` que atualiza title/meta/og dinamicamente |
| `project/src/ui.jsx` | Modificar: adicionar entrada FR ao array `langs` do Nav |
| `project/index.html`, `sobre.html`, `contactos.html`, `fisioterapia.html`, `saude.html`, `massagens.html`, `holisticas.html`, `estetica.html`, e 16× `servico-*.html` | Modificar: adicionar `<meta name="rg-page" content="...">` e incluir `<HeadSync />` (renderizado pelo `LangProvider` via passagem em cada `App`) |
| `project/privacidade.html`, `termos.html` | **Não tocar** — já têm FR inline completo |
| `project/src/data_i18n.jsx` | **Não tocar** — já tem FR completo para serviços |
| `project/src/home.jsx`, `sobre.jsx`, `pages.jsx` | Modificar **só se** a auditoria da Task 1 encontrar strings PT hardcoded |
| `docs/superpowers/specs/2026-05-23-traducao-frances-website-design.md` | **Não tocar** — já commitado |

---

## Task 1: Auditoria de strings PT hardcoded

**Files:**
- Inspect: `project/src/home.jsx`, `project/src/sobre.jsx`, `project/src/pages.jsx`, `project/src/ui.jsx`
- Inspect: `project/contactos.html` (React inline)
- Create: `docs/superpowers/plans/audit-hardcoded-strings.md` (output da auditoria)

- [ ] **Step 1: Listar todas as strings PT em home.jsx que não passam por `t()`**

Grep por string literals em pt-PT (letras com acentos ou palavras óbvias):

```bash
# Strings literais PT que NÃO estão dentro de t('...')
grep -nE "['\"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç ,.!?-]{8,}['\"]" project/src/home.jsx | grep -v "t('" | grep -v "t(\"" | grep -v "//" > /tmp/audit_home.txt
cat /tmp/audit_home.txt
```

Expected: lista (provavelmente curta) de strings que ainda estão em PT direto. Strings em arrays de dados pessoais (nomes "Miguel Moreira", "Irina Mendes Martins") NÃO precisam de tradução — são nomes próprios. Endereços, telefone, e-mail também não.

- [ ] **Step 2: Repetir para sobre.jsx, pages.jsx, ui.jsx**

```bash
grep -nE "['\"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç ,.!?-]{8,}['\"]" project/src/sobre.jsx | grep -v "t('" | grep -v "t(\"" > /tmp/audit_sobre.txt
grep -nE "['\"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç ,.!?-]{8,}['\"]" project/src/pages.jsx | grep -v "t('" | grep -v "t(\"" > /tmp/audit_pages.txt
grep -nE "['\"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç ,.!?-]{8,}['\"]" project/src/ui.jsx | grep -v "t('" | grep -v "t(\"" > /tmp/audit_ui.txt
cat /tmp/audit_sobre.txt /tmp/audit_pages.txt /tmp/audit_ui.txt
```

Expected: para cada ficheiro, lista de candidatos. Filtrar manualmente: ignorar nomes próprios, endereços, telefones, e-mails, atributos CSS (cores), alt-text de imagens decorativas. Anotar tudo o que for **copy visível ao utilizador**.

- [ ] **Step 3: Inspecionar contactos.html inline JSX**

```bash
grep -nE "['\"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç ,.!?-]{8,}['\"]" project/contactos.html | grep -v "t('" | grep -v "t(\"" | grep -v "<meta" | grep -v "<title" | grep -v "<link" > /tmp/audit_contactos.txt
cat /tmp/audit_contactos.txt
```

Expected: lista. Atenção a meta tags do head (vão ser tratadas em Task 7) — ignorar para esta auditoria.

- [ ] **Step 4: Documentar resultado**

Criar `docs/superpowers/plans/audit-hardcoded-strings.md` com:

```markdown
# Auditoria de strings PT hardcoded — 2026-05-23

## home.jsx
- linha XX: "<string>" — em `<Hero>` no JSX da CTA
- linha YY: "<string>" — placeholder esquecido?

## sobre.jsx
(idem ou "Nenhuma encontrada — todo o texto passa por t()")

## pages.jsx
(idem)

## ui.jsx
(idem)

## contactos.html
(idem)

## Conclusão
- Total de strings a migrar: N
- Decisão: criar Task 1.5 para migrar para TRANSLATIONS / aceitar como out-of-scope se forem nomes/endereços
```

- [ ] **Step 5: Commit da auditoria**

```bash
git add docs/superpowers/plans/audit-hardcoded-strings.md
git commit -m "docs: auditoria de strings PT hardcoded antes de traducao FR"
```

---

## Task 1.5: (Condicional) Migrar strings PT hardcoded para `TRANSLATIONS`

**Executar SÓ se Task 1 encontrar strings PT hardcoded que sejam copy visível.**

**Files:**
- Modify: `project/src/tokens.jsx` (adicionar chaves a `TRANSLATIONS.PT/EN/FR/ES` para as novas strings)
- Modify: ficheiro JSX/HTML que tinha a string hardcoded (substituir literal por `t('caminho.chave')`)

- [ ] **Step 1: Para cada string da auditoria, escolher caminho semântico**

Exemplo: se `home.jsx` tem `"Marcar agora"` hardcoded numa CTA, escolher chave `homecta.cta_inline` (ou similar — seguir convenção de naming existente em `TRANSLATIONS`).

- [ ] **Step 2: Adicionar chave aos 4 idiomas em tokens.jsx**

Para cada nova chave, adicionar entrada em PT, EN, ES (traduções consistentes com o resto) e deixar FR vazio (será preenchido na Task 2).

```jsx
// Em TRANSLATIONS.PT.homecta:
cta_inline: 'Marcar agora',
// Em TRANSLATIONS.EN.homecta:
cta_inline: 'Book now',
// Em TRANSLATIONS.ES.homecta:
cta_inline: 'Reservar ahora',
```

- [ ] **Step 3: Substituir literal por `t('caminho.chave')` no ficheiro de origem**

```jsx
// Antes:
<Button href="...">Marcar agora</Button>
// Depois:
<Button href="...">{t('homecta.cta_inline')}</Button>
```

Garantir que `const { t } = useLang();` já existe no componente; se não, adicionar.

- [ ] **Step 4: Recarregar página local e confirmar texto continua a aparecer corretamente em PT**

Servir `cd project && python -m http.server 5500` e abrir `http://localhost:5500`. Verificar visualmente que a string ainda aparece exatamente igual (idioma PT é o default).

- [ ] **Step 5: Commit**

```bash
git add project/src/tokens.jsx project/src/home.jsx  # (e outros ficheiros tocados)
git commit -m "refactor(i18n): mover strings PT hardcoded para TRANSLATIONS"
```

---

## Task 2: Adicionar bloco `FR:` a `TRANSLATIONS` em tokens.jsx

**Files:**
- Modify: `project/src/tokens.jsx` (inserir bloco `FR: { ... }` entre `EN` e `ES`)

Este é o coração do trabalho. O bloco FR espelha exactamente a estrutura de PT (que é mais completa que EN — tem `footer.col1`, `footer.col2`, `footer.col3`, `footer.links.*`, `footer.morada`, `footer.telefone_label`, `footer.email_label`, `footer.seg_sex_label/val`, `footer.sabado_label/val`).

- [ ] **Step 1: Localizar fim do bloco EN**

Em `project/src/tokens.jsx`, o bloco `EN: {` começa em linha 281 e termina em `},` que precede `ES: {` (linha 515). Confirmar localização com:

```bash
grep -n "^  [A-Z][A-Z]: {" project/src/tokens.jsx
```

Expected: `30:  PT: {`, `281:  EN: {`, `515:  ES: {`. O `FR:` vai ser inserido imediatamente antes de `ES:`.

- [ ] **Step 2: Escrever bloco FR completo**

Inserir o seguinte bloco em `project/src/tokens.jsx` imediatamente antes da linha `  ES: {` (atualmente linha 515):

```jsx
  FR: {
    nav: {
      inicio: 'Accueil', servicos: 'Services', sobre: 'À propos', contactos: 'Contact',
      mega_descs: {
        fisioterapia: 'Rééducation et mouvement',
        saude: 'Bien-être global',
        massagens: 'Relaxation et thérapie',
        holisticas: 'Équilibre et énergie',
        estetica: 'Beauté et soin',
      },
    },
    nav_mobile: { inicio: 'Accueil', servicos: 'Services', sobre: 'À propos', contactos: 'Contact' },
    hero: {
      badge: 'Loulé · Algarve',
      badge_v2: 'À Loulé depuis 2022',
      h1: ['Récupérez', 'Équilibrez', 'Sentez-vous bien'],
      desc: 'Physiothérapie, ostéopathie, Pilates clinique, psychologie et bien plus — dans une clinique à Loulé où chaque personne est accueillie avec attention et un soin véritable.',
      cta: 'Prendre rendez-vous',
      cta_secondary: 'Découvrir nos traitements',
      cta_tel: 'Appeler maintenant',
      horario: 'Lun.–Ven. 9h–19h · Samedi sur rendez-vous',
      social_proof: '+500 patients accompagnés · Google 5★',
      social_proof_v2: '+500 patients accompagnés',
      next_slot_label: 'Prochain créneau',
      next_slot_value: 'Jeudi · 14h30',
      next_slot_meta: 'Physiothérapie · 50 min · [À VÉRIFIER manuellement]',
      card_name: 'Centre de Thérapies Rita Guerreiro',
      card_addr: 'Rua Padre António Vieira 58, Loulé',
    },
    trust: {
      anos: 'années de pratique',
      anos_desc: 'Expérience consolidée en physiothérapie et rééducation en Algarve.',
      pacientes: 'Patients accompagnés',
      terapias: 'Thérapies disponibles',
      cred_title: 'Carte professionnelle',
      cred_desc: 'Physiothérapeute inscrite à l’Ordre des Physiothérapeutes Portugais. [À VÉRIFIER n° carte]',
    },
    services_menu: {
      '01_name': 'Physiothérapie',
      '02_name': 'Pilates clinique',
      '03_name': 'Massages thérapeutiques',
      '04_name': 'Psychologie & Nutrition',
      '01_blurb': 'Évaluation et traitement individuel de la douleur, des blessures et dysfonctions — pour enfants et adultes. Séances de 50 à 80 minutes.',
      '02_blurb': 'Mouvement conscient supervisé par un physiothérapeute — adapté aux lombalgies, à la grossesse, au post-opératoire et à la prévention des blessures.',
      '03_blurb': 'Massages thérapeutiques, deep tissue, pré/post-natal, crânio-sacré et l’exclusif Massage Signature RG (80 min).',
      '04_blurb': 'Accompagnement psychologique et plan nutritionnel personnalisé — parce que la santé va au-delà du corps.',
    },
    meet: {
      eyebrow: 'Rencontrez Rita',
      heading: 'La personne derrière le projet',
      p1: 'Rita Guerreiro a fondé ce centre à Loulé avec une conviction simple : chaque personne mérite d’être écoutée avant d’être traitée. Plus de deux décennies en physiothérapie lui ont appris que les meilleurs résultats viennent de plans individuels — non de protocoles génériques.',
      p2: 'Aujourd’hui, elle dirige une équipe pluridisciplinaire qui travaille ensemble pour que vous n’ayez plus à changer de clinique au gré des besoins. Tout au même endroit, avec continuité et respect pour votre histoire. [À VÉRIFIER bio]',
      card_label: 'Fondatrice · Physiothérapeute',
      card_name: 'Rita Guerreiro',
      card_credentials: 'Physiothérapeute · Spécialisation en ATM, Vestibulaire et Pilates clinique. [À VÉRIFIER credentials]',
      facts: [
        { value: '2015', label: 'Début de la pratique clinique [À VÉRIFIER]' },
        { value: '2022', label: 'Fondation du centre à Loulé' },
        { value: '6+', label: 'Spécialités coordonnées' },
      ],
      cta: 'Rencontrer toute l’équipe',
    },
    testimonials_v2: {
      read_more: 'Lire plus d’avis sur Google',
      featured_q: 'Pendant des années j’ai souffert de douleurs dorsales chroniques. L’approche de Rita face au problème a été véritablement transformatrice — c’est comme avoir un corps neuf. La différence que cela a fait dans ma qualité de vie est difficile à décrire',
      featured_what: 'Physiothérapie · 18 mois d’accompagnement',
      t1_q: 'Ma physiothérapeute est un pilier essentiel de ma vie. Je la consulte chaque semaine pour soigner ma musculature et soulager les douleurs',
      t1_what: 'Physiothérapie',
      t2_q: 'Les cours de Pilates avec Rita sont excellents — la dimension humaine alliée aux thérapies est fondamentale. Elle comprend vraiment les besoins de chacun',
      t2_what: 'Pilates clinique',
    },
    homecta_v2: {
      opt1_title: 'WhatsApp maintenant',
      opt1_desc: 'La façon la plus rapide de réserver. La plupart des messages reçoivent une réponse en moins de 5 minutes pendant les heures d’ouverture.',
      opt1_cta: 'Envoyer un message',
      opt2_title: 'Nous appeler',
      opt2_desc: 'Vous préférez une voix humaine ? Nous sommes disponibles pendant les heures d’ouverture pour répondre à vos questions et prendre rendez-vous avec vous.',
      opt2_cta: '961 899 364',
      opt3_title: 'Venez nous voir',
      opt3_desc: 'Au cœur de Loulé, à 2 minutes du centre historique. Stationnement facile à proximité.',
      opt3_cta: 'Itinéraire',
      info_hours: 'Lun.–Ven. 9h–19h · Samedi sur rendez-vous',
    },
    stats: [
      { value: '20', label: 'Années d’expérience', suffix: '+' },
      { value: '500', label: 'Patients accompagnés', suffix: '+' },
      { value: '25', label: 'Thérapies disponibles', suffix: '' },
      { value: '100', label: 'Dévouement à votre santé', suffix: '%' },
    ],
    services_card: {
      eyebrow: 'Nos services',
      heading: 'Douleurs, tensions, stress ? Nous avons la réponse — et la bonne personne pour vous',
      body: 'Physiothérapie, massages, thérapies holistiques, psychologie, esthétique — tout disponible dans la même clinique, à Loulé. Sans longues listes d’attente, sans déplacements inutiles.',
      cta: 'Voir tous les services',
    },
    whyus: {
      eyebrow: 'Pourquoi la Clinique Rita Guerreiro',
      heading: 'Parce que votre santé mérite plus qu’une consultation rapide',
      points: [
        { t: 'Un traitement fait pour vous, pas pour la moyenne', d: 'Votre corps, votre histoire, votre rythme. Chaque plan de traitement commence par l’écoute — et seulement ensuite par l’action.' },
        { t: 'Tout au même endroit, sans déplacements', d: 'Physiothérapie, psychologie, esthétique, nutrition — dans un seul espace à Loulé. Plus de temps pour vous, moins de stress logistique.' },
        { t: 'Des professionnels qui vous accompagnent vraiment', d: 'Vous ne changez pas de thérapeute à chaque consultation. Votre équipe vous connaît, vous suit et se soucie de vos résultats.' },
        { t: 'Pas de listes d’attente interminables', d: 'Réservation rapide par WhatsApp ou téléphone. La plupart de nos patients obtiennent un rendez-vous dans la même semaine.' },
      ],
    },
    services_overview: {
      eyebrow: 'Services',
      heading: 'Quel que soit le motif qui vous amène, nous avons quelqu’un pour vous',
    },
    testimonials: {
      eyebrow: 'Témoignages réels',
      heading: 'Ce que disent ceux qui ont déjà senti la différence',
    },
    homecta: {
      eyebrow: 'Faites le premier pas aujourd’hui',
      heading: 'Votre récupération commence par un message',
      body: 'Parlez-nous maintenant — la plupart des rendez-vous sont organisés en moins de 5 minutes.',
      addr: 'Rua Padre António Vieira 58, Loulé · Lun.–Ven. 9h–19h · Sam. sur rendez-vous',
      wa: 'WhatsApp maintenant',
      como_chegar: 'Itinéraire',
    },
    agendar: 'Réserver',
    agendar_now: 'Réserver maintenant',
    ligar: 'Appeler',
    footer: {
      tagline: 'Centre de Thérapies & Bien-être à Loulé. Nous prenons soin de vous, corps et esprit.',
      horario: 'Lun.–Ven. · 9h–19h · Sam. sur rendez-vous',
      direitos: 'Tous droits réservés',
      col1: 'Physiothérapie & Santé',
      col2: 'Massages & Holistique',
      col3: 'Horaires & Contact',
      privacidade: 'Confidentialité',
      termos: 'Conditions',
      reclamacoes: 'Livre de Réclamations',
      horario_item: 'Lun.–Ven. · 9:00–19:00',
      sabado_item: 'Samedi · sur rendez-vous',
      seg_sex_label: 'Lun.–Ven.',
      seg_sex_val: '9:00 – 19:00',
      sabado_label: 'Samedi',
      sabado_val: 'Sur rendez-vous',
      telefone_label: 'Téléphone',
      email_label: 'E-mail',
      morada: 'Rua Padre António Vieira 58, Loulé',
      links: {
        fisioterapia: 'Physiothérapie',
        nutricao: 'Nutrition',
        psicologia: 'Psychologie',
        bowen: 'Thérapie Bowen',
        massagens: 'Massages',
        holisticas: 'Holistique',
        depilacao: 'Épilation au laser',
        pilates: 'Pilates clinique',
      },
    },
    servicos_cat: {
      reabilitacao: 'Rééducation',
      bemestar: 'Bien-être',
      movimento: 'Mouvement',
      estetica: 'Esthétique',
    },
    contactos_title: 'Contactez-nous',
    contactos: {
      eyebrow: 'Contact',
      heading: 'Venez nous rencontrer',
      sub: 'Au cœur de Loulé — Algarve.',
      morada_label: 'Adresse',
      telefone_label: 'Téléphone',
      horario_label: 'Horaires',
      morada_val: 'Rua Padre António Vieira 58\n8100-611 Loulé',
      horario_val: 'Lun.–Ven. 9h–19h\nSamedi sur rendez-vous',
      maps_link: 'Ouvrir dans Google Maps',
    },
    form: {
      nome: 'Nom', email: 'E-mail', telefone: 'Téléphone',
      servico: 'Service', mensagem: 'Message',
      seleciona: 'Sélectionner', enviar: 'Envoyer le message', enviado: 'Message envoyé !',
    },
    sobre: {
      eyebrow: 'À propos',
      heading: 'L’équipe qui prend soin de vous comme si vous faisiez partie de la famille',
      sub: 'À la Clinique Rita Guerreiro, nous nous consacrons à améliorer votre santé, votre bien-être et votre qualité de vie — avec attention, continuité et respect pour qui vous êtes.',
      mission_eyebrow: 'Notre mission',
      mission_heading: 'Aider chaque personne à mieux vivre, sans limitations',
      mission_body: 'À Loulé, nous réunissons une équipe pluridisciplinaire prête à accueillir toute personne — avec ou sans antécédents cliniques, avec plus ou moins d’urgence. Ici, il n’y a pas de cas simples ni compliqués : il y a des personnes. Et chacune mérite un plan pensé pour elle.',
      mission_cta: 'Voir les services',
      pillars: [
        { t: 'Personnalisé', d: 'Il n’y a pas deux cas identiques. Chaque plan commence par vous écouter.' },
        { t: 'Clinique complète', d: 'Plusieurs services de santé et de bien-être au même endroit.' },
        { t: 'Une équipe qui se soucie', d: 'Des professionnels expérimentés centrés sur vous.' },
        { t: 'Respect pour votre histoire', d: 'Votre vie et votre corps sont toujours respectés.' },
      ],
      story_eyebrow: 'Histoire',
      story_heading: 'Un projet né de l’amour de prendre soin des personnes',
      story_p1: 'La Clinique Rita Guerreiro est née de la vision de créer un espace différent — où la qualité de l’accompagnement compte autant que la qualité du traitement.',
      story_p2: 'Depuis 2022, nous accueillons des personnes de tous âges, aux histoires très différentes. Ce qui reste identique pour toutes, c’est la manière dont nous les recevons : avec écoute, attention et continuité.',
      team_eyebrow: 'Notre équipe',
      team_heading: 'Des spécialistes qui se soucient de la personne en face d’eux',
      team_body: 'Notre équipe est composée de professionnels qualifiés dans diverses spécialités de la santé, qui travaillent ensemble pour vous offrir le meilleur accompagnement possible — coordonné, humain et efficace.',
      team_specialties: [
        { role: 'Physiothérapie & Rééducation', bio: 'Évaluation et traitement de la douleur, des blessures et des dysfonctions musculo-squelettiques avec une approche individuelle.' },
        { role: 'Ostéopathie & ATM', bio: 'Traitement manuel structurel et viscéral pour soulager la cause de la douleur, pas seulement les symptômes.' },
        { role: 'Acupuncture & Thérapie Bowen', bio: 'Techniques complémentaires pour rééquilibrer le système nerveux et gérer la douleur chronique.' },
        { role: 'Psychologie & Nutrition', bio: 'Soutien à la santé mentale et alimentaire — pour une approche véritablement intégrée du bien-être.' },
      ],
      team_join_heading: 'Vous avez une passion pour la santé et le soin des personnes ?',
      team_join_body: 'Nous serions ravis de vous rencontrer. Nous sommes toujours ouverts à accueillir des professionnels passionnés par le bien-être.',
      team_join_cta: 'Nous contacter →',
      espaco_eyebrow: 'Notre espace',
      espaco_heading: 'Un lieu pensé pour vous accueillir',
      espaco_body: 'De l’accueil aux salles de soin, chaque coin de la clinique a été conçu pour vous apporter du calme — lumière naturelle, matériaux chaleureux et détails qui font de chaque visite un moment rien qu’à vous.',
      espaco_photos: [
        { src: 'assets/clinica/recepcao.jpg', label: 'Accueil' },
        { src: 'assets/clinica/sala-massagem.jpg', label: 'Salle de massage' },
        { src: 'assets/clinica/estudio-pilates.jpg', label: 'Studio de Pilates' },
        { src: 'assets/clinica/sala-relaxamento.jpg', label: 'Salle de relaxation' },
        { src: 'assets/clinica/sala-holistica.jpg', label: 'Salle holistique' },
        { src: 'assets/clinica/sala-clinica.jpg', label: 'Salle clinique' },
      ],
    },
    category: {
      inicio: 'Accueil',
      cta_heading: 'Prêt à prendre rendez-vous',
      cta_body: 'Contactez-nous par WhatsApp, téléphone ou en personne.',
      cta_btn: 'Réserver maintenant',
    },
    service: {
      inicio: 'Accueil',
      info_eyebrow: 'Informations',
      preco_label: 'Tarif',
      marcacoes_label: 'Réservations',
      marcacoes_body: 'Par WhatsApp, téléphone ou en personne à la clinique.',
      agendar_btn: 'Réserver maintenant',
      ligar_btn: 'Appeler le 961 899 364',
      sobre_heading: 'À propos de ce traitement',
      areas_label: 'Domaines d’intervention',
      processo_eyebrow: 'Le processus',
      processo_heading: 'Comment ça marche',
      steps: [
        { t: 'Première consultation', d: 'Nous discutons de votre cas et de vos antécédents de santé.' },
        { t: 'Évaluation', d: 'Diagnostic précis et identification des causes.' },
        { t: 'Plan personnalisé', d: 'Nous créons un plan adapté à vos objectifs.' },
        { t: 'Traitement', d: 'Des séances ciblées avec un accompagnement continu.' },
        { t: 'Suivi', d: 'Nous suivons votre évolution dans le temps.' },
      ],
      outros_eyebrow_prefix: 'Autres services en',
      outros_heading: 'Continuez à explorer',
      ver_todos_prefix: '→ Voir tous les services de',
    },
    sobre_title: 'À propos de la Clinique',
    meta: { tagline: 'Thérapies & Bien-être' },
  },
```

- [ ] **Step 3: Verificar sintaxe JS válida abrindo o site local**

```bash
cd project && python -m http.server 5500 &
```

Abrir `http://localhost:5500` no browser, abrir DevTools → Console. Expected: **zero erros de sintaxe**. Se houver "Unexpected token" ou "Unterminated string", localizar e corrigir. Strings com aspas simples (`l'`, `n'`, `d'`) devem usar a apóstrofe tipográfica `’` (U+2019), não `'` — verificar que segui essa convenção em todo o bloco.

- [ ] **Step 4: Confirmar que PT continua a funcionar (não-regressão)**

Com o site aberto em PT (default), scroll completo da home. Expected: nada mudou visualmente.

- [ ] **Step 5: Commit**

```bash
git add project/src/tokens.jsx
git commit -m "feat(i18n): adicionar bloco FR completo a TRANSLATIONS

Traducao FR-Fr profissional (vouvoyer) cobrindo nav, hero, footer,
sobre, contactos, formulario, categorias e paginas de servico. ~230
chaves espelhando estrutura PT. Marcadores [REVER ...] mantidos como
[A VERIFIER ...] para revisao posterior da Rita."
```

---

## Task 3: Adicionar FR ao seletor de idioma do Nav

**Files:**
- Modify: `project/src/ui.jsx:79-83` (array `langs`)

- [ ] **Step 1: Editar o array `langs` em ui.jsx**

Substituir o bloco atual:

```jsx
  const langs = [
    { code: 'PT', label: 'Portugal',  flagUrl: 'https://flagcdn.com/w40/pt.png' },
    { code: 'EN', label: 'English',   flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ES', label: 'Español',   flagUrl: 'https://flagcdn.com/w40/es.png' },
  ];
```

por:

```jsx
  const langs = [
    { code: 'PT', label: 'Portugal',  flagUrl: 'https://flagcdn.com/w40/pt.png' },
    { code: 'EN', label: 'English',   flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { code: 'FR', label: 'Français',  flagUrl: 'https://flagcdn.com/w40/fr.png' },
    { code: 'ES', label: 'Español',   flagUrl: 'https://flagcdn.com/w40/es.png' },
  ];
```

- [ ] **Step 2: Recarregar e abrir dropdown de idioma no desktop**

Servir local, abrir `http://localhost:5500`, clicar no seletor de idioma. Expected: 4 entradas visíveis (PT, EN, FR, ES) com bandeira francesa correta.

- [ ] **Step 3: Clicar em Français e verificar que página muda**

Expected: nav, hero, footer e todo o conteúdo da home aparecem em FR. `document.documentElement.lang === 'fr'` (verificar em DevTools Console). `localStorage.getItem('rg_lang') === 'FR'`.

- [ ] **Step 4: Testar dropdown no menu mobile**

Reduzir janela para <900px ou usar DevTools device mode. Abrir menu mobile do Nav. Expected: 4 idiomas presentes e seletor funciona.

- [ ] **Step 5: Commit**

```bash
git add project/src/ui.jsx
git commit -m "feat(nav): adicionar Frances ao seletor de idioma"
```

---

## Task 4: Adicionar chaves `meta.<page>` a `TRANSLATIONS` para todas as páginas

**Files:**
- Modify: `project/src/tokens.jsx` (adicionar `meta.<page>` em PT/EN/FR/ES)

A chave `meta` já existe em todos os 4 idiomas mas só com `meta.tagline`. Vamos estendê-la para conter título e descrição de cada página.

- [ ] **Step 1: Definir os `pageKey`s do site**

Lista de páginas:
- `home` (index.html)
- `sobre` (sobre.html)
- `contactos` (contactos.html)
- `cat_fisioterapia`, `cat_saude`, `cat_massagens`, `cat_holisticas`, `cat_estetica` (5 categorias)
- `serv_fisioterapia`, `serv_fisioterapia-atm`, `serv_fisioterapia-vestibular`, `serv_mesoterapia`, `serv_nutricao`, `serv_terapia-bowen`, `serv_psicologia`, `serv_massagem-relaxamento`, `serv_massagem-criancas`, `serv_massagem-assinatura-rg`, `serv_massagem-profunda`, `serv_massagem-pre-pos-natal`, `serv_massagem-sacro-craniana`, `serv_drenagem-linfatica`, `serv_massagem-terapeutica`, `serv_reflexologia`, `serv_shiatsu`, `serv_massagem-indiana`, `serv_head-spa`, `serv_acupuntura`, `serv_facial`, `serv_pacotes-tratamento`, `serv_depilacao-laser`, `serv_pilates-clinico` (24 serviços)

Para reduzir verbosidade: para as 24 páginas de serviço, **derivar o título dinamicamente** a partir do nome do serviço via `data_i18n.jsx`. Apenas `home`, `sobre`, `contactos` e as 5 categorias precisam de entradas estáticas em `meta.<page>`.

- [ ] **Step 2: Adicionar entradas `meta.<page>` em PT**

Em `TRANSLATIONS.PT.meta`, expandir o objeto:

```jsx
meta: {
  tagline: 'Terapias & Bem-Estar',
  home: {
    title: 'Rita Guerreiro — Centro de Terapias & Bem-Estar · Loulé',
    description: 'Centro de Terapias & Bem-Estar em Loulé. Fisioterapia, osteopatia, Pilates clínico, psicologia e mais.',
  },
  sobre: {
    title: 'Sobre — Centro de Terapias Rita Guerreiro · Loulé',
    description: 'A equipa multidisciplinar da Clínica Rita Guerreiro em Loulé. Conhece a nossa história, missão e profissionais.',
  },
  contactos: {
    title: 'Contactos — Centro de Terapias Rita Guerreiro · Loulé',
    description: 'Contacta a Clínica Rita Guerreiro em Loulé. Telefone, WhatsApp, morada e horário.',
  },
  cat_fisioterapia: {
    title: 'Fisioterapia — Rita Guerreiro · Loulé',
    description: 'Fisioterapia, fisioterapia ATM, vestibular e mesoterapia em Loulé. Avaliação e tratamento individual.',
  },
  cat_saude: {
    title: 'Saúde — Rita Guerreiro · Loulé',
    description: 'Nutrição, terapia Bowen e psicologia na Clínica Rita Guerreiro em Loulé.',
  },
  cat_massagens: {
    title: 'Massagens — Rita Guerreiro · Loulé',
    description: 'Massagens terapêuticas, deep tissue, pré/pós-natal, sacro-craniana e drenagem linfática em Loulé.',
  },
  cat_holisticas: {
    title: 'Holísticas — Rita Guerreiro · Loulé',
    description: 'Reflexologia, shiatsu, massagem indiana, head spa e acupuntura em Loulé.',
  },
  cat_estetica: {
    title: 'Estética — Rita Guerreiro · Loulé',
    description: 'Tratamentos faciais, depilação a laser, pacotes de tratamento e Pilates clínico em Loulé.',
  },
},
```

- [ ] **Step 3: Adicionar entradas `meta.<page>` em EN**

Em `TRANSLATIONS.EN.meta`, expandir (estrutura idêntica) com versões EN. Exemplo de duas (preencher as restantes seguindo o mesmo padrão):

```jsx
meta: {
  tagline: 'Therapies & Wellness',
  home: {
    title: 'Rita Guerreiro — Therapy & Wellness Centre · Loulé',
    description: 'Therapy & Wellness Centre in Loulé. Physiotherapy, osteopathy, clinical Pilates, psychology and more.',
  },
  sobre: { title: 'About — Rita Guerreiro Therapy Centre · Loulé', description: 'The multidisciplinary team at Rita Guerreiro Clinic in Loulé. Meet our story, mission and professionals.' },
  contactos: { title: 'Contact — Rita Guerreiro Therapy Centre · Loulé', description: 'Contact Rita Guerreiro Clinic in Loulé. Phone, WhatsApp, address and opening hours.' },
  cat_fisioterapia: { title: 'Physiotherapy — Rita Guerreiro · Loulé', description: 'Physiotherapy, TMJ, vestibular and mesotherapy in Loulé. Individual assessment and treatment.' },
  cat_saude: { title: 'Health Care — Rita Guerreiro · Loulé', description: 'Nutrition, Bowen therapy and psychology at Rita Guerreiro Clinic in Loulé.' },
  cat_massagens: { title: 'Massages — Rita Guerreiro · Loulé', description: 'Therapeutic, deep tissue, pre/post-natal, craniosacral massages and lymphatic drainage in Loulé.' },
  cat_holisticas: { title: 'Holistic — Rita Guerreiro · Loulé', description: 'Reflexology, shiatsu, Indian massage, head spa and acupuncture in Loulé.' },
  cat_estetica: { title: 'Aesthetics — Rita Guerreiro · Loulé', description: 'Facials, laser hair removal, treatment packages and clinical Pilates in Loulé.' },
},
```

- [ ] **Step 4: Adicionar entradas `meta.<page>` em FR**

Em `TRANSLATIONS.FR.meta`, expandir:

```jsx
meta: {
  tagline: 'Thérapies & Bien-être',
  home: {
    title: 'Rita Guerreiro — Centre de Thérapies & Bien-être · Loulé',
    description: 'Centre de Thérapies & Bien-être à Loulé. Physiothérapie, ostéopathie, Pilates clinique, psychologie et plus.',
  },
  sobre: { title: 'À propos — Centre de Thérapies Rita Guerreiro · Loulé', description: 'L’équipe pluridisciplinaire de la Clinique Rita Guerreiro à Loulé. Découvrez notre histoire, notre mission et nos professionnels.' },
  contactos: { title: 'Contact — Centre de Thérapies Rita Guerreiro · Loulé', description: 'Contactez la Clinique Rita Guerreiro à Loulé. Téléphone, WhatsApp, adresse et horaires.' },
  cat_fisioterapia: { title: 'Physiothérapie — Rita Guerreiro · Loulé', description: 'Physiothérapie, ATM, vestibulaire et mésothérapie à Loulé. Évaluation et traitement individuel.' },
  cat_saude: { title: 'Soins de santé — Rita Guerreiro · Loulé', description: 'Nutrition, thérapie Bowen et psychologie à la Clinique Rita Guerreiro à Loulé.' },
  cat_massagens: { title: 'Massages — Rita Guerreiro · Loulé', description: 'Massages thérapeutiques, deep tissue, pré/post-natal, crânio-sacrés et drainage lymphatique à Loulé.' },
  cat_holisticas: { title: 'Holistique — Rita Guerreiro · Loulé', description: 'Réflexologie, shiatsu, massage indien, head spa et acupuncture à Loulé.' },
  cat_estetica: { title: 'Esthétique — Rita Guerreiro · Loulé', description: 'Soins du visage, épilation au laser, forfaits de soins et Pilates clinique à Loulé.' },
},
```

- [ ] **Step 5: Adicionar entradas `meta.<page>` em ES**

Em `TRANSLATIONS.ES.meta`, expandir com versões ES (estrutura idêntica):

```jsx
meta: {
  tagline: 'Terapias & Bienestar',
  home: { title: 'Rita Guerreiro — Centro de Terapias & Bienestar · Loulé', description: 'Centro de Terapias & Bienestar en Loulé. Fisioterapia, osteopatía, Pilates clínico, psicología y más.' },
  sobre: { title: 'Sobre nosotros — Centro de Terapias Rita Guerreiro · Loulé', description: 'El equipo multidisciplinar de la Clínica Rita Guerreiro en Loulé. Conoce nuestra historia, misión y profesionales.' },
  contactos: { title: 'Contacto — Centro de Terapias Rita Guerreiro · Loulé', description: 'Contacta con la Clínica Rita Guerreiro en Loulé. Teléfono, WhatsApp, dirección y horario.' },
  cat_fisioterapia: { title: 'Fisioterapia — Rita Guerreiro · Loulé', description: 'Fisioterapia, ATM, vestibular y mesoterapia en Loulé. Evaluación y tratamiento individual.' },
  cat_saude: { title: 'Salud — Rita Guerreiro · Loulé', description: 'Nutrición, terapia Bowen y psicología en la Clínica Rita Guerreiro en Loulé.' },
  cat_massagens: { title: 'Masajes — Rita Guerreiro · Loulé', description: 'Masajes terapéuticos, deep tissue, pre/postnatal, sacro-craneal y drenaje linfático en Loulé.' },
  cat_holisticas: { title: 'Holísticas — Rita Guerreiro · Loulé', description: 'Reflexología, shiatsu, masaje indio, head spa y acupuntura en Loulé.' },
  cat_estetica: { title: 'Estética — Rita Guerreiro · Loulé', description: 'Tratamientos faciales, depilación láser, paquetes de tratamiento y Pilates clínico en Loulé.' },
},
```

- [ ] **Step 6: Recarregar e confirmar zero erros de sintaxe**

```bash
# Site já está a correr; refrescar browser e abrir Console
```

Expected: nenhum erro JS. `window.TRANSLATIONS.FR.meta.home.title` retorna a string FR esperada.

- [ ] **Step 7: Commit**

```bash
git add project/src/tokens.jsx
git commit -m "feat(i18n): adicionar meta titles/descriptions por pagina aos 4 idiomas"
```

---

## Task 5: Criar componente `HeadSync` em `tokens.jsx`

**Files:**
- Modify: `project/src/tokens.jsx` (adicionar `HeadSync` perto do `LangProvider` e expor em `window`)

- [ ] **Step 1: Adicionar `HeadSync` imediatamente antes de `LangProvider`**

Em `project/src/tokens.jsx`, ANTES da linha `function LangProvider({ children }) {`, adicionar:

```jsx
// HeadSync — atualiza <title>, <meta name="description"> e <meta property="og:*"> conforme idioma.
// Lê <meta name="rg-page" content="<key>"> do head; se ausente, mantém os valores iniciais.
// Para páginas de serviço (sem entrada estática em meta.<page>), pode usar getServiceDetail(lang).
function HeadSync() {
  const { lang, t } = useLang();
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const pageMeta = document.querySelector('meta[name="rg-page"]');
    if (!pageMeta) return;
    const pageKey = pageMeta.getAttribute('content');
    if (!pageKey) return;

    let title, description;

    // Página de serviço: pageKey começa com "serv_<slug>"
    if (pageKey.startsWith('serv_') && typeof window.getServiceDetail === 'function') {
      const slug = pageKey.slice('serv_'.length);
      const detail = window.getServiceDetail(lang, slug);
      if (detail) {
        title = `${detail.name} — Rita Guerreiro · Loulé`;
        description = detail.intro || t('meta.tagline');
      }
    }

    // Páginas com entrada estática em TRANSLATIONS[lang].meta[pageKey]
    if (!title) {
      const m = (window.TRANSLATIONS?.[lang]?.meta?.[pageKey]) || (window.TRANSLATIONS?.PT?.meta?.[pageKey]);
      if (m) { title = m.title; description = m.description; }
    }

    if (title) document.title = title;
    const setMeta = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute('content', value);
    };
    if (description) setMeta('meta[name="description"]', description);
    if (title) setMeta('meta[property="og:title"]', title);
    if (description) setMeta('meta[property="og:description"]', description);
    const ogLocaleMap = { PT: 'pt_PT', EN: 'en_GB', FR: 'fr_FR', ES: 'es_ES' };
    setMeta('meta[property="og:locale"]', ogLocaleMap[lang] || 'pt_PT');
  }, [lang]);
  return null;
}
```

- [ ] **Step 2: Adicionar `HeadSync` a `Object.assign(window, ...)` no fim do ficheiro**

Substituir a linha existente:

```jsx
Object.assign(window, { TRANSLATIONS, LangContext, LangProvider, useLang });
```

por:

```jsx
Object.assign(window, { TRANSLATIONS, LangContext, LangProvider, useLang, HeadSync });
```

- [ ] **Step 3: Recarregar e confirmar zero erros**

Abrir `http://localhost:5500`, DevTools Console. Expected: sem erros. `window.HeadSync` é uma function.

- [ ] **Step 4: Commit**

```bash
git add project/src/tokens.jsx
git commit -m "feat(i18n): adicionar HeadSync para atualizar title e meta tags dinamicamente"
```

---

## Task 6: Renderizar `<HeadSync />` em todas as páginas + adicionar `<meta name="rg-page">`

**Files:**
- Modify (27 ficheiros HTML): cada HTML em `project/` que use `<LangProvider>`. Para cada um:
  1. Adicionar `<meta name="rg-page" content="<pageKey>" />` no `<head>` (imediatamente após `<meta name="description">`).
  2. Mudar `<LangProvider><X /></LangProvider>` para `<LangProvider><HeadSync /><X /></LangProvider>`.
  3. Adicionar `window.HeadSync` à lista de checks no `ready()`.

Tabela de pageKey por ficheiro:

| Ficheiro | pageKey |
|---|---|
| `index.html` | `home` |
| `sobre.html` | `sobre` |
| `contactos.html` | `contactos` |
| `fisioterapia.html` | `cat_fisioterapia` |
| `saude.html` | `cat_saude` |
| `massagens.html` | `cat_massagens` |
| `holisticas.html` | `cat_holisticas` |
| `estetica.html` | `cat_estetica` |
| `servico-fisioterapia.html` | `serv_fisioterapia` |
| `servico-fisioterapia-atm.html` | `serv_fisioterapia-atm` |
| `servico-fisioterapia-vestibular.html` | `serv_fisioterapia-vestibular` |
| `servico-mesoterapia.html` | `serv_mesoterapia` |
| `servico-nutricao.html` | `serv_nutricao` |
| `servico-terapia-bowen.html` | `serv_terapia-bowen` |
| `servico-psicologia.html` | `serv_psicologia` |
| `servico-massagem-relaxamento.html` | `serv_massagem-relaxamento` |
| `servico-massagem-criancas.html` | `serv_massagem-criancas` |
| `servico-massagem-assinatura-rg.html` | `serv_massagem-assinatura-rg` |
| `servico-massagem-profunda.html` | `serv_massagem-profunda` |
| `servico-massagem-pre-pos-natal.html` | `serv_massagem-pre-pos-natal` |
| `servico-massagem-sacro-craniana.html` | `serv_massagem-sacro-craniana` |
| `servico-drenagem-linfatica.html` | `serv_drenagem-linfatica` |
| `servico-massagem-terapeutica.html` | `serv_massagem-terapeutica` |
| `servico-reflexologia.html` | `serv_reflexologia` |
| `servico-shiatsu.html` | `serv_shiatsu` |
| `servico-massagem-indiana.html` | `serv_massagem-indiana` |
| `servico-head-spa.html` | `serv_head-spa` |
| `servico-acupuntura.html` | `serv_acupuntura` |
| `servico-facial.html` | `serv_facial` |
| `servico-pacotes-tratamento.html` | `serv_pacotes-tratamento` |
| `servico-depilacao-laser.html` | `serv_depilacao-laser` |
| `servico-pilates-clinico.html` | `serv_pilates-clinico` |

`privacidade.html` e `termos.html`: **NÃO incluir HeadSync** (têm o seu próprio i18n inline e não estão em scope desta migração).

- [ ] **Step 1: Atualizar `index.html`**

Adicionar `<meta name="rg-page" content="home" />` após linha `<meta name="description" ... />`.

Substituir:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(<LangProvider><App /></LangProvider>);
```

por:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(<LangProvider><HeadSync /><App /></LangProvider>);
```

E na condição `ready()`, adicionar `window.HeadSync &&` ao check:

```jsx
const ready = () => {
  if (window.HeadSync && window.Nav && window.Hero && /* ... resto inalterado ... */) {
    ReactDOM.createRoot(document.getElementById('root')).render(<LangProvider><HeadSync /><App /></LangProvider>);
  } else setTimeout(ready, 40);
};
```

- [ ] **Step 2: Recarregar `index.html` e verificar comportamento**

```bash
# Browser em http://localhost:5500/
# Alternar para FR via Nav
# Verificar em DevTools → Elements:
#   <title>Rita Guerreiro — Centre de Thérapies & Bien-être · Loulé</title>
#   <meta name="description" content="Centre de Thérapies & Bien-être à Loulé...">
#   <meta property="og:title" content="...">
#   <meta property="og:locale" content="fr_FR">
```

Expected: title e meta atualizam ao alternar idioma.

- [ ] **Step 3: Commit do index.html**

```bash
git add project/index.html
git commit -m "feat(i18n): index.html usa HeadSync para meta tags dinamicas"
```

- [ ] **Step 4: Aplicar mesma mudança a sobre.html**

Mesma operação que Step 1 mas com `<meta name="rg-page" content="sobre" />` e checks `window.HeadSync` no `ready()`.

- [ ] **Step 5: Aplicar mesma mudança a contactos.html**

Com `<meta name="rg-page" content="contactos" />`.

- [ ] **Step 6: Aplicar mesma mudança às 5 páginas de categoria**

`fisioterapia.html` (→ `cat_fisioterapia`), `saude.html` (→ `cat_saude`), `massagens.html` (→ `cat_massagens`), `holisticas.html` (→ `cat_holisticas`), `estetica.html` (→ `cat_estetica`).

- [ ] **Step 7: Aplicar mesma mudança às 24 páginas de serviço**

Para cada `servico-<slug>.html`, adicionar `<meta name="rg-page" content="serv_<slug>" />` (slug igual ao que aparece no nome do ficheiro). Renderizar `<HeadSync />` dentro do `LangProvider`. Adicionar `window.HeadSync` ao `ready()`.

**Atenção:** o slug em `pageKey` deve corresponder exactamente à chave usada em `data_i18n.jsx` (ex.: `massagem-assinatura-rg`, `depilacao-laser`, etc.). Esses slugs já são os mesmos que aparecem nos nomes dos ficheiros HTML.

- [ ] **Step 8: Confirmar checks `ready()` em todas as páginas**

Para cada HTML modificado, garantir que `window.HeadSync` está no `if (...)` do `ready()`. Sem isto, `HeadSync` pode não estar definido quando `ReactDOM.render` corre.

- [ ] **Step 9: Smoke test alternando idioma em 3 páginas distintas**

- `http://localhost:5500/fisioterapia.html` → alternar para FR → title vira "Physiothérapie — Rita Guerreiro · Loulé".
- `http://localhost:5500/servico-massagem-assinatura-rg.html` → alternar para FR → title vira "Massage Signature RG — Rita Guerreiro · Loulé" (vindo de `getServiceDetail('FR', 'massagem-assinatura-rg')`).
- `http://localhost:5500/sobre.html` → alternar para FR → title vira "À propos — Centre de Thérapies Rita Guerreiro · Loulé".

Expected: tudo verde. Se `getServiceDetail` não estiver disponível em `window`, ver Task 6.5.

- [ ] **Step 10: Commit em lotes**

Por sanidade do diff, commitar em 3 commits:
1. `index.html`, `sobre.html`, `contactos.html` → "feat(i18n): home/sobre/contactos usam HeadSync"
2. 5 páginas de categoria → "feat(i18n): paginas de categoria usam HeadSync"
3. 24 páginas de serviço → "feat(i18n): paginas de servico usam HeadSync"

---

## Task 6.5: (Condicional) Expor `getServiceDetail` em `window` se ainda não estiver

**Files:**
- Modify: `project/src/data_i18n.jsx` (garantir `Object.assign(window, ...)` inclui `getServiceDetail`)

- [ ] **Step 1: Verificar se getServiceDetail está em window**

```bash
grep -n "Object.assign(window" project/src/data_i18n.jsx
```

Expected: linha que faz export para window. Se `getServiceDetail` não aparece, adicionar:

- [ ] **Step 2: Se faltar, adicionar à atribuição**

Localizar `Object.assign(window, { ... })` no fim do ficheiro e garantir que inclui `getServiceDetail` e `getServices`.

- [ ] **Step 3: Refresh do browser e confirmar `typeof window.getServiceDetail === 'function'`**

- [ ] **Step 4: Commit**

```bash
git add project/src/data_i18n.jsx
git commit -m "fix(i18n): expor getServiceDetail em window para HeadSync"
```

---

## Task 7: Validação manual em 5 páginas-amostra

**Files:** nenhum modificado nesta task — só verificação.

Para cada uma das 5 páginas-amostra, executar este checklist com idioma = **FR**:

- [ ] **Step 1: Validar `index.html` em FR**

```bash
# Servir local se não estiver a correr
# cd project && python -m http.server 5500
```

Abrir `http://localhost:5500/`, alternar para Français. Scroll completo (Hero → StatsStrip → ServicesCard → WhyUs → ServicesOverview → MeetRita → Testimonials → HomeCTA → Footer). Verificar:

- [ ] Nav: todos os labels em FR (Accueil, Services, À propos, Contact)
- [ ] Hero: H1 "Récupérez · Équilibrez · Sentez-vous bien", CTA "Prendre rendez-vous"
- [ ] StatsStrip: "Années d'expérience", "Patients accompagnés", "Thérapies disponibles", "Dévouement à votre santé"
- [ ] ServicesCard: heading e body em FR
- [ ] WhyUs: 4 pontos em FR
- [ ] MeetRita: bio em FR, vouvoyer ("vous")
- [ ] Testimonials: testemunhos em FR (nomes próprios mantidos)
- [ ] HomeCTA: WhatsApp/Téléphone/Venez nous voir em FR
- [ ] Footer: tagline, colunas, links, horário, contactos em FR
- [ ] WAFab: botão em FR (verificar se há texto)
- [ ] DevTools → Elements: `<title>` em FR, `<meta description>` em FR, `og:locale=fr_FR`
- [ ] localStorage: `rg_lang === 'FR'`

Anotar quaisquer strings PT residuais.

- [ ] **Step 2: Validar `sobre.html` em FR**

Scroll completo: Hero (eyebrow + heading + sub) → Mission → Pillars → Story → Team → Espaco → Footer. Mesmo checklist visual + meta tags.

- [ ] **Step 3: Validar `contactos.html` em FR**

Verificar: heading "Venez nous rencontrer", labels do formulário (Nom, E-mail, Téléphone, Service, Message), placeholders, botão "Envoyer le message".

- [ ] **Step 4: Validar `fisioterapia.html` (categoria) em FR**

Verificar: breadcrumb "Accueil > Physiothérapie", lista de 4 serviços com nomes/blurbs em FR (já vinha de `data_i18n.jsx`), CTA "Réserver maintenant".

- [ ] **Step 5: Validar `servico-massagem-assinatura-rg.html` (serviço) em FR**

Verificar: breadcrumb, "Sobre este tratamento" → "À propos de ce traitement", processo 5 steps em FR, "Areas de atuação" → "Domaines d'intervention", "Continua a explorar" → "Continuez à explorer", botões em FR.

- [ ] **Step 6: Smoke test nas restantes 22 páginas**

Para cada uma das 22 páginas restantes (24 serviços - 1 testada + 4 categorias - 1 testada + termos.html + privacidade.html):

- Abrir página
- Alternar para FR
- Scroll de 1-2 segundos
- Procurar com Cmd+F qualquer string PT óbvia ("Marcar", "Ligar", "Início")
- Anotar se encontrar

Se uma string PT for encontrada, regressar à Task 1.5 / Task 2 e corrigir.

- [ ] **Step 7: Documentar resultado**

Anexar resultado a `docs/superpowers/plans/audit-hardcoded-strings.md` ou criar `docs/superpowers/plans/validation-results.md`:

```markdown
# Validação manual FR — 2026-05-23

## index.html — ✅ OK
- Sem strings PT residuais
- Meta tags atualizam corretamente

## sobre.html — ⚠️ (se aplicável)
- Linha XX: string "Foo" continua em PT em <ComponenteY>

(... etc ...)
```

- [ ] **Step 8: Voltar para PT e validar não-regressão**

`localStorage.removeItem('rg_lang')`, recarregar. Confirmar que todas as 5 páginas-amostra continuam em PT com layout intacto.

- [ ] **Step 9: Commit do relatório de validação**

```bash
git add docs/superpowers/plans/validation-results.md
git commit -m "docs: relatorio de validacao FR em 5 paginas-amostra"
```

---

## Task 8: Eventuais correcções pós-validação

**Files:** depende dos achados da Task 7.

Se Task 7 encontrar strings PT residuais OU layouts partidos:

- [ ] **Step 1: Para cada string PT residual encontrada**

Procurar a string original em `project/src/` e em ficheiros HTML inline:

```bash
grep -rn "<string-pt-encontrada>" project/src project/*.html
```

Se a string estiver hardcoded num JSX: aplicar fluxo da Task 1.5.

Se a string estiver em `TRANSLATIONS.FR.<caminho>` em falta: completar a chave.

- [ ] **Step 2: Para cada layout partido (strings FR muito longas)**

Identificar componente afetado. Opções:
1. Encurtar tradução em `TRANSLATIONS.FR.<chave>` (mantendo significado).
2. Adicionar `textWrap: 'balance'` ou `whiteSpace: 'normal'` ao estilo do componente.
3. Adicionar `min-width` ou ajustar `flex-wrap` no container.

Preferir (1) sempre que possível para não introduzir alterações estruturais.

- [ ] **Step 3: Re-validar a página afetada**

Repetir o passo da Task 7 que falhou. Expected: agora passa.

- [ ] **Step 4: Commit por achado**

```bash
git add <ficheiros>
git commit -m "fix(i18n): corrigir <descricao-curta-do-bug-FR>"
```

---

## Task 9: Atualizar memória do projeto

**Files:**
- Modify: `C:\Users\Notpr\.claude\projects\c--Users-Notpr-OneDrive-Ambiente-de-Trabalho-Website-Fisio-Rita-Guerreiro\memory\MEMORY.md`
- Create: `C:\Users\Notpr\.claude\projects\c--Users-Notpr-OneDrive-Ambiente-de-Trabalho-Website-Fisio-Rita-Guerreiro\memory\project_i18n_fr.md`

- [ ] **Step 1: Criar memória do projeto sobre o trabalho FR**

Criar `project_i18n_fr.md`:

```markdown
---
name: project-i18n-fr
description: Site da Clinica Rita Guerreiro suporta 4 idiomas (PT/EN/FR/ES); FR foi adicionado em 2026-05-23. HeadSync atualiza title/meta dinamicamente via <meta name="rg-page">.
metadata:
  type: project
---

Site da Clínica Rita Guerreiro suporta 4 idiomas: PT (default), EN, FR, ES.

**Why:** FR foi adicionado em 2026-05-23 para alargar acessibilidade à comunidade francófona em Loulé/Algarve.

**How to apply:**
- Strings de UI em `project/src/tokens.jsx` no objeto `TRANSLATIONS[lang]`. Aceder via `useLang().t('caminho.chave')`.
- Catálogo de serviços (nomes e descrições curtas) em `project/src/data_i18n.jsx` — `getServices(lang)` / `getServiceDetail(lang, slug)`.
- Cada HTML deve ter `<meta name="rg-page" content="<key>">` e renderizar `<HeadSync />` dentro do `<LangProvider>` para que title/meta atualizem dinamicamente.
- `privacidade.html` e `termos.html` têm o seu próprio dicionário inline (não usam `TRANSLATIONS`).
- Vouvoyer em FR (forma "vous", não "tu").
- Marcadores `[REVER ...]` em PT correspondem a `[À VÉRIFIER ...]` em FR — pontos que precisam de revisão humana.
```

- [ ] **Step 2: Adicionar entrada em MEMORY.md**

Editar `MEMORY.md` e adicionar uma linha:

```markdown
- [Site suporta PT/EN/FR/ES](project_i18n_fr.md) — i18n via TRANSLATIONS (tokens.jsx) e data_i18n.jsx; HeadSync para meta tags
```

- [ ] **Step 3: Verificar ficheiros gravados**

```bash
ls "C:/Users/Notpr/.claude/projects/c--Users-Notpr-OneDrive-Ambiente-de-Trabalho-Website-Fisio-Rita-Guerreiro/memory/"
cat "C:/Users/Notpr/.claude/projects/c--Users-Notpr-OneDrive-Ambiente-de-Trabalho-Website-Fisio-Rita-Guerreiro/memory/MEMORY.md"
```

Expected: ambos ficheiros presentes e bem formados.

---

## Task 10: Commit final / push para remote

- [ ] **Step 1: Verificar status final**

```bash
git status
git log --oneline -20
```

Expected: working tree limpo (ou com apenas ficheiros já untracked que pré-existiam, como fotos da clínica). Lista de commits dos últimos 20 mostra a progressão limpa do trabalho.

- [ ] **Step 2: Listar todas as commits do trabalho FR**

```bash
git log --oneline | grep -E "i18n|FR|HeadSync|frances"
```

Expected: ~10-15 commits descrevendo a progressão.

- [ ] **Step 3: Preguntar ao utilizador se quer push**

**Não fazer push sem confirmação explícita.** Apresentar o resumo do trabalho e perguntar:

> "Trabalho FR está completo localmente. N commits criados. Queres que faça `git push origin main` ou preferes fazer review primeiro?"

Aguardar resposta. Só se o utilizador disser sim, executar:

```bash
git push origin main
```

---

## Self-review

**1. Spec coverage:**
- ✅ "Adicionar bloco `FR: { ... }` em `tokens.jsx`" → Task 2
- ✅ "Adicionar `FR` ao seletor de idioma do Nav" → Task 3
- ✅ "Auditar `data.jsx`" → coberto: confirmei que descrições longas estão em `data_i18n.jsx`, não em `data.jsx`. Não precisa de task dedicada.
- ✅ "Auditar texto hardcoded" → Task 1 + Task 1.5
- ✅ "Validação" → Task 7
- ✅ Meta tags dinâmicas via `HeadSync` → Tasks 4-6
- ✅ Vouvoyer + marcadores `[À VÉRIFIER]` → enforced em "Convenções"

**2. Placeholder scan:** sem "TBD/TODO/implement later". Cada step tem código ou comando concreto.

**3. Type consistency:**
- `HeadSync` definido em Task 5 e referenciado em Task 6 — consistente.
- `pageKey` definido em Task 4 e usado em Task 6 — tabela completa.
- `getServiceDetail(lang, slug)` assumido em Task 5 e validado em Task 6.5.
- Chaves de tradução (ex. `homecta_v2.opt1_title`) espelham as PT existentes em tokens.jsx.

Plano consistente.

---

## Como executar

**Recomendado:** subagent-driven-development — uma subtarefa por agente fresco, review entre tarefas. Tasks 2 e 6 são as mais longas e beneficiam mais de revisão isolada.

**Alternativa:** executing-plans inline em sessão única se preferires acompanhar de perto.

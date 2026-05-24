# Auditoria de strings PT hardcoded — 2026-05-23

Resultado da Task 1 do plano `2026-05-23-traducao-frances-website.md`. Identifica strings PT-PT visíveis ao utilizador que não passam por `t('...')` e que portanto não traduzem ao alternar o idioma.

## Metodologia

- Grep com regex `['"][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-z...]{8,}['"]` para literais.
- Grep com regex `>[A-ZÁÉÍÓÚ][a-z...]{4,}<` para JSX-children numa única linha.
- Leitura direta da `ContactosPage` (que tinha conteúdo PT multi-linha em JSX children).
- Filtrados: nomes próprios, endereços, telefones, URLs, valores CSS, dicionários i18n locais (`Footer` em `ui.jsx` já tem PT/EN/FR/ES completo).

## home.jsx
Nenhuma string PT hardcoded — todo o copy passa por `t()`. (Os `alt=` de imagens — "Equipa da Clínica Rita Guerreiro em Loulé", "Rita Guerreiro — Fisioterapeuta, Clínica em Loulé" — são copy visível a screen readers mas têm baixa prioridade; fica como nota.)

## sobre.jsx
Nenhuma string PT hardcoded — todo o copy passa por `t()`.

## pages.jsx
**Strings a migrar (8 chaves novas necessárias):**
- L26: `'Serviço não encontrado.'` — fallback quando slug inválido. Equivalente em ServicePage.
- L211: `'Tecnologia'` — fallback eyebrow `detail.tech.eyebrow || 'Tecnologia'`.
- L286: `'Pronto para marcar a tua sessão?'` — heading do CTA final em ServicePage. **Tem "tua" — passar para vouvoyer "votre" em FR.**
- L348: `'Categoria não encontrada.'` — fallback de CategoryPage.
- L489 (ContactosPage WhatsApp card body): `'A forma mais rápida. A maioria das marcações resolve-se em menos de 5 minutos durante o horário da clínica.'`
- L492 (ContactosPage WhatsApp CTA): `'Enviar mensagem'`
- L505 (ContactosPage Telefone): `'Chamada nacional'`
- L507 (ContactosPage Telefone body): `'Preferes falar? Liga durante o horário de funcionamento e tratamos tudo contigo.'` — **tutoyer; passar para "vous" em FR.**
- L510 (ContactosPage Telefone CTA): `'Ligar agora'`
- L521: `title="Mapa"` (iframe Google Maps)
- L536: `'Como chegar'` — eyebrow "Como chegar" section
- L538: `'No coração de Loulé'` — heading
- L546-547: `'De carro'` / `'Estacionamento disponível nas ruas envolventes. Centro de Loulé a 2 minutos a pé.'`
- L553-554: `'De autocarro'` / `'Terminal rodoviário de Loulé a 5 minutos. Várias carreiras do Algarve passam por Loulé.'`
- L560-561: `'Referências próximas'` / `'A 300m do Castelo de Loulé e do Mercado Municipal.'`

**Total: 15 strings de copy + 1 fallback (Tecnologia) + 2 erros (Serviço/Categoria não encontrada).**

## ui.jsx
- Footer (linhas 524-601) tem dicionário local `L = { PT, EN, FR, ES }` — **FR já completo**, não precisa migração.
- L180, 792, 795, 806, 844, 858: `alt=` e `aria-label=` de imagens/logos. Importantes para screen readers mas baixa prioridade ("Não aceitamos Multibanco", "Livro de Reclamações", "WhatsApp" — este último é universal). Migração opcional.

## contactos.html
Não há código React inline — `contactos.html` apenas faz `<LangProvider><ContactosPage /></LangProvider>`. Toda a lógica está em `pages.jsx` (auditado acima).

## Conclusão

- **Strings de copy visível a migrar para `TRANSLATIONS`: ~18.**
- Todas concentradas em `pages.jsx` (especialmente na `ContactosPage` e `ServicePage`).
- Duas strings usam tratamento "tu" e precisam de ser ajustadas para vouvoyer em FR ("Preferes falar?", "Pronto para marcar a tua sessão?").

**Decisão: [x] Task 1.5 NECESSÁRIA.** Criar chaves novas em `TRANSLATIONS.PT/EN/FR/ES` cobrindo:
- `service.cta_heading` (PT: "Pronto para marcar a tua sessão?" → FR vouvoyer)
- `service.tech_eyebrow_fallback` (PT: "Tecnologia")
- `service.not_found` (PT: "Serviço não encontrado.")
- `category.not_found` (PT: "Categoria não encontrada.")
- `contactos.canais.*`: wa_body, wa_cta, tel_label, tel_body, tel_cta, mapa_title
- `contactos.como_chegar.*`: eyebrow, heading, carro_t/d, bus_t/d, refs_t/d

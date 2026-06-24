// Service detail page + Contactos page

function findService(slug, services) {
  const SVC = services || SERVICES;
  for (const k of Object.keys(SVC)) {
    const item = SVC[k].items.find(i => i.slug === slug);
    if (item) return { ...item, category: SVC[k].label, categoryId: k };
  }
  return null;
}

// Para linhas de "pack" (ex: { label: 'Pack 10 sessões', value: '450€' }),
// devolve o preço por sessão (ex: '45€'). Devolve null se não for um pack
// ou se o valor não dividir de forma limpa pelo número de sessões.
function perSessionPrice(label, value) {
  // Só linhas de pacote contam: label tem "pack" + nº de sessões
  // (PT/FR/ES "Pack 10 ...", EN "10-session pack"). Ignora durações tipo "50min".
  const l = String(label);
  if (!/pack|pacote/i.test(l)) return null;
  const count = parseInt(l.match(/\d+/)?.[0], 10);
  const total = parseFloat(String(value).replace(/[^\d.,]/g, '').replace(',', '.'));
  if (!count || count < 2 || !total) return null;
  const per = total / count;
  if (!Number.isInteger(per)) return null;
  return `${per}€`;
}

// Category accent colors for visual differentiation
const CAT_ACCENT = {
  fisioterapia: { bg: '#EBF4F3', border: '#6FB5B0', dot: '#2F6B68' },
  saude:        { bg: '#EFF6F0', border: '#7DBF8A', dot: '#3D7A4A' },
  massagens:    { bg: '#F5F0EC', border: '#C4A882', dot: '#8A6540' },
  holisticas:   { bg: '#F0EDF6', border: '#A08CC0', dot: '#5E3F8F' },
  estetica:     { bg: '#F6EFF3', border: '#C487AA', dot: '#8F3F63' },
};

function ServicePage({ slug }) {
  const { lang, t } = useLang();
  const services = getServices(lang);
  const serviceDetail = getServiceDetail(lang);
  const s = findService(slug, services);
  if (!s) return <div style={{ padding: 120 }}>{t('service.not_found')}</div>;
  const detail = serviceDetail[slug];
  const catItems = services[s.categoryId].items.filter(i => i.slug !== slug);
  const steps = t('service.steps');
  const accent = CAT_ACCENT[s.categoryId] || CAT_ACCENT.fisioterapia;

  return (<>
    <Nav current={s.categoryId} />

    {/* ── Hero ── */}
    <section style={{ paddingTop: 130, paddingBottom: 0, background: RG.white }}>
      <Container>
        {/* Breadcrumb */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: F_BODY, fontSize: 13, color: RG.muted, marginBottom: 32 }}>
            <a href="/" style={{ color: RG.muted, textDecoration: 'none' }}>{t('service.inicio')}</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>{s.category}</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: RG.ink, fontWeight: 500 }}>{s.name}</span>
          </div>
        </Reveal>

        {/* Hero layout: text left, image right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', paddingBottom: 72 }} className="rg-hero-grid">
          <div>
            {/* Category badge */}
            <Reveal>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: accent.bg, border: `1px solid ${accent.border}`,
                borderRadius: 100, padding: '6px 14px', marginBottom: 28,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 600, color: accent.dot, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.category}</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 style={{
                fontFamily: F_DISPLAY, fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.035em',
                margin: 0, color: RG.ink,
              }}>{s.name}</h1>
            </Reveal>

            <Reveal delay={120}>
              <p style={{
                fontFamily: F_BODY, fontSize: 18, lineHeight: 1.65,
                color: RG.charcoal, marginTop: 20, marginBottom: 0,
                maxWidth: '42ch',
              }}>{detail?.tagline || s.blurb}</p>
            </Reveal>

            {/* Price pill */}
            <Reveal delay={180}>
              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                {detail?.prices ? (
                  detail.prices.slice(0, slug === 'terapia-bowen' ? 3 : 2).map((p, i) => (
                    <div key={i} style={{
                      background: i === 0 ? RG.tealDark : RG.white,
                      color: i === 0 ? RG.white : RG.ink,
                      border: `1px solid ${i === 0 ? RG.tealDark : RG.line}`,
                      borderRadius: 8, padding: '10px 18px',
                    }}>
                      <div style={{ fontFamily: F_BODY, fontSize: 11, opacity: 0.7, marginBottom: 2 }}>{p.label}</div>
                      <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.value}</div>
                      {perSessionPrice(p.label, p.value) && (
                        <div style={{ fontFamily: F_BODY, fontSize: 11, opacity: 0.7, marginTop: 2 }}>{perSessionPrice(p.label, p.value)} {t('service.por_sessao')}</div>
                      )}
                    </div>
                  ))
                ) : (
                  <div style={{
                    background: RG.tealDark, color: RG.white,
                    borderRadius: 8, padding: '10px 18px',
                  }}>
                    <div style={{ fontFamily: F_BODY, fontSize: 11, opacity: 0.7, marginBottom: 2 }}>{t('service.preco_label')}</div>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{s.price}</div>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button href="https://wa.me/351961899364" target="_blank" variant="teal" size="md">{t('service.agendar_btn')}</Button>
                <Button href="tel:+351961899364" variant="outline" size="sm" icon={false}>{t('service.ligar_btn')}</Button>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={100}>
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              <Photo aspect="4/3" label={`Foto — ${s.name}`} tone="teal" src={s.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Full-width accent stripe */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${accent.border}, ${RG.teal}, transparent)` }} />
    </section>

    {/* ── Descrição + Áreas de Atuação ── */}
    <Section bg={RG.white} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }} className="rg-hero-grid">
          {/* Texto descritivo */}
          <Reveal>
            <div style={{
              display: 'inline-block', fontFamily: F_BODY, fontSize: 11,
              fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: accent.dot, marginBottom: 20,
            }}>{t('service.sobre_heading')}</div>
            <p style={{
              fontFamily: F_BODY, fontSize: 17, lineHeight: 1.75,
              color: RG.charcoal, margin: 0,
            }}>{detail?.description || s.blurb}</p>

            {/* Preços completos */}
            {detail?.prices && detail.prices.length > 0 && (
              <div style={{ marginTop: 40, padding: 24, background: RG.creamSoft, borderRadius: 12, border: `1px solid ${RG.line}` }}>
                <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: RG.muted, marginBottom: 16 }}>{t('service.preco_label')}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {detail.prices.map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, paddingBottom: i < detail.prices.length - 1 ? 10 : 0, borderBottom: i < detail.prices.length - 1 ? `1px solid ${RG.line}` : 'none' }}>
                      <span style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal }}>{p.label}</span>
                      <span style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <span style={{ display: 'block', fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.02em' }}>{p.value}</span>
                        {perSessionPrice(p.label, p.value) && (
                          <span style={{ display: 'block', fontFamily: F_BODY, fontSize: 12, color: RG.muted, marginTop: 2 }}>{perSessionPrice(p.label, p.value)} {t('service.por_sessao')}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          {/* Áreas de atuação */}
          {detail?.sub && (
            <Reveal delay={80}>
              <div style={{
                display: 'inline-block', fontFamily: F_BODY, fontSize: 11,
                fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: accent.dot, marginBottom: 20,
              }}>{t('service.areas_label')}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {detail.sub.map((x, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    padding: '18px 0',
                    borderBottom: i < detail.sub.length - 1 ? `1px solid ${RG.line}` : 'none',
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: accent.bg, border: `1px solid ${accent.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: F_BODY, fontSize: 11, fontWeight: 700, color: accent.dot,
                      marginTop: 2,
                    }}>{i + 1}</div>
                    <div>
                      <div style={{ fontFamily: F_DISPLAY, fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', color: RG.ink, marginBottom: 4 }}>{x.t}</div>
                      <div style={{ fontFamily: F_BODY, fontSize: 14, lineHeight: 1.6, color: RG.charcoal }}>{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>

    {/* ── Tecnologia (ex: Winback) ── */}
    {detail?.tech && (
      <Section bg={RG.creamSoft} pad="lg">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="rg-hero-grid">
            {/* Imagem */}
            <Reveal>
              <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: RG.white, border: `1px solid ${RG.line}` }}>
                <img src={detail.tech.img} alt={detail.tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal delay={80}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 32, height: 2, background: accent.border }} />
                <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent.dot }}>{detail.tech.eyebrow || t('service.tech_eyebrow_fallback')}</span>
              </div>
              <h2 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0, color: RG.ink }}>
                {detail.tech.name}
              </h2>
              {detail.tech.tagline && (
                <p style={{ fontFamily: F_BODY, fontSize: 17, lineHeight: 1.6, color: RG.charcoal, marginTop: 12, marginBottom: 0, fontWeight: 500 }}>
                  {detail.tech.tagline}
                </p>
              )}
              <p style={{ fontFamily: F_BODY, fontSize: 15, lineHeight: 1.75, color: RG.charcoal, marginTop: 20, marginBottom: 0 }}>
                {detail.tech.description}
              </p>

              {detail.tech.benefits && detail.tech.benefits.length > 0 && (
                <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
                  {detail.tech.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.5 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 3, color: accent.dot }}>
                        <path d="M3 8.5 L6.5 12 L13 4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>
    )}

    {/* ── Como funciona ── */}
    <Section bg={accent.bg} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 2, background: accent.border }} />
            <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent.dot }}>{t('service.processo_eyebrow')}</span>
          </div>
          <h2 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0, color: RG.ink }}>
            {t('service.processo_heading')}
          </h2>
        </Reveal>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 2 }} className="rg-steps-grid">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background: RG.white, padding: '28px 24px',
                borderTop: `3px solid ${i === 0 ? accent.dot : 'transparent'}`,
                position: 'relative',
              }}>
                <div style={{
                  fontFamily: F_DISPLAY, fontSize: 40, fontWeight: 700,
                  letterSpacing: '-0.05em', color: accent.border,
                  lineHeight: 1, marginBottom: 16, opacity: 0.5,
                }}>0{i + 1}</div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: RG.ink, marginBottom: 8 }}>{step.t}</div>
                <div style={{ fontFamily: F_BODY, fontSize: 13, lineHeight: 1.6, color: RG.charcoal }}>{step.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>

    {/* ── CTA Marcação ── */}
    <section style={{ background: RG.tealDark, padding: '60px 0' }}>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: RG.teal, marginBottom: 12 }}>{t('service.marcacoes_label')}</div>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', color: RG.white, lineHeight: 1.2 }}>
                {t('service.cta_heading_inline')}
              </div>
              <div style={{ fontFamily: F_BODY, fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 10 }}>{t('service.marcacoes_body')}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button href="https://wa.me/351961899364" target="_blank" variant="teal" size="md">{t('service.agendar_btn')}</Button>
              <Button href="tel:+351961899364" variant="outline" size="sm" icon={false}>{t('service.ligar_btn')}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>

    {/* ── Outros serviços ── */}
    {catItems.length > 0 && (
      <Section bg={RG.creamSoft} pad="lg">
        <Container>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 2, background: RG.teal }} />
              <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: RG.tealDark }}>{t('service.outros_eyebrow_prefix')} {s.category}</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h3 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 36px', color: RG.ink }}>{t('service.outros_heading')}</h3>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {catItems.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 60}>
                <a href={`/servico/${item.slug}`} className="rg-service-card" style={{
                  display: 'block', background: RG.white, textDecoration: 'none', color: RG.ink,
                  borderRadius: 12, overflow: 'hidden', border: `1px solid ${RG.line}`,
                }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Photo label={item.name} tone="teal" aspect="16/9" src={item.img} />
                  </div>
                  <div style={{ padding: '20px 20px 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                      <h4 style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>{item.name}</h4>
                      <svg className="rg-service-arrow" width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2, color: RG.tealDark }}><path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <p style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, lineHeight: 1.5, margin: '0 0 12px' }}>{item.blurb}</p>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 16, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.01em' }}>{item.price}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    )}

    <Footer />
    <WAFab />
  </>);
}

// Category page — lists all services in a category
function CategoryPage({ categoryId }) {
  const { lang, t } = useLang();
  const services = getServices(lang);
  const cat = services[categoryId];
  if (!cat) return <div style={{ padding: 120 }}>{t('category.not_found')}</div>;

  return (<>
    <Nav current={categoryId} />
    <section style={{ paddingTop: 130, paddingBottom: 60, background: RG.cream }}>
      <Container>
        <Reveal>
          <div style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, marginBottom: 16 }}>
            <a href="/" style={{ color: RG.muted, textDecoration: 'none' }}>{t('category.inicio')}</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: RG.ink }}>{cat.label}</span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 8vw, 128px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.045em', margin: 0, color: RG.tealDark }}>{cat.label}</h1>
        </Reveal>
        <Reveal delay={120}>
          <Body size={20} style={{ marginTop: 28, maxWidth: '54ch' }}>{cat.intro}</Body>
        </Reveal>
      </Container>
    </section>

    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {cat.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 60}>
              <a href={`/servico/${item.slug}`} className="rg-service-card" style={{ display: 'block', background: RG.white, textDecoration: 'none', color: RG.ink, borderRadius: 12, overflow: 'hidden', border: `1px solid ${RG.line}` }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Photo label={item.name} tone="teal" aspect="16/9" src={item.img} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                    <h2 style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{item.name}</h2>
                    <svg className="rg-service-arrow" width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 4, color: RG.tealDark }}><path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.55, margin: '0 0 16px' }}>{item.blurb}</p>
                  <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.02em' }}>{item.price}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>

    <Section bg={RG.tealDark} pad="md">
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <Heading level="h3" style={{ color: RG.white, margin: 0 }}>{t('category.cta_heading')}<span style={{ color: RG.teal }}>?</span></Heading>
              <Body size={16} style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>{t('category.cta_body')}</Body>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button href="https://wa.me/351961899364" target="_blank" variant="teal" size="md">{t('category.cta_btn')}</Button>
              <Button href="tel:+351961899364" variant="outline" size="sm" icon={false}>961 899 364</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>

    <Footer />
    <WAFab />
  </>);
}

// Contactos page
function ContactosPage() {
  const { t } = useLang();

  const ArrowRight = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 16 16', fill: 'none' },
    React.createElement('path', { d: 'M3 8 L13 8 M9 4 L13 8 L9 12', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' })
  );

  return (<>
    <Nav current="contactos" />

    {/* ── Hero 2 colunas ── */}
    <section style={{ paddingTop: 130, paddingBottom: 80, background: RG.white, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${RG.tealDark}, ${RG.teal} 40%, transparent)` }} />
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-end' }} className="rg-hero-grid">
          <div>
            <Reveal><Eyebrow>{t('contactos.eyebrow')}</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.045em', margin: '16px 0 0', color: RG.ink }}>
                {t('contactos.heading')}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontFamily: F_BODY, fontSize: 18, color: RG.charcoal, marginTop: 24, lineHeight: 1.65, maxWidth: '34ch' }}>
                {t('contactos.sub')}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <Button href="https://wa.me/351961899364" target="_blank" variant="teal" size="md">WhatsApp</Button>
                <Button href="tel:+351961899364" variant="outline" size="sm" icon={false}>961 899 364</Button>
              </div>
            </Reveal>
          </div>

          {/* Info column with left border accent */}
          <Reveal delay={100}>
            <div style={{ borderLeft: `3px solid ${RG.teal}`, paddingLeft: 40 }}>
              {[
                { label: t('contactos.morada_label'), value: t('contactos.morada_val'), href: null },
                { label: t('contactos.telefone_label'), value: '(+351) 961 899 364', href: 'tel:+351961899364' },
                { label: t('contactos.horario_label'), value: t('contactos.horario_val'), href: null },
              ].map((item, i) => (
                <div key={i} style={{ paddingTop: i > 0 ? 28 : 0, paddingBottom: 28, borderBottom: i < 2 ? `1px solid ${RG.line}` : 'none' }}>
                  <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 8 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 300, color: RG.ink, letterSpacing: '-0.02em', textDecoration: 'none', lineHeight: 1.35, whiteSpace: 'pre-line', display: 'block' }}>{item.value}</a>
                    : <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 300, color: RG.ink, letterSpacing: '-0.02em', lineHeight: 1.35, whiteSpace: 'pre-line' }}>{item.value}</div>
                  }
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>

    {/* ── Canais de contacto ── */}
    <Section bg={RG.tealWash} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="rg-hero-grid">

          {/* WhatsApp widget */}
          <Reveal>
            {(() => {
              const WA_NUMBER = '351961899364';
              const [msg, setMsg] = React.useState('');
              const waLink = (base) => `${base}${WA_NUMBER}${msg.trim() ? '?text=' + encodeURIComponent(msg) : ''}`;
              const waApp = waLink('https://wa.me/');
              const waWeb = waLink('https://web.whatsapp.com/send?phone=');

              return (
                <div style={{ display: 'flex', flexDirection: 'column', background: RG.tealDark, borderRadius: 16, color: RG.white, position: 'relative', overflow: 'hidden', minHeight: 240 }}>
                  <div style={{ position: 'absolute', bottom: -48, right: -48, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
                  <div style={{ position: 'absolute', top: -20, right: 20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

                  {/* Top info */}
                  <div style={{ padding: '32px 32px 20px', position: 'relative' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 16, flexShrink: 0 }}>
                      <path d="M17.47 14.38c-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.31.19-.57.06-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.47.13-.16.17-.27.26-.44.09-.17.04-.33-.02-.46-.06-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45-.15-.01-.33-.01-.5-.01-.17 0-.46.06-.7.33-.24.26-.91.89-.91 2.17s.93 2.51 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.07 1.55-.63 1.76-1.24.22-.61.22-1.14.16-1.24-.07-.11-.24-.17-.5-.3zM12.03 2C6.52 2 2 6.52 2 12.03c0 1.86.5 3.6 1.37 5.1L2 22l5.01-1.31A9.97 9.97 0 0 0 12.03 22C17.54 22 22 17.48 22 11.97 22 6.52 17.54 2 12.03 2z" fill="white" fillOpacity="0.9"/>
                    </svg>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>WhatsApp</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)' }}>{t('contactos.canais.wa_body')}</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>{t('contactos.canais.wa_conversar')}</div>
                  </div>

                  {/* Message input area */}
                  <div style={{ background: '#ECE5DD', padding: '14px 16px 0' }}>
                    <textarea
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                      placeholder={t('contactos.canais.wa_placeholder')}
                      rows={3}
                      style={{
                        width: '100%', boxSizing: 'border-box', resize: 'none',
                        border: '1px solid #ccc', borderRadius: 8, padding: '10px 12px',
                        fontFamily: F_BODY, fontSize: 13, color: '#111', lineHeight: 1.5,
                        outline: 'none', background: '#fff',
                      }}
                    />
                  </div>

                  {/* Buttons */}
                  <div style={{ background: '#f0f0f0', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a href={waApp} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', borderRadius: 8, padding: '10px 0', textAlign: 'center', fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'block' }}>{t('contactos.canais.wa_abrir')}</a>
                    <a href={waWeb} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#111', borderRadius: 8, padding: '10px 0', textAlign: 'center', fontWeight: 600, fontSize: 13, textDecoration: 'none', display: 'block', border: '1px solid #ddd' }}>{t('contactos.canais.wa_web')}</a>
                    <div style={{ textAlign: 'center', fontSize: 11, color: '#888', paddingBottom: 6 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366" style={{ verticalAlign: 'middle', marginRight: 3 }}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2zm5.73 14.07c-.24.68-1.42 1.3-1.97 1.38-.52.08-1.17.11-1.89-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.54c.27-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.69.53.24.6.84 2.1.91 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2 1.11.99 2.05 1.3 2.34 1.44.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.77.83 2.07.98.3.15.5.22.57.35.08.13.08.76-.16 1.43z" /></svg>
                      {t('contactos.canais.wa_sem_app')} <a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer" style={{ color: '#075E54', textDecoration: 'underline' }}>{t('contactos.canais.wa_download')}</a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </Reveal>

          {/* Telefone */}
          <Reveal delay={80}>
            <a href="tel:+351961899364" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', background: RG.white, borderRadius: 16, padding: '40px 40px 36px', border: `1px solid ${RG.line}`, minHeight: 240, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: -48, right: -48, width: 180, height: 180, borderRadius: '50%', background: RG.tealWash, zIndex: 0 }} />
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 20, flexShrink: 0, position: 'relative', zIndex: 1 }}>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill={RG.tealDark}/>
              </svg>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: RG.ink, marginBottom: 6, position: 'relative', zIndex: 1 }}>961 899 364</div>
              <div style={{ fontFamily: F_BODY, fontSize: 12, color: RG.muted, marginBottom: 12, position: 'relative', zIndex: 1 }}>{t('contactos.canais.tel_label')}</div>
              <div style={{ fontFamily: F_BODY, fontSize: 15, lineHeight: 1.65, color: RG.charcoal, flex: 1, marginBottom: 28, position: 'relative', zIndex: 1 }}>
                {t('contactos.canais.tel_body')}
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 13, fontWeight: 700, color: RG.tealDark, position: 'relative', zIndex: 1 }}>
                {t('contactos.canais.tel_cta')} <ArrowRight />
              </div>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>

    {/* ── Mapa full-width ── */}
    <div style={{ position: 'relative', height: 500 }}>
      <iframe
        title={t('contactos.canais.mapa_title')}
        src="https://maps.google.com/maps?q=Rua+Padre+Ant%C3%B3nio+Vieira+58%2C+8100-611+Loul%C3%A9&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        style={{ width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(0.15) contrast(1.02)' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>

    {/* ── Como chegar ── */}
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 2, background: RG.teal }} />
            <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: RG.tealDark }}>{t('contactos.como_chegar.eyebrow')}</span>
          </div>
          <h2 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 48px', color: RG.ink }}>{t('contactos.como_chegar.heading')}</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {[
            {
              icon: React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' },
                React.createElement('path', { d: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', fill: RG.tealDark })
              ),
              title: t('contactos.como_chegar.carro_t'),
              body: t('contactos.como_chegar.carro_d'),
            },
            {
              icon: React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' },
                React.createElement('path', { d: 'M17 8C8 10 5.9 16.17 3.82 21h2.79c.6-1.25 1.25-2.46 2.09-3.47C10.77 15.23 14.2 14 17 14v4l5-5-5-5v4z', fill: RG.tealDark })
              ),
              title: t('contactos.como_chegar.bus_t'),
              body: t('contactos.como_chegar.bus_d'),
            },
            {
              icon: React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' },
                React.createElement('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', fill: RG.tealDark })
              ),
              title: t('contactos.como_chegar.refs_t'),
              body: t('contactos.como_chegar.refs_d'),
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{ background: RG.white, borderRadius: 12, padding: '28px 24px', border: `1px solid ${RG.line}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: RG.tealWash, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: RG.ink, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontFamily: F_BODY, fontSize: 13, lineHeight: 1.65, color: RG.charcoal }}>{item.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>

    <Footer />
    <WAFab />
  </>);
}

Object.assign(window, { ServicePage, CategoryPage, ContactosPage, findService });

// Service detail page + Contactos page

function findService(slug, services) {
  const SVC = services || SERVICES;
  for (const k of Object.keys(SVC)) {
    const item = SVC[k].items.find(i => i.slug === slug);
    if (item) return { ...item, category: SVC[k].label, categoryId: k };
  }
  return null;
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
  if (!s) return <div style={{ padding: 120 }}>Serviço não encontrado.</div>;
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
            <a href="index.html" style={{ color: RG.muted, textDecoration: 'none' }}>{t('service.inicio')}</a>
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
                  detail.prices.slice(0, 2).map((p, i) => (
                    <div key={i} style={{
                      background: i === 0 ? RG.tealDark : RG.white,
                      color: i === 0 ? RG.white : RG.ink,
                      border: `1px solid ${i === 0 ? RG.tealDark : RG.line}`,
                      borderRadius: 8, padding: '10px 18px',
                    }}>
                      <div style={{ fontFamily: F_BODY, fontSize: 11, opacity: 0.7, marginBottom: 2 }}>{p.label}</div>
                      <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.value}</div>
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
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, paddingBottom: i < detail.prices.length - 1 ? 10 : 0, borderBottom: i < detail.prices.length - 1 ? `1px solid ${RG.line}` : 'none' }}>
                      <span style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal }}>{p.label}</span>
                      <span style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{p.value}</span>
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
                Pronto para marcar a tua sessão?
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
                <a href={`servico-${item.slug}.html`} className="rg-service-card" style={{
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
  if (!cat) return <div style={{ padding: 120 }}>Categoria não encontrada.</div>;

  return (<>
    <Nav current={categoryId} />
    <section style={{ paddingTop: 130, paddingBottom: 60, background: RG.cream }}>
      <Container>
        <Reveal>
          <div style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, marginBottom: 16 }}>
            <a href="index.html" style={{ color: RG.muted, textDecoration: 'none' }}>{t('category.inicio')}</a>
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
              <a href={`servico-${item.slug}.html`} className="rg-service-card" style={{ display: 'block', background: RG.white, textDecoration: 'none', color: RG.ink, borderRadius: 12, overflow: 'hidden', border: `1px solid ${RG.line}` }}>
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
  const contactItems = [
    { k: t('contactos.morada_label'), v: t('contactos.morada_val') },
    { k: t('contactos.telefone_label'), v: '(+351) 961 899 364', href: 'tel:+351961899364' },
    { k: t('contactos.horario_label'), v: t('contactos.horario_val') },
  ];
  return (<>
    <Nav current="contactos" />
    <section style={{ paddingTop: 130, paddingBottom: 80, background: RG.cream }}>
      <Container>
        <Reveal><Eyebrow>{t('contactos.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(48px, 7vw, 112px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '20px 0 0', color: RG.ink, maxWidth: '16ch' }}>
            {t('contactos.heading')}          </h1>
        </Reveal>
        <Reveal delay={160}>
          <Body size={18} style={{ marginTop: 24 }}>{t('contactos.sub')}</Body>
        </Reveal>
      </Container>
    </section>

    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="rg-values-grid">
            {contactItems.map(it => (
              <div key={it.k} style={{ background: RG.white, borderRadius: 12, padding: '28px 24px', border: `1px solid ${RG.line}` }}>
                <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 12 }}>{it.k}</div>
                {it.href
                  ? <a href={it.href} style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 300, color: RG.ink, lineHeight: 1.35, letterSpacing: '-0.01em', textDecoration: 'none', whiteSpace: 'pre-line', display: 'block' }}>{it.v}</a>
                  : <div style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 300, color: RG.ink, lineHeight: 1.35, letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}>{it.v}</div>
                }
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ height: 48 }} />

        <Reveal delay={120}>
          <div style={{ marginTop: 60, borderRadius: 10, overflow: 'hidden', border: `1px solid ${RG.lineSoft}`, position: 'relative', height: 400 }}>
            <iframe title="Mapa" src="https://maps.google.com/maps?q=Rua+Padre+Ant%C3%B3nio+Vieira+58%2C+8100-611+Loul%C3%A9&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(0.2)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div style={{ position: 'absolute', top: 20, left: 20, background: RG.white, padding: 20, borderRadius: 8, boxShadow: '0 14px 30px -10px rgba(0,0,0,0.18)', maxWidth: 280 }}>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>Rita Guerreiro</div>
              <div style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, marginTop: 4 }}>Rua Padre António Vieira 58, Loulé</div>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua+Padre+Antonio+Vieira+58+Loule" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontFamily: F_BODY, fontSize: 12, color: RG.tealDark, textDecoration: 'none', fontWeight: 700 }}>{t('contactos.maps_link')} →</a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
    <Footer />
    <WAFab />
  </>);
}

Object.assign(window, { ServicePage, CategoryPage, ContactosPage, findService });

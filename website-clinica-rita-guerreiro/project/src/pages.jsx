// Service detail page + Contactos page

function findService(slug, services) {
  const SVC = services || SERVICES;
  for (const k of Object.keys(SVC)) {
    const item = SVC[k].items.find(i => i.slug === slug);
    if (item) return { ...item, category: SVC[k].label, categoryId: k };
  }
  return null;
}

function ServicePage({ slug }) {
  const { lang, t } = useLang();
  const services = getServices(lang);
  const serviceDetail = getServiceDetail(lang);
  const s = findService(slug, services);
  if (!s) return <div style={{ padding: 120 }}>Serviço não encontrado.</div>;
  const detail = serviceDetail[slug];
  const catItems = services[s.categoryId].items.filter(i => i.slug !== slug);
  const steps = t('service.steps');

  return (<>
    <Nav current={s.categoryId} />
    <section style={{ paddingTop: 130, paddingBottom: 60, background: RG.cream }}>
      <Container>
        <Reveal>
          <div style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, marginBottom: 16 }}>
            <a href="index.html" style={{ color: RG.muted, textDecoration: 'none' }}>{t('service.inicio')}</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>{s.category}</span>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: RG.ink }}>{s.name}</span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 8vw, 128px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.045em', margin: 0, color: RG.ink }}>{s.name}</h1>
        </Reveal>
        <Reveal delay={120}>
          <Body size={20} style={{ marginTop: 28, maxWidth: '54ch' }}>{detail?.tagline || s.blurb}</Body>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ marginTop: 48 }}><Photo aspect="21/9" label={`Foto — ${s.name}`} tone="teal" src={s.img} style={{ borderRadius: 12 }} /></div>
        </Reveal>
      </Container>
    </section>

    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }} className="rg-hero-grid">
          <Reveal>
            <div style={{ position: 'sticky', top: 120 }}>
              <Eyebrow>{t('service.info_eyebrow')}</Eyebrow>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ paddingBottom: 16, borderBottom: `1px solid ${RG.line}` }}>
                  <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: RG.muted, marginBottom: 6 }}>{t('service.preco_label')}</div>
                  {detail?.prices ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {detail.prices.map((p, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                          <span style={{ fontFamily: F_BODY, fontSize: 12, color: RG.charcoal }}>{p.label}</span>
                          <span style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{p.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 24, fontWeight: 700, color: RG.tealDark, letterSpacing: '-0.02em' }}>{s.price}</div>
                  )}
                </div>
                <div>
                  <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: RG.muted, marginBottom: 10 }}>{t('service.marcacoes_label')}</div>
                  <Body size={14} style={{ marginBottom: 16 }}>{t('service.marcacoes_body')}</Body>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                    <Button href="https://wa.me/351961899364" target="_blank" variant="teal" size="md">{t('service.agendar_btn')}</Button>
                    <Button href="tel:+351961899364" variant="outline" size="sm" icon={false}>{t('service.ligar_btn')}</Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Heading level="h2">{t('service.sobre_heading')}</Heading>
            <Body size={17} style={{ marginTop: 24 }}>{detail?.description || s.blurb}</Body>
            {detail?.sub && (
              <div style={{ marginTop: 48 }}>
                <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 24 }}>{t('service.areas_label')}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: RG.line, border: `1px solid ${RG.line}` }} className="rg-values-grid">
                  {detail.sub.map((x, i) => (
                    <div key={i} style={{ background: RG.white, padding: 24 }}>
                      <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 8 }}>{x.t}</div>
                      <div style={{ fontFamily: F_BODY, fontSize: 14, lineHeight: 1.55, color: RG.charcoal }}>{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>

    {/* Secção: Como funciona */}
    <Section bg={RG.white} pad="lg">
      <Container>
        <Reveal>
          <Eyebrow style={{ marginBottom: 12 }}>{t('service.processo_eyebrow')}</Eyebrow>
          <Heading level="h2">
            {t('service.processo_heading')}          </Heading>
        </Reveal>
        <div style={{ marginTop: 56, position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 19, top: 20, bottom: 20,
            width: 2, background: RG.teal, opacity: 0.3,
          }} />
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                marginBottom: i < 4 ? 36 : 0, position: 'relative',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: RG.tealDark, color: RG.white, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: F_BODY, fontWeight: 700, fontSize: 14,
                  position: 'relative', zIndex: 1,
                }}>{i + 1}</div>
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

    {catItems.length > 0 && (
      <Section bg={RG.cream} pad="lg">
        <Container>
          <Reveal><Eyebrow>{t('service.outros_eyebrow_prefix')} {s.category}</Eyebrow></Reveal>
          <Reveal delay={60}><Heading level="h3" style={{ marginTop: 16 }}>{t('service.outros_heading')}</Heading></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 36 }}>
            {catItems.map(i => (
              <a key={i.slug} href={`servico-${i.slug}.html`} className="rg-service-card" style={{ display: 'block', background: RG.white, textDecoration: 'none', color: RG.ink }}>
                <div style={{ aspectRatio: '4/3', marginBottom: 16, borderRadius: 8, overflow: 'hidden' }}><Photo label={i.name} tone="teal" aspect="4/3" src={i.img} /></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <h4 style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{i.name}</h4>
                  <svg className="rg-service-arrow" width="16" height="16" viewBox="0 0 16 16" style={{ transition: 'transform 240ms', color: RG.tealDark }}><path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <p style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, lineHeight: 1.5, margin: '8px 0 0' }}>{i.blurb}</p>
              </a>
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
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 8vw, 128px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.045em', margin: 0, color: RG.ink }}>{cat.label}</h1>
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

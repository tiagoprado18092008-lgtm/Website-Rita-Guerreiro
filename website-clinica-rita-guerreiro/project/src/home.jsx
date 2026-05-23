// Home — premium redesign · editorial, asymmetric, content-rich
// Conteúdo marcado [REVER] foi escrito pelo agente para validação pelo cliente.

// ────────────────────────────────────────────────────────────────────────────
// HERO — split editorial com sala-tratamento (foto real), disponibilidade
// ────────────────────────────────────────────────────────────────────────────
function Hero() {
  const { t } = useLang();
  const h1Lines = t('hero.h1');
  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 0px)', display: 'flex', alignItems: 'center', background: RG.cream, overflow: 'hidden', paddingTop: 120 }}>

      {/* Painel direito: foto real da equipa */}
      <div style={{ position: 'absolute', inset: 0, left: '46%', zIndex: 0, overflow: 'hidden' }}>
        <img
          src="assets/foto-equipa-nova.png"
          alt="Equipa da Clínica Rita Guerreiro em Loulé"
          className="rg-ken-burns"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          loading="eager" decoding="async"
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,72,70,0.06) 0%, rgba(31,72,70,0.18) 100%)' }} />
      </div>

      {/* Gradiente cream → foto */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, #ffffff 34%, rgba(255,255,255,0.88) 44%, rgba(255,255,255,0.0) 56%)',
      }} aria-hidden="true" />

      {/* Conteúdo principal */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '40px 48px 80px 24px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 580, position: 'relative', paddingLeft: 28 }}>
          {/* Linha vertical decorativa */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: 2, background: 'linear-gradient(to bottom, #6FB5B0 0%, rgba(111,181,176,0.0) 100%)',
            borderRadius: 2,
          }} />

          {/* Eyebrow com badge "Loulé desde 2022" */}
          <Reveal delay={80}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px 5px 8px', background: 'rgba(111,181,176,0.10)', borderRadius: 999, marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6FB5B0' }} />
              <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 600, color: RG.tealDeep, letterSpacing: '0.06em' }}>{t('hero.badge_v2')}</span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={140}>
            <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(40px, 4.4vw, 64px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.028em', margin: 0, color: RG.ink }}>
              {Array.isArray(h1Lines) && h1Lines.map((line, li) => (
                <span key={li} style={{ display: 'block', color: li === 2 ? '#2F6B68' : undefined }}>
                  {line.split(' ').map((w, i) => (
                    <React.Fragment key={i}><span className="rg-word" style={{ animationDelay: `${(li * 2 + i) * 80 + li * 120}ms` }}>{w}</span>{' '}</React.Fragment>
                  ))}
                </span>
              ))}
            </h1>
          </Reveal>

          {/* Subtítulo */}
          <Reveal delay={480}>
            <p style={{ fontFamily: F_BODY, fontSize: 15, color: RG.charcoal, lineHeight: 1.68, margin: '24px 0 0', maxWidth: '34ch' }}>
              {t('hero.desc')}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={620}>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="rg-cta-primary" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: F_DISPLAY, fontSize: 14, fontWeight: 700,
                color: RG.white, background: '#6FB5B0',
                padding: '14px 28px', borderRadius: 999, textDecoration: 'none',
                boxShadow: '0 10px 28px -8px rgba(111,181,176,0.6)',
                transition: 'transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
                {t('hero.cta')}
              </a>
              <a href="#todos-servicos" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: F_DISPLAY, fontSize: 14, fontWeight: 600,
                color: RG.ink, background: 'transparent',
                border: `1.5px solid rgba(20,20,18,0.16)`, padding: '13px 22px', borderRadius: 999, textDecoration: 'none',
                transition: 'border-color 200ms, background 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(20,20,18,0.4)'; e.currentTarget.style.background = 'rgba(20,20,18,0.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,20,18,0.16)'; e.currentTarget.style.background = 'transparent'; }}>
                {t('hero.cta_secondary')}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </Reveal>

          {/* Prova social ampliada */}
          <Reveal delay={780}>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://www.google.com/search?q=Clinica+Rita+Guerreiro+Loul%C3%A9" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
                padding: '6px 12px 6px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(20,20,18,0.06)',
                transition: 'background 200ms, border-color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.borderColor = 'rgba(20,20,18,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(20,20,18,0.06)'; }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F5A623"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                  ))}
                </div>
                <span style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 700, color: RG.ink }}>5.0</span>
                <span style={{ fontFamily: F_BODY, fontSize: 11, color: RG.muted }}>· Google</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: F_BODY, fontSize: 12, color: RG.muted }}>{t('hero.social_proof_v2')}</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TRUST BAND — substitui o StatsStrip genérico
// ────────────────────────────────────────────────────────────────────────────
function StatsStrip() {
  const { t } = useLang();

  const items = [
    {
      value: '20',
      suffix: '+',
      label: t('trust.anos'),
      desc: t('trust.anos_desc'),
    },
    {
      value: '500',
      suffix: '+',
      label: t('trust.pacientes'),
      desc: null,
    },
    {
      value: '25',
      suffix: '',
      label: t('trust.terapias'),
      desc: null,
    },
  ];

  return (
    <section style={{ background: RG.white, borderTop: `1px solid ${RG.line}`, borderBottom: `1px solid ${RG.line}`, padding: '28px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center' }}>
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                padding: '0 32px',
                borderLeft: i === 0 ? 'none' : `1px solid ${RG.line}`,
              }}
            >
              <div style={{
                fontFamily: F_DISPLAY,
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 200,
                letterSpacing: '-0.03em',
                color: RG.tealDark,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'flex-start',
                flexShrink: 0,
              }}>
                {it.value}
                {it.suffix && (
                  <span style={{ fontSize: '0.5em', fontWeight: 300, marginTop: '0.1em', marginLeft: 1, color: RG.teal }}>{it.suffix}</span>
                )}
              </div>
              <p style={{
                fontFamily: F_BODY,
                fontSize: 10,
                fontWeight: 700,
                color: RG.ink,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                margin: 0,
                lineHeight: 1.4,
              }}>
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SERVICES CARD — Editorial Menu (lista 01–04 + imagem reactiva)
// ────────────────────────────────────────────────────────────────────────────
function ServicesCard() {
  const { t } = useLang();
  const items = [
    { num: '01', name: t('services_menu.01_name'), href: 'fisioterapia.html', img: IMG.fisioterapia, blurb: t('services_menu.01_blurb') },
    { num: '02', name: t('services_menu.02_name'), href: 'servico-pilates-clinico.html', img: IMG['pilates-clinico'], blurb: t('services_menu.02_blurb') },
    { num: '03', name: t('services_menu.03_name'), href: 'massagens.html', img: IMG['massagem-relaxamento'], blurb: t('services_menu.03_blurb') },
    { num: '04', name: t('services_menu.04_name'), href: 'servico-psicologia.html', img: IMG.psicologia, blurb: t('services_menu.04_blurb') },
  ];
  const [active, setActive] = React.useState(0);

  return (
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 64 }}>
            <div style={{ maxWidth: 600 }}>
              <Eyebrow style={{ marginBottom: 16 }}>{t('services_card.eyebrow')}</Eyebrow>
              <Heading level="h2" style={{ maxWidth: '22ch', lineHeight: 1.05, fontWeight: 500 }}>{t('services_card.heading')}</Heading>
            </div>
            <a href="#todos-servicos" style={{
              fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.tealDark,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 20px', borderRadius: 999,
              border: `1.5px solid ${RG.tealDark}`,
              transition: 'background 220ms, color 220ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = RG.tealDark; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RG.tealDark; }}>
              {t('services_card.cta')}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="rg-services-menu" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'stretch' }}>

            {/* Lista editorial com ghost numeral */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, alignSelf: 'center' }}>
              {items.map((it, i) => {
                const isActive = i === active;
                return (
                  <li key={it.num}
                    onMouseEnter={() => setActive(i)}
                    style={{
                      borderBottom: `1px solid ${RG.line}`,
                      borderTop: i === 0 ? `1px solid ${RG.line}` : 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>

                    {/* Ghost numeral watermark */}
                    <div aria-hidden="true" style={{
                      position: 'absolute', right: -8, top: '50%',
                      transform: isActive ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.85)',
                      fontFamily: F_MONO, fontSize: 96, fontWeight: 700, lineHeight: 1,
                      color: RG.teal,
                      opacity: isActive ? 0.07 : 0,
                      transition: 'opacity 400ms ease, transform 400ms cubic-bezier(.2,.8,.2,1)',
                      userSelect: 'none', pointerEvents: 'none',
                      letterSpacing: '-0.04em',
                    }}>{it.num}</div>

                    {/* Teal left-border accent */}
                    <div aria-hidden="true" style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: 3, borderRadius: 2,
                      background: RG.tealDark,
                      transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'top',
                      transition: 'transform 320ms cubic-bezier(.2,.8,.2,1)',
                    }} />

                    <a href={it.href} style={{
                      display: 'block', textDecoration: 'none', color: 'inherit',
                      padding: '28px 12px 28px 20px', position: 'relative',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                        <span style={{
                          fontFamily: F_MONO, fontSize: 10, fontWeight: 600,
                          color: isActive ? RG.tealDark : RG.muted,
                          letterSpacing: '0.14em', transition: 'color 240ms', minWidth: 22,
                        }}>{it.num}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                            <h3 style={{
                              fontFamily: F_DISPLAY,
                              fontSize: 'clamp(24px, 2.2vw, 32px)',
                              fontWeight: isActive ? 600 : 300,
                              letterSpacing: '-0.02em',
                              color: isActive ? RG.ink : RG.charcoal,
                              margin: 0,
                              transition: 'all 280ms cubic-bezier(.2,.8,.2,1)',
                              transform: isActive ? 'translateX(2px)' : 'translateX(0)',
                            }}>{it.name}</h3>
                            <div style={{
                              width: 36, height: 36, borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0,
                              background: isActive ? RG.tealDark : 'transparent',
                              border: isActive ? 'none' : `1.5px solid ${RG.line}`,
                              transition: 'all 260ms cubic-bezier(.2,.8,.2,1)',
                            }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{
                                color: isActive ? '#fff' : RG.muted,
                                transform: isActive ? 'rotate(-45deg)' : 'rotate(0deg)',
                                transition: 'all 260ms cubic-bezier(.2,.8,.2,1)',
                              }}><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                          </div>
                          <div style={{
                            maxHeight: isActive ? 72 : 0,
                            opacity: isActive ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'max-height 360ms cubic-bezier(.2,.8,.2,1), opacity 280ms ease',
                            marginTop: isActive ? 10 : 0,
                          }}>
                            <p style={{ fontFamily: F_BODY, fontSize: 14, color: RG.muted, lineHeight: 1.6, margin: 0, maxWidth: '44ch' }}>{it.blurb}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Painel imagem reactiva */}
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 500, background: RG.tealWash }}>
              {items.map((it, i) => (
                <img key={it.num}
                  src={it.img}
                  alt={it.name}
                  loading="lazy" decoding="async"
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? 'scale(1)' : 'scale(1.06)',
                    transition: 'opacity 600ms ease, transform 900ms cubic-bezier(.2,.8,.2,1)',
                  }} />
              ))}

              {/* Gradient overlay — top e bottom */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(47,107,104,0.12) 0%, transparent 40%, rgba(20,20,18,0.32) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Nome do serviço ativo no canto inferior esquerdo */}
              <div style={{
                position: 'absolute', bottom: 24, left: 24, right: 24,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12,
              }}>
                <div style={{
                  padding: '10px 16px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span style={{ fontFamily: F_MONO, fontSize: 10, fontWeight: 700, color: RG.tealDark, letterSpacing: '0.12em' }}>{items[active].num}</span>
                  <div style={{ width: 1, height: 14, background: RG.line }} />
                  <span style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.ink }}>{items[active].name}</span>
                </div>

                {/* Indicador de progresso — segmentos */}
                <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                  {items.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)} aria-label={items[i].name} style={{
                      width: i === active ? 28 : 8,
                      height: 4, borderRadius: 2, border: 'none', cursor: 'pointer', padding: 0,
                      background: i === active ? RG.tealDark : 'rgba(255,255,255,0.55)',
                      transition: 'width 320ms cubic-bezier(.2,.8,.2,1), background 320ms',
                    }} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// WHY US — accordion (mantém-se, é forte)
// ────────────────────────────────────────────────────────────────────────────
function WhyUs() {
  const { t } = useLang();
  const points = t('whyus.points');
  const [active, setActive] = React.useState(0);
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <Eyebrow style={{ marginBottom: 12 }}>{t('whyus.eyebrow')}</Eyebrow>
            <Heading level="h2" style={{ maxWidth: '24ch', lineHeight: 1.1 }}>
              {t('whyus.heading')}
            </Heading>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="rg-hero-grid">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {points.map((p, i) => (
                <button key={i} onClick={() => setActive(i)} aria-expanded={active === i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: `1px solid ${RG.line}`, textAlign: 'left',
                }}>
                  <div>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 600, color: active === i ? RG.ink : RG.charcoal, letterSpacing: '-0.01em', transition: 'all 200ms' }}>{p.t}</div>
                    {active === i && (
                      <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.muted, lineHeight: 1.6, marginTop: 8, maxWidth: '36ch', animation: 'rg-fade-up 260ms cubic-bezier(.2,.8,.2,1) both' }}>{p.d}</div>
                    )}
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: active === i ? RG.tealWash : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 16, transition: 'background 200ms' }}>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" style={{ color: active === i ? RG.tealDark : RG.muted, transform: active === i ? 'rotate(90deg)' : 'none', transition: 'transform 220ms, color 200ms' }}>
                      <path d="M6 5 L11 9 L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src="assets/equipa-recepcao.png" alt="Equipa da Clínica Rita Guerreiro na receção" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SERVICES OVERVIEW — mantém grid mas com ajuste para o destaque editorial
// ────────────────────────────────────────────────────────────────────────────
function ServicesOverview() {
  const { lang, t } = useLang();
  const SVC = getServices(lang);
  const cats = [
    { id: 'fisioterapia', num: '01', href: 'fisioterapia.html', img: IMG.fisioterapia, ...SVC.fisioterapia },
    { id: 'saude', num: '02', href: 'servico-nutricao.html', img: IMG.psicologia, ...SVC.saude },
    { id: 'massagens', num: '03', href: 'massagens.html', img: IMG['massagem-relaxamento'], ...SVC.massagens },
    { id: 'holisticas', num: '04', href: 'holisticas.html', img: IMG.reflexologia, ...SVC.holisticas },
    { id: 'estetica', num: '05', href: 'servico-facial.html', img: IMG['pilates-clinico'], ...SVC.estetica },
  ];
  return (
    <Section id="todos-servicos" bg={RG.creamSoft} pad="md">
      <Container>
        <Reveal><Eyebrow>{t('services_overview.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={60}>
          <Heading level="h2" style={{ marginTop: 12, maxWidth: '18ch' }}>{t('services_overview.heading')}</Heading>
        </Reveal>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {cats.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 60}>
              <a href={cat.href} className="rg-service-card" style={{
                display: 'block', textDecoration: 'none', color: RG.ink,
                background: RG.white,
                padding: 0, overflow: 'hidden',
              }}>
                {/* Área de imagem com placeholder gradient */}
                <div style={{ position: 'relative', aspectRatio: '4/3', background: 'linear-gradient(135deg, #e8f2f1 0%, #d0e8e6 50%, #b8dbd8 100%)', overflow: 'hidden' }}>
                  <img src={cat.img} alt={cat.label} loading="lazy" decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                {/* Conteúdo */}
                <div style={{ padding: '18px 22px 22px' }}>
                  <h3 style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 10px 0', color: RG.tealDark, lineHeight: 1.2 }}>{cat.label}</h3>
                  <p style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, lineHeight: 1.55, margin: 0 }}>{cat.intro}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// MEET RITA — nova secção humanizadora
// ────────────────────────────────────────────────────────────────────────────
function MeetRita() {
  const { t } = useLang();
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }} className="rg-hero-grid">
            {/* Foto + card de credenciais */}
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(20,20,18,0.18)' }}>
                <img src="assets/rita-retrato.png" alt="Rita Guerreiro — Fisioterapeuta, Clínica em Loulé" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* Card de credenciais sobreposto */}
              <div className="rg-meet-card" style={{
                position: 'absolute', bottom: -28, right: -20,
                background: RG.white, borderRadius: 14, padding: '18px 22px',
                boxShadow: '0 20px 50px -15px rgba(20,20,18,0.22), 0 4px 12px rgba(20,20,18,0.06)',
                border: `1px solid ${RG.lineSoft}`,
                maxWidth: 260,
              }}>
                <div style={{ fontFamily: F_BODY, fontSize: 10.5, fontWeight: 700, color: RG.tealDark, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {t('meet.card_label')}
                </div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 17, fontWeight: 600, color: RG.ink, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {t('meet.card_name')}
                </div>
                <div style={{ fontFamily: F_BODY, fontSize: 12.5, color: RG.muted, lineHeight: 1.5, marginTop: 8 }}>
                  {t('meet.card_credentials')}
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>{t('meet.eyebrow')}</Eyebrow>
              <Heading level="h2" style={{ maxWidth: '20ch', lineHeight: 1.05 }}>{t('meet.heading')}</Heading>
              <p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.7, marginTop: 24, maxWidth: '46ch' }}>
                {t('meet.p1')}
              </p>
              <p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.7, marginTop: 16, maxWidth: '46ch' }}>
                {t('meet.p2')}
              </p>
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${RG.line}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {t('meet.facts').map((f, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 24, fontWeight: 600, color: RG.tealDark, letterSpacing: '-0.02em', lineHeight: 1 }}>{f.value}</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 12, color: RG.muted, marginTop: 6, lineHeight: 1.4 }}>{f.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <a href="sobre.html" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.ink,
                  textDecoration: 'none', padding: '12px 22px', borderRadius: 999,
                  border: '1.5px solid rgba(20,20,18,0.16)',
                  transition: 'all 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = RG.tealDark; e.currentTarget.style.color = RG.tealDark; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,20,18,0.16)'; e.currentTarget.style.color = RG.ink; }}>
                  {t('meet.cta')}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS — 1 destaque grande + 2 pequenos
// ────────────────────────────────────────────────────────────────────────────
function Testimonials() {
  const { t } = useLang();
  const featured = { q: t('testimonials_v2.featured_q'), who: 'Miguel Moreira', what: t('testimonials_v2.featured_what'), initials: 'MM', color: '#C5E8E5' };
  const others = [
    { q: t('testimonials_v2.t1_q'), who: 'Irina Mendes Martins', what: t('testimonials_v2.t1_what'), initials: 'IM', color: '#A8D8D4' },
    { q: t('testimonials_v2.t2_q'), who: 'Mitchelle Sousa', what: t('testimonials_v2.t2_what'), initials: 'MS', color: '#B8D4D2' },
  ];
  const Stars = ({ size = 13 }) => (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 12 12" fill="#F5A623"><path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/></svg>
      ))}
    </div>
  );
  return (
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 48 }}>
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>{t('testimonials.eyebrow')}</Eyebrow>
              <Heading level="h2" style={{ maxWidth: '22ch' }}>{t('testimonials.heading')}</Heading>
            </div>
            <a href="https://www.google.com/search?q=Clinica+Rita+Guerreiro+Loul%C3%A9" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
              fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.tealDark,
              padding: '10px 0', borderBottom: `1px solid ${RG.tealDark}`,
            }}>
              {t('testimonials_v2.read_more')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }} className="rg-testimonials-grid">
          {/* Destaque grande */}
          <Reveal delay={80}>
            <div style={{ background: RG.white, borderRadius: 20, padding: 'clamp(32px, 4vw, 48px)', border: `1px solid ${RG.line}`, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div aria-hidden="true" style={{
                position: 'absolute', top: 24, right: 36,
                fontFamily: F_DISPLAY, fontSize: 140, lineHeight: 1,
                color: 'rgba(111,181,176,0.10)', fontWeight: 300, userSelect: 'none', pointerEvents: 'none',
              }}>&ldquo;</div>
              <Stars size={15} />
              <blockquote style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(20px, 1.9vw, 26px)', fontWeight: 300, lineHeight: 1.45, color: RG.ink, letterSpacing: '-0.012em', fontStyle: 'italic', margin: 0, position: 'relative', flex: 1 }}>
                &ldquo;{featured.q}&rdquo;
              </blockquote>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${RG.line}`, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: featured.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 700, color: RG.tealDark }}>{featured.initials}</span>
                </div>
                <div>
                  <div style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.ink }}>{featured.who}</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: RG.muted, marginTop: 3 }}>{featured.what}</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coluna direita: 2 testemunhos empilhados */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 24 }}>
            {others.map((tt, i) => (
              <Reveal key={i} delay={140 + i * 80}>
                <div style={{ background: RG.white, borderRadius: 16, padding: '24px 22px', border: `1px solid ${RG.line}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stars />
                  <p style={{ fontFamily: F_DISPLAY, fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: RG.ink, letterSpacing: '-0.005em', fontStyle: 'italic', margin: 0, flex: 1 }}>&ldquo;{tt.q}&rdquo;</p>
                  <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${RG.line}`, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: tt.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 700, color: RG.tealDark }}>{tt.initials}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.ink }}>{tt.who}</div>
                      <div style={{ fontFamily: F_BODY, fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: RG.muted, marginTop: 2 }}>{tt.what}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// HOME CTA — 3 opções claras lado a lado
// ────────────────────────────────────────────────────────────────────────────
function HomeCTA() {
  const { t } = useLang();
  const options = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>,
      title: t('homecta_v2.opt1_title'),
      desc: t('homecta_v2.opt1_desc'),
      cta: t('homecta_v2.opt1_cta'),
      href: 'https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o.',
      external: true,
      featured: true,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>,
      title: t('homecta_v2.opt2_title'),
      desc: t('homecta_v2.opt2_desc'),
      cta: t('homecta_v2.opt2_cta'),
      href: 'tel:+351961899364',
      external: false,
      featured: false,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: t('homecta_v2.opt3_title'),
      desc: t('homecta_v2.opt3_desc'),
      cta: t('homecta_v2.opt3_cta'),
      href: 'https://www.google.com/maps/dir/?api=1&destination=Rua+Padre+António+Vieira+58,+8100-611+Loulé,+Portugal',
      external: true,
      featured: false,
    },
  ];
  return (
    <section style={{ background: 'linear-gradient(135deg, #2F6B68 0%, #1F4846 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'rgba(111,181,176,0.08)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(111,181,176,0.06)', pointerEvents: 'none' }} />
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px', position: 'relative' }}>
            <Eyebrow color="rgba(111,181,176,0.85)" style={{ marginBottom: 16 }}>{t('homecta.eyebrow')}</Eyebrow>
            <Heading level="h2" style={{ color: RG.white, marginBottom: 18 }}>
              {t('homecta.heading')}
            </Heading>
            <p style={{ fontFamily: F_BODY, fontSize: 16, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.7 }}>
              {t('homecta.body')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rg-cta-options" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, position: 'relative' }}>
            {options.map((opt, i) => (
              <a key={i}
                href={opt.href}
                {...(opt.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="rg-cta-option"
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: opt.featured ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.06)',
                  border: opt.featured ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 18, padding: '28px 26px',
                  textDecoration: 'none',
                  boxShadow: opt.featured ? '0 24px 60px -20px rgba(0,0,0,0.4)' : 'none',
                  transition: 'transform 260ms cubic-bezier(.2,.8,.2,1), box-shadow 260ms, background 260ms',
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: opt.featured ? '#6FB5B0' : 'rgba(255,255,255,0.1)',
                  color: opt.featured ? RG.white : 'rgba(255,255,255,0.85)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22,
                  flexShrink: 0,
                }}>{opt.icon}</div>
                <h3 style={{
                  fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em',
                  color: opt.featured ? RG.ink : RG.white,
                  margin: 0, marginBottom: 10, lineHeight: 1.2,
                }}>{opt.title}</h3>
                <p style={{
                  fontFamily: F_BODY, fontSize: 13.5,
                  color: opt.featured ? RG.charcoal : 'rgba(255,255,255,0.65)',
                  lineHeight: 1.6, margin: 0, marginBottom: 22, flex: 1,
                }}>{opt.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: F_BODY, fontSize: 13, fontWeight: 700,
                  color: opt.featured ? '#2F6B68' : RG.white,
                }}>
                  {opt.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rg-cta-arrow"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Linha de info abaixo */}
        <Reveal delay={220}>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {t('homecta_v2.info_hours')}
            </div>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {t('homecta.addr')}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Values() { return null; }

Object.assign(window, { Hero, StatsStrip, ServicesOverview, Values, ServicesCard, WhyUs, MeetRita, Testimonials, HomeCTA });

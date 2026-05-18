// Home — improved with animations, stats strip, enhanced testimonials

function Hero() {
  const { t } = useLang();
  const h1Lines = t('hero.h1');
  return (
    <section style={{ position: 'relative', minHeight: 600, display: 'flex', alignItems: 'center', background: RG.white, overflow: 'hidden', paddingTop: 88 }}>

      {/* Imagem — painel direito, posição absoluta */}
      <div style={{ position: 'absolute', inset: 0, left: '42%', zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1400&q=85"
          alt="Tratamento de fisioterapia na Clínica Rita Guerreiro"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          loading="eager" decoding="async"
        />
      </div>

      {/* Gradiente fade da esquerda para a direita */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, #ffffff 44%, rgba(255,255,255,0.92) 54%, rgba(255,255,255,0.0) 72%)',
      }} />

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '80px 48px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 560 }}>

          {/* Linha decorativa */}
          <Reveal delay={100}>
            <div style={{ width: 40, height: 2, background: '#6FB5B0', marginBottom: 28 }} />
          </Reveal>

          {/* Headline */}
          <Reveal delay={180}>
            <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.025em', margin: 0, color: RG.ink }}>
              {Array.isArray(h1Lines) && h1Lines.map((line, li) => (
                <span key={li} style={{ display: 'block', color: li === 2 ? '#6FB5B0' : undefined }}>
                  {line.split(' ').map((w, i) => (
                    <React.Fragment key={i}><span className="rg-word" style={{ animationDelay: `${(li * 2 + i) * 80 + li * 120}ms` }}>{w}</span>{' '}</React.Fragment>
                  ))}
                </span>
              ))}
            </h1>
          </Reveal>

          {/* Descrição */}
          <Reveal delay={520}>
            <p style={{ fontFamily: F_BODY, fontSize: 15, color: RG.charcoal, lineHeight: 1.72, margin: '22px 0 0', maxWidth: '40ch' }}>
              {t('hero.desc')}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={640}>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: F_BODY, fontSize: 14, fontWeight: 700,
                color: RG.white, background: '#6FB5B0',
                padding: '13px 26px', borderRadius: 999, textDecoration: 'none',
                boxShadow: '0 8px 24px -6px rgba(111,181,176,0.55)',
              }}>
                {t('hero.cta')}
              </a>
              <a href="tel:+351961899364" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: F_BODY, fontSize: 14, fontWeight: 500,
                color: RG.charcoal, background: 'transparent',
                border: `1.5px solid rgba(20,20,18,0.15)`, padding: '13px 22px', borderRadius: 999, textDecoration: 'none',
              }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                961 899 364
              </a>
            </div>
          </Reveal>

          {/* Horário */}
          <Reveal delay={760}>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)', flexShrink: 0 }} />
              <span style={{ fontFamily: F_BODY, fontSize: 12, color: RG.muted }}>{t('hero.horario')}</span>
            </div>
          </Reveal>

          {/* Prova social */}
          <Reveal delay={860}>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#6FB5B0">
                    <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontFamily: F_BODY, fontSize: 12, color: RG.muted }}>{t('hero.social_proof')}</span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const { t } = useLang();
  const stats = t('stats');
  return (
    <section style={{ background: RG.creamSoft, borderTop: `1px solid ${RG.line}`, borderBottom: `1px solid ${RG.line}`, padding: '40px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="rg-stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="rg-stat" style={{ textAlign: 'center', padding: '0 24px', borderLeft: i > 0 ? `1px solid ${RG.line}` : 'none' }}>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(36px, 3.5vw, 52px)', fontWeight: 300, letterSpacing: '-0.02em', color: RG.tealDark, lineHeight: 1 }}>
                {s.value}<span style={{ fontSize: '0.6em' }}>{s.suffix}</span>
              </div>
              <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 600, color: RG.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServicesCard() {
  const { t } = useLang();
  const featured = [
    { name: 'Fisioterapia', href: 'servico-fisioterapia.html', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80' },
    { name: 'Pilates Clínico', href: 'servico-pilates-clinico.html', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
    { name: 'Psicologia', href: 'servico-psicologia.html', img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80' },
    { name: 'Massagem Assinatura RG', href: 'servico-massagem-assinatura-rg.html', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80' },
  ];
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <Reveal>
          <div style={{ background: RG.creamSoft, borderRadius: 20, padding: 'clamp(28px, 4vw, 52px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }} className="rg-hero-grid">
            <div>
              <Eyebrow style={{ marginBottom: 16 }}>{t('services_card.eyebrow')}</Eyebrow>
              <Heading level="h2" style={{ maxWidth: '22ch', lineHeight: 1.1 }}>{t('services_card.heading')}</Heading>
              <Body size={15} style={{ marginTop: 16, color: RG.charcoal, maxWidth: '38ch' }}>
                {t('services_card.body')}
              </Body>
              <div style={{ marginTop: 24 }}>
                <a href="#todos-servicos" className="rg-btn-primary" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontFamily: F_BODY, fontSize: 14, fontWeight: 600,
                  color: RG.white, background: RG.tealDark,
                  padding: '11px 20px', borderRadius: 999, textDecoration: 'none',
                }}>
                  {t('services_card.cta')}
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', fontSize: 13 }}>→</span>
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {featured.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  <a href={s.href} className="rg-icon-card" style={{
                    display: 'block', textDecoration: 'none', borderRadius: 14,
                    overflow: 'hidden', border: `1px solid ${RG.lineSoft}`,
                    background: RG.white, position: 'relative',
                  }}>
                    <div style={{ aspectRatio: '3/2', overflow: 'hidden' }}>
                      <img src={s.img} alt={s.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 400ms cubic-bezier(.16,1,.3,1)' }} className="rg-card-img" />
                    </div>
                    <div style={{ padding: '10px 14px 12px' }}>
                      <span style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.ink }}>{s.name}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

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
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 300, color: active === i ? RG.ink : RG.charcoal, letterSpacing: '-0.01em', transition: 'all 200ms' }}>{p.t}</div>
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
              <img src="assets/sala-tratamento.png" alt="Sala de tratamento" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function ServicesOverview() {
  const { t } = useLang();
  const cats = [
    { id: 'fisioterapia', num: '01', href: 'fisioterapia.html', img: IMG.fisioterapia, ...SERVICES.fisioterapia },
    { id: 'saude', num: '02', href: 'servico-nutricao.html', img: IMG.psicologia, ...SERVICES.saude },
    { id: 'massagens', num: '03', href: 'massagens.html', img: IMG['massagem-relaxamento'], ...SERVICES.massagens },
    { id: 'holisticas', num: '04', href: 'holisticas.html', img: IMG.reflexologia, ...SERVICES.holisticas },
    { id: 'estetica', num: '05', href: 'servico-facial.html', img: IMG['pilates-clinico'], ...SERVICES.estetica },
  ];
  return (
    <Section id="todos-servicos" bg={RG.creamSoft} pad="md">
      <Container>
        <Reveal><Eyebrow>{t('services_overview.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={60}>
          <Heading level="h2" style={{ marginTop: 12, maxWidth: '18ch' }}>{t('services_overview.heading')}</Heading>
        </Reveal>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {cats.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 60}>
              <a href={cat.href} className="rg-service-card" style={{ display: 'block', textDecoration: 'none', color: RG.ink }}>
                <div style={{ aspectRatio: '4/3', marginBottom: 16, borderRadius: 12, overflow: 'hidden' }}>
                  <img src={cat.img} alt={cat.label} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontFamily: F_MONO, fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', color: RG.muted }}>{cat.num}</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, flex: 1 }}>
                    <h3 style={{ fontFamily: F_DISPLAY, fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em', margin: 0, color: RG.ink }}>{cat.label}</h3>
                    <svg className="rg-service-arrow" width="14" height="14" viewBox="0 0 16 16" style={{ transition: 'transform 240ms', flexShrink: 0, color: RG.tealDark }}><path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <p style={{ fontFamily: F_BODY, fontSize: 13, color: RG.muted, lineHeight: 1.5, margin: 0 }}>{cat.intro}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Testimonials() {
  const { t } = useLang();
  const list = [
    { q: 'A minha fisioterapeuta (Rita Guerreiro) é uma peça fundamental na minha vida. Procuro-a todas as semanas para cuidar da minha musculatura e aliviar dores.', who: 'Irina Mendes Martins', what: 'Fisioterapia', color: '#A8D8D4', initials: 'IM' },
    { q: 'Durante anos e muitas dores crónicas de costas, a abordagem que a Rita Guerreiro fez ao problema foi sem dúvida como ter um corpo novo.', who: 'Miguel Moreira', what: 'Fisioterapia', color: '#C5E8E5', initials: 'MM' },
    { q: 'Aulas de Pilates com a Rita Guerreiro são excelentes. A Rita tem uma componente humana aliada às terapias fundamental. Compreende os problemas e necessidades dos utentes.', who: 'Mitchelle Sousa', what: 'Pilates Clínico', color: '#B8D4D2', initials: 'MS' },
  ];
  const Stars = () => (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill={RG.tealDark}><path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/></svg>
      ))}
    </div>
  );
  return (
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <Eyebrow style={{ marginBottom: 12 }}>{t('testimonials.eyebrow')}</Eyebrow>
            <Heading level="h2">{t('testimonials.heading')}</Heading>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="rg-values-grid">
          {list.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rg-testimonial-card" style={{ background: RG.white, borderRadius: 16, padding: '28px 24px', border: `1px solid ${RG.line}` }}>
                <Stars />
                <div style={{ fontFamily: F_DISPLAY, fontSize: 19, fontWeight: 300, lineHeight: 1.45, color: RG.ink, letterSpacing: '-0.01em', fontStyle: 'italic' }}>&ldquo;{t.q}&rdquo;</div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${RG.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: RG.ink }}>{t.who}</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: RG.muted, marginTop: 2 }}>{t.what}</div>
                  </div>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 700, color: RG.tealDark }}>{t.initials}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HomeCTA() {
  const { t } = useLang();
  return (
    <section style={{ background: 'linear-gradient(135deg, #2F6B68 0%, #1F4846 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orb */}
      <div style={{ position: 'absolute', top: -120, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'rgba(111,181,176,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(111,181,176,0.06)', pointerEvents: 'none' }} />
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <Eyebrow color="rgba(111,181,176,0.85)" style={{ marginBottom: 16 }}>{t('homecta.eyebrow')}</Eyebrow>
            <Heading level="h2" style={{ color: RG.white, marginBottom: 20 }}>
              {t('homecta.heading')}
            </Heading>
            <p style={{ fontFamily: F_BODY, fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 10, lineHeight: 1.7 }}>
              {t('homecta.body')}
            </p>
            <p style={{ fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 40, lineHeight: 1.6, letterSpacing: '0.01em' }}>
              {t('homecta.addr')}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="rg-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 14, fontWeight: 700, color: RG.tealDeep, background: RG.white, padding: '15px 30px', borderRadius: 999, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
                {t('homecta.wa')}
              </a>
              <a href="tel:+351961899364" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.white, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '15px 30px', borderRadius: 999, textDecoration: 'none', backdropFilter: 'blur(8px)' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                961 899 364
              </a>
              <a href="https://maps.google.com/?q=Rua+Padre+António+Vieira+58+Loulé" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: F_BODY, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '15px 16px', transition: 'color 180ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {t('homecta.como_chegar')}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Values() { return null; }

Object.assign(window, { Hero, StatsStrip, ServicesOverview, Values, ServicesCard, WhyUs, Testimonials, HomeCTA });

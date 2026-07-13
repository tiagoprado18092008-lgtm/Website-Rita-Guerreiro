// Sobre — clean white

function SobreHero() {
  const { t } = useLang();
  const stats = t('sobre.stats') || [];
  return (
    <section style={{ paddingTop: 140, paddingBottom: 60, background: RG.white }}>
      <Container>
        <Reveal><Eyebrow>{t('sobre.eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(44px, 7vw, 104px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '24px 0 0', color: RG.ink, maxWidth: '18ch' }}>
            {t('sobre.heading')}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <Body size={19} style={{ marginTop: 28, maxWidth: '58ch' }}>
            {t('sobre.sub')}
          </Body>
        </Reveal>
        <Reveal delay={220}>
          <div className="rg-sobre-herowrap" style={{ marginTop: 56, position: 'relative' }}>
            <Photo aspect="16/10" label="Equipa da Clínica Rita Guerreiro" src="assets/fotos/equipa-home.jpg" style={{ borderRadius: 12 }} />
            {stats.length > 0 && (
              <div className="rg-sobre-statcard" style={{ position: 'absolute', left: 'clamp(16px, 4vw, 48px)', bottom: -36, background: RG.white, borderRadius: 14, boxShadow: '0 28px 60px -18px rgba(20,20,18,0.28), 0 4px 14px rgba(20,20,18,0.06)', border: `1px solid ${RG.lineSoft}`, display: 'flex', gap: 0, overflow: 'hidden' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ padding: '22px 30px', borderLeft: i > 0 ? `1px solid ${RG.lineSoft}` : 'none' }}>
                    <div style={{ fontFamily: F_DISPLAY, fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: RG.tealDark, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', color: RG.muted, marginTop: 6 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Mission() {
  const { t } = useLang();
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start', borderTop: `1px solid ${RG.line}`, paddingTop: 64 }} className="rg-hero-grid">
          <div>
            <Reveal><Eyebrow>{t('sobre.mission_eyebrow')}</Eyebrow></Reveal>
            <Reveal delay={100}>
              <div style={{ marginTop: 32 }}>
                <Photo aspect="4/5" label="Sala de tratamento" src="assets/fotos/sala-tratamento.jpg" style={{ borderRadius: 12 }} />
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Heading level="h2" style={{ maxWidth: '20ch' }}>{t('sobre.mission_heading')}</Heading>
            </Reveal>
            <Reveal delay={80}>
              <Body size={17} style={{ marginTop: 24, color: RG.charcoal }}>
                {t('sobre.mission_body')}
              </Body>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ marginTop: 28 }}>
                <Button href="/#servicos" variant="primary" size="md">{t('sobre.mission_cta')}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Pillars() {
  const { t } = useLang();
  const items = t('sobre.pillars');
  return (
    <Section bg={RG.white} pad="md">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="rg-values-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="rg-pillar" style={{ borderTop: `2px solid ${RG.line}`, paddingTop: 22, height: '100%' }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: RG.tealDeep, marginBottom: 16 }} />
                <div style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 8 }}>{it.t}</div>
                <div style={{ fontFamily: F_BODY, fontSize: 14, lineHeight: 1.55, color: RG.charcoal }}>{it.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Story() {
  const { t } = useLang();
  return (
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }} className="rg-hero-grid">
          <Reveal>
            <Photo aspect="4/5" label="Rita Guerreiro" src="assets/fotos/rita-rececao.jpg" style={{ borderRadius: 12 }} />
          </Reveal>
          <div>
            <Reveal><Eyebrow>{t('sobre.story_eyebrow')}</Eyebrow></Reveal>
            <Reveal delay={80}><Heading level="h2" style={{ marginTop: 16 }}>{t('sobre.story_heading')}</Heading></Reveal>
            <Reveal delay={140}>
              <Body size={17} style={{ marginTop: 22 }}>{t('sobre.story_p1')}</Body>
              <Body size={17} style={{ marginTop: 16 }}>{t('sobre.story_p2')}</Body>
            </Reveal>
            <Reveal delay={200}>
              <blockquote style={{ margin: '32px 0 0', padding: '4px 0 4px 24px', borderLeft: `3px solid ${RG.teal}` }}>
                <p style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(19px, 2vw, 24px)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.01em', lineHeight: 1.35, color: RG.tealInk, margin: 0 }}>{t('sobre.story_quote')}</p>
                <cite style={{ display: 'block', fontFamily: F_BODY, fontSize: 12, fontStyle: 'normal', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: RG.muted, marginTop: 10 }}>{t('sobre.story_quote_cite')}</cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Team() {
  const { t } = useLang();
  const members = t('sobre.team_members');
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <Reveal><Eyebrow>{t('sobre.team_eyebrow')}</Eyebrow></Reveal>
        <Reveal delay={60}><Heading level="h2" style={{ marginTop: 16 }}>{t('sobre.team_heading')}</Heading></Reveal>
        <Reveal delay={100}>
          <p style={{ fontFamily: F_BODY, fontSize: 16, color: RG.charcoal, lineHeight: 1.65, marginTop: 16, maxWidth: '58ch' }}>
            {t('sobre.team_body')}
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 22, marginTop: 56 }} className="rg-team-grid">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 90} y={36}>
              <div className="rg-team-card" style={{ background: RG.white, borderRadius: 18, border: `1px solid ${RG.lineSoft}`, boxShadow: '0 12px 32px -14px rgba(20,20,18,0.16)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="rg-team-photo" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: RG.creamSoft }}>
                  <img src={m.src} alt={m.name} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '20px 20px 22px', flex: 1 }}>
                  <div style={{ fontFamily: F_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 4 }}>{m.name}</div>
                  <div className="rg-team-role" style={{ fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 12 }}>{m.role}</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.6 }}>{m.bio}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{ marginTop: 48, padding: '28px 32px', background: RG.tealWash, borderRadius: 14, border: `1px solid rgba(111,181,176,0.2)`, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 18, fontWeight: 700, color: RG.tealDark }}>{t('sobre.team_join_heading')}</div>
              <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, marginTop: 6 }}>{t('sobre.team_join_body')}</div>
            </div>
            <a href="mailto:fisioritaguerreiro@gmail.com" style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.tealDark, textDecoration: 'none', whiteSpace: 'nowrap', padding: '10px 20px', border: `1px solid ${RG.tealDark}`, borderRadius: 999 }}>{t('sobre.team_join_cta')}</a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function Espaco() {
  const { t } = useLang();
  const photos = t('sobre.espaco_photos');
  return (
    <Section bg={RG.white} pad="lg">
      <Container>
        <div style={{ borderTop: `1px solid ${RG.line}`, paddingTop: 64 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start', marginBottom: 56 }} className="rg-hero-grid">
            <Reveal><Eyebrow>{t('sobre.espaco_eyebrow')}</Eyebrow></Reveal>
            <div>
              <Reveal><Heading level="h2" style={{ maxWidth: '20ch' }}>{t('sobre.espaco_heading')}</Heading></Reveal>
              <Reveal delay={80}>
                <Body size={17} style={{ marginTop: 24, color: RG.charcoal }}>{t('sobre.espaco_body')}</Body>
              </Reveal>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="rg-espaco-grid" style={{ columnCount: 3, columnGap: 16 }}>
              {photos.map((p, i) => (
                <div key={i} className="rg-espaco-item" style={{ position: 'relative', breakInside: 'avoid', marginBottom: 16, borderRadius: 12, overflow: 'hidden', background: RG.cream }}>
                  <img src={p.src} alt={p.label} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <span className="rg-espaco-label" style={{ position: 'absolute', left: 16, bottom: 14, zIndex: 1, fontFamily: F_BODY, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: RG.white }}>{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { SobreHero, Mission, Pillars, Story, Team, Espaco });

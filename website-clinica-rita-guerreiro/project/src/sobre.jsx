// Sobre — clean white

function SobreHero() {
  const { t } = useLang();
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
          <div style={{ marginTop: 56 }}><Photo aspect="16/10" label="Equipa da Clínica Rita Guerreiro" src="assets/foto-equipa.png" style={{ borderRadius: 12 }} /></div>
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
          <Reveal><Eyebrow>{t('sobre.mission_eyebrow')}</Eyebrow></Reveal>
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
        <div style={{ borderTop: `1px solid ${RG.line}`, paddingTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="rg-values-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 50}>
              <div style={{ fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', color: RG.muted, marginBottom: 14 }}>0{i + 1}</div>
              <div style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 8 }}>{it.t}</div>
              <div style={{ fontFamily: F_BODY, fontSize: 14, lineHeight: 1.55, color: RG.charcoal }}>{it.d}</div>
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
            <Photo aspect="4/5" label="Rita Guerreiro" src="assets/rita-retrato.png" style={{ borderRadius: 12 }} />
          </Reveal>
          <div>
            <Reveal><Eyebrow>{t('sobre.story_eyebrow')}</Eyebrow></Reveal>
            <Reveal delay={80}><Heading level="h2" style={{ marginTop: 16 }}>{t('sobre.story_heading')}</Heading></Reveal>
            <Reveal delay={140}>
              <Body size={17} style={{ marginTop: 22 }}>{t('sobre.story_p1')}</Body>
              <Body size={17} style={{ marginTop: 16 }}>{t('sobre.story_p2')}</Body>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 48 }} className="rg-team-grid">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{ background: RG.white, borderRadius: 16, padding: 16, border: `1px solid ${RG.lineSoft}`, boxShadow: '0 20px 50px -15px rgba(20,20,18,0.22), 0 4px 12px rgba(20,20,18,0.06)', height: '100%' }}>
                <Photo aspect="4/5" tone="sand" label={m.name} src={m.src} style={{ borderRadius: 12, marginBottom: 18 }} />
                <div style={{ padding: '0 6px 8px' }}>
                  <div style={{ fontFamily: F_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 4 }}>{m.name}</div>
                  <div style={{ fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 12 }}>{m.role}</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.6 }}>{m.bio}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{ marginTop: 40, padding: '28px 32px', background: RG.tealWash, borderRadius: 14, border: `1px solid rgba(111,181,176,0.2)`, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
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
                <div key={i} style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 12, overflow: 'hidden', background: RG.cream }}>
                  <img src={p.src} alt={p.label} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />
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

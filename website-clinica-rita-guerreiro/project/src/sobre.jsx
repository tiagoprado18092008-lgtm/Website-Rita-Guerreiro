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
          <div style={{ marginTop: 56 }}><Photo aspect="16/10" label="Equipa à recepção" src="assets/equipa-recepcao.png" style={{ borderRadius: 12 }} /></div>
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
                <Button href="index.html#servicos" variant="primary" size="md">{t('sobre.mission_cta')}</Button>
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

const TEAM_ICONS = [
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="10" r="4" stroke="#2F6B68" strokeWidth="2"/><path d="M14 18 Q14 30 20 32 Q26 30 26 18" stroke="#2F6B68" strokeWidth="2" strokeLinecap="round"/><path d="M12 22 L8 28 M28 22 L32 28" stroke="#2F6B68" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none"><path d="M20 6 C12 6 8 12 8 18 C8 26 14 34 20 34 C26 34 32 26 32 18 C32 12 28 6 20 6Z" stroke="#2F6B68" strokeWidth="2"/><path d="M14 20 L26 20 M20 14 L20 26" stroke="#2F6B68" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none"><path d="M20 8 C14 8 10 12 10 18 C10 24 14 30 20 32 C26 30 30 24 30 18 C30 12 26 8 20 8Z" stroke="#2F6B68" strokeWidth="2"/><path d="M20 14 L20 26 M15 20 L25 20" stroke="#2F6B68" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none"><path d="M20 10 C13 10 8 14 8 20 C8 26 13 30 20 30 C22 30 24 29.5 26 28 L32 31 L30 25 C31.2 23.5 32 21.8 32 20 C32 14 27 10 20 10Z" stroke="#2F6B68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 20 L18 20 M22 20 L26 20" stroke="#2F6B68" strokeWidth="1.8" strokeLinecap="round"/></svg>,
];

function Team() {
  const { t } = useLang();
  const specialties = t('sobre.team_specialties');
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 48 }} className="rg-values-grid">
          {specialties.map((m, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{ background: RG.creamSoft, borderRadius: 16, padding: '32px 28px', border: `1px solid ${RG.line}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#E8F5F4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{TEAM_ICONS[i]}</div>
                <div style={{ fontFamily: F_DISPLAY, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 10 }}>{m.role}</div>
                <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.65 }}>{m.bio}</div>
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
            <a href="mailto:geral@ritaguerreiro.pt" style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: RG.tealDark, textDecoration: 'none', whiteSpace: 'nowrap', padding: '10px 20px', border: `1px solid ${RG.tealDark}`, borderRadius: 999 }}>{t('sobre.team_join_cta')}</a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

Object.assign(window, { SobreHero, Mission, Pillars, Story, Team });

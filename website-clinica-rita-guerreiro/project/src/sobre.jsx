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

// Secção da fundadora — biografia na primeira pessoa, logo no topo do /sobre.
// Reutiliza sobre.team_members[0] (Rita) para não duplicar os textos.
function FounderBio() {
  const { t } = useLang();
  const m = (t('sobre.team_members') || [])[0];
  if (!m) return null;
  return (
    <Section bg={RG.creamSoft} pad="lg">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60 }} className="rg-hero-grid rg-founder-grid">
          <Reveal style={{ height: '100%' }}>
            <div className="rg-founder-photo" style={{ position: 'sticky', top: 110 }}>
              <Photo aspect="4/5" label={m.name} src={m.src} style={{ borderRadius: 12 }} />
              <div style={{ fontFamily: F_MONO, fontSize: 11.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: RG.tealDark, lineHeight: 1.7, marginTop: 16, maxWidth: '40ch' }}>
                {m.role_long || m.role}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{t('sobre.founder_eyebrow')}</Eyebrow></Reveal>
            <Reveal delay={60}><Heading level="h2" style={{ marginTop: 16 }}>{m.name}</Heading></Reveal>
            <Reveal delay={120}>
              {(m.bio_long || [m.bio]).map((p, i) => (
                <Body key={i} size={17} style={{ marginTop: i === 0 ? 26 : 16 }}>{p}</Body>
              ))}
              {m.signature && (
                <p style={{ fontFamily: F_DISPLAY, fontSize: 19, fontStyle: 'italic', color: RG.tealDark, lineHeight: 1.5, margin: '26px 0 0', whiteSpace: 'pre-line' }}>{m.signature}</p>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
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
                <Photo aspect="4/5" label="Rita Guerreiro com um cliente na receção da clínica" src="assets/fotos/rececao-cliente.jpg" style={{ borderRadius: 12 }} />
                <Body size={14} style={{ marginTop: 14, color: RG.muted, fontStyle: 'italic' }}>
                  {t('sobre.mission_photo_caption')}
                </Body>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Heading level="h2" style={{ maxWidth: '20ch' }}>{t('sobre.mission_heading')}</Heading>
            </Reveal>
            <Reveal delay={80}>
              <Body size={17} style={{ marginTop: 24, color: RG.charcoal, maxWidth: '46ch' }}>
                {t('sobre.mission_body')}
              </Body>
            </Reveal>
            <Reveal delay={110}>
              <p style={{ margin: '28px 0 0', paddingLeft: 18, borderLeft: `3px solid ${RG.teal}`, color: RG.tealDark, fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, maxWidth: '32ch' }}>
                {t('sobre.mission_motto')}
              </p>
            </Reveal>
            <Reveal delay={160}>
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
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TeamModal({ members, index, onClose, onStep }) {
  const { t } = useLang();
  const m = members[index];
  const openable = members.map((x, i) => ((x.bio_long || []).length > 1 ? i : -1)).filter((i) => i >= 0);
  const multiple = openable.length > 1;

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, []);

  const wa = `https://wa.me/351961899364?text=${encodeURIComponent('Olá, gostaria de marcar uma consulta com ' + m.name + '.')}`;

  return (
    <div className="rg-team-modal-overlay" onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(12, 26, 25, 0.55)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(12px, 4vw, 48px)' }}>
      <div className="rg-team-modal" onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', background: RG.white, borderRadius: 22, overflow: 'hidden', width: '100%', maxWidth: 880, maxHeight: '90vh', display: 'flex', boxShadow: '0 40px 120px -30px rgba(12, 26, 25, 0.6)' }}>
        <button aria-label="Fechar" onClick={onClose}
          style={{ position: 'absolute', top: 14, right: 14, zIndex: 3, width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.85)', color: RG.ink, fontSize: 18, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(20,20,18,0.18)' }}>✕</button>

        <div className="rg-team-modal-photo" style={{ position: 'relative', flex: '0 0 42%', minHeight: 320, background: RG.creamSoft }}>
          <img src={m.src} alt={m.name} decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        <div className="rg-team-modal-body" style={{ flex: 1, minWidth: 0, padding: 'clamp(26px, 4vw, 44px)', overflowY: 'auto' }}>
          <div style={{ fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: RG.tealDark }}>{m.role_long || m.role}</div>
          <div style={{ width: 40, height: 2, background: RG.teal, margin: '12px 0 16px' }} />
          <div style={{ fontFamily: F_DISPLAY, fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, letterSpacing: '-0.02em', color: RG.ink, lineHeight: 1.05 }}>{m.name}</div>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {(m.bio_long || [m.bio]).map((p, i) => (
              <p key={i} style={{ fontFamily: F_BODY, fontSize: 15.5, color: RG.charcoal, lineHeight: 1.7, margin: 0 }}>{p}</p>
            ))}
          </div>

          {m.signature && (
            <p style={{ fontFamily: F_DISPLAY, fontSize: 17, fontStyle: 'italic', color: RG.tealDark, lineHeight: 1.5, margin: '18px 0 0', whiteSpace: 'pre-line' }}>{m.signature}</p>
          )}

          {m.services && m.services.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <div style={{ fontFamily: F_MONO, fontSize: 10.5, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: RG.muted, marginBottom: 12 }}>{t('sobre.team_modal_services')}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {m.services.map((s, i) => (
                  <a key={i} href={s.href} className="rg-team-chip"
                    style={{ fontFamily: F_BODY, fontSize: 13.5, fontWeight: 500, color: RG.tealDark, textDecoration: 'none', padding: '7px 15px', border: `1px solid ${RG.teal}`, borderRadius: 999, whiteSpace: 'nowrap' }}>{s.label}</a>
                ))}
              </div>
            </div>
          )}

          <a href={wa} target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 30, fontFamily: F_BODY, fontSize: 14.5, fontWeight: 600, color: RG.white, background: RG.tealDark, textDecoration: 'none', padding: '13px 24px', borderRadius: 999 }}>{t('sobre.team_modal_cta')}</a>
        </div>

        {multiple && (
          <React.Fragment>
            <button aria-label="Anterior" onClick={() => onStep(-1)} className="rg-team-modal-nav"
              style={{ position: 'absolute', left: 12, bottom: 12, zIndex: 3, width: 38, height: 38, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.85)', color: RG.ink, fontSize: 20, lineHeight: 1, boxShadow: '0 2px 10px rgba(20,20,18,0.18)' }}>‹</button>
            <button aria-label="Seguinte" onClick={() => onStep(1)} className="rg-team-modal-nav"
              style={{ position: 'absolute', left: 58, bottom: 12, zIndex: 3, width: 38, height: 38, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.85)', color: RG.ink, fontSize: 20, lineHeight: 1, boxShadow: '0 2px 10px rgba(20,20,18,0.18)' }}>›</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Team() {
  const { t } = useLang();
  const members = t('sobre.team_members');
  const hasProfile = (m) => (m.bio_long || []).length > 1;
  const [open, setOpen] = React.useState(() => {
    const p = parseInt(new URLSearchParams(window.location.search).get('prof'), 10);
    return Number.isInteger(p) && members[p] && hasProfile(members[p]) ? p : null;
  }); // índice do profissional aberto, ou null

  const step = (d) => setOpen((i) => {
    const openable = members.map((m, idx) => (hasProfile(m) ? idx : -1)).filter((idx) => idx >= 0);
    const pos = openable.indexOf(i);
    return openable[(pos + d + openable.length) % openable.length];
  });

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
          {members.map((m, i) => {
            const clickable = hasProfile(m);
            return (
            <Reveal key={i} delay={i * 90} y={36}>
              <div
                className={`rg-team-card${clickable ? ' rg-team-card-clickable' : ''}`}
                {...(clickable ? {
                  role: 'button', tabIndex: 0,
                  'aria-label': `${m.name} — ${t('sobre.team_card_cta')}`,
                  onClick: () => setOpen(i),
                  onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(i); } },
                } : {})}
                style={{ background: RG.white, borderRadius: 18, border: `1px solid ${RG.lineSoft}`, boxShadow: '0 12px 32px -14px rgba(20,20,18,0.16)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', cursor: clickable ? 'pointer' : 'default' }}>
                <div className="rg-team-photo" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: RG.creamSoft }}>
                  <img src={m.src} alt={m.name} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '20px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: F_DISPLAY, fontSize: 19, fontWeight: 700, letterSpacing: '-0.015em', color: RG.ink, marginBottom: 4 }}>{m.name}</div>
                  <div className="rg-team-role" style={{ fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: RG.tealDark, marginBottom: 12 }}>{m.role}</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 14, color: RG.charcoal, lineHeight: 1.6 }}>{m.bio}</div>
                  {clickable && (
                    <div className="rg-team-card-cta" style={{ marginTop: 14, fontFamily: F_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: RG.tealDark, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {t('sobre.team_card_cta')} <span className="rg-team-card-arrow" aria-hidden="true">→</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
        {open !== null && (
          <TeamModal members={members} index={open} onClose={() => setOpen(null)} onStep={step} />
        )}
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
  const [lightbox, setLightbox] = React.useState(null); // índice da foto aberta, ou null

  const close = () => setLightbox(null);
  const step = (d) => setLightbox((i) => (i + d + photos.length) % photos.length);

  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox === null]);

  const navBtn = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 2,
    width: 44, height: 44, borderRadius: 999, border: 'none', cursor: 'pointer',
    background: 'rgba(255, 255, 255, 0.15)', color: '#fff', fontSize: 22, lineHeight: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };

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
            <div className="rg-espaco-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gridAutoRows: 'clamp(180px, 24vw, 300px)', gap: 16 }}>
              {photos.map((p, i) => {
                const tall = p.src.includes('madeira');
                return (
                  <div
                    key={i}
                    className={`rg-espaco-item${tall ? ' rg-espaco-tall' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-label={p.label}
                    onClick={() => setLightbox(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(i); } }}
                    style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: RG.cream, cursor: 'zoom-in', ...(tall ? { gridColumn: '3', gridRow: '1 / span 2' } : null) }}
                  >
                    <img src={p.src} alt={p.label} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...(tall ? null : { filter: 'brightness(1.22) saturate(1.05)' }) }} />
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
      {lightbox !== null && (
        <div
          onClick={close}
          style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(10, 20, 20, 0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(12px, 4vw, 48px)' }}
        >
          <button aria-label="Fechar" onClick={close} style={{ position: 'absolute', top: 18, right: 18, zIndex: 2, width: 44, height: 44, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.15)', color: '#fff', fontSize: 20, lineHeight: 1 }}>✕</button>
          <button aria-label="Anterior" onClick={(e) => { e.stopPropagation(); step(-1); }} style={{ ...navBtn, left: 14 }}>‹</button>
          <button aria-label="Seguinte" onClick={(e) => { e.stopPropagation(); step(1); }} style={{ ...navBtn, right: 14 }}>›</button>
          <figure onClick={(e) => e.stopPropagation()} style={{ margin: 0, maxWidth: '92vw', maxHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <img src={photos[lightbox].src} alt={photos[lightbox].label} style={{ maxWidth: '100%', maxHeight: 'calc(88vh - 40px)', objectFit: 'contain', borderRadius: 10, boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)', ...(photos[lightbox].src.includes('madeira') ? null : { filter: 'brightness(1.22) saturate(1.05)' }) }} />
            <figcaption style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', color: '#fff' }}>{photos[lightbox].label}</figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}

Object.assign(window, { SobreHero, FounderBio, Mission, Pillars, Story, Team, Espaco });

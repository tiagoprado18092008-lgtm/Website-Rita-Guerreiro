// Shared primitives — centropro-inspired: sans bold, dense, clinical

function Container({ children, style = {}, maxWidth = 1280 }) {
  return (
    <div style={{ maxWidth, margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)', ...style }}>{children}</div>
  );
}

function Reveal({ children, delay = 0, y = 20, as: Tag = 'div', style = {} }) {
  const ref = React.useRef(null);
  // Default to visible — only hide if element is below viewport on mount
  const [seen, setSeen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top > vh - 20) {
        setSeen(false);
        setHidden(true);
        const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { setSeen(true); io.unobserve(e.target); } }), { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
        io.observe(el);
      }
    });
  }, []);
  return <Tag ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? 'translateY(0)' : `translateY(${y}px)`, transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`, ...style }}>{children}</Tag>;
}

function Eyebrow({ children, color = RG.tealDark, style = {} }) {
  return <div style={{ fontFamily: F_BODY, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color, ...style }}>{children}</div>;
}

function Heading({ children, level = 'h2', style = {} }) {
  const sizes = { h1: 'clamp(52px, 6vw, 80px)', h2: 'clamp(36px, 4vw, 56px)', h3: 'clamp(22px, 2.5vw, 28px)' };
  const Tag = level;
  return <Tag style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: sizes[level], lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, textWrap: 'balance', color: RG.ink, ...style }}>{children}</Tag>;
}

function Body({ children, style = {}, size = 16 }) {
  return <p style={{ fontFamily: F_BODY, fontSize: size, fontWeight: 400, lineHeight: 1.6, color: RG.charcoal, margin: 0, textWrap: 'pretty', maxWidth: '62ch', ...style }}>{children}</p>;
}

function Button({ children, href = '#', variant = 'primary', size = 'md', target, icon = true, onClick }) {
  const [hv, setHv] = React.useState(false);
  const base = { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: F_DISPLAY, fontWeight: 400, textDecoration: 'none', borderRadius: 999, transition: 'all 220ms', cursor: 'pointer', border: '1px solid transparent', whiteSpace: 'nowrap' };
  const sz = { sm: { padding: '9px 16px', fontSize: 13 }, md: { padding: '14px 22px', fontSize: 14 }, lg: { padding: '18px 28px', fontSize: 15 } }[size];
  const vars = {
    primary: { background: RG.ink, color: RG.cream },
    teal: { background: RG.tealDeep, color: RG.white },
    outline: { background: 'transparent', color: RG.ink, borderColor: RG.ink },
    outlineLight: { background: 'transparent', color: RG.cream, borderColor: 'rgba(246,241,233,0.5)' },
    white: { background: RG.white, color: RG.ink, borderColor: RG.line },
  };
  const hover = hv ? (variant === 'white' ? { background: RG.cream } : { transform: 'translateY(-1px)', boxShadow: '0 10px 24px rgba(0,0,0,0.15)' }) : {};
  return (
    <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} onClick={onClick} onMouseEnter={() => setHv(true)} onMouseLeave={() => setHv(false)} className="rg-btn-primary" style={{ ...base, ...sz, ...vars[variant], ...hover }}>
      {children}
      {icon && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: hv ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 240ms cubic-bezier(.2,.8,.2,1)' }}><path d="M2 6 L10 6 M7 3 L10 6 L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
    </a>
  );
}

// Navigation — premium luxury header
function Nav({ current = 'home' }) {
  const [openDrop, setOpenDrop] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  const [mobileServicos, setMobileServicos] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { lang, changeLang } = React.useContext(LangContext);
  const { t } = useLang();
  const [langOpen, setLangOpen] = React.useState(false);
  const [activeCol, setActiveCol] = React.useState(null);
  const dropTimerRef = React.useRef(null);

  const openServicos = () => { if (dropTimerRef.current) clearTimeout(dropTimerRef.current); setOpenDrop('servicos'); };
  const closeServicos = () => { dropTimerRef.current = setTimeout(() => { setOpenDrop(null); setActiveCol(null); }, 120); };

  const langs = [
    { code: 'PT', flag: '🇵🇹' },
    { code: 'EN', flag: '🇬🇧' },
    { code: 'FR', flag: '🇫🇷' },
  ];

  const [navHidden, setNavHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const onS = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastScrollY.current && y > 120) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  const megaIcons = {
    'fisioterapia': (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.5 5.5a2.121 2.121 0 0 1 0 3L7 20a2.121 2.121 0 0 1-3-3L15.5 5.5a2.121 2.121 0 0 1 3 0z"/>
        <path d="M5.5 5.5a2 2 0 0 0 0 2.828l.707.707"/><path d="M18.5 18.5a2 2 0 0 0 0-2.828l-.707-.707"/>
      </svg>
    ),
    'saude': (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    'massagens': (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
    'holisticas': (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    'estetica': (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 3.5-5 13-5 13S7 10.5 7 7a5 5 0 0 1 5-5z"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/>
      </svg>
    ),
  };

  // Constrói o mega-menu dinamicamente a partir do catálogo localizado.
  // Mantém URLs estáveis (independentes de idioma) e devolve labels traduzidos.
  const servicesByLang = getServices(lang);
  const CATEGORY_HREF = {
    fisioterapia: 'fisioterapia.html',
    saude: null,
    massagens: 'massagens.html',
    holisticas: 'holisticas.html',
    estetica: null,
  };
  const megaCols = Object.keys(servicesByLang).map(catId => ({
    id: catId,
    label: servicesByLang[catId].label,
    href: CATEGORY_HREF[catId] ?? null,
    items: servicesByLang[catId].items.map(it => ({
      label: it.name,
      href: `servico-${it.slug}.html`,
    })),
  }));
  const megaDescs = {};
  for (const cat of megaCols) {
    megaDescs[cat.id] = t(`nav.mega_descs.${cat.id}`);
  }

  const navLinks = [
    { id: 'inicio', label: t('nav.inicio'), href: 'index.html' },
    { id: 'servicos', label: t('nav.servicos'), mega: true },
    { id: 'sobre', label: t('nav.sobre'), href: 'sobre.html' },
    { id: 'contactos', label: t('nav.contactos'), href: 'contactos.html' },
  ];

  const linkBase = {
    fontFamily: F_DISPLAY, fontSize: 15, fontWeight: 400,
    color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
    padding: '10px 15px', display: 'inline-flex', alignItems: 'center', gap: 6,
    letterSpacing: '0.01em', background: 'none', border: 'none', cursor: 'pointer',
  };

  return (
    <>
      {/* ── Header wrapper ── */}
      <header className={`rg-header-wrap${scrolled ? ' rg-scrolled' : ''}${navHidden ? ' rg-header-hidden' : ''}`}>

        {/* Main nav row */}
        <div className="rg-nav-row">

          {/* ── Logo ── */}
          <a href="index.html" className="rg-logo-link rg-header-logo">
            <img src="rita_guerreiro_logo.png" alt="Rita Guerreiro" decoding="async" style={{ height: 110, width: 'auto', display: 'block' }} />
          </a>

          {/* ── Desktop nav links ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 0 }} className="rg-nav">
            {navLinks.map((link, li) => (
              <div key={link.id}
                className={`rg-header-link-${li + 1}`}
                style={{ position: 'relative' }}
                onMouseEnter={() => { if (link.mega) openServicos(); }}
                onMouseLeave={() => { if (link.mega) closeServicos(); }}
              >
                {link.href
                  ? <a href={link.href} className="rg-nav-link rg-nav-item" style={linkBase}>{link.label}</a>
                  : <button className="rg-nav-link rg-nav-item" aria-expanded={openDrop === 'servicos'} aria-haspopup="true" style={linkBase}>
                      {link.label}
                      <svg width="9" height="9" viewBox="0 0 10 10" style={{ transform: openDrop === 'servicos' ? 'rotate(180deg)' : 'none', transition: 'transform 240ms cubic-bezier(.2,.8,.2,1)', opacity: 0.55 }}>
                        <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                }
                {link.mega && openDrop === 'servicos' && (
                  <div
                    onMouseEnter={openServicos}
                    onMouseLeave={closeServicos}
                    style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-105px)', zIndex: 1001, paddingTop: 4 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                      {/* Painel esquerdo: categorias com ícones */}
                      <div style={{ width: 230, flexShrink: 0, background: 'white', borderRadius: '0 0 16px 16px', overflow: 'hidden', boxShadow: '0 20px 48px -8px rgba(14,14,12,0.22)', border: '1px solid #E8E6DF' }}>
                        {megaCols.map((col, ci) => (
                          <div key={col.id}>
                            <div
                              onMouseEnter={() => setActiveCol(ci)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                padding: '11px 16px', cursor: 'pointer',
                                background: activeCol === ci ? '#F1F7F6' : 'transparent',
                                transition: 'background 150ms',
                              }}
                            >
                              <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: F_DISPLAY, fontSize: 13, fontWeight: activeCol === ci ? 600 : 400, color: activeCol === ci ? RG.tealDark : RG.charcoal, lineHeight: 1.2 }}>{col.label}</div>
                                <div style={{ fontFamily: F_DISPLAY, fontSize: 11, color: RG.muted, marginTop: 1 }}>{megaDescs[col.id]}</div>
                              </div>
                              <svg width="8" height="8" viewBox="0 0 10 10" style={{ marginLeft: 'auto', opacity: activeCol === ci ? 0.7 : 0.3 }}>
                                <path d="M3 2 L7 5 L3 8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            {ci < megaCols.length - 1 && <div style={{ height: 1, background: '#E8E6DF', margin: '0 12px' }} />}
                          </div>
                        ))}
                      </div>

                      {/* Painel direito: subserviços */}
                      <div style={{ width: 250, flexShrink: 0, visibility: activeCol !== null ? 'visible' : 'hidden', background: 'white', borderRadius: '0 0 16px 16px', boxShadow: '0 20px 48px -8px rgba(14,14,12,0.22)', border: '1px solid #E8E6DF', overflow: 'hidden' }}>
                        {activeCol !== null && <>
                          <div style={{ padding: '12px 16px 8px', background: '#F8FAF9', borderBottom: '1px solid #E8E6DF' }}>
                            <div style={{ fontFamily: F_DISPLAY, fontSize: 10, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: RG.tealDark }}>{megaCols[activeCol].label}</div>
                          </div>
                          <div style={{ padding: '8px' }}>
                            {megaCols[activeCol].items.map((item) => (
                              <a key={item.href} href={item.href}
                                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', fontFamily: F_DISPLAY, fontSize: 13, color: RG.charcoal, textDecoration: 'none', borderRadius: 8, transition: 'background 150ms, color 150ms' }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#F1F7F6'; e.currentTarget.style.color = RG.tealDark; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RG.charcoal; }}
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                          {megaCols[activeCol].href && (
                            <div style={{ padding: '10px 16px 14px', borderTop: '1px solid #E8E6DF' }}>
                              <a href={megaCols[activeCol].href}
                                style={{ fontFamily: F_DISPLAY, fontSize: 12, fontWeight: 400, color: RG.tealDark, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                                onMouseEnter={e => e.currentTarget.style.color = RG.tealDeep}
                                onMouseLeave={e => e.currentTarget.style.color = RG.tealDark}
                              >
                                {t('service.ver_todos_prefix')} {megaCols[activeCol].label}
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5h5M5.5 3l2 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </a>
                            </div>
                          )}
                        </>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>


          {/* ── Right side CTA ── */}
          <div className="rg-header-cta" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

            {/* Language switcher */}
            {(() => {
              const langTimerRef = React.useRef(null);
              const openLang = () => { if (langTimerRef.current) clearTimeout(langTimerRef.current); setLangOpen(true); };
              const closeLang = () => { langTimerRef.current = setTimeout(() => setLangOpen(false), 150); };
              return (
                <div style={{ position: 'relative' }}
                  onMouseEnter={openLang}
                  onMouseLeave={closeLang}
                >
                  <button style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 9, padding: '6px 10px', cursor: 'pointer',
                    transition: 'background 200ms, border-color 200ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  >
                    <span style={{ fontSize: 17, lineHeight: 1 }}>{langs.find(l => l.code === lang).flag}</span>
                    <svg width="8" height="8" viewBox="0 0 10 10" style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 220ms', opacity: 0.5 }}>
                      <path d="M2 3.5 L5 6.5 L8 3.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {langOpen && (
                    <div
                      onMouseEnter={openLang}
                      onMouseLeave={closeLang}
                      style={{
                        position: 'absolute', top: '100%', right: 0,
                        paddingTop: 8, zIndex: 30,
                      }}
                    >
                      <div style={{
                        background: RG.white, borderRadius: 12, padding: '8px',
                        boxShadow: '0 20px 48px -8px rgba(14,14,12,0.18), 0 0 0 1px rgba(14,14,12,0.06)',
                        minWidth: 60,
                      }}>
                        {langs.filter(l => l.code !== lang).map(l => (
                          <button key={l.code} onClick={() => { changeLang(l.code); setLangOpen(false); }} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
                            padding: '8px', borderRadius: 8, border: 'none',
                            background: 'none', cursor: 'pointer', transition: 'background 150ms',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = RG.tealWash}
                          onMouseLeave={e => e.currentTarget.style.background = 'none'}
                          >
                            <span style={{ fontSize: 22, lineHeight: 1 }}>{l.flag}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Telefone */}
            <a href="tel:+351961899364" className="rg-nav-tel rg-tel-link" style={{
              fontFamily: F_DISPLAY, fontSize: 12.5, fontWeight: 400, color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 13px 7px 8px', borderRadius: 9,
              border: '1px solid rgba(255,255,255,0.12)',
              letterSpacing: '0.02em',
              transition: 'background 200ms, border-color 200ms, color 200ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
            >
              <span style={{ width: 26, height: 26, borderRadius: 999, background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
              </span>
              961 899 364
            </a>

            {/* Agendar CTA */}
            <a href="https://wa.me/351961899364" target="_blank" rel="noopener noreferrer" className="rg-agendar-btn" style={{
              fontFamily: F_DISPLAY, fontSize: 13, fontWeight: 400,
              color: RG.tealDeep,
              background: 'linear-gradient(135deg, #ffffff 0%, #f0faf9 100%)',
              padding: '10px 22px', borderRadius: 999, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 7,
              boxShadow: '0 4px 16px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.8) inset',
              letterSpacing: '0.01em',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
              {t('agendar')}
            </a>

            {/* Burger */}
            <button className="rg-burger" onClick={() => setMobile(!mobile)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }} aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path d={mobile ? 'M4 4 L18 18 M18 4 L4 18' : 'M3 7 L19 7 M3 15 L19 15'} stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>


      </header>

      {/* ── Mobile menu — full screen overlay ── */}
      {mobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'linear-gradient(160deg, #1b413e 0%, #2a5a57 100%)',
          paddingTop: 90, overflow: 'auto',
          animation: 'rg-fade-in 250ms ease both',
        }}>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { href: 'index.html', label: t('nav.inicio') },
              null,
              { href: 'sobre.html', label: t('nav.sobre') },
              { href: 'contactos.html', label: t('nav.contactos') },
            ].map((item, i) => item === null ? (
              <div key="servicos" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0' }}>
                <button onClick={() => setMobileServicos(!mobileServicos)} style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 28, fontWeight: 600,
                  color: RG.white, background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 12, padding: 0,
                }}>
                  {t('nav.servicos')}
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: mobileServicos ? 'rotate(90deg)' : 'none', transition: 'transform 220ms' }}>
                    <path d="M4 3 L9 7 L4 11" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicos && (
                  <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {megaCols.map(col => (
                      <div key={col.id} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.06)' }}>
                          <span style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(111,181,176,0.18)', color: RG.teal }}>
                            {megaIcons[col.id]}
                          </span>
                          <div>
                            <div style={{ fontFamily: F_DISPLAY, fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(111,181,176,0.85)' }}>{col.label}</div>
                            <div style={{ fontFamily: F_DISPLAY, fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{megaDescs[col.id]}</div>
                          </div>
                        </div>
                        <div style={{ padding: '8px' }}>
                          {col.items.map(it => (
                            <a key={it.href} href={it.href} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: F_DISPLAY, fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '7px 10px', borderRadius: 8, transition: 'background 150ms, color 150ms' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'white'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                            >
                              {it.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.href} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0' }}>
                <a href={item.href} style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 28, fontWeight: 600, color: RG.white, textDecoration: 'none' }}>{item.label}</a>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://wa.me/351961899364" target="_blank" rel="noopener noreferrer" style={{ fontFamily: F_DISPLAY, fontSize: 14, fontWeight: 400, color: RG.tealDeep, background: RG.white, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>{t('agendar')}</a>
              <a href="tel:+351961899364" style={{ fontFamily: F_DISPLAY, fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>961 899 364</a>
            </div>
            {/* Language toggle mobile */}
            <div style={{ paddingTop: 24, display: 'flex', gap: 10 }}>
              {langs.map(l => (
                <button key={l.code} onClick={() => changeLang(l.code)} style={{
                  background: lang === l.code ? 'rgba(255,255,255,0.15)' : 'none',
                  border: lang === l.code ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, padding: '6px 10px', cursor: 'pointer',
                  fontSize: 20, lineHeight: 1,
                }}>
                  {l.flag}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

// Image — real photo if src given, otherwise colored placeholder
function Photo({ aspect = '4/3', label = 'Foto', tone = 'teal', src, style = {} }) {
  if (src) {
    return (
      <div style={{ position: 'relative', width: '100%', aspectRatio: aspect, background: RG.cream, borderRadius: 6, overflow: 'hidden', ...style }}>
        <img src={src} alt={label} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    );
  }
  const colors = {
    teal: { bg1: RG.teal, bg2: RG.tealDark, fg: 'rgba(255,255,255,0.7)' },
    sand: { bg1: RG.cream, bg2: RG.line, fg: RG.muted },
    ink: { bg1: RG.graphite, bg2: RG.ink, fg: 'rgba(255,255,255,0.5)' },
  }[tone];
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: aspect,
      background: `linear-gradient(135deg, ${colors.bg1} 0%, ${colors.bg2} 100%)`,
      borderRadius: 6, overflow: 'hidden', ...style,
    }}>
      {/* layered organic shapes */}
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`g-${label}`} cx="30%" cy="25%"><stop offset="0%" stopColor="rgba(255,255,255,0.3)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" /></radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#g-${label})`} />
        <circle cx="340" cy="240" r="80" fill="rgba(0,0,0,0.08)" />
        <circle cx="60" cy="60" r="50" fill="rgba(255,255,255,0.05)" />
      </svg>
      <div style={{
        position: 'absolute', top: 12, left: 12, padding: '4px 9px',
        fontFamily: F_MONO, fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: colors.fg, border: `1px solid ${colors.fg}`, borderRadius: 3,
      }}>{label}</div>
    </div>
  );
}

// Section wrapper
function Section({ id, bg = RG.white, color = RG.ink, pad = 'lg', children, style = {} }) {
  const pads = { sm: '64px 0', md: '96px 0', lg: '112px 0', xl: '140px 0' };
  return <section id={id} style={{ background: bg, color, padding: pads[pad], ...style }}>{children}</section>;
}

// Footer (shared)
function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ background: '#2A5E5B', color: RG.white, paddingTop: 64, paddingBottom: 0 }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr', gap: 40, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="rg-footer-grid">
          {/* Brand col */}
          <div>
            <a href="index.html" style={{ display: 'inline-block', marginBottom: 22 }}>
              <img src="rita_guerreiro_logo.png" alt="Rita Guerreiro" loading="lazy" decoding="async" style={{ height: 48, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </a>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, color: 'rgba(255,255,255,0.7)', marginTop: 0, marginBottom: 24, maxWidth: 280 }}>
              {t('footer.tagline')}
            </p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
              {[
                { href: 'https://wa.me/351961899364', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg> },
                { href: 'https://www.instagram.com/centro_terapias_rita_guerreiro/', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rg-footer-social"
                  style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 200ms' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                >{icon}</a>
              ))}
            </div>
            {/* Map with integrated address bar */}
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.25)' }}>
              <iframe
                src="https://maps.google.com/maps?q=R.+Padre+Ant%C3%B3nio+Vieira+58%2C+8100-611+Loul%C3%A9%2C+Portugal&output=embed&z=16"
                width="100%" height="185"
                style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rita Guerreiro"
              />
              <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Padre+António+Vieira+58,+8100-611+Loulé,+Portugal"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: 'rgba(255,255,255,0.06)', borderTop: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'background 200ms' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ fontFamily: F_BODY, fontSize: 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.75)', flex: 1 }}>Rua Padre António Vieira 58, Loulé</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {[
            { t: t('footer.col1'), l: [['Fisioterapia', 'fisioterapia.html'], ['Nutrição', 'servico-nutricao.html'], ['Psicologia', 'servico-psicologia.html'], ['Terapia de Bowen', 'servico-terapia-bowen.html']] },
            { t: t('footer.col2'), l: [['Massagens', 'massagens.html'], ['Holísticas', 'holisticas.html'], ['Depilação a Laser', 'servico-depilacao-laser.html'], ['Pilates Clínico', 'servico-pilates-clinico.html']] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontFamily: F_BODY, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{col.t}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {col.l.map(([n, h]) => (
                  <a key={n} href={h} className="rg-footer-link"
                    style={{ fontFamily: F_BODY, fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', padding: '6px 0', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 200ms, padding-left 200ms' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.querySelector('span').style.width = '16px'; e.currentTarget.querySelector('span').style.background = 'rgba(255,255,255,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.querySelector('span').style.width = '12px'; e.currentTarget.querySelector('span').style.background = 'rgba(255,255,255,0.2)'; }}
                  >
                    <span style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.2)', display: 'inline-block', flexShrink: 0, transition: 'all 300ms' }} />
                    {n}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact col with cards */}
          <div>
            <div style={{ fontFamily: F_BODY, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{t('footer.col3')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Hours card */}
              <div style={{ borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px 12px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>Seg–Sex</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>9:00 – 19:00</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px 14px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>Sábados</div>
                    <div style={{ fontFamily: F_BODY, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Sob marcação</div>
                  </div>
                </div>
              </div>
              {/* Phone card */}
              <a href="tel:+351961899364"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'background 200ms' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                <span style={{ width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'rgba(255,255,255,0.7)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
                </span>
                <div>
                  <div style={{ fontFamily: F_BODY, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Telefone</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>961 899 364</div>
                </div>
              </a>
              {/* Email card */}
              <a href="mailto:geral@ritaguerreiro.pt"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'background 200ms' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                <span style={{ width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'rgba(255,255,255,0.7)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <div style={{ fontFamily: F_BODY, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Email</div>
                  <div style={{ fontFamily: F_BODY, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)', wordBreak: 'break-all' }}>geral@ritaguerreiro.pt</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 20, paddingBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: F_BODY, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Rita Guerreiro — {t('footer.direitos')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: F_BODY, fontSize: 12 }}>
            <a href="privacidade.html" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '4px 10px', transition: 'color 180ms' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >{t('footer.privacidade')}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10 }}>·</span>
            <a href="termos.html" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '4px 10px', transition: 'color 180ms' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >{t('footer.termos')}</a>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10 }}>·</span>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="rg-reclamacoes-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, marginLeft: 4,
              color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8,
              padding: '5px 11px', transition: 'background 200ms, border-color 200ms, color 200ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              {t('footer.reclamacoes')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Floating WhatsApp
function WAFab() {
  return (
    <a href="https://wa.me/351961899364?text=Ol%C3%A1%2C%20gostava%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rg-wafab" style={{
      position: 'fixed', bottom: 22, right: 22, zIndex: 95,
      width: 56, height: 56, borderRadius: 999, background: '#25D366', color: 'white',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 12px 28px -6px rgba(37,211,102,0.5), 0 4px 10px rgba(0,0,0,0.1)',
      textDecoration: 'none', transition: 'transform 220ms',
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2zm5.73 14.07c-.24.68-1.42 1.3-1.97 1.38-.52.08-1.17.11-1.89-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.54c.27-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.69.53.24.6.84 2.1.91 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2 1.11.99 2.05 1.3 2.34 1.44.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.77.83 2.07.98.3.15.5.22.57.35.08.13.08.76-.16 1.43z" /></svg>
    </a>
  );
}

Object.assign(window, { Container, Reveal, Eyebrow, Heading, Body, Button, Nav, Photo, Section, Footer, WAFab });

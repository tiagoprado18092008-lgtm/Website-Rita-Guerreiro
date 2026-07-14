(function() {
  'use strict';

  // Aguardar React renderizar (Babel CDN demora ~300ms)
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initPremium, 400);
  });

  function initPremium() {
    // Verificar se GSAP está disponível
    if (typeof gsap === 'undefined') return;

    // Respeitar prefers-reduced-motion: sem parallax, reveals nem contadores
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Registar ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    var isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
      initScrollIndicator();
      initHeroParallax();
    }
    initScrollReveals();
    initImageReveals();
    initCounters();
  }

  // ── Scroll indicator (chevron animado na hero) ───────────────
  function initScrollIndicator() {
    // Verificar se estamos na homepage (hero existe)
    const heroGrid = document.querySelector('.rg-hero-grid');
    if (!heroGrid) return;

    const heroSection = heroGrid.closest('section');
    if (!heroSection) return;

    // Criar elemento
    const indicator = document.createElement('div');
    indicator.className = 'rg-scroll-indicator';
    indicator.innerHTML = `
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path d="M2 2L10 9L18 2" stroke="#6FB5B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" style="margin-top:-6px;opacity:0.5">
        <path d="M2 2L10 9L18 2" stroke="#6FB5B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    // Garantir que heroSection tem position relative
    heroSection.style.position = 'relative';
    heroSection.appendChild(indicator);

    // Desaparecer ao scroll
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        start: 150,
        onEnter: function() {
          gsap.to(indicator, { opacity: 0, y: 10, duration: 0.4, ease: 'power2.out' });
        },
        onLeaveBack: function() {
          gsap.to(indicator, { opacity: 0.5, y: 0, duration: 0.4, ease: 'power2.out' });
        }
      });
    }
  }

  // ── Parallax subtil na imagem hero ──────────────────────────
  function initHeroParallax() {
    if (typeof ScrollTrigger === 'undefined') return;

    // O primeiro .rg-hero-grid no DOM é sempre o da hero section
    var firstHeroGrid = document.querySelector('.rg-hero-grid');
    if (!firstHeroGrid) return;

    var heroSection = firstHeroGrid.closest('section');
    if (!heroSection) return;

    // A imagem placeholder é o último filho DIRETO do grid da hero
    var heroImg = firstHeroGrid.lastElementChild;
    if (!heroImg) return;

    gsap.to(heroImg, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // ── Scroll reveals para secções ─────────────────────────────
  // Nota: a maioria dos elementos são animados pelo componente <Reveal> em ui.jsx
  // (IntersectionObserver + CSS transitions). O GSAP aqui cobre apenas elementos
  // que não estão dentro de wrappers <Reveal>: stats strip e menu de serviços.
  function initScrollReveals() {
    if (typeof ScrollTrigger === 'undefined') return;

    const heroGrid = document.querySelector('.rg-hero-grid');
    const heroSection = heroGrid ? heroGrid.closest('section') : null;

    function outsideHero(el) {
      return !(heroSection && heroSection.contains(el));
    }

    // Anima grupo de elementos irmãos com stagger
    function animateGroup(selector, props) {
      var els = Array.from(document.querySelectorAll(selector)).filter(outsideHero);
      if (!els.length) return;
      var parents = [];
      els.forEach(function(el) {
        var p = el.parentElement;
        if (!parents.includes(p)) parents.push(p);
      });
      parents.forEach(function(parent) {
        var group = els.filter(function(el) { return el.parentElement === parent; });
        gsap.from(group, Object.assign({ y: 16, opacity: 0, duration: 0.85, ease: 'power2.out', stagger: 0.12 }, props || {}, {
          scrollTrigger: { trigger: parent, start: 'top 82%', once: true }
        }));
      });
    }

    // Stats strip — sem wrapper Reveal no JSX
    animateGroup('.rg-stat');

    // Itens da lista do menu de serviços (ServicesCard) — sem wrapper Reveal individual
    animateGroup('.rg-services-menu li');

    // Passos e valores (páginas de serviço / sobre)
    animateGroup('.rg-steps-grid > *');
    animateGroup('.rg-values-grid > *');

    // Icon cards (páginas de categoria)
    animateGroup('.rg-icon-card');
  }

  // ── Reveal "cortina" (clip-path) nas imagens grandes de secção ──
  // Elementos marcados com .rg-img-reveal no JSX. Se o GSAP falhar,
  // nada fica escondido — o estado inicial só é aplicado aqui.
  function initImageReveals() {
    if (typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('.rg-img-reveal').forEach(function(el) {
      gsap.fromTo(el,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          onComplete: function() { el.style.clipPath = ''; }
        }
      );
    });
  }

  // ── Counter animation para stats ────────────────────────────
  function initCounters() {
    if (typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('.rg-stat').forEach(function(statEl) {
      // O valor está no primeiro div filho (Open Sans grande)
      const numEl = statEl.querySelector('div:first-child');
      if (!numEl) return;

      const fullText = numEl.textContent.trim();
      // Extrair número e sufixos
      const numMatch = fullText.match(/(\d+)/);
      if (!numMatch) return;

      const target = parseInt(numMatch[1], 10);
      if (!target || target <= 1) return; // Skip valores <= 1 (ex: %)

      // Encontrar o span de sufixo (ex: "+", "%")
      const suffixSpan = numEl.querySelector('span');
      const suffix = suffixSpan ? suffixSpan.textContent : '';
      const prefix = fullText.replace(numMatch[0], '').replace(suffix, '').trim();

      ScrollTrigger.create({
        trigger: statEl,
        start: 'top 85%',
        once: true,
        onEnter: function() {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: function() {
              const current = Math.round(obj.val);
              // Reconstruir texto preservando o span de sufixo
              if (suffixSpan) {
                numEl.childNodes[0].textContent = prefix + current;
              } else {
                numEl.textContent = prefix + current + suffix;
              }
            }
          });
        }
      });
    });
  }

})();

(function() {
  'use strict';

  // Aguardar React renderizar (Babel CDN demora ~300ms)
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initPremium, 400);
  });

  function initPremium() {
    // Verificar se GSAP está disponível
    if (typeof gsap === 'undefined') return;

    // Registar ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    initScrollIndicator();
    initHeroParallax();
    initScrollReveals();
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
  function initScrollReveals() {
    if (typeof ScrollTrigger === 'undefined') return;

    // Elementos alvo para reveal — excluir hero (já tem animações próprias)
    const heroGrid = document.querySelector('.rg-hero-grid');
    const heroSection = heroGrid ? heroGrid.closest('section') : null;

    // Selecionar elementos para animar
    const revealSelectors = [
      '.rg-stat',
      '.rg-service-card',
      '.rg-icon-card',
      '.rg-testimonial-card',
    ];

    revealSelectors.forEach(function(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(function(el) {
        // Ignorar elementos dentro da hero
        if (heroSection && heroSection.contains(el)) return;

        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        });
      });
    });

    // Reveals para headings h2 fora da hero
    document.querySelectorAll('section h2').forEach(function(el) {
      if (heroSection && heroSection.contains(el)) return;

      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      });
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

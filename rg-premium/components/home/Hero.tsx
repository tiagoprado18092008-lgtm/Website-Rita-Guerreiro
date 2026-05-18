'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { WA_URL } from '@/lib/tokens'

const EASE = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: d, ease: EASE },
  }),
}

const lines = ['Recupera.', 'Equilibra.', 'Sente-te bem.']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">

      {/* ── Image panel (right side, ~58% width) ── */}
      <div
        className="absolute inset-y-0 right-0 w-[58%] z-0"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* subtle vignette on top/bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(250,250,248,0.18) 0%, transparent 20%, transparent 80%, rgba(250,250,248,0.18) 100%)',
        }} />
      </div>

      {/* ── Gradient fade from left (cream → transparent) ── */}
      <div
        className="absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, #FAFAF8 44%, rgba(250,250,248,0.92) 54%, rgba(250,250,248,0.0) 72%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 pt-28 pb-24">
        <div className="max-w-[600px]">

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="h-[2px] w-10 bg-teal mb-7"
          />

          {/* Headline — staggered lines */}
          <h1
            className="font-display font-bold text-ink mb-5"
            style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 1.04, letterSpacing: '-0.03em' }}
          >
            {lines.map((line, i) => (
              <motion.span
                key={line}
                custom={0.2 + i * 0.13}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`block ${i === lines.length - 1 ? 'text-teal' : ''}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            custom={0.62}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-body text-[15px] leading-[1.72] text-charcoal/70 mb-9 max-w-[42ch]"
          >
            Fisioterapia, Osteopatia e Bem-Estar em Loulé.
            <br />
            Cuidado personalizado numa equipa que te conhece.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.78}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3 items-center mb-10"
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-[13px] font-bold text-white rounded-full px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: '#6FB5B0',
                boxShadow: '0 8px 24px -6px rgba(111,181,176,0.55)',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z" />
              </svg>
              Marcar Consulta
            </a>
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ink/75 rounded-full px-7 py-3.5 border border-ink/15 hover:border-ink/35 hover:text-ink transition-all duration-300"
            >
              Ver Tratamentos
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={0.92}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#6FB5B0">
                  <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-[11px] font-medium text-muted">
              +500 pessoas acompanhadas · Google 5 estrelas
            </span>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 scroll-indicator" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-ink/30">
          <path d="M12 5 L12 19 M6 13 L12 19 L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

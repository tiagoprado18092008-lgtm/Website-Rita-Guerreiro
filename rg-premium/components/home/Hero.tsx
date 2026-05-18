'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { WA_URL } from '@/lib/tokens'

const words1 = ['Onde', 'a', 'tua', 'saúde']
const words2 = ['está', 'em', 'boas', 'mãos']

const EASE = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.07, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1800&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,20,18,0.62) 0%, rgba(13,20,18,0.32) 50%, rgba(13,20,18,0.72) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-24 pb-24">
        <div className="max-w-[720px]">


          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="h-[2px] w-12 bg-teal mb-6"
          />

          {/* Headline */}
          <h1 className="font-display font-medium leading-[1.04] tracking-[-0.025em] text-white mb-6" style={{ fontSize: 'clamp(52px, 6.5vw, 88px)' }}>
            <span className="block">
              {words1.map((w, i) => (
                <motion.span key={w + i} custom={i} initial="hidden" animate="visible" variants={word} className="inline-block mr-[0.25em]">
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block text-teal">
              {words2.map((w, i) => (
                <motion.span key={w + i} custom={i + 4} initial="hidden" animate="visible" variants={word} className="inline-block mr-[0.25em]">
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-body text-[16px] leading-[1.7] mb-8 max-w-[44ch]"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            Centro de Terapias &amp; Bem-Estar em Loulé. Fisioterapia, Massagens, Pilates Clínico e muito mais — numa equipa que te conhece.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-wrap gap-3 items-center mb-10"
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-[14px] font-bold text-white rounded-full px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: '#25D366', boxShadow: '0 8px 24px -4px rgba(37,211,102,0.45)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
              Marcar Consulta
            </a>
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-white/85 rounded-full px-7 py-3.5 border border-white/30 hover:border-white/60 hover:text-white transition-all duration-200"
            >
              Ver Tratamentos
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex items-center gap-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#6FB5B0"><path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/></svg>
              ))}
            </div>
            <span className="font-body text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
              +500 pessoas acompanhadas · Desde 2022
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <path d="M12 5 L12 19 M6 13 L12 19 L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

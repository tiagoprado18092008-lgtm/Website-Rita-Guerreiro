'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/Reveal'

const points = [
  {
    title: 'Tratamento à tua medida',
    desc: 'Não há dois casos iguais. Cada plano começa por te ouvir — os teus objetivos, a tua história, o teu ritmo.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tudo no mesmo espaço',
    desc: 'Fisioterapia, psicologia, estética, nutrição — sem te deslocares a sítios diferentes. Uma equipa coesa.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Uma equipa que se preocupa',
    desc: 'Profissionais experientes que te acompanham com atenção e continuidade ao longo de todo o processo.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Respeito pela tua história',
    desc: 'A tua vida, o teu corpo e o teu tempo são sempre respeitados. Cuidamos de ti como cuidaríamos de alguém da família.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <Reveal>
          <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-tealDark">A nossa diferença</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-semibold tracking-[-0.025em] text-ink mt-6 mb-16 max-w-[22ch] leading-[1.08]" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            O que nos move é o teu bem-estar.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          {/* Timeline */}
          <Reveal>
            <ol className="relative">
              {/* Connector line spans whole timeline */}
              <span
                aria-hidden
                className="absolute left-5 top-5 bottom-5 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(47,107,104,0.25), rgba(47,107,104,0.08))' }}
              />

              {points.map((p, i) => {
                const isActive = active === i
                return (
                  <li key={i} className="relative pl-16 pb-8 last:pb-0">
                    {/* Numbered circle */}
                    <button
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-[15px] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-10"
                      style={{
                        background: isActive ? '#2F6B68' : '#FFFFFF',
                        color: isActive ? '#FFFFFF' : '#2F6B68',
                        border: '1.5px solid #2F6B68',
                        boxShadow: isActive
                          ? '0 6px 16px -4px rgba(47,107,104,0.45)'
                          : '0 1px 3px rgba(0,0,0,0.05)',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      {i + 1}
                    </button>

                    {/* Step content */}
                    <button
                      onClick={() => setActive(i)}
                      className="text-left w-full group"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="transition-colors duration-300"
                          style={{ color: isActive ? '#2F6B68' : '#8A8A82' }}
                        >
                          {p.icon}
                        </span>
                        <h3
                          className="font-display font-semibold tracking-[-0.015em] transition-colors duration-300"
                          style={{
                            fontSize: 'clamp(20px, 2vw, 26px)',
                            color: isActive ? '#141412' : '#55554E',
                          }}
                        >
                          {p.title}
                        </h3>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
                            className="overflow-hidden"
                          >
                            <p className="font-body text-[15px] text-muted leading-[1.7] mt-3 max-w-[44ch]">
                              {p.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                )
              })}
            </ol>
          </Reveal>

          {/* Photo */}
          <Reveal delay={120} className="hidden lg:block">
            <div
              className="rounded-2xl overflow-hidden img-zoom transition-shadow duration-300"
              style={{
                aspectRatio: '4/5',
                boxShadow: '0 20px 40px -16px rgba(13,20,18,0.2), 0 4px 10px -4px rgba(13,20,18,0.08)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Sala de tratamento"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

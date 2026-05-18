'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { WA_URL, TEL, TEL_DISPLAY } from '@/lib/tokens'

const megaCols = [
  {
    label: 'Fisioterapia',
    href: '/fisioterapia',
    icon: '🦴',
    items: [
      { label: 'Fisioterapia Geral', href: '/servicos/fisioterapia' },
      { label: 'ATM / Mesoterapia', href: '/servicos/mesoterapia' },
      { label: 'Vestibular / Acupuntura', href: '/servicos/acupuntura' },
    ],
  },
  {
    label: 'Cuidados de Saúde',
    href: '/#servicos',
    icon: '🩺',
    items: [
      { label: 'Nutrição', href: '/servicos/nutricao' },
      { label: 'Terapia de Bowen', href: '/servicos/terapia-bowen' },
      { label: 'Psicologia', href: '/servicos/psicologia' },
    ],
  },
  {
    label: 'Massagens',
    href: '/massagens',
    icon: '✋',
    items: [
      { label: 'Ver todas as massagens', href: '/massagens' },
    ],
  },
  {
    label: 'Holísticas & Estética',
    href: '/holisticas',
    icon: '✨',
    items: [
      { label: 'Terapias Holísticas', href: '/holisticas' },
      { label: 'Tratamentos Faciais', href: '/servicos/facial' },
      { label: 'Pacotes de Tratamento', href: '/servicos/pacotes' },
      { label: 'Depilação a Laser', href: '/servicos/depilacao-laser' },
      { label: 'Pilates Clínico', href: '/servicos/pilates-clinico' },
    ],
  },
]

interface NavProps {
  transparent?: boolean
}

export default function Nav({ transparent = true }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicos, setMobileServicos] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const isGlass = transparent && !scrolled

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: isGlass ? 'transparent' : 'rgba(13,20,18,0.92)',
          backdropFilter: isGlass ? 'none' : 'blur(20px)',
          borderBottom: isGlass ? 'none' : '1px solid rgba(111,181,176,0.10)',
          height: scrolled ? 56 : 60,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Rita Guerreiro"
              className="h-14 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Início', href: '/' },
              { label: 'Sobre', href: '/sobre' },
              { label: 'Contactos', href: '/contactos' },
            ].map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-body text-[13.5px] font-medium transition-colors duration-300 rounded-lg ${
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-teal"
                      style={{ boxShadow: '0 0 8px rgba(111,181,176,0.6)' }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Serviços trigger */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="px-4 py-2 font-body text-[13.5px] font-medium text-white/75 hover:text-white transition-colors duration-200 flex items-center gap-1.5 rounded-lg hover:bg-white/5"
              >
                Serviços
                <motion.svg
                  width="9" height="9" viewBox="0 0 10 10"
                  animate={{ rotate: megaOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ opacity: 0.55 }}
                >
                  <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>

              {/* Mega Menu */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute left-0 right-0 top-full"
                    style={{ marginTop: 0 }}
                  >
                    <div
                      className="max-w-[1280px] mx-auto px-6"
                    >
                      <div
                        className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                          boxShadow: '0 8px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)',
                          borderTop: '3px solid #6FB5B0',
                        }}
                      >
                        {/* Top strip */}
                        <div className="bg-tealWash border-b border-line px-8 py-3 flex items-center gap-2">
                          <span className="text-[10px] font-body font-bold tracking-[0.18em] uppercase text-tealDeep">Os nossos serviços</span>
                          <span className="ml-auto text-[11px] font-body text-muted">Selecione uma área</span>
                        </div>

                        {/* Columns */}
                        <div className="grid grid-cols-4 divide-x divide-line">
                          {megaCols.map((col) => (
                            <div key={col.label} className="p-6 flex flex-col gap-3">
                              {/* Column header */}
                              <Link
                                href={col.href}
                                className="group flex items-center gap-2 mb-1"
                                onClick={() => setMegaOpen(false)}
                              >
                                <span className="text-[15px] leading-none">{col.icon}</span>
                                <span className="font-body text-[11px] font-bold tracking-[0.14em] uppercase text-tealDark group-hover:text-tealDeep transition-colors">
                                  {col.label}
                                </span>
                              </Link>

                              {/* Items */}
                              <div className="flex flex-col gap-0.5">
                                {col.items.map((item, idx) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMegaOpen(false)}
                                    className="group flex items-center gap-2 px-3 py-2 rounded-lg font-body text-[13px] font-medium text-charcoal hover:bg-tealWash hover:text-tealDark transition-all duration-150"
                                    style={{ animationDelay: `${idx * 30}ms` }}
                                  >
                                    <span
                                      className="w-1 h-1 rounded-full bg-teal/40 group-hover:bg-tealDark flex-shrink-0 transition-colors"
                                    />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom bar */}
                        <div className="bg-tealWash border-t border-line px-8 py-3 flex items-center justify-between">
                          <span className="font-body text-[12px] text-muted">Não encontra o que procura?</span>
                          <Link
                            href="/contactos"
                            onClick={() => setMegaOpen(false)}
                            className="font-body text-[12px] font-semibold text-tealDark hover:text-tealDeep transition-colors flex items-center gap-1"
                          >
                            Contacte-nos
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2.5 5h5M5.5 3l2 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${TEL}`}
              className="font-body text-[12.5px] font-semibold text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-white/20"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              {TEL_DISPLAY}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] font-bold text-tealDark flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0faf9 100%)', boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/>
              </svg>
              Agendar
            </a>
          </div>

          {/* Burger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path
                d={mobileOpen ? 'M4 4 L18 18 M18 4 L4 18' : 'M3 7 L19 7 M3 15 L19 15'}
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-auto"
            style={{ background: 'linear-gradient(160deg, #1b413e 0%, #0d1412 100%)', paddingTop: 76 }}
          >
            <div className="max-w-[1280px] mx-auto px-6 pb-12 flex flex-col gap-0">
              {[
                { href: '/', label: 'Início' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/contactos', label: 'Contactos' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-t border-white/10 py-5 font-display text-[30px] font-light text-white hover:text-teal transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-white/10 py-5">
                <button
                  onClick={() => setMobileServicos(!mobileServicos)}
                  className="flex items-center gap-3 font-display text-[30px] font-light text-white w-full text-left"
                >
                  Serviços
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: mobileServicos ? 'rotate(90deg)' : 'none', transition: 'transform 220ms' }}>
                    <path d="M4 3 L9 7 L4 11" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicos && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-4 flex flex-col gap-5"
                    >
                      {megaCols.map(col => (
                        <div key={col.label}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[13px]">{col.icon}</span>
                            <span className="text-[9px] font-body font-bold tracking-[0.22em] uppercase text-teal/70">{col.label}</span>
                          </div>
                          {col.items.map(it => (
                            <Link
                              key={it.href}
                              href={it.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 font-body text-[15px] font-medium text-white/75 hover:text-white py-1.5 transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-teal/40 flex-shrink-0" />
                              {it.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[15px] font-bold text-tealDark bg-white rounded-full px-7 py-3.5 text-center"
                >
                  Agendar via WhatsApp
                </a>
                <a
                  href={`tel:${TEL}`}
                  className="font-body text-[15px] font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-7 py-3.5 text-center"
                >
                  {TEL_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

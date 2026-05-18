'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { WA_URL, TEL, TEL_DISPLAY } from '@/lib/tokens'

const IconBone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.5 5.5a2.121 2.121 0 0 1 0 3L7 20a2.121 2.121 0 0 1-3-3L15.5 5.5a2.121 2.121 0 0 1 3 0z"/>
    <path d="M5.5 5.5a2 2 0 0 0 0 2.828l.707.707"/>
    <path d="M18.5 18.5a2 2 0 0 0 0-2.828l-.707-.707"/>
  </svg>
)

const IconHealth = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

const IconHands = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
)

const IconLeaf = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const megaCols = [
  {
    label: 'Fisioterapia',
    href: '/fisioterapia',
    Icon: IconBone,
    desc: 'Reabilitação e movimento',
    items: [
      { label: 'Fisioterapia Geral', href: '/servicos/fisioterapia' },
      { label: 'ATM / Mesoterapia', href: '/servicos/mesoterapia' },
      { label: 'Vestibular / Acupuntura', href: '/servicos/acupuntura' },
    ],
  },
  {
    label: 'Cuidados de Saúde',
    href: '/#servicos',
    Icon: IconHealth,
    desc: 'Bem-estar integral',
    items: [
      { label: 'Nutrição', href: '/servicos/nutricao' },
      { label: 'Terapia de Bowen', href: '/servicos/terapia-bowen' },
      { label: 'Psicologia', href: '/servicos/psicologia' },
    ],
  },
  {
    label: 'Massagens',
    href: '/massagens',
    Icon: IconHands,
    desc: 'Relaxamento e terapia',
    items: [
      { label: 'Ver todas as massagens', href: '/massagens' },
    ],
  },
  {
    label: 'Holísticas & Estética',
    href: '/holisticas',
    Icon: IconLeaf,
    desc: 'Equilíbrio e beleza',
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

const LANGS = [
  { code: 'PT', flag: '🇵🇹' },
  { code: 'EN', flag: '🇬🇧' },
  { code: 'FR', flag: '🇫🇷' },
]

export default function Nav({ transparent = true }: NavProps) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicos, setMobileServicos] = useState(false)
  const [activeLang, setActiveLang] = useState('PT')
  const [langOpen, setLangOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

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

  const handleLangEnter = () => {
    if (langTimer.current) clearTimeout(langTimer.current)
    setLangOpen(true)
  }

  const handleLangLeave = () => {
    langTimer.current = setTimeout(() => setLangOpen(false), 120)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: '#6FB5B0',
          boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
          height: 64,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Rita Guerreiro"
              className="h-12 w-auto"
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
                  className={`relative px-4 py-2 font-body text-[13.5px] font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-white/70" />
                  )}
                </Link>
              )
            })}

            {/* Serviços trigger */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="px-4 py-2 font-body text-[13.5px] font-medium text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1.5 rounded-lg hover:bg-white/10"
              >
                Serviços
                <motion.svg
                  width="9" height="9" viewBox="0 0 10 10"
                  animate={{ rotate: megaOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ opacity: 0.7 }}
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
                        <div className="grid grid-cols-4 gap-4 p-5">
                          {megaCols.map((col) => (
                            <div key={col.label} className="flex flex-col gap-1 rounded-xl overflow-hidden" style={{ border: '1px solid #E8E6DF' }}>
                              {/* Column header */}
                              <Link
                                href={col.href}
                                className="group flex items-center gap-3 p-4 hover:bg-tealWash transition-colors duration-150"
                                style={{ borderBottom: '1px solid #E8E6DF', background: '#F8FAF9' }}
                                onClick={() => setMegaOpen(false)}
                              >
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-tealDark group-hover:bg-tealDark group-hover:text-white transition-all duration-200" style={{ background: 'rgba(111,181,176,0.15)' }}>
                                  <col.Icon />
                                </span>
                                <div>
                                  <div className="font-body text-[11.5px] font-bold text-tealDark group-hover:text-tealDeep transition-colors leading-tight">
                                    {col.label}
                                  </div>
                                  <div className="font-body text-[10.5px] text-muted leading-tight mt-0.5">{col.desc}</div>
                                </div>
                              </Link>

                              {/* Items */}
                              <div className="flex flex-col p-2">
                                {col.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMegaOpen(false)}
                                    className="group flex items-center gap-2 px-3 py-2 rounded-lg font-body text-[13px] font-medium text-charcoal hover:bg-tealWash hover:text-tealDark transition-all duration-150"
                                  >
                                    <span className="w-3 h-px bg-line group-hover:bg-tealDark group-hover:w-4 flex-shrink-0 transition-all duration-300 inline-block" />
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

            {/* Language selector */}
            <div className="relative" onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave}>
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
                <span className="text-base leading-none">{LANGS.find(l => l.code === activeLang)?.flag}</span>
                <span className="font-body text-[12px] font-600">{activeLang}</span>
                <svg width="8" height="8" viewBox="0 0 10 10" style={{ opacity: 0.6 }}>
                  <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden"
                    style={{ minWidth: 90, border: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    {LANGS.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { setActiveLang(lang.code); setLangOpen(false) }}
                        className={`w-full flex items-center gap-2 px-3 py-2 font-body text-[12.5px] font-medium transition-colors duration-150 ${
                          activeLang === lang.code
                            ? 'bg-tealWash text-tealDark font-semibold'
                            : 'text-charcoal hover:bg-tealWash hover:text-tealDark'
                        }`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        {lang.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone icon */}
            <a
              href={`tel:${TEL}`}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/40 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200"
              aria-label={TEL_DISPLAY}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
              </svg>
            </a>

            {/* CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] font-bold text-white border-2 border-white/80 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-white hover:text-tealDark active:scale-95"
            >
              Agendar Consulta
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
                        <div key={col.label} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-teal" style={{ background: 'rgba(111,181,176,0.15)' }}>
                              <col.Icon />
                            </span>
                            <div>
                              <div className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-teal/80">{col.label}</div>
                              <div className="font-body text-[10px] text-white/35">{col.desc}</div>
                            </div>
                          </div>
                          <div className="px-3 py-2 flex flex-col gap-0.5">
                            {col.items.map(it => (
                              <Link
                                key={it.href}
                                href={it.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 font-body text-[14.5px] font-medium text-white/70 hover:text-white px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span className="w-3 h-px bg-white/20 flex-shrink-0 inline-block" />
                                {it.label}
                              </Link>
                            ))}
                          </div>
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

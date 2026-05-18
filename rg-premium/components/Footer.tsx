import Link from 'next/link'
import { WA_URL, TEL, TEL_DISPLAY, EMAIL, ADDRESS, MAPS_URL, INSTAGRAM } from '@/lib/tokens'

const GMAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`

const navCols = [
  {
    title: 'Fisioterapia & Saúde',
    links: [
      ['Fisioterapia', '/servicos/fisioterapia'],
      ['Nutrição', '/servicos/nutricao'],
      ['Psicologia', '/servicos/psicologia'],
      ['Terapia de Bowen', '/servicos/terapia-bowen'],
    ],
  },
  {
    title: 'Massagens & Holísticas',
    links: [
      ['Massagens', '/massagens'],
      ['Holísticas', '/holisticas'],
      ['Pilates Clínico', '/servicos/pilates-clinico'],
      ['Depilação a Laser', '/servicos/depilacao-laser'],
    ],
  },
]

const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
)

const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#2A5E5B', color: 'white' }} className="pt-16 pb-0 overflow-hidden">
      {/* Top wave divider */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-x-10 gap-y-12 pb-14 border-b border-white/10">

          {/* Brand col */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Rita Guerreiro" className="h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontStyle: 'italic' }} className="text-[18px] leading-snug text-white/70 mb-6 max-w-[280px]">
              Centro de Terapias &amp; Bem-Estar em Loulé.
            </p>

            {/* Social */}
            <div className="flex gap-2.5 mb-8">
              {[
                {
                  href: WA_URL,
                  label: 'WhatsApp',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>,
                },
                {
                  href: INSTAGRAM,
                  label: 'Instagram',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
                },
              ].map(({ href, label, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.25)' }}>
              <iframe
                src={MAPS_URL}
                width="100%"
                height="190"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rita Guerreiro"
              />
              <a
                href={GMAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 text-white/80 hover:text-white hover:bg-white/8 transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.06)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <IconPin />
                <span className="font-body text-[12.5px] font-medium">{ADDRESS}</span>
                <svg className="ml-auto opacity-40 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map(col => (
            <div key={col.title}>
              <div className="font-body text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">{col.title}</div>
              <ul className="flex flex-col gap-0">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-[14px] text-white/65 hover:text-white flex items-center gap-2 py-1.5 group transition-colors duration-200"
                    >
                      <span className="w-3 h-px bg-white/20 group-hover:bg-white/60 group-hover:w-4 transition-all duration-300 inline-block flex-shrink-0" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <div className="font-body text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">Horário & Contacto</div>
            <div className="flex flex-col gap-4">
              {/* Hours */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-0.5 text-white/40"><IconClock /></span>
                  <div>
                    <div className="font-body text-[13px] font-semibold text-white/90 mb-0.5">Seg–Sex</div>
                    <div className="font-body text-[13px] text-white/55">9:00 – 19:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '12px' }}>
                  <span className="mt-0.5 text-white/40"><IconClock /></span>
                  <div>
                    <div className="font-body text-[13px] font-semibold text-white/90 mb-0.5">Sábados</div>
                    <div className="font-body text-[13px] text-white/55">Sob marcação</div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a href={`tel:${TEL}`} className="flex items-center gap-3 rounded-xl p-4 hover:bg-white/8 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white/70 group-hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <IconPhone />
                </span>
                <div>
                  <div className="font-body text-[11px] text-white/40 uppercase tracking-wider mb-0.5">Telefone</div>
                  <div className="font-body text-[14px] font-semibold text-white/85 group-hover:text-white transition-colors">{TEL_DISPLAY}</div>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-xl p-4 hover:bg-white/8 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white/70 group-hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <IconMail />
                </span>
                <div>
                  <div className="font-body text-[11px] text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-body text-[13px] font-semibold text-white/85 group-hover:text-white transition-colors break-all">{EMAIL}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-[12px] text-white/30 text-center md:text-left">
            © 2026 Rita Guerreiro — Todos os direitos reservados
          </p>
          <div className="flex items-center gap-1">
            <a href="/privacidade" className="font-body text-[12px] text-white/35 hover:text-white/60 transition-colors px-3 py-1">Privacidade</a>
            <span className="text-white/15 text-[10px]">·</span>
            <a href="/termos" className="font-body text-[12px] text-white/35 hover:text-white/60 transition-colors px-3 py-1">Termos</a>
            <span className="text-white/15 text-[10px]">·</span>
            <a
              href="https://www.livroreclamacoes.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] text-white/50 hover:text-white/75 border border-white/15 hover:border-white/25 rounded-lg px-3 py-1.5 transition-all duration-200 flex items-center gap-1.5 ml-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Livro de Reclamações
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

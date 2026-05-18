import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { WA_URL, TEL, TEL_DISPLAY } from '@/lib/tokens'

export default function HomeCTA() {
  return (
    <section className="py-24" style={{ background: '#2F6B68' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto">
            <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Pronto para dar o primeiro passo?
            </span>
            <h2 className="font-display font-medium text-white tracking-[-0.02em] leading-[1.08] mt-3 mb-4" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Estamos em Loulé,<br />à tua espera.
            </h2>
            <p className="font-body text-[15px] leading-[1.7] mb-10" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Fala connosco pelo WhatsApp — sem formulários complicados, só uma conversa para perceber como te podemos ajudar.
            </p>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-[14px] font-bold rounded-full px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'white', color: '#2F6B68', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
                WhatsApp — Marcar Agora
              </a>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center gap-2 font-body text-[14px] font-semibold rounded-full px-7 py-3.5 border transition-all duration-200 hover:border-white/60"
                style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                {TEL_DISPLAY}
              </a>
              <Link
                href="/contactos"
                className="font-body text-[14px] font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Ver contactos →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

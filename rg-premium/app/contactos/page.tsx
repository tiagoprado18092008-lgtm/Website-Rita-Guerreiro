'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { WA_URL, TEL, TEL_DISPLAY, EMAIL, ADDRESS, MAPS_URL } from '@/lib/tokens'

const services = [
  'Fisioterapia', 'NutriÃ§Ã£o', 'Psicologia', 'Terapia de Bowen',
  'Massagem de Relaxamento', 'Massagem TerapÃªutica', 'Pilates ClÃ­nico',
  'Reflexologia', 'Shiatsu', 'Outro',
]

export default function ContactosPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav transparent={false} />

      <main className="pt-24">
        {/* Hero interior */}
        <section className="py-16 bg-cream border-b border-line">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-tealDark mb-3 block">Contactos</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-medium tracking-[-0.025em] text-ink leading-[1.04]" style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}>
                Fale Connosco
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-body text-[16px] text-charcoal leading-[1.7] mt-4 max-w-[44ch]">
                Estamos em LoulÃ©, prontos para te receber. Escolhe a forma que te for mais conveniente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Grid: Info + Form */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Info */}
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <div className="font-body text-[10.5px] font-bold tracking-[0.18em] uppercase text-muted mb-3">Morada</div>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer"
                      className="font-body text-[15px] text-charcoal hover:text-tealDark transition-colors duration-200 flex items-start gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="flex-shrink-0 mt-0.5 text-teal"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {ADDRESS}
                    </a>
                  </div>

                  <div>
                    <div className="font-body text-[10.5px] font-bold tracking-[0.18em] uppercase text-muted mb-3">Telefone</div>
                    <a href={`tel:${TEL}`} className="font-body text-[15px] text-charcoal hover:text-tealDark transition-colors duration-200 flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal"><path d="M3 3 L3 5 Q 3 11 11 13 L 13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                      {TEL_DISPLAY}
                    </a>
                  </div>

                  <div>
                    <div className="font-body text-[10.5px] font-bold tracking-[0.18em] uppercase text-muted mb-3">Email</div>
                    <a href={`mailto:${EMAIL}`} className="font-body text-[15px] text-charcoal hover:text-tealDark transition-colors duration-200 flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-teal"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      {EMAIL}
                    </a>
                  </div>

                  <div>
                    <div className="font-body text-[10.5px] font-bold tracking-[0.18em] uppercase text-muted mb-3">HorÃ¡rio</div>
                    <div className="space-y-1">
                      {[['Segundaâ€“Sexta', '10:00 â€“ 19:00'], ['SÃ¡bado', 'Sob marcaÃ§Ã£o'], ['Domingo', 'Encerrado']].map(([d, h]) => (
                        <div key={d} className="flex justify-between font-body text-[14px] text-charcoal border-b border-line py-2 max-w-[280px]">
                          <span>{d}</span>
                          <span className="text-muted">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden border border-line">
                    <iframe src={MAPS_URL} width="100%" height="220" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LocalizaÃ§Ã£o" />
                  </div>
                </div>
              </Reveal>

              {/* Form */}
              <Reveal delay={120}>
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center rounded-2xl border border-line p-12" style={{ background: '#F1F7F6' }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: '#2F6B68' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="font-display font-medium text-ink mb-2" style={{ fontSize: 28 }}>Mensagem enviada!</h3>
                    <p className="font-body text-[14px] text-muted">Entraremos em contacto brevemente.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { name: 'nome', label: 'Nome', type: 'text', required: true },
                      { name: 'email', label: 'E-mail', type: 'email', required: true },
                      { name: 'telefone', label: 'Telefone', type: 'tel', required: false },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-muted mb-1.5 block">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          className="w-full font-body text-[14px] text-ink bg-white border border-line rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-1 focus:ring-teal/30"
                          style={{ appearance: 'none' }}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-muted mb-1.5 block">ServiÃ§o</label>
                      <select
                        name="servico"
                        className="w-full font-body text-[14px] text-ink bg-white border border-line rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-1 focus:ring-teal/30"
                      >
                        <option value="">Selecionar serviÃ§o</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-muted mb-1.5 block">Mensagem</label>
                      <textarea
                        name="mensagem"
                        rows={5}
                        className="w-full font-body text-[14px] text-ink bg-white border border-line rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-1 focus:ring-teal/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 font-body text-[14px] font-bold text-white rounded-full py-3.5 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                      style={{ background: '#2F6B68', boxShadow: '0 4px 16px rgba(47,107,104,0.3)' }}
                    >
                      {loading ? 'A enviar...' : 'Enviar mensagem'}
                      {!loading && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* WA strip */}
        <section className="py-10" style={{ background: '#F1F7F6' }}>
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-medium text-ink" style={{ fontSize: 24 }}>Preferes falar diretamente?</p>
              <p className="font-body text-[14px] text-muted">O WhatsApp Ã© a forma mais rÃ¡pida de chegar atÃ© nÃ³s.</p>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-[14px] font-bold text-white rounded-full px-7 py-3.5 flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#25D366', boxShadow: '0 8px 24px -4px rgba(37,211,102,0.4)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2z"/></svg>
              Abrir WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

import Reveal from '@/components/Reveal'

const list = [
  {
    quote: 'A minha fisioterapeuta (Rita Guerreiro) é uma peça fundamental na minha vida. Procuro-a todas as semanas para cuidar da minha musculatura e aliviar dores.',
    name: 'Irina Mendes Martins',
    service: 'Fisioterapia',
  },
  {
    quote: 'Durante anos e muitas dores crónicas de costas, a abordagem que a Rita Guerreiro fez ao problema foi sem dúvida como ter um corpo novo.',
    name: 'Miguel Moreira',
    service: 'Fisioterapia',
  },
  {
    quote: 'Aulas de Pilates com a Rita Guerreiro são excelentes. A Rita tem uma componente humana aliada às terapias fundamental. Compreende os problemas e necessidades dos utentes.',
    name: 'Mitchelle Sousa',
    service: 'Pilates Clínico',
  },
]

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#2F6B68">
        <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.15l-2.78 1.4.53-3.1L1.5 4.25l3.1-.45z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: '#FAFAF8' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal>
          <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-tealDark">O que dizem de nós</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-medium tracking-[-0.02em] text-ink mt-3 mb-14 max-w-[26ch] leading-[1.08]" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            As palavras de quem já sentiu a diferença.
          </h2>
        </Reveal>

        {/* Desktop grid / Mobile snap scroll */}
        <div className="flex gap-5 overflow-x-auto snap-scroll md:grid md:grid-cols-3 pb-2">
          {list.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="flex-shrink-0 w-[300px] md:w-auto snap-start rounded-2xl p-7 border border-line bg-white card-hover"
                style={{ minHeight: 220 }}
              >
                <Stars />
                <blockquote className="font-display font-light italic leading-[1.5] text-ink mb-5" style={{ fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <div>
                    <div className="font-body text-[13px] font-semibold text-ink">{t.name}</div>
                    <div className="font-body text-[10.5px] font-semibold tracking-[0.1em] uppercase text-muted mt-0.5">{t.service}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F1F7F6' }}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="#2F6B68">
                      <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-5 0-8 2-8 4v1h16v-1c0-2-3-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

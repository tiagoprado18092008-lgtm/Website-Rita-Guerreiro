import Reveal from '@/components/Reveal'
import Link from 'next/link'

const categories = [
  {
    name: 'Fisioterapia',
    count: 3,
    href: '/fisioterapia',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80',
  },
  {
    name: 'Massagens',
    count: 10,
    href: '/massagens',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
  },
  {
    name: 'Terapias Holísticas',
    count: 7,
    href: '/holisticas',
    img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=900&q=80',
  },
  {
    name: 'Cuidados de Saúde',
    count: 3,
    href: '/#servicos',
    img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&q=80',
  },
]

export default function ServicesOverview() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <Reveal>
          <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-tealDark">Os nossos serviços</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-semibold tracking-[-0.025em] text-ink mt-6 mb-16 max-w-[20ch] leading-[1.08]" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Tudo o que precisas, num só lugar.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 80}>
              <Link
                href={cat.href}
                className="group block relative rounded-2xl overflow-hidden img-zoom transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:scale-[1.015]"
                style={{
                  aspectRatio: '16/9',
                  boxShadow: '0 4px 16px -4px rgba(13,20,18,0.12), 0 2px 6px -2px rgba(13,20,18,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 24px 48px -12px rgba(13,20,18,0.28), 0 8px 16px -6px rgba(13,20,18,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 4px 16px -4px rgba(13,20,18,0.12), 0 2px 6px -2px rgba(13,20,18,0.06)'
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,20,18,0.88) 0%, rgba(13,20,18,0.2) 60%, transparent 100%)' }} />
                {/* Hover teal accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(111,181,176,0.12)' }} />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-white tracking-[-0.01em]" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                      {cat.name}
                    </h3>
                    <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-teal/85 mt-2 block">
                      {cat.count} serviços
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-teal group-hover:border-teal group-hover:rotate-[-45deg] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7 L12 7 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

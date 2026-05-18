import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Sobre â€” ClÃ­nica Rita Guerreiro',
  description: 'ConheÃ§a Rita Guerreiro e a equipa do Centro de Terapias & Bem-Estar de LoulÃ©.',
}

const credentials = [
  'Licenciatura em Fisioterapia',
  'PÃ³s-GraduaÃ§Ã£o em Terapia Manual',
  'FormaÃ§Ã£o em Pilates ClÃ­nico',
  'CertificaÃ§Ã£o em Acupuntura',
  'EspecializaÃ§Ã£o em Fisioterapia PediÃ¡trica',
  '+20 Anos de ExperiÃªncia',
]

const team = [
  { name: 'Rita Guerreiro', role: 'Fisioterapia & Fundadora', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80' },
  { name: 'Ana Sousa', role: 'NutriÃ§Ã£o', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' },
  { name: 'Marta Lopes', role: 'Psicologia', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80' },
  { name: 'JoÃ£o Faria', role: 'Pilates ClÃ­nico', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80' },
]

export default function SobrePage() {
  return (
    <>
      <Nav transparent={false} />

      <main>
        {/* Hero interior */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: '#0D1412' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal>
                  <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-teal mb-4 block">
                    Sobre Rita Guerreiro
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="font-display font-medium text-white leading-[1.04] tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
                    Uma abordagem humana Ã  saÃºde.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="font-body text-[16px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '42ch' }}>
                    Com mais de 20 anos de experiÃªncia, Rita Guerreiro construiu um espaÃ§o onde cada pessoa Ã© tratada com atenÃ§Ã£o, respeito e cuidado genuÃ­no.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={100} className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden img-zoom" style={{ aspectRatio: '3/4', maxHeight: 480 }}>
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
                    alt="Rita Guerreiro"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>
          {/* Decorative teal circle */}
          <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: '#6FB5B0' }} />
        </section>

        {/* A Pessoa */}
        <section className="py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-20 items-start">
              <Reveal>
                <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-tealDark mb-4 block">A nossa histÃ³ria</span>
                <div className="font-body text-[16px] leading-[1.8] text-charcoal space-y-5">
                  <p>
                    Rita Guerreiro Ã© fisioterapeuta hÃ¡ mais de 20 anos. ComeÃ§ou com uma visÃ£o simples: criar um espaÃ§o onde cada pessoa pudesse ser tratada como um todo â€” nÃ£o apenas a lesÃ£o, mas a pessoa por inteiro.
                  </p>
                  <p>
                    Em 2022, abriu o Centro de Terapias Rita Guerreiro em LoulÃ©, reunindo uma equipa multidisciplinar de profissionais experientes nas Ã¡reas de fisioterapia, nutriÃ§Ã£o, psicologia, massagens e terapias holÃ­sticas.
                  </p>
                  <p>
                    A filosofia Ã© simples: ouvir antes de tratar. Entender antes de agir. Cada plano Ã© construÃ­do Ã  medida de cada pessoa, respeitando o seu tempo, o seu corpo e a sua histÃ³ria.
                  </p>
                  <p>
                    Hoje, o centro acompanha mais de 500 pessoas por ano â€” de crianÃ§as a idosos, de atletas a grÃ¡vidas â€” sempre com o mesmo compromisso de excelÃªncia e cuidado humano.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="lg:sticky lg:top-28">
                  <div className="border-l-[3px] border-teal pl-6 py-2">
                    <blockquote className="font-display font-medium italic leading-[1.45] text-tealDark" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                      &ldquo;Acredito que cada pessoa tem uma histÃ³ria Ãºnica. O meu trabalho comeÃ§a por ouvi-la.&rdquo;
                    </blockquote>
                    <cite className="font-body text-[13px] font-semibold text-muted mt-4 block not-italic">â€” Rita Guerreiro</cite>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Credenciais */}
        <section className="py-20" style={{ background: '#F1F7F6' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-tealDark mb-3 block">FormaÃ§Ã£o & ExperiÃªncia</span>
              <h2 className="font-display font-medium tracking-[-0.02em] text-ink mb-12" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                Credenciais que fazem a diferenÃ§a.
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {credentials.map((c, i) => (
                <Reveal key={c} delay={i * 60}>
                  <div className="bg-white rounded-xl px-5 py-4 border border-line flex items-center gap-3 card-hover">
                    <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                    <span className="font-body text-[14px] font-medium text-charcoal">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Equipa */}
        <section className="py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <Reveal>
              <span className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-tealDark mb-3 block">A equipa</span>
              <h2 className="font-display font-medium tracking-[-0.02em] text-ink mb-14" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                Profissionais que se preocupam.
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 80}>
                  <div className="group card-hover rounded-xl overflow-hidden border border-line bg-white">
                    <div className="img-zoom" style={{ aspectRatio: '3/4' }}>
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="px-4 py-4">
                      <div className="font-body text-[14px] font-semibold text-ink">{m.name}</div>
                      <div className="font-body text-[11.5px] font-medium tracking-[0.08em] uppercase text-muted mt-0.5">{m.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>

      <Footer />
    </>
  )
}

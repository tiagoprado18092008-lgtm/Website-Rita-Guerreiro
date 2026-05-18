'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 14,  suffix: '',  label: 'Serviços' },
  { value: 500, suffix: '+', label: 'Pessoas acompanhadas' },
  { value: 20,  suffix: '',  label: 'Anos de experiência' },
  { value: 100, suffix: '%', label: 'Dedicação' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const steps = 60
    const inc = target / steps
    let cur = 0
    const timer = setInterval(() => {
      cur = Math.min(cur + inc, target)
      setCount(Math.floor(cur))
      if (cur >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div
      ref={ref}
      className="font-display font-semibold leading-none tracking-[-0.03em] text-tealDark"
      style={{ fontSize: 'clamp(56px, 6vw, 84px)' }}
    >
      {count}<span className="text-[0.5em] font-medium">{suffix}</span>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="py-20 border-t border-b border-line" style={{ background: '#F1F7F6' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-6 py-2 ${
                i > 0 ? 'md:border-l md:border-tealDark/15' : ''
              } ${i === 2 ? 'border-l border-tealDark/15 md:border-l' : ''}`}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div className="font-body text-[11.5px] font-semibold tracking-[0.16em] uppercase text-tealDark/60 mt-4">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

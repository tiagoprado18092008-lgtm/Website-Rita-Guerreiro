'use client'

import { useEffect, useState } from 'react'
import { WA_URL } from '@/lib/tokens'

export default function WAFab() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Marcar consulta via WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-[95] flex items-center gap-2.5 rounded-full bg-[#25D366] text-white transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
      style={{
        padding: scrolled ? '14px' : '12px 20px',
        boxShadow: '0 12px 28px -6px rgba(37,211,102,0.5)',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.83 9.83 0 0012.04 2zm5.73 14.07c-.24.68-1.42 1.3-1.97 1.38-.52.08-1.17.11-1.89-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.54c.27-.3.6-.38.8-.38l.58.01c.19.01.44-.07.69.53.24.6.84 2.1.91 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2 1.11.99 2.05 1.3 2.34 1.44.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.77.83 2.07.98.3.15.5.22.57.35.08.13.08.76-.16 1.43z"/>
      </svg>
      {!scrolled && (
        <span className="font-body text-[13px] font-semibold whitespace-nowrap">
          Marcar agora
        </span>
      )}
    </a>
  )
}

import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'
import WAFab from '@/components/WAFab'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clínica Rita Guerreiro — Centro de Terapias & Bem-Estar em Loulé',
  description: 'Fisioterapia, Massagens, Pilates Clínico, Psicologia e muito mais. Centro de Terapias & Bem-Estar em Loulé, Algarve. Marque a sua consulta.',
  keywords: 'fisioterapia loulé, massagens algarve, pilates clínico, terapias bem-estar, clínica rita guerreiro',
  openGraph: {
    title: 'Clínica Rita Guerreiro',
    description: 'Centro de Terapias & Bem-Estar em Loulé, Algarve.',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <LenisProvider>
          {children}
          <WAFab />
        </LenisProvider>
      </body>
    </html>
  )
}

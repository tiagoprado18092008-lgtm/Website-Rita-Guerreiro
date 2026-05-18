import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal:      '#6FB5B0',
        tealDeep:  '#4A8F8A',
        tealDark:  '#2F6B68',
        tealInk:   '#1F4846',
        tealWash:  '#F1F7F6',
        heroBase:  '#0D1412',
        cream:     '#FAFAF8',
        ink:       '#141412',
        charcoal:  '#2B2B27',
        muted:     '#8A8A82',
        line:      '#E8E6DF',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(52px,7vw,96px)', { lineHeight: '1.03', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(40px,5vw,72px)',  { lineHeight: '1.05', letterSpacing: '-0.02em'  }],
        'display-md': ['clamp(28px,3vw,48px)',  { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(22px,2.5vw,32px)',{ lineHeight: '1.15', letterSpacing: '-0.01em'  }],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(13,20,18,0.6) 0%, rgba(13,20,18,0.3) 50%, rgba(13,20,18,0.7) 100%)',
        'card-overlay': 'linear-gradient(to top, rgba(13,20,18,0.85) 0%, rgba(13,20,18,0.2) 60%, transparent 100%)',
      },
      animation: {
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float':       'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config

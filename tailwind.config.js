/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        brand: {
          50: '#FFF9EB',
          100: '#FFF0C6',
          200: '#FFE088',
          300: '#FFCB45',
          400: '#F8B830',
          500: '#E5A318',
          600: '#C98510',
          700: '#A56410',
          800: '#874E14',
          900: '#704017',
        },
        midnight: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dae6',
          300: '#a9b9d0',
          400: '#7b94b5',
          500: '#5a769c',
          600: '#465e82',
          700: '#3a4d6a',
          800: '#334259',
          900: '#1a2332',
          950: '#0d1219',
        },
      },
      boxShadow: {
        'glow-amber': '0 0 24px rgba(248,184,48,0.35)',
        'glow-blue': '0 0 24px rgba(99,102,241,0.25)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.1)',
        'elevated': '0 8px 30px -6px rgba(0,0,0,0.12), 0 18px 36px -12px rgba(0,0,0,0.08)',
        'dramatic': '0 24px 48px -12px rgba(0,0,0,0.18), 0 40px 64px -20px rgba(0,0,0,0.12)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        'display-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['5.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 700ms cubic-bezier(.22,.61,.36,1) both',
        'fade-up': 'fadeUp 600ms cubic-bezier(.22,.61,.36,1) both',
        'slide-up': 'slideUp 800ms cubic-bezier(.22,.61,.36,1) both',
        'scale-in': 'scaleIn 500ms cubic-bezier(.22,.61,.36,1) both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'counter': 'counter 2s cubic-bezier(.22,.61,.36,1) both',
        'reveal-up': 'revealUp 1s cubic-bezier(.16,1,.3,1) both',
        'reveal-left': 'revealLeft 1s cubic-bezier(.16,1,.3,1) both',
        'line-grow': 'lineGrow 1.2s cubic-bezier(.22,.61,.36,1) both',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(248,184,48,0.3)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(248,184,48,0.15)' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        revealLeft: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

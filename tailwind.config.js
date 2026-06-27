/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:    '#0A0E1A',
        navy2:   '#0F1526',
        navy3:   '#1A1F35',
        indigo:  '#6C63FF',
        cyan:    '#00F5FF',
        offwhite:'#F0EEF8',
        muted:   '#8B8FAA',
        card:    '#131827',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-indigo-cyan': 'linear-gradient(135deg, #6C63FF, #00F5FF)',
      },
      animation: {
        'spin-slow':   'spin 20s linear infinite',
        'spin-slower': 'spin 35s linear infinite reverse',
        'pulse-soft':  'pulse 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'blink':       'blink 0.8s step-end infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
      },
      boxShadow: {
        'indigo-glow': '0 0 40px rgba(108,99,255,0.35)',
        'cyan-glow':   '0 0 30px rgba(0,245,255,0.25)',
        'card-hover':  '0 25px 60px rgba(0,0,0,0.5), 0 0 30px rgba(108,99,255,0.12)',
      },
    },
  },
  plugins: [],
}

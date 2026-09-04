import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        daig: {
          black: '#0D0D0F',
          graphite: '#1A1A1D',
          steel: '#2E2E33',
          white: '#F2F2F2',
          red: '#E33935',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        redline: '0 18px 50px rgba(227, 57, 53, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;

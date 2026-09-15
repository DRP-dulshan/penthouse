import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the DRP logo artwork: the wordmark star is #F16622.
        orange: {
          DEFAULT: '#F16622', // brand accent -- safe on charcoal (5.99:1)
          deep: '#C0511B', // CTA fills carrying white text (4.74:1)
          ink: '#A84717', // small orange text on light grounds (5.3:1 on bone)
        },
        charcoal: {
          DEFAULT: '#111111',
          soft: '#1C1C1C',
          line: '#2A2A2A',
        },
        bone: '#F5F3EF',
        sand: '#EDE3D9',
        body: '#4A4A4A',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      maxWidth: {
        shell: '78rem',
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(7px)', opacity: '1' },
        },
      },
      animation: {
        'scroll-hint': 'scroll-hint 2.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

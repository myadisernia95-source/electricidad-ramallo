import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8B2C2C',
          dark: '#6E1F1F',
          light: '#B14545',
          50: '#FBF1F1',
          100: '#F5DCDC',
          200: '#E8B0B0',
          300: '#DA8585',
          400: '#C25959',
          500: '#8B2C2C',
          600: '#6E1F1F',
          700: '#561818',
          800: '#3E1010',
          900: '#260808'
        },
        cream: {
          DEFAULT: '#F5EFE6',
          50: '#FBF8F3',
          100: '#F5EFE6',
          200: '#EAE0CE',
          300: '#DDCDB0'
        },
        ink: {
          DEFAULT: '#1F1B1B',
          soft: '#2E2828',
          mute: '#5C5454'
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 8px rgba(31, 27, 27, 0.06), 0 8px 24px rgba(31, 27, 27, 0.06)'
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' }
      }
    }
  },
  plugins: []
};

export default config;

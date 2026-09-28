/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f4',
          100: '#dcf0e3',
          200: '#bbe1c9',
          300: '#8acca8',
          400: '#54af85',
          500: '#2f9168',
          600: '#1f7353',
          700: '#1a5c44',
          800: '#174a38',
          900: '#143d2f',
          950: '#0a2218',
        },
        sand: {
          50: '#fbfaf7',
          100: '#f5f1e8',
          200: '#ebe3d2',
          300: '#dcceae',
          400: '#c9b385',
          500: '#b89963',
          600: '#a88452',
          700: '#8c6b45',
          800: '#73563b',
          900: '#5e4831',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'], // Ativa a fonte elegante antiga
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

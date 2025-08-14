/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'mystical': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      height: {
        '30': '7.5rem',
        '36': '9rem',
        '48': '12rem',
      },
      width: {
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
      },
      animation: {
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'card-hover': 'cardHover 0.3s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '100%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        }
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'card-back': 'linear-gradient(45deg, #1e1b4b 0%, #3730a3 50%, #1e1b4b 100%)',
      }
    },
  },
  plugins: [],
}
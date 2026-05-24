/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        primary: '#37654B',
        secondary: '#CBA135',
        light: '#F7E7E5',
        dark: {
          bg: '#1a1a1a',
          surface: '#2d2d2d',
          text: '#e5e5e5',
          muted: '#a3a3a3',
        },
      },
    },
  },
  plugins: [],
};

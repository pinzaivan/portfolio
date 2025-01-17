/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 1s ease-in-out',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      colors: {
        principal: '#eab308',
        secondary: '#ffffff',
      },
      fontFamily: {
        principal: '"Oswald",_sans-serif',
      },
    },
  },
  plugins: [],
};

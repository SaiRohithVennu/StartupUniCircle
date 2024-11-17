/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9e9e',
          400: '#ff6666',
          500: '#ff3333',
          600: '#e60000',
          700: '#cc0000',
          800: '#a30000',
          900: '#850000',
          950: '#4c0000',
        },
      },
    },
  },
  plugins: [],
};
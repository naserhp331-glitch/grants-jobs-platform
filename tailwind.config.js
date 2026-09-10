/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
        },
        secondary: {
          500: '#ff6b35',
          600: '#e55a2b',
        },
      },
      fontFamily: {
        arabic: ['Segoe UI', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
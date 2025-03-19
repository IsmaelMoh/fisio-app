/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          800: '#1e3a8a',
          900: '#172554',
        },
        'turquoise': {
          100: '#d5f5f6',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        }
      }
    },
  },
  plugins: [],
};
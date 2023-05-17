/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
      colors: {
        ...colors,
        green: {
          100: '#222222',
          200: '#0f0af5',
          300: '#afafaf',
          400: '#12aa23',
          500: '#aaaaaa',
          600: '#008800',
          700: '#ffffff',
          800: '#000000',
          900: '#00ff00'
        },
        indigo: {
          100: '#222222',
          200: '#0f0af5',
          300: '#afafaf',
          400: '#12aa23',
          500: '#aaaaaa',
          600: '#008800',
          700: '#ffffff',
          800: '#000000',
          900: '#00ff00'
        }
      }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      purple: '#877AB2',
      blue: '#385B8F',
      white: '#F6F8F5',
      black: '#191919',
      gray: '#808080',
      'light-gray': '#B3B3B3'
    }
  },
  plugins: []
}

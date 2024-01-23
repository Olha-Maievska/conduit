/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titilium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        theme: {
          green: '#025159',
          teal: '#75B2BF',
          gray: '#C9DFF2',
          dark: '#011526',
          blue: '#5496BF'
        } 
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}


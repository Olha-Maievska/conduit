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
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)'
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)',
      },
      fontSize: {
        date: '0.8rem',
        articleBody: '1.2rem',
        articleTitle: '2.8rem',
        logo: '3.5rem',
      },
    },
  },
  plugins: [],
}


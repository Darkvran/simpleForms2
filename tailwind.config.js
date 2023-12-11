/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'ptSer': ['PT Serif', 'serif'],
        'ptSan':['PT Sans', 'sans-serif'],
      },
      colors:{
        startGrad:'#283c86',
        midGrad:'#b21f1f',
        endGrad:'#45a247',
          
      }
    },
    
  },
  plugins: [],
}


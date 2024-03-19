/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      monstrserrat:['Montserrat','sans-serif'],
      inter: ['Inter','sans-serif']
    },
    extend: {
      colors: {
        'primary': '#0872BF',
        'background':"#141A1A",
      }
    },
  },
  plugins: [],
}


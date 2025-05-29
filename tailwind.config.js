/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        'verde-texto': '#3a7044',
        'beis-fondo': '#f8ffe5',
        'verde-fondo':'#359c48',
        'blanco-texto': '#ffffff',
      },
      screens: {
        '3xl': '150rem', 
      }
    },
  },
  plugins: [],
}



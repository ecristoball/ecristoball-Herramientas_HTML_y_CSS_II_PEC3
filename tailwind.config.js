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
        'input-bg-oklch': 'oklch(0.89 0.039 141.54)',
        'verde-oscuro-oklch': 'oklch(0.2 0.15 141.54)',
      },
      screens: {
        '3xl': '150rem', 
      }
    },
  },
  plugins: [],
}



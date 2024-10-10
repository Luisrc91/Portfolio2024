/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth', // Corrected property name and value
      },
    },
  },
  variants: {},
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      sans : ["Nunito Sans", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("rippleui")]
}
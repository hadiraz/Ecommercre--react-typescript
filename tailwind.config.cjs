/** @type {import('tailwindcss').Config} */
module.exports = {
  important : false ,
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      white: "#FFFFFF",
      greenShadow: {
        100: "#D7E8BA",
        50: "#d7e8bab9"
      },
      persianGreen: "#00A79D",
      pink: "#FF85A1",
      brightGreen: "#81C14B",
      lightGray: "#C8D7C1",
      yellow: "#F4D35E",
      oliveGreen: "#558B2F",
    },
    extend: {
      fontFamily :{
        "montserrat" : ["Montserrat"]
      }
    },
  },
  plugins: [],
}

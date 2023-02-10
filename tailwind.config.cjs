/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "../src/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "veryDark": '#111016', 
        "cardDark": '#24232b',
        "lightGray": '#878593',
        "green": 'rgb(40, 255, 174)',
      }
    },
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
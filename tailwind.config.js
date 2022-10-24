/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rose: ["Bitter-Rose", "cursive"],
        chillax: ["Chillax", "cursive"],
      },
    },
  },
  plugins: [],
}

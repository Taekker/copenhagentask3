/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#B8001D",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#111111",
    },
    extend: {
      fontFamily: {
        minfont: "'Poppins', sans-serif;",
        h1: "'Bebas Neue', cursive;",
        h1alt: "'Noto Serif Balinese', serif;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

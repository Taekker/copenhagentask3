/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#B8001D",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        minfont: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      darkBlue: "#003366",
      blue: "#0066CC",
      darkGray: "#576167",
      gray: "#B0B5BC",
      lightGray: "#D4D4D4",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};

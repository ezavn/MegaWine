/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        background: "#097179",
        yellow: "#ffdfad",
        yellow2: "#f5c073",
        yellow3: "#fde4c6",
        red: "#951028",
        brown: "#5a3721",
      },
      margin: {
        section: "70px",
        sectionMB: "50px",
      },
      spacing: {
        section: "70px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};

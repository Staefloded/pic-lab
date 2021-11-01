const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#E84F5A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        idle: ["Idlewild A", "serif"],
      },
      backgroundImage: {
        primary: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};

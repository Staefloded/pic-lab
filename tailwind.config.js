const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#E84F5A",
        "primary-one": "#A1A1A1",
        "primary-dark": "#404040",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        idle: ["Idlewild A", "serif"],
      },
      backgroundImage: {
        primary: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%)",
        overview: "url(/overview-bg.png)",
        news: "url(/bg-news.png)",
        footer: "linear-gradient(296.35deg, #000000 11.34%, rgba(0, 0, 0, 0) 180%)",
        line: "linear-gradient(305.47deg, #E14551 46.87%, #FF75B7 129.51%)",
      },
      gridTemplateColumns: {
        "3-cols": "repeat(3, 1fr)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
        custom: "inset 0px 99px 104px rgba(0, 0, 0, 0.8);",
      },
      dropShadow: {
        custom: "0px 24px 44px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};

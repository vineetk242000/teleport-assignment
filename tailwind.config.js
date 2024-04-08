/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    // ...
    require("@tailwindcss/forms")
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      primary: "#F25E1F",
      secondnary: "#ffdac1",
      white: "#ffff",
      fill: "#e5ebf0",
      light: "#192024",
      link: "#0b7b99",
      black: "#000000",
      "blue-100": "#D9E2E8",
      "gray-900": "#212A30"
    },
    container: {
      center: true
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.4rem",

      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem"
    },
    borderWidth: {
      default: "1px",
      2: "2px"
    }
  }
};

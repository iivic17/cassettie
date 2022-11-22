/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: "rgb(252, 71, 71)",
      "blue-dark": "rgb(16, 20, 30)",
      "blue-medium": "rgb(22, 29, 47)",
      "blue-light": "rgb(90, 105, 143)",
      white: "rgb(255, 255, 255)",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      medium: "500",
    },
    fontSize: {
      "body-s": "0.8125rem",
      "body-m": "0.9375rem",
      "heading-xs": "1.125rem",
      "heading-s": "1.5rem",
      "heading-m": "1.5rem",
      "heading-l": "2rem",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-children"),
  ],
};

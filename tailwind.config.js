module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paletterpurple: {
          50: "#dc97ff",
          100: "#d283ff",
          200: "#bd68ee",
          300: "#ab51e3",
          400: "#8b2fc9",
          500: "#6818a5",
          600: "#5a108f",
          700: "#4a0a77",
          800: "#3c0663",
          900: "#310055",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

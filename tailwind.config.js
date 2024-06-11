/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#fbaf85",
          100: "#d87d4a",
        },
        primary: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f1f1f1",
          300: "#979797",
        },
        secondary: {
          50: "#101010",
          100: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

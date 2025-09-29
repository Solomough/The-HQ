/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#6EE7B7",
          DEFAULT: "#34D399",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};

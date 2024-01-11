/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Lobster: ["Lobster", "sans-serif"],
      Roboto_C: ["Roboto Condensed", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        light: '#C782F1',
        default: '#A089D7',
      },
      white: "#ffffff",
      slate: "#9ca3af"
    },
    extend: {},
    fontFamily: {
      Bayon: ["Bayon", "sans-serif"],
    }
  },
  plugins: [],
}


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
        DEFAULT: '#A089D7',
        },
      white: "#ffffff",
      slate: "#9ca3af"
    },
    extend: {},
  },
  plugins: [],
}


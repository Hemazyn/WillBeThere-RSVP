/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '28.91px'],
      md: ['24px', '43.36px'],
      lg: ['32px', '57.81px'],
    },
    colors: {
      primary: {
        light: '#C782F1',
        default: '#A089D7',
        dark: "#8338EC",
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


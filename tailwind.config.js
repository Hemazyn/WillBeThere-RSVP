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
    extend: {
      width: {
        'sm': '24rem',
        'md1': '50%',
        'md2': '450px',
        '15': '60px',
        '25': '100px',
      },
      height: {
        'fit': 'fit-content',
        '15': '60px',
        '25': '100px',
      },
      spacing: {
        '37': '37px',
        '60': '60px',
      },
      padding: {
        '10': '10px',
      },
      borderRadius: {
        '10': '10px',
      },
    },
    fontFamily: {
      Bayon: ["Bayon", "sans-serif"],
    }
  },
  plugins: [],
}
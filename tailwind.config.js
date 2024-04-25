/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '0'],
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
      slate: "#9ca3af",
      red: "#FF0000",
    },
    extend: {
      width: {
        'md1': '50%',
        'md2': '450px',
        '10': '40px',
        '15': '60px',
        '25': '10px',
      },
      height: {
        '10': '40px',
        '15': '60px',
        '25': '10px',
      },
      padding: {
        '10': '10px',
      },
      borderRadius: {
        '10': '10px',
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(90deg, #140e1a 25%, #634480 100%)',
      },
    },
    fontFamily: {
      Bayon: ["Bayon", "sans-serif"],
    }
  },
  plugins: [],
}


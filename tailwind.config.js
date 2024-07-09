/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#020202',
        red: '#560101',
      },
      textColor: {
        DEFAULT: '#FFFFFF',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'black': '#020202',
        'red': '#560101',
      }),
    },
  },
  plugins: [],
}


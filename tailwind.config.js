/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        background: '#1f1f1f'
      },
      textColor: {
        DEFAULT: '#FFFFFF',
      }
    },

  },
  plugins: [],
}


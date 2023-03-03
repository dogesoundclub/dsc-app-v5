/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      neodgm: "neodgm",
    },
    extend: {
      transitionDuration: {
        '0': '0ms',
        '20000': '20000ms',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

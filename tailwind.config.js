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
      backgroundImage: (theme) => ({
        'himaskman660660': "url(/public/img/himaskman660660.png)" // 유효한 주소값.
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

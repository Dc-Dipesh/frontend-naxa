/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom:{
          100:"#ffdc1c",
          200:"#ffab00"
        }
      },
      fontFamily: {
        body: ['Nunito'],
      },
      boxShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
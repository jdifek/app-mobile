/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Use Nunito as the default font
      },
      gap:{
        '666':'7px',
        '300':'30px'
      },
      colors:{
        'stroke-blue':'#83BDF9',
        'stroke-text':'#0C6BC5'
      },
      lineHeight: {
        '47': '47px',
      },
      padding:{
        '150px':'50px'
      }
    },
  },
  plugins: [],
}
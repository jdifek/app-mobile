/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: 'var(--font-family)', // Добавьте вашу переменную шрифта
      },
    },
  },
  plugins: [],
}
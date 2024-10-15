/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFaimly: {
        sans: ["Roboto", "sans-serif"]
      },
      gridTemplateColumn: { "70/30": "70% 28%" }

    },
  },
  plugins: [],
}
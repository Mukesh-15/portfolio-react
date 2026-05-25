/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c", /* vibrant orange */
        background: "#fafafa", /* off-white/light grey */
        card: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      cursor: {
        hello: "url('/hello-cursor.svg'), pointer",
      }
    },
  },
  plugins: [],
}

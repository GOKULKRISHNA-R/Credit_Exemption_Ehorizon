/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pPink: "#ffd4d4",
        pYellow: "#ffffe8",
        pLGreen: "#cde990",
        pDGreen: "#aacb73",
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
};

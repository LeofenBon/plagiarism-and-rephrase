/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          smoky: "#131200",
          mantis: "#78BC61",
          lightpurple: "#faf0ff",
          sparkling: "#c61aff",
          purple: "#6E2594",
          salmon: "#E9806E",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hind: ["Hind Guntur", "sans-serif"],
        martel: ["Martel", "serif"],
      },
    },
  },
  plugins: [],
};

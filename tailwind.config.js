/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#02643C",
          "green-2": "#077749",
          lime: "#A8D500",
          bg: "#F2F7F5",
          "card-bg": "#EFEFEF",
          "text-muted": "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

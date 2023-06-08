/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')",
      },
      fontFamily: {
        "Visby-Regular": ["Visby Regular", "sans-sarif"],
        "Visby-Bold-Italic": ["Visby Bold Italic", "sans-sarif"],
        "Visby-Bold": ["Visby Bold", "sans-sarif"],
        "Visby-Extrabold-Italic": ["Visby Extrabold Italic", "sans-sarif"],
        "Visby-Extrabold": ["Visby Extrabold", "sans-serif"],
        "Visby-Heavy-Italic'": ["Visby Heavy Italic'ld", "sans-serif"],
        "Visby-Heavy": ["Visby Heavy", "sans-serif"],
        "Visby-Italic": ["Visby Italic", "sans-serif"],
        "Visby-Light-Italic": ["Visby Light Italic", "sans-serif"],
        "Visby-Light": ["Visby Light", "sans-serif"],
        "Visby-Medium-Italic": ["Visby Medium Italic", "sans-serif"],
        "Visby-Medium": ["Visby Medium", "sans-serif"],
        "Visby-Semibold-Italic": ["Visby Semibold Italic", "sans-serif"],
        "Visby-Semibold": ["Visby Semibold", "sans-serif"],
        "Visby-Thin-Italic": ["Visby Thin Italic", "sans-serif"],
        "Visby-Thin": ["Visby Thin", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

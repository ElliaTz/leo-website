/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        mist: "#D0D7DD",
        graphite: "#424242",
        midnight: "#333B4B",
        ocean: "#4269A7",
        sky: "#A0CEFD",
        ice: "#ACB9D2",
        dark: "#181C24",
        steel: "#5C6B8A",
        dark_blue_gray: "#455068",
        border: "#5C6B8A",
      },
      backgroundImage: {
        "why-now-gradient":
          "linear-gradient(to bottom, #333b4b 0%, #788bb1 89%, #333b4b 100%)",
      },
    },
  },
  plugins: [],
};

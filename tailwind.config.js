/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        NeutralSilver: "#F5F7FA",
        BrandPrimary: "#4CAF4F",
        NeutralDGrey: "#4D4D4D",
        NeutralGrey: "#717171",
      },
    },
  },
  plugins: [],
};

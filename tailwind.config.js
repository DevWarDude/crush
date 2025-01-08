/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "780px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        cursive: ["Great Vibe", "cursive"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundSize: {
        200: "200% 100%",
      },
      colors: {
        transparent: "transparent",
      },
      animation: {
        fall: "fall 5s linear infinite",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10%) rotate(0deg)" },
          "100%": { transform: "translateY(110vh) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

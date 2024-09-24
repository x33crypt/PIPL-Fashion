/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Manrope: "Manrope" },
      colors: { lightpurple: "#d1c9ff", darkLight: "#f5f5f5" },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "425px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

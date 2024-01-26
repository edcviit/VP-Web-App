/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 90s linear infinite",
        marquee2: "marquee2 100s linear infinite",
        wiggle: "wiggle 1s ease-out infinite",
        fly: "fly 12s ease-in-out infinite ",
        come:"come 3s ease-out"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-180%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-160%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-160%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        come: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fly: {
          // "0%": { transform: "translateX(0%)" },
          "10%": { transform: "translateY(-1600%)" },
          "90%": { transform: "translateY(-1600%)" },
        },
      },
    },
  },
  plugins: [],
};

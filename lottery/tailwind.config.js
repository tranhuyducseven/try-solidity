const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3CD89D",
        secondary: "#ADADAD",
        background: "#DCDCDC",
        button: "#2DD4BF",
      },
      backgroundImage: {
        auth: "url('/background/auth.png')",
        default: "url('/background/default.png')",
        dialog: "url('/background/dialog.png')",
      },
      gridTemplateColumns: {
        9: "repeat(9, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      default: ["Manrope"],
    },
    keyframes: {
      sliding: {
        "100%": { transform: "translateX(0)" },
        "0%": { transform: "translateX(100%)" },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },

      bounce: {
        "0%, 100%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(-8px)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },

    animation: {
      sliding: "sliding .6s linear",
      spin: "spin 1s linear infinite",
      bounce: "bounce 0.8s ease-in-out infinite",
    },
  },
  plugins: [require("@tailwindcss/typography")],
});

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};

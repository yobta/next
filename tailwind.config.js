/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@yobta/ui/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@yobta/ui/tailwind-preset")],
};

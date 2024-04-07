/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#374C5E",
      },
      width: {
        navBar: "1513px",
      },
      height: {
        navBar: "64px",
      },
    },
  },
  plugins: [],
};

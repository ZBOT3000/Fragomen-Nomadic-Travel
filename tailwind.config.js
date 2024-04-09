/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#374C5E",
        "dark-blue": "#22323F",
        "dark-gunmetal": "#1A2632",
        "main-blue": "#1E2022",
        "light-blue": "#C5E8FF",
        "fragomen-blue": "#14BDF3",
      },
      width: {
        navBar: "1513px",
      },
      height: {
        navBar: "64px",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      borderRadius: {
        "add-travellers": "37px",
      },
    },
  },
  plugins: [],
};

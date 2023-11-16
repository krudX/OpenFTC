/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "var(--ff-main)",
        alt: "var(--ff-alt)",
      },
      colors: {
        bg: "#151719",
        text: "#D9E3EA",
        "text-light": "#9BA9B4",
        "accent-purple": "#5D5DFF",
        "accent-light-purple": "#8D8DFF",
        "accent-dark-purple": "#4B4ACF",
        "accent-mint": "#C6F6D5",
        "accent-green": "#36A269",
        "accent-red": "#E53D3E",
        "light-gray": "#33363A",
        "dark-gray": "#25282C",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      colors: {
        mercury: "#E1E1E1",
        doveGray: "#737373",
        christi: "#50910E",
        mineShaft: "#414141",
        santasGray: "#9EA3B5",
        sanMarino: "#4E65B6",
        cultured : "#F3F5F9",
        blackCoral: "#545971",
        doveGray: "#707070",
      },
    },
    // colors: {
    //   'black-coral': '#545971',
    //   'cultured': '#F3F5F9',
    //   'dove-gray': '#707070',
    //   'mercury': '#E7E7E7',
    //   'silver': '#CBCBCB',
    //   'white': '#ffffff'
    // }
  },
  plugins: [],
};

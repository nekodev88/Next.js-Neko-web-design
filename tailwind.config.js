const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customWhite: '#FEFEFE',
        customBlack: '#070606',
        customYellow: '#e8b837',
        customYellow1: '#f3e194',
        customGray: '#E6E8EB',
        customGray1: '#5b5d5f',
        customBrown: '#e09b20'
      },
      backgroundImage: {
        'custom-curve-bg': "url('/picture/bg-curve.svg')"
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};
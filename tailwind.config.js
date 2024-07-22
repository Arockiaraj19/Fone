/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        after: 'after 2s cubic-bezier(.77,0,.18,1) forwards',
        before: 'before 2s cubic-bezier(.77,0,.18,1) forwards',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        'primary': '#F9F9F9',
      'secondary': '#363636',
     
      'black':'#141414',
      'grey':'#dfdfdf',
      'dark_grey':'#909090',
      'blue':"#038ede",
        white: "#fff",
        "anew-black": "#494949",
        midnightblue: {
          "100": "rgba(31, 10, 84, 0.08)",
          "200": "rgba(31, 10, 84, 0.16)",
        },
        darkslategray: "rgba(73, 73, 73, 0.8)",
        black: "#000",
        "new-1f": "#1f0a54",
        darkslateblue: {
          "100": "#625487",
          "200": "#523d87",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.03)",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(13, 3, 36, 0.19)",
        },
        ghostwhite: "#fbf9ff",
        blueviolet: "#6524dc",
        plum: "#d9c0ff",
        mediumblue: "#4f0fd7",
        gainsboro: "#e6e6e6",
        mediumslateblue: "#784cd5",
        thistle: "#bab5cb",
        steelblue: {
          "100": "#877aad",
          "200": "rgba(135, 122, 173, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "work-sans": "'Work Sans'",
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        sm: "14px",
        "11xl": "30px",
        "25xl": "44px",
        "38xl": "57px",
        "10xl": "29px",
        "29xl": "48px",
        mini: "15px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      lg: "18px",
      "3xl": "22px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
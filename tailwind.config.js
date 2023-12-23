/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.js"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "8xl": "1272px",
        "10xl": "1440px",
      },
      colors: {
        primary: {
          yellow: {
            50: "#F7F4D4",
            100: "#FFE492",
            300: "#F7DE3B",
            500: "#FBC920",
            700: "#FBA804",
            900: "#FF8800",
          },
          green: {
            50: "#EDFDDD",
            500: "#33A329",
          },
          blue: {
            50: "#E7F9FD",
            75: "#EBFFFF",
            100: "#E4F3FE",
            200: "#BEDFFE",
            250: "#93CEEC",
            275: "#4CA6E5",
            300: "#4889EA",
            400: "#317AE8",
            500: "#1A6BE5",
            600: "#0E5399",
            700: "#003366",
          },
          purple: {
            50: "#FEE6F2",
            500: "#CC66CC",
            700: "#8F1DC9",
            800: "#6614B8",
          },
          grey: {
            100: "#FAFAFA",
            150: "#F3F2F2",
            200: "#E0E0E0",
            250: "#D9D9D9",
            300: "#CFCDC9",
            400: "#9C9A96",
            500: "#696763",
            600: "#4F4E4B",
            700: "#42413E",
            800: "#363430",
            900: "#282724",
          },
          red: {
            50: "#FCD6CF",
            100: "#FEB8B1",
            300: "#FB6F60",
            500: "#E72113",
          },
          alert: "#ED4C41",
        },
      },
      fontSize: {
        "6xl": "64px",
        "5xl": "48px",
        "4xl": "40px",
        "3xl": "32px",
        xl: "24px",
        lg: "20px",
        base: "18px",
        md: "16px",
        sm: "14px",
        xs: "12px",
        mini: "10px",
        xxs: "8px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
      height: { "35vh": "35vh", "40vh": "40vh", "50vh": "50vh", 50: "200px" },
      minHeight: {
        "80vh": "80vh",
        "83vh": "83vh",
        "85vh": "85vh",
        "90vh": "90vh",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        pulse: {
          "50%": {
            opacity: ".5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },

};

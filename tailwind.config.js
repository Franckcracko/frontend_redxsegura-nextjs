import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#ff234b",
              foreground: "#000000",
            },
            focus: "#ff234b",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#ff234b",
              foreground: "#ffffff",
            },
            focus: "#ff234b",
          },
        },
      },
    }),
  ],
};

module.exports = config;

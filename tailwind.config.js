/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "var(--color-primary)",
      heading: "var(--color-heading)", 
      ...colors,
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, addComponents }) {
      addComponents({
        ".btn": {
          with: "fit-content",
          height: "fit-content",
          fontFamily: theme("fontFamily.gilroy"),
          fontWeight: theme("fontWeight.regular"),

          textAlign: "center",
          fontSize: theme("fontSize.base"),
          paddingLeft: theme("spacing.6"),
          paddingRight: theme("spacing.6"),
          paddingTop: theme("spacing.2"),
          paddingBottom: theme("spacing.2"),
          gap: theme("spacing.3"),
          display: "inline-flex",
          alignItems: "center",
          borderRadius: theme("borderRadius.md"),
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",

          "&:hover": {
            transform: "scale(1.05)",
          },
        },

        ".btn-primary": {
          backgroundColor: theme("colors.primary"),

          color: theme("colors.white"),
        },
        ".btn.btn-sm": {
          fontSize: theme("fontSize.sm"),
          paddingLeft: theme("spacing.3"),
          paddingRight: theme("spacing.3"),
          paddingTop: theme("spacing.1"),
          paddingBottom: theme("spacing.1"),
          gap: theme("spacing.2"),
          
        },
      })})
  ],
}
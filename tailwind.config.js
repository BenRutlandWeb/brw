module.exports = {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-br": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          green: "#12be88",
          blue: "#111827",
          pink: "#ff72b8",
        },
        radiate: {
          yellow: "#ffd460",
          red: "#EA5455",
          black: "#2d4059",
        },
        "international-womens-day": {
          dark: "#54347b",
          light: "#d84cb5",
        },
        "autism-awareness-day": {
          dark: "#132a61",
          light: "#2c52af",
        },
        "earth-day": {
          dark: "#1c6445",
          light: "#33c786",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      ringWidth: {
        6: "6px",
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              backgroundColor: "#eff2f6",
              color: "#111827",
              fontWeight: 500,
              borderRadius: "0.25rem",
              padding: "0 0.25rem",
            },
            "code::before": {
              content: null,
            },
            "code::after": {
              content: null,
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("./tailwindcss/aspect-ratio"),
  ],
};

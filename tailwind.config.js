module.exports = {
  content: ["./src/**/*.{astro,js,ts,md}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#12be88",
          blue: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
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
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("./tailwindcss/aspect-ratio"),
  ],
};

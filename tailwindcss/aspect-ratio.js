const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme("aspectRatio");

    let newUtilities = {};

    const aspectRatio = (dimension, key, value) => {
      return {
        [`.${e(`aspect-${dimension}-${key}`)}`]: {
          [`--tw-aspect-ratio-${dimension}`]: value,
          "aspect-ratio":
            "var(--tw-aspect-ratio-w, 1) / var(--tw-aspect-ratio-h)",
        },
      };
    };

    for (const [key, value] of Object.entries(values)) {
      newUtilities = {
        ...newUtilities,
        ...aspectRatio("w", key, value),
        ...aspectRatio("h", key, value),
      };
    }

    addUtilities(newUtilities);
  },
  {
    theme: {
      aspectRatio: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
    },
  }
);

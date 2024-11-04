/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgb(9,15,45)",
        orange: "rgb(220,107,38)",
        "orange-focus": "rgb(211,116,65)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-primary": {
          "@apply px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange-focus transition-transform duration-200":
            {},
          "&:hover": {
            "@apply scale-105": {}, // Slightly larger on hover
          },
        },
        ".btn-secondary": {
          "@apply px-4 py-2 border border-orange text-orange rounded-lg bg-transparent transition-transform duration-200":
            {},
          "&:hover": {
            "@apply scale-105 bg-orange-focus text-white": {},
          },
        },
        label: {
          "@apply font-semibold w-1/3": {},
        },
        input: {
          "@apply w-2/3 border border-gray-300 outline-none rounded p-2": {},
          "&:focus": {
            "@apply outline outline-orange-focus": {},
          },
        },
      });
    },
  ],
};

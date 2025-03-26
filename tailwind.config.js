/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};

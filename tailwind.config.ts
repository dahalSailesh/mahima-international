import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f8f6fc",
          100: "#f0ecf7",
          200: "#e2d9f0",
          300: "#cdbde4",
          400: "#b49bd5",
          500: "#9b7bc4",
          600: "#8b6bb5",
          700: "#7a5aa3",
          800: "#654a87",
          900: "#533e6e",
        },
        plum: {
          600: "#6b4f8a",
          700: "#5a3f78",
          800: "#4a3066",
        },
        cream: "#faf8f5",
        warm: "#f5f0eb",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

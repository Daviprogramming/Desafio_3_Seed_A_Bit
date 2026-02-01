import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#BE185D",
          light: "#FBCFE8",
          dark: "#9D174D",
        },
        background: "#FFF1F2",
        foreground: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;

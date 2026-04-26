import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF5F8',
          100: '#FFE8EF',
          200: '#FFD1DF',
          300: '#FFB0C7',
          400: '#E8789F',
          500: '#C94C7C',
          600: '#B03A68',
          700: '#8E2D53',
          800: '#6D223F',
          900: '#4C1A2D',
        },
        purple: {
          50: '#F5F0FA',
          100: '#EBE0F5',
          200: '#D7C1EB',
          300: '#B898D9',
          400: '#9A70C7',
          500: '#7B4C9E',
          600: '#6A3F8A',
          700: '#553371',
          800: '#412758',
          900: '#2D1B3E',
        },
        brand: {
          bg: '#FFF5F8',
          text: '#2D2A26',
          muted: '#6B6560',
          light: '#A39E98',
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-zen-maru-gothic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

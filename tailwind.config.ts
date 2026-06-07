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
          bg: '#FFFFFF',
          text: '#26221E',
          muted: '#6E665E',
          light: '#A8A099',
        },
        // 清潔感重視の新パレット（白基調＋上品なくすみローズ）
        ink: {
          DEFAULT: '#26221E',
          soft: '#6E665E',
          faint: '#A8A099',
        },
        ivory: '#FBF9F6',
        sand: '#F2ECE5',
        line: '#EAE4DC',
        accent: {
          DEFAULT: '#B26A82',
          dark: '#965069',
          soft: '#E7D2DA',
          tint: '#FAF1F4',
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        serif: ["var(--font-mincho)", "serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
};
export default config;

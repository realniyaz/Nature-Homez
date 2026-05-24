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
        nature: {
          bg: "#F9F8F6",       // Crisp, elegant off-white/cream
          dark: "#1D2D24",     // Sophisticated forest green/charcoal
          muted: "#233329",    // Slightly lighter tone for deep text variants
        },
        luxury: {
          gold: "#C5A880",     // Muted champagne gold accent
          goldHover: "#BCA374",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
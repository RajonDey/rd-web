// tailwind.config.ts
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        background: "#FFFFFF",
        text: "#000000",
        grayText: "#737373",
        accent: "#4A4A4A", // Soft charcoal for underlines and CTAs
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

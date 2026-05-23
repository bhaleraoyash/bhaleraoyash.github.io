import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0071e3",
        "accent-hover": "#0077ed",
        "bg-primary": "#000000",
        "bg-surface": "#1c1c1e",
        "bg-surface-2": "#2c2c2e",
        "text-primary": "#f5f5f7",
        "text-secondary": "#86868b",
        "text-tertiary": "#48484a",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "monospace"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 10s ease-in-out infinite -3s",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

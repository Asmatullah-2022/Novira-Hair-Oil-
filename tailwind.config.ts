import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "novira-black": "#0b0a09",
        "novira-charcoal": "#1a1714",
        "novira-brown": "#2c211a",
        "novira-gold": "#c9a24b",
        "novira-gold-light": "#e6c878",
        "novira-gold-dark": "#8a6a2c",
        "novira-cream": "#f7f1e6",
        "novira-beige": "#efe4d0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #e6c878 0%, #c9a24b 50%, #9c7a34 100%)",
        "dark-radial":
          "radial-gradient(circle at 50% 30%, rgba(201,162,75,0.18), transparent 60%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(201,162,75,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.25)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out both",
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        dark: "#0f172a",
        light: "#ffffff",
      },
      fontSize: {
        display: "clamp(3rem, 8vw, 8rem)",
        hero: "clamp(2.5rem, 6vw, 6rem)",
        section: "clamp(2rem, 4vw, 4rem)",
        large: "clamp(1.5rem, 3vw, 2.5rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        rotate: "rotate 20s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      spacing: {
        section: "8rem",
      },
    },
  },
  plugins: [],
};

export default config;

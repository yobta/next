import type { Config } from "tailwindcss";

export const animationPreset: Partial<Config> = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s ease forwards",
        "fade-out": "fade-out 0.5s ease forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
};

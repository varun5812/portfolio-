import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050507",
        surface: "#0f0f14",
        surfaceLight: "#1a1a24",
        accent: "#7c3aed",
        accentLight: "#a78bfa",
        neon: "#06b6d4",
        mint: "#10b981",
        violet: "#8b5cf6",
        coral: "#f43f5e",
        cyanGlow: "#22d3ee",
        blush: "#ec4899"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.15)",
        card: "0 25px 50px -12px rgba(0,0,0,0.6)",
        neon: "0 0 30px rgba(6,182,212,0.2)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

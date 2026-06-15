import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        beige: "#F5F0E6",
        warmGray: "#E8E2D6",
        ink: "#1A1A1A",
        inkLight: "#3D3D3D",
        inkMuted: "#6B6B6B",
        sakura: "#FFB7C5",
        sakuraDeep: "#FF8FAB",
        matcha: "#C5E1A5",
        matchaDeep: "#8BC34A",
        sky: "#AEC6CF",
        skyDeep: "#7BA7B3",
        lavender: "#D4C5F9",
        coral: "#FFB4A2"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.04)",
        card: "0 8px 30px rgba(0,0,0,0.06)",
        hover: "0 12px 40px rgba(0,0,0,0.1)",
        sakura: "0 8px 30px rgba(255,183,197,0.25)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" }
        },
        driftLeft: {
          "0%": { transform: "translateX(100vw) translateY(-20px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(-100px) translateY(100vh) rotate(360deg)", opacity: "0" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "drift-petal": "driftLeft 15s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
} satisfies Config;

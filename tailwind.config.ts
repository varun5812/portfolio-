import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        panel: "#0b1120",
        neon: "#00F5FF",
        violet: "#7B2EFF",
        cyanGlow: "#7af7ff",
        blush: "#ff78d6"
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,245,255,0.2)",
        violet: "0 0 45px rgba(123,46,255,0.22)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at top left, rgba(0,245,255,0.28), transparent 34%), radial-gradient(circle at top right, rgba(255,120,214,0.22), transparent 28%), radial-gradient(circle at bottom, rgba(123,46,255,0.28), transparent 34%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.5" },
          "70%": { transform: "scale(1.08)", opacity: "0.12" },
          "100%": { transform: "scale(1.12)", opacity: "0" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 3s ease-out infinite",
        marquee: "marquee 18s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

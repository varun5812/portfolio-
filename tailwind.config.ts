import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#07111f",
        panel: "#0f1a2b",
        neon: "#7cf2ff",
        mint: "#84f8c6",
        violet: "#8c7dff",
        coral: "#ff9a7a",
        cyanGlow: "#c2fbff",
        blush: "#ff7bcf"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 60px rgba(124,242,255,0.18)",
        violet: "0 20px 65px rgba(140,125,255,0.2)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at top left, rgba(124,242,255,0.22), transparent 34%), radial-gradient(circle at top right, rgba(255,123,207,0.16), transparent 28%), radial-gradient(circle at bottom, rgba(132,248,198,0.14), transparent 34%), radial-gradient(circle at 60% 40%, rgba(140,125,255,0.18), transparent 40%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0px, 0px, 0px)" },
          "50%": { transform: "translate3d(0px, -10px, 0px)" }
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
        drift: "drift 5s ease-in-out infinite",
        pulseRing: "pulseRing 3s ease-out infinite",
        marquee: "marquee 18s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

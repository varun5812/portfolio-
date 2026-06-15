import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#0F172A",
        bgSecondary: "#1E293B",
        accentPurple: "#A855F7",
        accentCyan: "#06B6D4",
        accentPink: "#EC4899"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        glassHover: "0 8px 32px 0 rgba(168, 85, 247, 0.25)"
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, rgba(168, 85, 247, 0.5) 0%, rgba(6, 182, 212, 0.5) 50%, rgba(236, 72, 153, 0.5) 100%)",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)", filter: "hue-rotate(0deg)" },
          "50%": { transform: "rotate(180deg) scale(1.2)", filter: "hue-rotate(90deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        }
      },
      animation: {
        aurora: "aurora 20s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

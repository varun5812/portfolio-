import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        warmLinen: "#F5F2EB",
        paper: "#FFFDFB",
        warmGray: "#EAE3D2",
        ink: "#1E1E24",
        inkLight: "#33333E",
        inkMuted: "#5B5B66",
        sakura: "#FFC4D0",
        sakuraDeep: "#FFB3C1",
        matcha: "#D2E8D3",
        matchaDeep: "#A7C9A7",
        sky: "#D0E1F9",
        skyDeep: "#8EAEC9",
        apricot: "#FAD5C5",
        apricotDeep: "#EFA07B"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      boxShadow: {
        cozy: "0 4px 20px rgba(91,91,102,0.03)",
        journal: "0 8px 30px rgba(30,30,36,0.04)",
        sketch: "4px 4px 0px 0px #1E1E24",
        sketchHover: "6px 6px 0px 0px #1E1E24",
        sakuraGlow: "0 8px 25px rgba(255,196,208,0.3)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" }
        },
        cloudDrift: {
          "0%": { transform: "translateX(-20%) translateY(0px)", opacity: "0.2" },
          "50%": { transform: "translateX(50%) translateY(-10px)", opacity: "0.4" },
          "100%": { transform: "translateX(120%) translateY(0px)", opacity: "0.2" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        drawSketch: {
          "to": { strokeDashoffset: "0" }
        }
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "cloud-drift-1": "cloudDrift 45s linear infinite",
        "cloud-drift-2": "cloudDrift 60s linear infinite",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      }
    }
  },
  plugins: []
} satisfies Config;

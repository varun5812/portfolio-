import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf("node_modules") === -1) return;

          if (
            id.indexOf("@react-three/drei") !== -1 ||
            id.indexOf("three-stdlib") !== -1 ||
            id.indexOf("troika") !== -1
          ) {
            return "drei-stack";
          }

          if (id.indexOf("@react-three/fiber") !== -1 || id.indexOf("node_modules/three/") !== -1) {
            return "three-core";
          }

          if (id.indexOf("framer-motion") !== -1 || id.indexOf("gsap") !== -1) {
            return "motion-stack";
          }

          if (id.indexOf("react") !== -1) {
            return "react-core";
          }
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});

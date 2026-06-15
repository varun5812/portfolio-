import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AuroraBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-bgMain text-slate-200 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Aurora Layers */}
        <motion.div
          animate={{
            x: ["0%", "5%", "-5%", "0%"],
            y: ["0%", "-5%", "5%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-accentPurple/20 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: ["0%", "-5%", "5%", "0%"],
            y: ["0%", "5%", "-5%", "0%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[10%] h-[60vh] w-[60vw] rounded-full bg-accentCyan/15 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: ["0%", "8%", "-8%", "0%"],
            y: ["0%", "-8%", "8%", "0%"],
            scale: [1, 1.1, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] h-[70vh] w-[80vw] rounded-full bg-accentPink/15 blur-[120px] mix-blend-screen"
        />
        
        {/* Static Grid Overlay for texture */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwSDB2NDBoNDBWMEoiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBkPSJNMCAwdjQwaDFWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+Cjwvc3ZnPg==')] opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

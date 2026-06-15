import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DashboardSection } from "./components/DashboardSection";
import { FloatingDock } from "./components/FloatingDock";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { LoadingScreen } from "./components/LoadingScreen";
import { ProjectsSection } from "./components/ProjectsSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-base font-body text-white">
      <LoadingScreen ready={ready} />
      <ScrollProgress />
      <FloatingDock />

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-violet/[0.07] blur-[120px]" />
        <div className="absolute -right-[15%] top-[40%] h-[500px] w-[500px] rounded-full bg-neon/[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <DashboardSection />
        <ContactSection />
      </motion.main>
    </div>
  );
}

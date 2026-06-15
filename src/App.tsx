import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { AssistantWidget } from "./components/AssistantWidget";
import { ContactSection } from "./components/ContactSection";
import { DashboardSection } from "./components/DashboardSection";
import { FloatingDock } from "./components/FloatingDock";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { LoadingScreen } from "./components/LoadingScreen";
import { ProjectsSection } from "./components/ProjectsSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { SkillsSection } from "./components/SkillsSection";
import { BackgroundDecoder } from "./components/BackgroundDecoder";


export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-base font-body text-white">
      <BackgroundDecoder />
      <LoadingScreen ready={ready} />
      <ScrollProgress />
      <FloatingDock />
      <AssistantWidget />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
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

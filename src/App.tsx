import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { AboutSection } from "./components/AboutSection";
import { AssistantWidget } from "./components/AssistantWidget";
import { ContactSection } from "./components/ContactSection";
import { CustomCursor } from "./components/CustomCursor";
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

  useEffect(() => {
    const glow = document.querySelector<HTMLElement>("[data-ambient-glow]");
    if (!glow) return;

    const handleMove = (event: MouseEvent) => {
      gsap.to(glow, {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-base font-body text-white">
      <LoadingScreen ready={ready} />
      <ScrollProgress />
      <CustomCursor />
      <FloatingDock />
      <AssistantWidget />

      <div
        data-ambient-glow
        className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[140px]"
      />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.22)_52%,rgba(5,8,22,0.88)_100%)]" />

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

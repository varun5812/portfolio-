import { AuroraBackground } from "./components/ui/AuroraBackground";
import { FloatingDock } from "./components/ui/FloatingDock";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { JourneySection } from "./components/sections/JourneySection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { WorkflowSection } from "./components/sections/WorkflowSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  return (
    <AuroraBackground>
      <FloatingDock />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <WorkflowSection />
      <ContactSection />
    </AuroraBackground>
  );
}

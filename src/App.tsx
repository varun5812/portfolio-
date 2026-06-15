import { AuroraBackground } from "./components/ui/AuroraBackground";
import { HeroSection } from "./components/sections/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { WorkflowSection } from "./components/sections/WorkflowSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  return (
    <AuroraBackground>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkflowSection />
      <ContactSection />
    </AuroraBackground>
  );
}

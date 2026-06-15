import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { JourneySection } from "./components/sections/JourneySection";
import { WorkflowSection } from "./components/sections/WorkflowSection";
import { ContactSection } from "./components/sections/ContactSection";
import { SakuraPetals } from "./components/ui/SakuraPetals";
import { Navbar } from "./components/ui/Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream font-body text-ink">
      <SakuraPetals />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <WorkflowSection />
        <ContactSection />
      </main>
      <footer className="border-t border-warmGray/60 bg-white py-8 text-center text-sm text-inkMuted">
        <p>© 2025 Varun Kumar H C · Built with passion</p>
      </footer>
    </div>
  );
}

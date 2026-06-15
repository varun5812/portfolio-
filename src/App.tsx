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
    <div className="relative min-h-screen bg-cream font-body text-ink overflow-x-hidden">
      {/* Background Anime Particles and Clouds */}
      <SakuraPetals />

      {/* Floating Bookmark Navbar */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <WorkflowSection />
        <ContactSection />
      </main>

      {/* Cozy Footer */}
      <footer className="border-t-[3px] border-ink bg-paper py-10 text-center relative z-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-sm font-bold text-ink">
            varun<span className="text-sakuraDeep font-display">.</span>
          </p>
          <p className="text-xs font-bold text-inkMuted uppercase tracking-wider">
            © 2025 Varun Kumar H C · Handcrafted with Passion 🌸
          </p>
        </div>
      </footer>
    </div>
  );
}

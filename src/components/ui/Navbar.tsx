import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionMeta, socialLinks } from "../../data/portfolio";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = sectionMeta.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sectionMeta[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 px-4 sm:px-8"
          : "py-6 px-4 sm:px-8"
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 py-3 transition-all duration-300 rounded-[20px] ${
          scrolled
            ? "border-[3px] border-ink bg-paper shadow-sketch"
            : "bg-transparent border-[3px] border-transparent"
        }`}
      >
        <a href="#hero" className="font-serif text-xl font-bold tracking-tight text-ink flex items-center gap-1">
          <span>varun</span>
          <span className="text-sakuraDeep font-display">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {sectionMeta.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeSection === item.id
                  ? "text-ink"
                  : "text-inkMuted hover:text-ink"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-[-4px] left-2 right-2 h-1 rounded bg-sakuraDeep"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-inkMuted/20 text-inkMuted transition-all duration-300 hover:border-ink hover:text-ink hover:bg-beige"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-inkMuted/20 text-inkMuted transition-all duration-300 hover:border-ink hover:text-ink hover:bg-beige"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-xl border-[2.5px] border-ink bg-sakuraDeep px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#1E1E24]"
          >
            Resume <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border-[2.5px] border-ink bg-cream text-ink md:hidden shadow-[2px_2px_0px_0px_#1E1E24]"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer (Notebook Paper) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 border-[3px] border-ink bg-paper rounded-[20px] p-6 shadow-sketch md:hidden max-w-5xl mx-auto"
          >
            <div className="flex flex-col gap-3">
              {sectionMeta.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-2 ${
                    activeSection === item.id
                      ? "bg-warmLinen border-ink text-ink"
                      : "border-transparent text-inkMuted hover:border-warmGray hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-[2px] bg-warmGray my-2" />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink text-ink bg-cream shadow-[2px_2px_0px_0px_#1E1E24]"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink text-ink bg-cream shadow-[2px_2px_0px_0px_#1E1E24]"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border-[2.5px] border-ink bg-sakuraDeep px-5 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0px_0px_#1E1E24]"
                >
                  Download Resume <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

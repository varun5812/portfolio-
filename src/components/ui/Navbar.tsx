import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionMeta, socialLinks } from "../../data/portfolio";
import { Github, Linkedin, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 border-b border-warmGray/60 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#hero" className="font-display text-lg font-bold text-ink">
          V<span className="text-sakuraDeep">.</span>K
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {sectionMeta.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-inkMuted transition-colors hover:bg-beige hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-inkMuted transition-colors hover:bg-beige hover:text-ink">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-inkMuted transition-colors hover:bg-beige hover:text-ink">
            <Linkedin size={18} />
          </a>
          <a href={socialLinks.resume} className="btn-primary py-2 px-5 text-xs">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-ink">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-warmGray/60 bg-cream px-6 py-4 md:hidden"
        >
          {sectionMeta.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-inkMuted transition-colors hover:bg-beige hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

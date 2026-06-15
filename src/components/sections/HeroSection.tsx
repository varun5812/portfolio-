import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroRoles, socialLinks, stats } from "../../data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const currentRole = useMemo(() => heroRoles[roleIndex], [roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 pt-32 pb-16 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-warmLinen px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink shadow-[2.5px_2.5px_0px_0px_#1E1E24]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-matchaDeep opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-matchaDeep border border-ink"></span>
              </span>
              2025 Graduate · Open for Roles
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-ink">
              <span className="serif italic font-normal text-inkMuted block mb-1">Konnichiwa, I am</span>
              <span className="font-display font-black">Varun Kumar</span>
              <span className="text-sakuraDeep font-display font-black"> H C</span>
            </h1>

            {/* Rotating Role */}
            <div className="mt-4 flex items-center gap-2.5 min-h-[36px]">
              <div className="h-6 w-1 rounded bg-sakuraDeep" />
              <div className="overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="font-serif italic text-lg sm:text-xl font-bold text-inkLight"
                  >
                    {currentRole}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-inkMuted">
              I am a passionate Artificial Intelligence & Machine Learning graduate from 2025. 
              I design clean data cleaning pipelines, perform predictive model tuning, and explore the vast frontiers of generative AI. Let's build something delightful!
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Download size={14} className="stroke-[3]" /> Resume
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                Projects <ArrowRight size={14} className="stroke-[3]" />
              </a>
            </div>

            {/* Stats as sticky notes */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="rounded-xl border-[2.5px] border-ink bg-paper p-3 shadow-sketch text-center"
                >
                  <p className="font-serif text-2xl font-bold text-ink">{s.value}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-inkMuted">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Polaroid Sketch Photo */}
          <motion.div
            initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
            animate={{ opacity: 1, rotate: -2, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-[340px]"
          >
            {/* Soft shadow blob behind */}
            <div className="absolute inset-4 -z-10 rounded-[20px] bg-sakuraDeep/20 blur-xl transform translate-x-2 translate-y-3" />

            {/* Polaroid frame */}
            <div className="border-[3.5px] border-ink bg-paper p-4 rounded-xl shadow-sketch">
              <div className="relative overflow-hidden rounded-lg border-2 border-ink aspect-square bg-warmLinen">
                <img
                  src="/images/hero_anime.png"
                  alt="Varun Workspace Illustration"
                  className="h-full w-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="pt-4 pb-1 text-center">
                <p className="font-serif italic text-sm font-bold text-inkLight tracking-tight">
                  "Exploring new AI dimensions..."
                </p>
                <div className="mt-2 mx-auto w-8 h-[2px] bg-sakuraDeep" />
              </div>
            </div>

            {/* Cute stickers */}
            <div className="absolute -top-4 -left-4 transform -rotate-12 rounded-md border-2 border-ink bg-matchaDeep px-2.5 py-0.5 text-[9px] font-bold uppercase text-ink shadow-[2px_2px_0px_0px_#1E1E24]">
              Data Science
            </div>
            <div className="absolute -bottom-2 -right-2 transform rotate-6 rounded-md border-2 border-ink bg-apricot px-2.5 py-0.5 text-[9px] font-bold uppercase text-ink shadow-[2px_2px_0px_0px_#1E1E24]">
              AIML B.E.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

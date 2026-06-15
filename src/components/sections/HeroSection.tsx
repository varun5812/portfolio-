import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { heroRoles, socialLinks, stats } from "../../data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = useMemo(() => heroRoles[roleIndex], [roleIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((v) => (v + 1) % heroRoles.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 sm:px-8 lg:px-12">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] top-[5%] h-[500px] w-[500px] rounded-full bg-sakura/20 blur-[100px]" />
        <div className="absolute -left-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-sky/20 blur-[100px]" />
        <div className="absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full bg-lavender/15 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-matchaDeep animate-pulse" />
              Open to opportunities · 2025 Graduate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-8 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl"
            >
              <span className="serif italic text-inkLight">Hi, I'm</span>
              <br />
              <span className="font-display">Varun Kumar</span>
              <span className="gradient-text-warm font-display"> H C</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-5 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-gradient-to-r from-sakura to-transparent" />
              <span className="font-display text-lg text-inkMuted">
                {currentRole}
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-sakuraDeep align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-inkMuted md:text-lg"
            >
              Fresher Data Scientist building intelligent systems with clean data workflows,
              practical ML models, and generative AI exploration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href={socialLinks.resume} className="btn-primary">
                <Download size={16} /> Resume
              </a>
              <a href="#projects" className="btn-secondary">
                <ArrowRight size={16} /> View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-inkMuted">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-warmGray/60 bg-white shadow-card">
              <img
                src="/images/hero_anime.png"
                alt="Data Science workspace illustration"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden rounded-xl border border-warmGray/60 bg-white px-4 py-3 shadow-card lg:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-sakuraDeep">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-ink">ML + GenAI</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-16 hidden rounded-xl border border-warmGray/60 bg-white px-4 py-3 shadow-card lg:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-skyDeep">Internship</p>
              <p className="mt-1 text-sm font-semibold text-ink">AIML Labs</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-inkMuted"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

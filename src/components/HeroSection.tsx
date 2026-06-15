import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  Mouse,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { heroRoles, socialLinks, stats } from "../data/portfolio";

const SceneCanvas = lazy(() =>
  import("./SceneCanvas").then((module) => ({ default: module.SceneCanvas }))
);

const focusBadges = [
  "Data Preprocessing",
  "EDA",
  "Machine Learning",
  "Deep Learning",
  "Generative AI"
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = useMemo(() => heroRoles[roleIndex], [roleIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((value) => (value + 1) % heroRoles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 pb-12 pt-24 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-aurora opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="absolute left-[10%] top-20 h-56 w-56 rounded-full bg-neon/12 blur-[120px]" />
      <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-violet/18 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyanGlow"
          >
            <Sparkles size={14} />
            AI / ML Graduate 2025
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] text-white sm:text-6xl xl:text-[4.6rem]"
          >
            Varun Kumar H C
            <span className="mt-4 block bg-gradient-to-r from-neon via-white to-mint bg-clip-text text-transparent">
              Building cleaner data stories and practical AI systems.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 flex min-h-[3rem] items-center"
          >
            <span className="font-display text-base tracking-[0.28em] text-slate-300 sm:text-xl">
              {currentRole}
              <span className="ml-2 inline-block h-7 w-[2px] animate-pulse bg-mint align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Fresher data scientist with hands-on experience in data preprocessing, exploratory
            data analysis, machine learning, deep learning basics, and generative AI workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href={socialLinks.resume} className="button-primary">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="button-secondary">
              <ArrowRight size={18} />
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="icon-chip">
              <Github size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="icon-chip">
              <Linkedin size={18} />
            </a>
            <a href={socialLinks.email} className="icon-chip">
              <Mail size={18} />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            {focusBadges.map((badge, index) => (
              <motion.div
                key={badge}
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: index * 0.18, duration: 4.5, repeat: Infinity }}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-xl"
              >
                {badge}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + index * 0.08, duration: 0.55 }}
                className="rounded-[1.6rem] border border-white/10 bg-slate-950/[0.35] p-4 backdrop-blur-xl"
              >
                <div className="font-display text-2xl text-white">{stat.value}</div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-[34rem]">
            <div className="absolute -left-4 top-10 hidden rounded-3xl border border-white/10 bg-slate-950/[0.55] px-4 py-3 shadow-glow backdrop-blur-xl lg:block">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyanGlow">Current Role</p>
              <p className="mt-2 text-sm font-semibold text-white">Data Scientist Intern</p>
              <p className="text-xs text-slate-400">AIML LABS PVT LTD</p>
            </div>

            <div className="absolute -right-4 bottom-12 hidden rounded-3xl border border-white/10 bg-slate-950/[0.55] px-4 py-3 shadow-violet backdrop-blur-xl lg:block">
              <div className="flex items-center gap-2 text-coral">
                <BriefcaseBusiness size={16} />
                <span className="text-[11px] uppercase tracking-[0.22em]">Deployment Ready</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">Render, Streamlit, and app-first ML projects</p>
            </div>

            <div className="glass-panel relative overflow-hidden p-4 md:p-5 scanline-overlay">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,242,255,0.16),transparent_30%),radial-gradient(circle_at_bottom,rgba(140,125,255,0.16),transparent_34%)]" />
              <Suspense
                fallback={
                  <div className="h-[430px] rounded-[1.8rem] border border-white/10 bg-slate-950/40" />
                }
              >
                <SceneCanvas />
              </Suspense>
              <div className="pointer-events-none absolute left-6 top-6 rounded-2xl border border-white/10 bg-slate-950/[0.55] px-4 py-3 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyanGlow">Focus Engine</p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {"EDA -> ML -> Deployment"}
                </p>
              </div>
              <div className="pointer-events-none absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-950/[0.55] px-4 py-3 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyanGlow">Resume Backed</p>
                <p className="mt-2 text-sm text-slate-300">Projects aligned to internship and applied learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-slate-400"
      >
        <span>Scroll</span>
        <div className="flex h-14 w-8 items-start justify-center rounded-full border border-white/15 p-2">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-cyanGlow"
          >
            <Mouse size={14} />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
}

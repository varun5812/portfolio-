import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Mouse, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { heroRoles, socialLinks } from "../data/portfolio";
import { SceneCanvas } from "./SceneCanvas";

const floatingBadges = ["AI", "ML", "DL", "NLP", "CV", "GEN-AI"];

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
      className="relative min-h-screen overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-aurora opacity-90" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.16]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyanGlow"
          >
            <Trophy size={14} />
            Futuristic AI Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 max-w-4xl font-display text-4xl uppercase leading-tight text-white sm:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m <span className="text-neon">Varun Kumar H C</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 flex min-h-[3rem] items-center"
          >
            <span className="font-display text-lg uppercase tracking-[0.28em] text-slate-300 sm:text-2xl">
              {currentRole}
              <span className="ml-2 inline-block h-7 w-[2px] animate-pulse bg-cyan-300 align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Aspiring Data Scientist and Machine Learning Engineer crafting intelligent systems,
            data-led decisions, and premium AI experiences with a futuristic product mindset.
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
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="icon-chip">
              <Trophy size={18} />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-4">
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge}
                animate={{ y: [0, -10, 0] }}
                transition={{ delay: index * 0.25, duration: 4.5, repeat: Infinity }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200 backdrop-blur-xl"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <SceneCanvas />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.32em] text-slate-400"
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

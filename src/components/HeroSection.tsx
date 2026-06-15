import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { heroRoles, socialLinks, stats } from "../data/portfolio";

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
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 sm:px-8 lg:px-12"
    >
      {/* Hero background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-violet/[0.12] via-accent/[0.04] to-transparent blur-[40px]" />
        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-neon/[0.06] blur-[80px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities · 2025 Graduate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-8 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl"
            >
              Varun Kumar
              <span className="mt-2 block gradient-text">H C</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              <span className="font-display text-lg tracking-wide text-zinc-400 sm:text-xl">
                {currentRole}
                <span className="ml-1.5 inline-block h-5 w-[2px] animate-pulse bg-accent align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              Fresher Data Scientist with hands-on experience in preprocessing,
              EDA, machine learning, deep learning, and generative AI workflows.
              Building practical AI systems that solve real problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href={socialLinks.resume} className="btn-primary">
                <Download size={16} />
                Download Resume
              </a>
              <a href="#projects" className="btn-secondary">
                <ArrowRight size={16} />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-10 flex items-center gap-3"
            >
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub" },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: socialLinks.email, icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-zinc-500 transition-all duration-300 hover:border-accent/30 hover:text-white hover:bg-white/[0.06]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column — profile snapshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card relative overflow-hidden p-8">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-neon/10 opacity-40" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    Profile Snapshot
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
                    >
                      <div className="font-display text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Pipeline visualization */}
                <div className="mt-8 flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                  {["Collect", "Clean", "Analyze", "Model", "Deploy"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            i <= 3 ? "bg-accent" : "bg-zinc-700"
                          } ${i === 3 ? "animate-pulse" : ""}`}
                        />
                        <span className="text-[8px] uppercase tracking-wider text-zinc-600 sm:text-[9px]">
                          {step}
                        </span>
                      </div>
                      {i < 4 && (
                        <div className={`h-px w-3 sm:w-5 ${i < 3 ? "bg-accent/30" : "bg-zinc-800"}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden rounded-xl border border-white/[0.06] bg-surface/90 px-4 py-3 shadow-card backdrop-blur-xl lg:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-accent">Current Focus</p>
              <p className="mt-1 text-sm font-medium text-white">ML + GenAI</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-16 hidden rounded-xl border border-white/[0.06] bg-surface/90 px-4 py-3 shadow-card backdrop-blur-xl lg:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-neon">Internship</p>
              <p className="mt-1 text-sm font-medium text-white">AIML Labs</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

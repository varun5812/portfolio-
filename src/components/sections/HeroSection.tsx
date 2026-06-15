import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { socialLinks } from "../../data/portfolio";
import { MagneticButton } from "../ui/MagneticButton";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 sm:px-8 pt-20 pb-32">
      {/* Floating AI Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: Math.random() * 1000, x: Math.random() * 1000, opacity: 0 }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-accentPurple/30 bg-accentPurple/10 px-4 py-1.5 text-xs font-medium text-accentPurple mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentCyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accentCyan"></span>
          </span>
          AI & ML Engineer • 2025 Graduate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block text-white mb-2">Varun Kumar</span>
          <span className="gradient-text">H C</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed"
        >
          Building intelligent systems and practical machine learning workflows. 
          Specializing in data pipelines, generative AI, and advanced analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 z-20"
        >
          <MagneticButton href={socialLinks.resume} className="glass-button-primary group px-8 py-4">
            <span className="flex items-center gap-2">
              Download Resume
              <Download size={18} className="transition-transform group-hover:-translate-y-1" />
            </span>
          </MagneticButton>
          
          <MagneticButton href="#projects" className="glass-button group px-8 py-4">
            <span className="flex items-center gap-2">
              View Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

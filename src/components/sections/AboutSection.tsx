import { motion } from "framer-motion";
import { aboutHighlights, focusAreas } from "../../data/portfolio";
import { BrainCircuit, Database, BarChart3, Sparkles, Workflow } from "lucide-react";

const focusIcons = [Database, BarChart3, BrainCircuit, Sparkles, Workflow];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-white sm:text-5xl"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-400"
          >
            Building practical AI systems with clean data workflows
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Main About Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-10 flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">The Journey</h3>
            <p className="text-base leading-relaxed text-slate-300">
              I am an Artificial Intelligence and Machine Learning graduate from 2025,
              motivated to solve real-world problems using clean data workflows,
              thoughtful analysis, and practical AI systems.
            </p>
            <div className="mt-8 space-y-4">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-accentPink/30 hover:bg-white/10"
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accentPink shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i] || Sparkles;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-panel glass-panel-hover p-6 group ${i === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-accentCyan transition-colors group-hover:bg-accentCyan/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {area.tags.map((tag) => (
                      <span key={tag} className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

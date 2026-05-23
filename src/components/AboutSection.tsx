import { motion } from "framer-motion";
import { aboutHighlights, stats, timeline } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering Intelligence With Curiosity"
          description="A premium snapshot of the mindset, foundation, and AI direction behind Varun Kumar H C."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel p-8">
            <p className="text-lg leading-8 text-slate-200">
              Artificial Intelligence graduate in 2025, passionate about solving real-world
              problems with data, machine learning, and meaningful AI systems.
            </p>
            <div className="mt-8 space-y-4">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.65 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 p-5"
                >
                  <div className="font-display text-3xl text-neon">{stat.value}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8">
            <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-neon before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14, duration: 0.6 }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyanGlow">
                    {index + 1}
                  </span>
                  <p className="text-sm uppercase tracking-[0.22em] text-cyanGlow">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

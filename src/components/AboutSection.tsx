import { motion } from "framer-motion";
import { aboutHighlights, focusAreas, timeline } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { BrainCircuit, Database, BarChart3, Sparkles, Workflow } from "lucide-react";

const focusIcons = [Database, BarChart3, BrainCircuit, Sparkles, Workflow];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Building Practical AI Systems"
          description="AIML graduate ready to contribute strong data fundamentals, practical ML skills, and growing GenAI capability to real-world teams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-8">
            <p className="text-lg leading-relaxed text-zinc-300">
              I am an Artificial Intelligence and Machine Learning graduate from 2025,
              motivated to solve real-world problems using clean data workflows,
              thoughtful analysis, and practical AI systems.
            </p>
            <div className="mt-8 space-y-3">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-zinc-400">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 mb-8">
              Career Timeline
            </h3>
            <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent/40 before:to-transparent">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.year}
                  </span>
                  <h4 className="mt-1.5 text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {focusAreas.map((area, i) => {
            const Icon = focusIcons[i];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card-hover p-5 group"
              >
                {Icon && <Icon className="mb-3 h-5 w-5 text-accent transition-colors group-hover:text-accentLight" />}
                <h3 className="text-sm font-semibold text-white">{area.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{area.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

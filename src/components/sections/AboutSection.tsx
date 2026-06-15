import { motion } from "framer-motion";
import { aboutHighlights, focusAreas } from "../../data/portfolio";
import { BrainCircuit, Database, BarChart3, Sparkles, Workflow } from "lucide-react";

const focusIcons = [Database, BarChart3, BrainCircuit, Sparkles, Workflow];
const focusColors = [
  "bg-sky/20 text-skyDeep",
  "bg-matcha/30 text-matchaDeep",
  "bg-sakura/20 text-sakuraDeep",
  "bg-lavender/30 text-purple-600",
  "bg-coral/20 text-orange-600"
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            Building Practical <span className="serif italic text-inkLight">AI Systems</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="paper-card p-8"
          >
            <p className="text-base leading-relaxed text-inkLight">
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
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-3 rounded-xl bg-beige/50 p-4"
                >
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sakura" />
                  <p className="text-sm leading-relaxed text-inkMuted">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              const color = focusColors[i];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`paper-card-hover p-5 group ${i === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-ink">{area.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-inkMuted">{area.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-beige px-2 py-0.5 text-[10px] font-medium text-inkMuted">
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

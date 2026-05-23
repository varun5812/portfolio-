import { motion } from "framer-motion";
import { aboutHighlights, focusAreas, stats, timeline } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A Fresher Profile Built Around Strong Foundations"
          description="The goal of this portfolio is to show recruiter-relevant value clearly: solid data fundamentals, practical machine learning, and growing generative AI capability."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel p-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              I am an Artificial Intelligence and Machine Learning graduate from 2025, motivated
              to solve real-world problems using clean data workflows, thoughtful analysis, and
              practical AI systems.
            </p>

            <div className="mt-8 grid gap-4">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.65 }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-slate-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="rounded-[1.6rem] border border-white/10 bg-slate-950/[0.35] p-5 backdrop-blur-xl"
                >
                  <div className="font-display text-3xl text-white">{stat.value}</div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
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
                    <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-neon/30 bg-neon/10 text-xs font-semibold text-cyanGlow">
                      {index + 1}
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cyanGlow">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-panel p-6"
            >
              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

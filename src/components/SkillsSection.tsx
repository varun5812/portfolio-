import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const activeGroup = useMemo(
    () => skills.find((s) => s.category === activeCategory) ?? skills[0],
    [activeCategory]
  );

  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          description="Core competencies across the data science lifecycle — from raw data to deployed models."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skills.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeCategory === group.category
                  ? "bg-accent text-white shadow-glow"
                  : "border border-white/[0.06] bg-white/[0.03] text-zinc-500 hover:text-white hover:border-white/10"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeGroup.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="glass-card p-8">
            <activeGroup.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-5 font-display text-2xl font-bold text-white">
              {activeGroup.category}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{activeGroup.intro}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {activeGroup.items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="glass-card p-4 hover:border-accent/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zinc-300">{skill.name}</span>
                  <span className="font-display text-sm font-semibold text-accent">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.7 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent via-violet to-neon"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

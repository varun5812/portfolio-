import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const activeGroup = useMemo(
    () => skills.find((item) => item.category === activeCategory) ?? skills[0],
    [activeCategory]
  );

  return (
    <AnimatedSection id="skills" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Built For The Real Work Behind Data Science"
          description="The strongest fresher signal is not just listing tools, but showing the workflow areas I can already contribute to with confidence."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                activeCategory === group.category
                  ? "border-neon/40 bg-neon/10 text-cyanGlow"
                  : "border-white/10 bg-white/[0.06] text-slate-400 hover:text-white"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeGroup.category}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="glass-panel p-8">
            <activeGroup.icon className="h-10 w-10 text-neon" />
            <h3 className="mt-5 font-display text-2xl text-white">{activeGroup.category}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{activeGroup.intro}</p>
            <div className="mt-8 grid gap-3">
              {activeGroup.items.slice(0, 4).map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-950/[0.35] p-4 text-sm text-slate-200"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {activeGroup.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass-panel p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                  <span className="font-display text-neon">{skill.level}%</span>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-neon via-mint to-violet shadow-glow"
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

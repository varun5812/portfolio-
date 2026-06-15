import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const activeGroup = useMemo(
    () => skills.find((s) => s.category === activeCategory) ?? skills[0],
    [activeCategory]
  );

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            Technical <span className="serif italic text-inkLight">Arsenal</span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skills.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                activeCategory === group.category
                  ? "bg-ink text-cream shadow-hover"
                  : "border border-warmGray bg-white text-inkMuted hover:border-sakura/50 hover:text-ink"
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
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Category info */}
          <div className="paper-card p-8">
            <activeGroup.icon className="h-8 w-8 text-sakuraDeep" />
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">
              {activeGroup.category}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-inkMuted">{activeGroup.intro}</p>
          </div>

          {/* Skill bars */}
          <div className="grid gap-3 sm:grid-cols-2">
            {activeGroup.items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="paper-card p-4 hover:border-sakura/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-ink">{skill.name}</span>
                  <span className="font-display text-sm font-bold text-sakuraDeep">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-beige">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.7 }}
                    className="h-full rounded-full bg-gradient-to-r from-sakura via-coral to-lavender"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

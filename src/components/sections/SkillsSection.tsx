import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../../data/portfolio";

const tabColors = [
  "bg-sky border-skyDeep",
  "bg-matcha border-matchaDeep",
  "bg-sakura border-sakuraDeep",
  "bg-purple-200 border-purple-400",
  "bg-apricot border-apricotDeep",
  "bg-yellow-200 border-yellow-400"
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const activeGroup = useMemo(
    () => skills.find((s) => s.category === activeCategory) ?? skills[0],
    [activeCategory]
  );

  const activeIndex = useMemo(
    () => skills.findIndex((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-12 bg-cream border-t-[3px] border-ink">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            02. Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            Technical & <span className="serif italic text-inkMuted font-normal">Methodological Skills</span>
          </motion.h2>
        </div>

        {/* Categories Tabs as stickers */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skills.map((group, idx) => {
            const isActive = activeCategory === group.category;
            return (
              <button
                key={group.category}
                type="button"
                onClick={() => setActiveCategory(group.category)}
                className={`relative rounded-xl border-[2.5px] border-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[2px_2px_0px_0px_#1E1E24] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1E1E24] ${
                  isActive
                    ? "bg-ink text-cream -translate-y-0.5"
                    : "bg-paper text-inkMuted hover:text-ink hover:bg-warmLinen"
                }`}
              >
                {group.category}
              </button>
            );
          })}
        </div>

        {/* Details Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.category}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
          >
            {/* Left Box: Overview */}
            <div className="border-[3px] border-ink bg-paper p-8 rounded-2xl shadow-sketch">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border-2 border-ink ${tabColors[activeIndex % tabColors.length] || "bg-sakura"}`}>
                  <activeGroup.icon size={22} className="stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">{activeGroup.category}</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-inkMuted border-t-2 border-dashed border-warmGray pt-4">
                {activeGroup.intro}
              </p>
            </div>

            {/* Right Box: Hand-drawn bars */}
            <div className="grid gap-4 sm:grid-cols-2">
              {activeGroup.items.map((skill, i) => (
                <div
                  key={skill.name}
                  className="rounded-xl border-[2.5px] border-ink bg-paper p-4 hover:shadow-sketch transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-bold text-ink">{skill.name}</span>
                    <span className="font-serif text-xs font-bold text-sakuraDeep bg-cream px-2 py-0.5 rounded border border-ink/15">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Hand drawn styled bar */}
                  <div className="h-4 overflow-hidden rounded border-[2px] border-ink bg-warmLinen relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.8 }}
                      className="h-full bg-sakuraDeep border-r-2 border-ink bg-[repeating-linear-gradient(45deg,rgba(30,30,36,0.05),rgba(30,30,36,0.05)_5px,transparent_5px,transparent_10px)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

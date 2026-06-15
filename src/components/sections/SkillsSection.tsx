import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";
import { Database, BrainCircuit, LineChart, Code, Sparkles, Workflow } from "lucide-react";

const icons = {
  "Data Science & Analysis": LineChart,
  "Machine Learning": BrainCircuit,
  "Deep Learning & GenAI": Sparkles,
  "Data Engineering & Deployment": Workflow,
  "Programming & Tools": Code,
  "Core Skills": Database,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Technical Arsenal</h2>
          <p className="mt-4 text-slate-400">Core competencies architected into a Bento Box grid</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {skills.map((group, i) => {
            const Icon = icons[group.category as keyof typeof icons] || Database;
            
            // Determine span based on index to create Bento layout
            const isLarge = i === 0 || i === 3;
            const spanClass = isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1";

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-panel glass-panel-hover p-6 flex flex-col group ${spanClass}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-accentPurple/20 transition-colors">
                    <Icon className="text-accentCyan" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{group.category}</h3>
                </div>
                
                <p className="text-sm text-slate-400 mb-6 flex-grow">{group.intro}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.items.map((item) => (
                    <span 
                      key={item.name}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-accentPink/30 hover:bg-accentPink/10"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

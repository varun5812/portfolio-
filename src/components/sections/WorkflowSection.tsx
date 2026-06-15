import { motion } from "framer-motion";
import { Database, Eraser, LineChart, Cpu, BrainCircuit, Rocket, ArrowDown } from "lucide-react";

const pipelineStages = [
  { name: "Data Collection", icon: Database, color: "text-skyDeep", bg: "bg-sky/20", border: "border-sky" },
  { name: "Data Cleaning", icon: Eraser, color: "text-matchaDeep", bg: "bg-matcha/30", border: "border-matcha" },
  { name: "Exploratory Analysis", icon: LineChart, color: "text-sakuraDeep", bg: "bg-sakura/20", border: "border-sakura" },
  { name: "Feature Engineering", icon: Cpu, color: "text-purple-600", bg: "bg-lavender/30", border: "border-lavender" },
  { name: "Model Training", icon: BrainCircuit, color: "text-orange-600", bg: "bg-coral/20", border: "border-coral" },
  { name: "Deployment", icon: Rocket, color: "text-skyDeep", bg: "bg-sky/20", border: "border-sky" }
];

export function WorkflowSection() {
  return (
    <section id="dashboard" className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            Workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            ML <span className="serif italic text-inkLight">Pipeline</span>
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-md">
          {/* Vertical line */}
          <div className="absolute left-[35px] top-[40px] bottom-[40px] w-px bg-gradient-to-b from-sakura via-sky to-lavender" />

          <div className="space-y-3">
            {pipelineStages.map((stage, i) => {
              const isLast = i === pipelineStages.length - 1;
              return (
                <div key={stage.name} className="flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex items-center gap-5"
                  >
                    <div className={`relative z-10 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl border ${stage.border} ${stage.bg} shadow-soft`}>
                      <stage.icon size={28} className={stage.color} />
                    </div>
                    <div className="paper-card-hover flex-grow p-4">
                      <h3 className="font-display text-base font-bold text-ink sm:text-lg">{stage.name}</h3>
                    </div>
                  </motion.div>
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.1 }}
                      className="ml-[27px] my-0.5 text-warmGray"
                    >
                      <ArrowDown size={18} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

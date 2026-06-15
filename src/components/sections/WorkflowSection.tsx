import { motion } from "framer-motion";
import { Database, Eraser, LineChart, Cpu, BrainCircuit, Rocket, ArrowDown } from "lucide-react";

const pipelineStages = [
  { id: "collection", name: "Data Collection", icon: Database, color: "text-accentPurple", bg: "bg-accentPurple/10", border: "border-accentPurple/30" },
  { id: "cleaning", name: "Data Cleaning", icon: Eraser, color: "text-accentCyan", bg: "bg-accentCyan/10", border: "border-accentCyan/30" },
  { id: "eda", name: "EDA", icon: LineChart, color: "text-accentPink", bg: "bg-accentPink/10", border: "border-accentPink/30" },
  { id: "features", name: "Feature Engineering", icon: Cpu, color: "text-accentPurple", bg: "bg-accentPurple/10", border: "border-accentPurple/30" },
  { id: "training", name: "Model Training", icon: BrainCircuit, color: "text-accentCyan", bg: "bg-accentCyan/10", border: "border-accentCyan/30" },
  { id: "deployment", name: "Deployment", icon: Rocket, color: "text-accentPink", bg: "bg-accentPink/10", border: "border-accentPink/30" },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">ML Workflow</h2>
          <p className="mt-4 text-slate-400">Interactive data pipeline visualization</p>
        </div>

        <div className="relative mx-auto max-w-lg">
          {/* Animated vertical line */}
          <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-white/10">
            <motion.div 
              className="w-full bg-gradient-to-b from-accentPurple via-accentCyan to-accentPink"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-4">
            {pipelineStages.map((stage, i) => {
              const isLast = i === pipelineStages.length - 1;
              return (
                <div key={stage.id} className="relative flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.4, duration: 0.5 }}
                    className="flex items-center gap-6"
                  >
                    {/* Node */}
                    <div className={`relative z-10 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-md shadow-glass`}>
                      <stage.icon size={32} className={stage.color} />
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.4 + 0.3, duration: 0.4 }}
                        className="absolute inset-0 rounded-2xl border border-white/20"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="glass-panel p-5 flex-grow">
                      <h3 className="font-display text-xl font-bold text-white">{stage.name}</h3>
                    </div>
                  </motion.div>
                  
                  {/* Down Arrow between nodes */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.4 + 0.2, duration: 0.3 }}
                      className="ml-[31px] my-1 text-white/20"
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

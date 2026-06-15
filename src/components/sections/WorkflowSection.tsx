import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Database, Eraser, LineChart, Cpu, BrainCircuit, Rocket, ArrowDown } from "lucide-react";
import { useRef } from "react";

const pipelineStages = [
  { id: "collection", name: "Data Collection", icon: Database, color: "text-accentPurple", bg: "bg-accentPurple/10", border: "border-accentPurple/30" },
  { id: "cleaning", name: "Data Cleaning", icon: Eraser, color: "text-accentCyan", bg: "bg-accentCyan/10", border: "border-accentCyan/30" },
  { id: "eda", name: "Exploratory Data Analysis", icon: LineChart, color: "text-accentPink", bg: "bg-accentPink/10", border: "border-accentPink/30" },
  { id: "features", name: "Feature Engineering", icon: Cpu, color: "text-accentPurple", bg: "bg-accentPurple/10", border: "border-accentPurple/30" },
  { id: "training", name: "Model Training", icon: BrainCircuit, color: "text-accentCyan", bg: "bg-accentCyan/10", border: "border-accentCyan/30" },
  { id: "deployment", name: "Deployment", icon: Rocket, color: "text-accentPink", bg: "bg-accentPink/10", border: "border-accentPink/30" },
];

export function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothLineHeight = useSpring(lineHeight, { stiffness: 50, damping: 20 });

  return (
    <section id="workflow" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-white sm:text-5xl"
          >
            ML Workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-400"
          >
            Interactive pipeline showing the complete lifecycle
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-lg" ref={containerRef}>
          {/* Parallax animated vertical line */}
          <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: smoothLineHeight }}
              className="w-full bg-gradient-to-b from-accentPurple via-accentCyan to-accentPink"
            />
          </div>

          <div className="space-y-4">
            {pipelineStages.map((stage, i) => {
              const isLast = i === pipelineStages.length - 1;
              return (
                <div key={stage.id} className="relative flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-6"
                  >
                    <div className={`relative z-10 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-md shadow-glass`}>
                      <stage.icon size={32} className={stage.color} />
                    </div>
                    
                    <div className="glass-panel p-5 flex-grow group transition-colors hover:bg-white/10">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-accentCyan transition-colors">{stage.name}</h3>
                    </div>
                  </motion.div>
                  
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.3 }}
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

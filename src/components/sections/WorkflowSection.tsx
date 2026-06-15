import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Eraser, LineChart, Cpu, BrainCircuit, Rocket } from "lucide-react";

const pipelineStages = [
  {
    name: "Data Collection",
    icon: Database,
    color: "bg-sky border-skyDeep text-skyDeep",
    details: "Acquiring data from diverse sources including APIs, files, web scraping, and database query results."
  },
  {
    name: "Data Cleaning",
    icon: Eraser,
    color: "bg-matcha border-matchaDeep text-matchaDeep",
    details: "Imputing null values, fixing anomalies, resolving data types, and setting up clean preprocessing pipelines."
  },
  {
    name: "Exploratory Analysis",
    icon: LineChart,
    color: "bg-sakura border-sakuraDeep text-sakuraDeep",
    details: "Plotting correlations, diagnosing distributions, outlining outliers, and translating raw files into insights."
  },
  {
    name: "Feature Engineering",
    icon: Cpu,
    color: "bg-purple-200 border-purple-400 text-purple-600",
    details: "Scaling values, encoding categorical variables, selecting optimal features, and resolving dimensionality constraints."
  },
  {
    name: "Model Training",
    icon: BrainCircuit,
    color: "bg-apricot border-apricotDeep text-orange-600",
    details: "Comparing algorithms, adjusting hyperparameters, validating model performance metrics, and preventing overfitting."
  },
  {
    name: "Deployment",
    icon: Rocket,
    color: "bg-yellow-100 border-yellow-400 text-yellow-600",
    details: "Deploying model prediction endpoints as easy-to-use Streamlit web applications via Render or cloud platforms."
  }
];

export function WorkflowSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="dashboard" className="px-6 py-24 sm:px-8 lg:px-12 bg-cream border-t-[3px] border-ink">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            04. Workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            My Machine <span className="serif italic text-inkMuted font-normal">Learning Pipeline</span>
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm text-inkMuted">
            Click on any pipeline stage to view my engineering focus details.
          </p>
        </div>

        {/* The Pipeline Winding Path */}
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] items-center">
          
          {/* Path Controls */}
          <div className="relative border-[3px] border-ink bg-paper p-8 rounded-2xl shadow-sketch">
            {/* Connection Line */}
            <div className="absolute left-[38px] top-8 bottom-8 w-[4px] bg-ink/10" />

            <div className="space-y-4">
              {pipelineStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = selectedIdx === idx;

                return (
                  <button
                    key={stage.name}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className="w-full text-left focus:outline-none"
                  >
                    <motion.div
                      className={`relative z-10 flex items-center gap-4 rounded-xl border-2 p-3 transition-all duration-300 ${
                        isSelected
                          ? "border-ink bg-warmLinen shadow-[3px_3px_0px_0px_#1E1E24]"
                          : "border-transparent bg-transparent hover:bg-cream"
                      }`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink shadow-[2.5px_2.5px_0px_0px_#1E1E24] ${stage.color}`}>
                        <Icon size={18} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-ink">{stage.name}</h3>
                        <p className="text-[10px] text-inkMuted font-bold uppercase tracking-wider mt-0.5">Stage 0{idx + 1}</p>
                      </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Drawer */}
          <div className="h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="border-[3px] border-ink bg-paper p-6 rounded-2xl shadow-sketch text-center relative"
              >
                {/* Washi tape at top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 transform -rotate-1 rounded border-2 border-ink bg-sakura px-3 py-0.5 text-[9px] font-bold uppercase text-ink shadow-[1.5px_1.5px_0px_0px_#1E1E24]">
                  Pipeline Focus
                </div>

                <div className="mt-4 flex justify-center text-ink mb-4">
                  {(() => {
                    const StageIcon = pipelineStages[selectedIdx].icon;
                    return (
                      <div className="p-4 rounded-full border-2 border-ink bg-warmLinen">
                        <StageIcon size={32} className="stroke-[2.5]" />
                      </div>
                    );
                  })()}
                </div>
                <h4 className="font-serif text-lg font-bold text-ink">
                  {pipelineStages[selectedIdx].name}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-inkMuted">
                  {pipelineStages[selectedIdx].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

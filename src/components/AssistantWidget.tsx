import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AssistantWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-24 right-4 z-[55] hidden w-72 rounded-[1.8rem] border border-white/10 bg-slate-950/75 p-4 shadow-glow backdrop-blur-xl md:block"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neon/10 text-cyanGlow">
          <Bot size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Portfolio Signal</p>
          <p className="text-xs text-slate-400">Open to fresher opportunities</p>
        </div>
      </div>
      <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-3">
        <p className="text-sm leading-6 text-slate-300">
          Strongest current strengths: preprocessing, EDA, machine learning workflows, and
          practical GenAI exploration.
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-cyanGlow">
        <Sparkles size={14} />
        recruiter-ready summary
      </div>
    </motion.div>
  );
}

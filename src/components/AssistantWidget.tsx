import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function AssistantWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-24 right-4 z-[55] hidden w-72 rounded-3xl border border-cyan-300/20 bg-slate-950/75 p-4 shadow-glow backdrop-blur-xl md:block"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
          <Bot size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI Portfolio Assistant</p>
          <p className="text-xs text-slate-400">Realtime ambition pulse: Stable</p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <p className="text-sm leading-6 text-slate-300">
          Exploring machine learning, deep learning, and generative AI with a builder mindset.
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cyanGlow">
        <Sparkles size={14} />
        Neural presence active
      </div>
    </motion.div>
  );
}

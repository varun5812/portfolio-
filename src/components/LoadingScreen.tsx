import { motion, AnimatePresence } from "framer-motion";

type LoadingScreenProps = {
  ready: boolean;
};

export function LoadingScreen({ ready }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-base"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute h-28 w-28 animate-pulse rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative h-20 w-20 rounded-full border border-cyan-300/20">
              <div className="absolute inset-3 animate-spin rounded-full border-t-2 border-neon" />
            </div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-300">
              Initializing AI Presence
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

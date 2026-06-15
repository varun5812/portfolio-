import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ ready }: { ready: boolean }) {
  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-lg bg-accent animate-ping opacity-20" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-neon" />
            </div>
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

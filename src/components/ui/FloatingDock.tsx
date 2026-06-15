import { sectionMeta } from "../../data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingDock() {
  const { scrollYProgress } = useScroll();
  
  // Hide navbar slightly when at the very top of the page, show it after scrolling down a bit
  const y = useTransform(scrollYProgress, [0, 0.05], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.nav 
      style={{ y, opacity }}
      className="fixed bottom-6 left-1/2 z-[60] hidden -translate-x-1/2 rounded-2xl border border-white/10 bg-bgMain/60 px-2 py-2 shadow-glass backdrop-blur-xl lg:block"
    >
      <div className="flex items-center gap-1">
        {sectionMeta.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-accentCyan"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

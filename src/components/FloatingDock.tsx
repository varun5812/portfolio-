import { sectionMeta } from "../data/portfolio";

export function FloatingDock() {
  return (
    <nav className="fixed bottom-5 left-1/2 z-[60] hidden -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">
      <div className="flex items-center gap-2">
        {sectionMeta.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-transparent px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition hover:border-cyanGlow/40 hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

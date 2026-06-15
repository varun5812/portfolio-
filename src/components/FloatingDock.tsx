import { sectionMeta } from "../data/portfolio";

export function FloatingDock() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-[60] hidden -translate-x-1/2 rounded-2xl border border-white/[0.06] bg-base/80 px-2 py-2 shadow-card backdrop-blur-2xl lg:block">
      <div className="flex items-center gap-1">
        {sectionMeta.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

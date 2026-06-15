import { useEffect, useState } from "react";

interface SectionState {
  id: string;
  image: string;
  opacity: number;
  blur: number;
}

const SECTION_IMAGES: Record<string, string> = {
  hero: "/images/neural_networks.png",
  about: "/images/eda_clustering.png",
  skills: "/images/machine_learning.png",
  projects: "/images/generative_ai.png",
  dashboard: "/images/pipeline_deployment.png",
  experience: "/images/pipeline_deployment.png",
  contact: "/images/neural_networks.png"
};

export function BackgroundDecoder() {
  const [sections, setSections] = useState<SectionState[]>([]);

  useEffect(() => {
    const ids = Object.keys(SECTION_IMAGES);
    const initialStates = ids.map((id) => ({
      id,
      image: SECTION_IMAGES[id],
      opacity: 0,
      blur: 35
    }));
    setSections(initialStates);

    let activeFrameId: number;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = window.scrollY + viewportHeight / 2;

      const updated = initialStates.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return sec;

        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = rect.bottom + window.scrollY;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;

        // Distance from element center to viewport center
        const distance = Math.abs(viewportCenter - elementCenter);

        // Normalize distance: 0 means perfectly centered, 1 means outside active range
        const activeRange = viewportHeight * 1.2;
        let opacity = 0;
        let blur = 35;

        if (distance < activeRange) {
          // Linear interpolation of opacity
          opacity = Math.max(0, 1 - distance / activeRange);
          
          // Exponential ease for blur: get sharp quickly as it approaches center
          const ratio = distance / activeRange;
          blur = Math.round(ratio * ratio * 35);
        }

        return {
          ...sec,
          opacity,
          blur
        };
      });

      setSections(updated);
    };

    const onScroll = () => {
      cancelAnimationFrame(activeFrameId);
      activeFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(activeFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url('${sec.image}')`,
            opacity: sec.opacity * 0.42, // Increased from 0.22 to make details clearly visible
            filter: `blur(${sec.blur}px) saturate(1.4) contrast(1.15)`,
            transform: `scale(${1 + (sec.blur / 350)})`, // Zoom in slightly when blurred
            mixBlendMode: "screen"
          }}
        />
      ))}
      {/* Dark overlay grid to add texture and ensure text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,17,31,0.85)_100%)] opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-transparent to-base/80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.25] [mask-image:radial-gradient(circle,white,transparent_80%)]" />
    </div>
  );
}

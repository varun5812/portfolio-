import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../../data/portfolio";
import { Github, ArrowUpRight } from "lucide-react";
import React from "react";
import { MagneticButton } from "../ui/MagneticButton";

const projectImages: Record<string, string> = {
  "AI Video Assistant: Meeting Intelligence Platform": "/images/generative_ai.png",
  "ResearchMind: AI-Powered Research System": "/images/eda_clustering.png",
  "Heart Disease Prediction Web App": "/images/machine_learning.png"
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-white sm:text-5xl"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-400"
          >
            Glass UI cards with 3D magnetic hover effects
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="perspective-[1000px] h-full"
            >
              <TiltCard>
                <div className="glass-panel flex h-full flex-col overflow-hidden group">
                  <div className="relative h-48 sm:h-60 overflow-hidden border-b border-white/10">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${projectImages[project.title] || "/images/neural_networks.png"}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-90" />
                    <div className="absolute top-4 left-4" style={{ transform: "translateZ(40px)" }}>
                      <span className="rounded-full bg-[#0F172A]/80 px-3 py-1 border border-white/10 backdrop-blur-md text-[10px] font-semibold tracking-wider text-accentCyan uppercase">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-6 sm:p-8" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">{project.summary}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-[10px] text-slate-300">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-[10px] text-slate-300">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 mt-auto" style={{ transform: "translateZ(40px)" }}>
                      {project.githubUrl && (
                        <MagneticButton href={project.githubUrl} className="glass-button py-2 px-4 text-sm flex-1 sm:flex-none">
                          <span className="flex items-center gap-2"><Github size={16} /> GitHub</span>
                        </MagneticButton>
                      )}
                      {project.liveUrl && (
                        <MagneticButton href={project.liveUrl} className="glass-button-primary py-2 px-4 text-sm flex-1 sm:flex-none">
                          <span className="flex items-center gap-2"><ArrowUpRight size={16} /> Live Demo</span>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

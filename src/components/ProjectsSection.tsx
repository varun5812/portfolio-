import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const projectImages: Record<string, string> = {
  "AI Video Assistant: Meeting Intelligence Platform": "/images/generative_ai.png",
  "ResearchMind: AI-Powered Research System": "/images/eda_clustering.png",
  "Heart Disease Prediction Web App": "/images/machine_learning.png"
};

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Real projects demonstrating end-to-end data science capability — from EDA to deployment."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card group overflow-hidden transition-all duration-500 hover:border-accent/15"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Project image */}
                <div className="relative h-56 lg:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${projectImages[project.title] || "/images/neural_networks.png"}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:hidden" />
                  <div className="absolute left-5 top-5">
                    <span className="badge text-[10px]">{project.type}</span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.summary}</p>

                  <div className="mt-5 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2">Impact</p>
                    <p className="text-sm leading-relaxed text-zinc-300">{project.impact}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.04] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary py-2.5 px-5 text-xs">
                        <Github size={14} />
                        {project.githubLabel || "GitHub"}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary py-2.5 px-5 text-xs">
                        <ArrowUpRight size={14} />
                        {project.liveLabel || "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

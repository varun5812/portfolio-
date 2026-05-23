import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Resume-Backed Projects That Show Real Capability"
          description="These projects are chosen to reflect the actual work I want recruiters to notice: EDA, machine learning, deployment, and generative AI application building."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              className="project-card group"
            >
              <div className={`project-card-glow bg-gradient-to-br ${project.accent}`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className={`rounded-[1.7rem] bg-gradient-to-br ${project.accent} p-[1px]`}>
                  <div className="rounded-[calc(1.7rem-1px)] border border-white/[0.08] bg-slate-950/[0.85] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                        {project.type}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-cyanGlow">
                        {project.previewLabel}
                      </span>
                    </div>
                    <div className="mt-10 grid grid-cols-4 gap-3">
                      {[36, 62, 48, 78].map((value, barIndex) => (
                        <div key={`${project.title}-${barIndex}`} className="space-y-3">
                          <div className="h-16 rounded-full bg-white/[0.06]">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${value}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: barIndex * 0.08, duration: 0.7 }}
                              className="mx-auto w-full rounded-full bg-gradient-to-t from-neon via-mint to-violet"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex-1">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                  <p className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4 text-sm leading-7 text-slate-300">
                    {project.impact}
                  </p>

                  <div className="mt-5 space-y-3">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-white/10 bg-slate-950/[0.35] px-4 py-3 text-sm leading-7 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary flex-1 justify-center"
                    >
                      <Github size={18} />
                      {project.githubLabel || "GitHub"}
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary flex-1 justify-center"
                    >
                      <ArrowUpRight size={18} />
                      {project.liveLabel || "Live Demo"}
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

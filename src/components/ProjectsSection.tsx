import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects, socialLinks } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Polished Experiments With Real-World Intent"
          description="Showcasing analytics, deep learning, and research-oriented work through premium interactive project cards."
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
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="h-44 rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.18),transparent_36%),linear-gradient(135deg,rgba(123,46,255,0.22),rgba(5,8,22,0.75))]">
                    <div className="flex h-full items-end justify-between p-5">
                      <div className="space-y-2">
                        <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
                          Showcase
                        </span>
                        <div className="h-2 w-24 rounded-full bg-cyan-300/60 shadow-glow" />
                        <div className="h-2 w-16 rounded-full bg-fuchsia-300/40" />
                      </div>
                      <div className="h-20 w-20 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-[1px]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex-1">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary flex-1 justify-center"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href="#contact" className="button-secondary flex-1 justify-center">
                    <ArrowUpRight size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

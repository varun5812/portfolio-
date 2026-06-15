import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const projectImages: Record<string, string> = {
  "AI Video Assistant: Meeting Intelligence Platform": "/images/project_meeting.png",
  "ResearchMind: AI-Powered Research System": "/images/project_research.png",
  "Heart Disease Prediction Web App": "/images/project_heart.png"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            Featured <span className="serif italic text-inkLight">Work</span>
          </motion.h2>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="paper-card group overflow-hidden transition-all duration-500 hover:shadow-hover hover:border-sakura/30"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Image */}
                <div className="relative h-56 lg:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${projectImages[project.title] || "/images/hero_anime.png"}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
                  <div className="absolute left-5 top-5">
                    <span className="badge text-[10px]">{project.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inkMuted">{project.summary}</p>

                  <div className="mt-5 rounded-xl bg-beige/60 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-inkMuted mb-1.5">Impact</p>
                    <p className="text-sm leading-relaxed text-inkLight">{project.impact}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-beige px-2.5 py-1 text-[10px] font-medium text-inkMuted">
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
    </section>
  );
}

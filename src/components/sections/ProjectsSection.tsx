import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const projectImages: Record<string, string> = {
  "AI Video Assistant: Meeting Intelligence Platform": "/images/project_meeting.png",
  "ResearchMind: AI-Powered Research System": "/images/project_research.png",
  "Heart Disease Prediction Web App": "/images/project_heart.png"
};

const stickerColors = [
  "bg-sakura border-sakuraDeep",
  "bg-matcha border-matchaDeep",
  "bg-sky border-skyDeep"
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-12 bg-warmLinen border-t-[3px] border-ink">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            03. Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            Featured <span className="serif italic text-inkMuted font-normal">Case Studies</span>
          </motion.h2>
        </div>

        {/* Polaroid List */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const stickerColor = stickerColors[index % stickerColors.length];
            const projectImg = projectImages[project.title] || "/images/hero_anime.png";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-start"
              >
                {/* Polaroid Frame */}
                <div className="relative justify-self-center lg:justify-self-start w-full max-w-[340px] border-[3.5px] border-ink bg-paper p-4 rounded-xl shadow-sketch transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg border-2 border-ink aspect-square bg-cream">
                    <img
                      src={projectImg}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex rounded-md border-2 border-ink bg-paper px-2 py-0.5 text-[9px] font-bold text-ink shadow-[1.5px_1.5px_0px_0px_#1E1E24]">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 pb-1 text-center border-t-2 border-dashed border-warmGray mt-3">
                    <p className="font-serif italic text-xs font-bold text-inkMuted">
                      {project.previewLabel || "data science project"}
                    </p>
                  </div>

                  {/* Tape sticker on polaroid */}
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 transform -rotate-2 rounded px-4 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink border-2 border-ink ${stickerColor} shadow-[2px_2px_0px_0px_#1E1E24]`}>
                    Project #{index + 1}
                  </div>
                </div>

                {/* Details Card */}
                <div className="border-[3px] border-ink bg-paper p-6 sm:p-8 rounded-2xl shadow-sketch flex flex-col justify-between self-stretch">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink leading-snug">{project.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-inkMuted">{project.summary}</p>

                    {/* Highlights */}
                    <div className="mt-5 rounded-xl border-2 border-ink/10 bg-warmLinen/60 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-inkMuted mb-2">Key Highlights</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-inkLight">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sakuraDeep border border-ink" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="mt-6 border-t-2 border-dashed border-warmGray pt-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-ink/20 bg-cream px-2.5 py-1 text-[10px] font-bold text-inkMuted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary py-2.5 px-4 text-[10px]"
                        >
                          <Github size={13} className="stroke-[3]" /> {project.githubLabel || "GitHub Repo"}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary py-2.5 px-4 text-[10px] bg-sakuraDeep"
                        >
                          <ArrowUpRight size={13} className="stroke-[3]" /> {project.liveLabel || "Live App"}
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

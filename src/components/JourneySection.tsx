import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education, experience } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function JourneySection() {
  return (
    <AnimatedSection id="experience" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="Experience, Education, And Learning Signals"
          description="This section is shaped around what matters for a fresher profile: internship exposure, academic background, and consistent skill-building."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <BriefcaseBusiness size={22} />
              <h3 className="font-display text-xl text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyanGlow">
                    {item.period}
                  </p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                  <div className="mt-4 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.2rem] border border-white/10 bg-slate-950/[0.35] px-4 py-3 text-sm leading-7 text-slate-300"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <GraduationCap size={22} />
              <h3 className="font-display text-xl text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyanGlow">
                    {item.period}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{item.school}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <Award size={22} />
              <h3 className="font-display text-xl text-white">Certifications</h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

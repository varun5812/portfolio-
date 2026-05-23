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
          eyebrow="Journey"
          title="Experience, Education, And Certifications"
          description="A clean timeline of how my data and AI profile is evolving with purpose."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <BriefcaseBusiness size={22} />
              <h3 className="font-display text-xl uppercase tracking-[0.12em] text-white">
                Experience
              </h3>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyanGlow">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <GraduationCap size={22} />
              <h3 className="font-display text-xl uppercase tracking-[0.12em] text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-cyanGlow">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-7">
            <div className="mb-6 flex items-center gap-3 text-neon">
              <Award size={22} />
              <h3 className="font-display text-xl uppercase tracking-[0.12em] text-white">
                Certifications
              </h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm uppercase tracking-[0.16em] text-slate-200"
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

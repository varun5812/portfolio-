import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education, experience } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function JourneySection() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Resume"
          title="Experience & Education"
          description="Internship exposure, academic background, and consistent skill-building."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Experience */}
          <div className="glass-card p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                <BriefcaseBusiness size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{item.period}</span>
                  <h4 className="mt-2 text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-zinc-600">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                  <div className="mt-3 space-y-2">
                    {item.bullets.map((b) => (
                      <div key={b} className="flex gap-2">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                        <p className="text-xs leading-relaxed text-zinc-500">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-card p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon/10">
                <GraduationCap size={18} className="text-neon" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neon">{item.period}</span>
                  <h4 className="mt-2 text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-zinc-600">{item.school}</p>
                  <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/10">
                <Award size={18} className="text-violet" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3.5"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-violet" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

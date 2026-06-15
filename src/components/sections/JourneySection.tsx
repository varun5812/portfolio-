import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "../../data/portfolio";

export function JourneySection() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-8 lg:px-12 bg-warmLinen border-t-[3px] border-ink">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            05. Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            Education & <span className="serif italic text-inkMuted font-normal">Experience Log</span>
          </motion.h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Column 1: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-[3px] border-ink bg-paper p-6 rounded-2xl shadow-sketch"
          >
            <div className="mb-6 flex items-center gap-3 border-b-2 border-dashed border-warmGray pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink bg-sky text-ink">
                <BriefcaseBusiness size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">Work History</h3>
            </div>

            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.title} className="rounded-xl border border-ink/20 bg-cream/50 p-4">
                  <span className="inline-block rounded border border-ink/30 bg-sky px-2 py-0.5 text-[9px] font-bold text-ink uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="mt-2.5 text-sm font-bold text-ink">{item.title}</h4>
                  <p className="text-xs text-inkMuted font-semibold mt-0.5">{item.organization}</p>
                  
                  <p className="mt-3 text-xs leading-relaxed text-inkLight">{item.summary}</p>
                  
                  <div className="mt-3 space-y-2 pt-3 border-t border-dashed border-warmGray">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-2 items-start">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-skyDeep border border-ink" />
                        <p className="text-[11px] leading-relaxed text-inkMuted">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-[3px] border-ink bg-paper p-6 rounded-2xl shadow-sketch"
          >
            <div className="mb-6 flex items-center gap-3 border-b-2 border-dashed border-warmGray pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink bg-matcha text-ink">
                <GraduationCap size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">Education</h3>
            </div>

            <div className="relative border-l-[3px] border-ink/10 ml-2.5 pl-4 space-y-6">
              {education.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[22.5px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink bg-paper">
                    <div className="h-1.5 w-1.5 rounded-full bg-matchaDeep" />
                  </div>

                  <span className="text-[9px] font-bold text-inkMuted uppercase tracking-wider">{item.period}</span>
                  <h4 className="mt-1 text-xs sm:text-sm font-bold text-ink leading-tight">{item.title}</h4>
                  <p className="text-[10px] text-inkMuted mt-0.5">{item.school}</p>
                  <p className="mt-1.5 inline-block text-[10px] font-bold text-ink bg-warmLinen px-2 py-0.5 rounded border border-ink/10">
                    {item.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-[3px] border-ink bg-paper p-6 rounded-2xl shadow-sketch"
          >
            <div className="mb-6 flex items-center gap-3 border-b-2 border-dashed border-warmGray pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink bg-sakura text-ink">
                <Award size={18} className="stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">Credentials</h3>
            </div>

            <div className="grid gap-2.5">
              {certifications.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border-2 border-ink/10 bg-cream/35 px-4 py-3 hover:border-ink/20 transition-all duration-300"
                >
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-sakuraDeep" />
                  <span className="text-xs sm:text-sm font-bold text-ink">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

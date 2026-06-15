import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education, experience } from "../../data/portfolio";

export function JourneySection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-white sm:text-5xl"
          >
            Experience & Education
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accentPurple/20 border border-accentPurple/30">
                <BriefcaseBusiness size={24} className="text-accentPurple" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.title} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-[-24px] before:w-px before:bg-white/10 last:before:bottom-0">
                  <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-accentPurple shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accentPurple">{item.period}</span>
                  <h4 className="mt-1 text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs font-medium text-slate-400 mb-2">{item.organization}</p>
                  <p className="text-sm leading-relaxed text-slate-300">{item.summary}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accentCyan/20 border border-accentCyan/30">
                <GraduationCap size={24} className="text-accentCyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-[-24px] before:w-px before:bg-white/10 last:before:bottom-0">
                  <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-accentCyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accentCyan">{item.period}</span>
                  <h4 className="mt-1 text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs font-medium text-slate-400 mb-2">{item.school}</p>
                  <p className="text-xs leading-relaxed text-slate-300">{item.summary}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accentPink/20 border border-accentPink/30">
                <Award size={24} className="text-accentPink" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Certificates</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-accentPink/30"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-accentPink" />
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

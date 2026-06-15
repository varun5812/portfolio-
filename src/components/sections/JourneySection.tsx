import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education, experience } from "../../data/portfolio";

const cardColors = [
  { iconBg: "bg-sakura/20", iconColor: "text-sakuraDeep", dotColor: "bg-sakuraDeep", labelColor: "text-sakuraDeep" },
  { iconBg: "bg-sky/20", iconColor: "text-skyDeep", dotColor: "bg-skyDeep", labelColor: "text-skyDeep" },
  { iconBg: "bg-lavender/30", iconColor: "text-purple-600", dotColor: "bg-purple-500", labelColor: "text-purple-600" }
];

export function JourneySection() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            Resume
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            Experience & <span className="serif italic text-inkLight">Education</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paper-card p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cardColors[0].iconBg}`}>
                <BriefcaseBusiness size={20} className={cardColors[0].iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Experience</h3>
            </div>
            <div className="space-y-5">
              {experience.map((item) => (
                <div key={item.title} className="rounded-xl bg-beige/50 p-5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${cardColors[0].labelColor}`}>{item.period}</span>
                  <h4 className="mt-2 text-base font-bold text-ink">{item.title}</h4>
                  <p className="mt-1 text-xs text-inkMuted">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-inkLight">{item.summary}</p>
                  <div className="mt-3 space-y-2">
                    {item.bullets.map((b) => (
                      <div key={b} className="flex gap-2">
                        <div className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${cardColors[0].dotColor}`} />
                        <p className="text-xs leading-relaxed text-inkMuted">{b}</p>
                      </div>
                    ))}
                  </div>
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
            className="paper-card p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cardColors[1].iconBg}`}>
                <GraduationCap size={20} className={cardColors[1].iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-beige/50 p-5"
                >
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${cardColors[1].labelColor}`}>{item.period}</span>
                  <h4 className="mt-2 text-sm font-bold text-ink">{item.title}</h4>
                  <p className="mt-1 text-xs text-inkMuted">{item.school}</p>
                  <p className="mt-2 text-sm text-inkLight">{item.summary}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="paper-card p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cardColors[2].iconBg}`}>
                <Award size={20} className={cardColors[2].iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl bg-beige/50 px-4 py-3.5"
                >
                  <div className={`h-2 w-2 rounded-full ${cardColors[2].dotColor}`} />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

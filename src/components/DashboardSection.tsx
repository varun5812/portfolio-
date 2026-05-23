import { motion } from "framer-motion";
import { dashboardMetrics, skills, workflowStages } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function DashboardSection() {
  return (
    <AnimatedSection id="dashboard" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Snapshot"
          title="A Quick Visual Read Of My Current Strengths"
          description="Instead of generic counters, this section highlights the areas where I can contribute fastest as a fresher entering data science and AI teams."
        />

        <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-panel p-5"
                >
                  <metric.icon className="h-8 w-8 text-neon" />
                  <p className="mt-5 font-display text-3xl text-white">{metric.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl text-white">Data Workflow Pulse</h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-cyanGlow">
                  core pipeline
                </span>
              </div>
              <div className="mt-8 space-y-5">
                {workflowStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-200">{stage.name}</span>
                      <span className="font-display text-sm text-neon">{stage.value}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + index * 0.08, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-neon via-mint to-violet"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-white">Current Focus Matrix</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                recruiter view
              </span>
            </div>

            <div className="mt-8 grid gap-4">
              {skills.map((group, index) => {
                const avg = Math.round(
                  group.items.reduce((sum, item) => sum + item.level, 0) / group.items.length
                );

                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-semibold text-white">{group.category}</h4>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{group.intro}</p>
                      </div>
                      <div className="shrink-0 font-display text-2xl text-neon">{avg}%</div>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon via-mint to-violet"
                        style={{ width: `${avg}%` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

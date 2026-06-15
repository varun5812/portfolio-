import { motion } from "framer-motion";
import { dashboardMetrics, skills, workflowStages } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function DashboardSection() {
  return (
    <AnimatedSection id="dashboard" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Snapshot"
          title="Strengths At A Glance"
          description="A quick visual read of where I can contribute fastest as a fresher."
        />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {/* Metrics grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-5"
                >
                  <metric.icon className="h-7 w-7 text-accent" />
                  <p className="mt-4 font-display text-3xl font-bold text-white">{metric.value}</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-zinc-600">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Workflow pulse */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-base font-bold text-white">Data Workflow Pulse</h3>
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">pipeline</span>
              </div>
              <div className="space-y-4">
                {workflowStages.map((stage, i) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-zinc-300">{stage.name}</span>
                      <span className="font-display text-sm font-semibold text-accent">{stage.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent via-violet to-neon"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Focus matrix */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-base font-bold text-white">Focus Matrix</h3>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">competency overview</span>
            </div>
            <div className="space-y-4">
              {skills.map((group, i) => {
                const avg = Math.round(
                  group.items.reduce((s, item) => s + item.level, 0) / group.items.length
                );
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-white">{group.category}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500 line-clamp-2">{group.intro}</p>
                      </div>
                      <div className="shrink-0 font-display text-2xl font-bold text-accent">{avg}%</div>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent via-violet to-neon transition-all duration-700"
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

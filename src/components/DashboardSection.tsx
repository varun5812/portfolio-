import { motion } from "framer-motion";
import { dashboardMetrics, skills } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const activity = [38, 72, 54, 80, 66, 96, 58, 86, 62, 75, 92, 70];

export function DashboardSection() {
  return (
    <AnimatedSection id="dashboard" className="px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Dashboard"
          title="A Futuristic Snapshot Of Growth"
          description="A mini-dashboard blending metrics, learning graphs, and visual momentum cues."
        />

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
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
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl uppercase tracking-[0.12em] text-white">
                  Coding Activity
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-cyanGlow">
                  12 week arc
                </span>
              </div>
              <div className="mt-8 flex h-48 items-end gap-3">
                {activity.map((value, index) => (
                  <motion.div
                    key={`${value}-${index}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.7 }}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-violet via-neon to-cyan-200 shadow-glow"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl uppercase tracking-[0.12em] text-white">
                Skill Progress Visualization
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                interactive widgets
              </span>
            </div>

            <div className="mt-8 grid gap-5">
              {skills.slice(0, 5).map((group, index) => {
                const avg = Math.round(
                  group.items.reduce((sum, item) => sum + item.level, 0) / group.items.length
                );
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.22em] text-slate-200">
                        {group.category}
                      </span>
                      <span className="font-display text-neon">{avg}%</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon via-cyan-300 to-violet"
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

import { motion } from "framer-motion";
import { aboutHighlights, focusAreas } from "../../data/portfolio";
import { Database, BarChart3, BrainCircuit, Sparkles, Workflow } from "lucide-react";

const focusIcons = [Database, BarChart3, BrainCircuit, Sparkles, Workflow];
const focusTapeColors = [
  "washi-tape-sky",
  "washi-tape-matcha",
  "washi-tape-pink",
  "washi-tape-pink bg-purple-200",
  "washi-tape-apricot"
];
const borderDecorations = [
  "hover:border-skyDeep/80",
  "hover:border-matchaDeep/80",
  "hover:border-sakuraDeep/80",
  "hover:border-purple-400/80",
  "hover:border-apricotDeep/80"
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-warmLinen px-6 py-24 sm:px-8 lg:px-12 border-t-[3px] border-ink">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-sakuraDeep"
          >
            01. Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl"
          >
            A Story of <span className="serif italic text-inkMuted font-normal">Data & Discovery</span>
          </motion.h2>
        </div>

        {/* Notebook layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left page: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-[3px] border-ink bg-paper p-8 rounded-2xl shadow-sketch"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="serif italic font-bold text-xl text-ink">My Mission</span>
              <div className="h-[2px] flex-grow bg-ink/10" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-inkLight">
              I am an Artificial Intelligence & Machine Learning engineer graduate from 2025. 
              My passion lies in bridging raw, noisy data with intelligent, deployment-ready decision systems. 
              I focus on practical engineering: solid preprocessing, rigorous evaluation, and clean user-interfaces.
            </p>
            <div className="mt-8 space-y-4 border-t-2 border-dashed border-warmGray pt-6">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sakuraDeep border border-ink" />
                  <p className="text-xs sm:text-sm leading-relaxed text-inkMuted">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right page: Sketched Focus Areas */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif italic font-bold text-lg text-ink px-1">Specialized Focus Fields</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, i) => {
                const Icon = focusIcons[i];
                const tapeColor = focusTapeColors[i];
                const borderHover = borderDecorations[i];
                const isFull = i === 4;

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-xl border-[2.5px] border-ink bg-paper p-5 transition-all duration-300 hover:shadow-sketch ${borderHover} ${
                      isFull ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={tapeColor}>{area.title}</span>
                      <div className="text-ink">
                        <Icon size={16} className="stroke-[2.5]" />
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-inkMuted">{area.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-ink/20 bg-cream/80 px-2 py-0.5 text-[9px] font-bold text-inkMuted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

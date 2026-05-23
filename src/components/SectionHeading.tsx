import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyanGlow">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </motion.div>
  );
}

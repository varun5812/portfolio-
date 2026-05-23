import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type AnimatedSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function AnimatedSection({
  id,
  className,
  children
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx("relative py-24 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}

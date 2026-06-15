import { motion } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 8 + Math.random() * 10,
  delay: Math.random() * 10,
  duration: 12 + Math.random() * 10,
  startX: Math.random() * 100,
  opacity: 0.3 + Math.random() * 0.4
}));

export function SakuraPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.startX}vw`,
            y: "-20px",
            rotate: 0,
            opacity: 0
          }}
          animate={{
            x: [`${p.startX}vw`, `${p.startX - 30}vw`],
            y: ["-20px", "105vh"],
            rotate: [0, 360],
            opacity: [0, p.opacity, p.opacity, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C12 2 7 7 7 12C7 14.5 9.5 16 12 16C14.5 16 17 14.5 17 12C17 7 12 2 12 2Z"
              fill="#FFB7C5"
              opacity="0.8"
            />
            <path
              d="M12 8C12 8 9 11 9 13C9 14.1 10.3 15 12 15C13.7 15 15 14.1 15 13C15 11 12 8 12 8Z"
              fill="#FF8FAB"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

const petals = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: 6 + Math.random() * 12,
  delay: Math.random() * 8,
  duration: 10 + Math.random() * 12,
  startX: Math.random() * 100,
  opacity: 0.4 + Math.random() * 0.4,
  swayDist: 15 + Math.random() * 20
}));

const clouds = [
  { id: 1, top: "8%", size: "w-64 h-64", duration: 75, delay: 0 },
  { id: 2, top: "35%", size: "w-96 h-96", duration: 90, delay: 5 },
  { id: 3, top: "70%", size: "w-80 h-80", duration: 110, delay: 15 }
];

export function SakuraPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Drifting Clouds (Background Layers) */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: "-30%", y: 0 }}
          animate={{ x: "110%" }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute rounded-full bg-gradient-to-tr from-warmGray/10 to-sakura/10 blur-[80px] ${cloud.size}`}
          style={{ top: cloud.top }}
        />
      ))}

      {/* Falling Sakura Petals */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.startX}vw`,
            y: "-30px",
            rotate: 0,
            opacity: 0
          }}
          animate={{
            x: [`${p.startX}vw`, `${p.startX - p.swayDist}vw`],
            y: [ "-30px", "105vh" ],
            rotate: [ 0, 360 ],
            opacity: [ 0, p.opacity, p.opacity, 0 ]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute z-10"
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            {/* Sakura petal shape */}
            <path
              d="M12 21C7 21 4 17 4 12C4 7 12 3 12 3C12 3 20 7 20 12C20 17 17 21 12 21Z"
              fill="#FFC4D0"
              opacity="0.8"
            />
            <path
              d="M12 18C8.5 18 6.5 15.5 6.5 12C6.5 8.5 12 5.5 12 5.5C12 5.5 17.5 8.5 17.5 12C17.5 15.5 15.5 18 12 18Z"
              fill="#FFB3C1"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent via-violet to-neon transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

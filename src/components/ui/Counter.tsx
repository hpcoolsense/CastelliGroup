"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  target,
  suffix = "",
  duration = 2,
  className = "",
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

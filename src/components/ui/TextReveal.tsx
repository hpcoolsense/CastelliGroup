"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  children,
  className = "",
  tag = "h2",
}: TextRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });

  const words = children.split(" ");
  const Tag = tag;

  return (
    <Tag ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="mr-[0.3em] inline-block"
    >
      {children}
    </motion.span>
  );
}

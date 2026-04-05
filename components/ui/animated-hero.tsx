"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWordsProps {
  staticText: string;
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}

function AnimatedWords({
  staticText,
  words,
  interval = 2000,
  className,
  wordClassName,
}: AnimatedWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const titles = useMemo(() => words, [words]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [wordIndex, titles, interval]);

  return (
    <span className={className}>
      {staticText}{" "}
      <span className="relative inline-block overflow-hidden align-bottom">
        {/* Invisible sizer: renders the longest word to reserve space */}
        <span className="invisible" aria-hidden="true">
          {titles.reduce((a, b) => (a.length >= b.length ? a : b))}
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={wordIndex}
            className={`absolute left-0 top-0 ${wordClassName ?? ""}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
          >
            {titles[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

export { AnimatedWords };

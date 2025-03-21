// src/components/HeroSubtitle.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const descriptors = [
  "Reader",
  "Visionary",
  "Sporty",
  "Traveler",
  "Investor"
];

export default function HeroSubtitle() {
  const [currentDescriptor, setCurrentDescriptor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptor((prev) => (prev + 1) % descriptors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-primary white drop-shadow-md">
      Software Developer |{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentDescriptor}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-primary"
        >
          {descriptors[currentDescriptor]}
        </motion.span>
      </AnimatePresence>{" "}
      | Aspiring Musician
    </div>
  );
}

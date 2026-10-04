"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 24 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-max"
    >
      <nav className="flex items-center gap-1 rounded-full bg-background border border-primary/50 shadow-2xl backdrop-blur-md">
        <a
          href="#hero"
          className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-popover"
        >
          Home
        </a>

        <a
          href="#about"
          className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-popover"
        >
          About
        </a>

        <a
          href="#projects"
          className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-popover"
        >
          Projects
        </a>

        <a
          href="#skills"
          className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-popover"
        >
          Skills
        </a>
      </nav>
    </motion.div>
  );
}

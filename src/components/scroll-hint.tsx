import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollHint() {
  return (
    <>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-primary transition-colors">
          <span className="text-sm font-medium tracking-wide">Read More</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </>
  );
}

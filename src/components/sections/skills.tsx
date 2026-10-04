"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "../ui/badge";
import { globalContainerVariants, globalItemVariants } from "@/lib/framer-variants";

// 1. Your skills data structure
const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Java",
      "Python",
      "Ruby",
      "C#",
      "C++",
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "HTML",
      "CSS",
      "LaTeX",
      "Lua",
      "Haskell",
    ],
  },
  {
    title: "Frameworks",
    skills: ["Rails", "React", "Jetpack Compose", "Next.js", "Node.js", "JFrame", "TailwindCSS", "Spring Boot"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "SQLite",
      "MySQL",
      "GitHub",
      "GitLab",
      "Visual Studio Code (VS Code)",
      "IntelliJ IDEA",
      "Artificial Intelligence (AI)",
      "Large Language Models (LLMs)",
    ],
  },
  {
    title: "Platforms",
    skills: ["Linux", "Windows", "Web", "Android", "Arduino"],
  },
  {
    title: "Soft Skills",
    skills: ["Organisation", "Teamwork", "Responsibility", "Active Listening", "Communication", "Problem Solving"],
  },
];

const categoryVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: (custom: { index: number; total: number }) => {
    const middleIndex = (custom.total - 1) / 2;

    const distanceFromCenter = Math.abs(custom.index - middleIndex);

    return {
      opacity: 1,
      scale: 1,
      transition: {
        // Pills closer to the center get a shorter delay
        delay: distanceFromCenter * 0.08,
        type: "spring",
        stiffness: 300,
        damping: 14,
      },
    };
  },
};

export default function Skills() {
  return (
    <>
      <section id="skills" className="min-h-screen py-32 px-6 flex flex-col items-center">
        <motion.h2
          variants={globalContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-24 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Zigzag layout */}
        <motion.div
          variants={globalContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-24 max-w-5xl w-full"
        >
          {skillCategories.map((category, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={category.title}
                variants={globalItemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                // md:w-1/2 ensures clusters only take up half the screen on desktop.
                className={`flex flex-col items-center w-full md:w-1/2 ${isEven ? "md:self-start" : "md:self-end"}`}
              >
                {/* Category Title */}
                <h3 className="text-2xl font-semibold mb-6 text-foreground/80">{category.title}</h3>

                {/* max-w-[320px]  forces the pills to wrap into a cluster. */}
                <div className="flex flex-wrap justify-center gap-3 max-w-[320px]">
                  {category.skills.map((skill, index) => (
                    <motion.div key={skill} variants={pillVariants} custom={{ index, total: category.skills.length }}>
                      <Badge variant="outline" className="text-sm font-medium">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

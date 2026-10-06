"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Badge } from "../ui/badge";

// 1. Your Education Data
const educationData = [
  {
    id: 1,
    institution: "Manchester Enterprise Academy",
    startYear: "2016",
    endYear: "2021",
    degree: "GCSEs",
    grades: " [ 9 9 9 9 9 8 5 5 ]",
    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English Language",
      "English Literature",
      "Biology",
      "Chemistry",
      "History",
    ],
  },
  {
    id: 2,
    institution: "Xaverian College",
    startYear: "2021",
    endYear: "2023",
    degree: "A-Levels",
    grades: " [ A A B ]",
    subjects: ["Computer Science", "Mathematics", "Physics"],
  },
  {
    id: 3,
    institution: "The University of Sheffield",
    startYear: "2023",
    endYear: "2026",
    degree: "BSc Computer Science",
    grades: "[ FIRST-CLASS HONOURS ]",
    subjects: ["PLACEHOLDER", "PLACEHOLDER", "PLACEHOLDER"],
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. Track the scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the container hits the center of the screen.
    // End tracking when the bottom of the container hits the center.
    offset: ["start center", "end center"],
  });

  return (
    <section id="education" className="py-32 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-24 text-center"
      >
        My <span className="text-primary text-glow">Education</span>
      </motion.h2>

      {/* 3. The Timeline Container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto w-full">
        {/* The Background Line (Dimmed) */}
        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-popover -translate-x-1/2 rounded-full"></div>

        {/* The Animated Foreground Line (Red) */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-primary -translate-x-1/2 origin-top rounded-full z-0"
        ></motion.div>

        {/* 4. The Nodes */}
        <div className="flex flex-col gap-24 md:gap-64">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-between w-full">
              {/* LEFT SIDE: Institution */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 text-right pr-6 md:pr-12"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.institution}</h3>
              </motion.div>

              {/* CENTER NODE: The Circle with Years */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                // shrink-0 prevents the circle from squishing on mobile
                className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-zinc-950 border-2 border-primary flex flex-col items-center justify-center relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
              >
                <span className="text-sm md:text-base font-medium text-zinc-300">{item.startYear}</span>
                {/* Tiny divider line between the years */}
                <div className="w-6 h-px bg-zinc-700 my-1"></div>
                <span className="text-sm md:text-base font-medium text-zinc-300">{item.endYear}</span>
              </motion.div>

              {/* RIGHT SIDE: Subjects and Grades */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 pl-6 md:pl-12"
              >
                <h4 className="text-lg md:text-xl font-semibold text-zinc-200 mb-1">{item.degree}</h4>
                <p className="text-primary font-semibold font-mono tracking-widest mb-3">{item.grades}</p>

                {/* Subjects Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.subjects.map((subject) => (
                    <Badge key={subject} variant="outline">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

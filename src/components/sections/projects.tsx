"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { globalContainerVariants, globalItemVariants } from "@/lib/framer-variants";
import JavaModal from "@/components/java-modal";
import { useState } from "react";

// 1. Your Projects Data
const projectsData = [
  {
    id: "01",
    title: "News Article Aggregator with Searchable User Queries and Filtering",
    scope: "[ WEB DEVELOPMENT ] [ FULL-STACK ] [ RESTAPI ]",
    techStack: ["Java", "Spring Boot", "React.js", "TailwindCSS", "TypeScript"],
    bullets: [
      "Designed and implemented a full stack web application that aggregates news articles from multiple third part news APIs and displays them in a user-friendly interface.",
      "Utilised React and TailwindCSS to create a responsive and visually appealing frontend, while leveraging Spring Boot for the backend to handle API requests and data processing.",
      "Implemented a search and filtering system that allows users to query articles based on source, categories, and publication dates, enhancing the user experience and accessibility of information.",
    ],
    demo: {
      type: "external-link",
      url: "https://mynewsintelligence.vercel.app",
      label: "Visit Website",
    },
    githubUrl: "https://github.com/5elym/news-aggregator",
  },
  {
    id: "02",
    title: "VSCode Extension that Gamifies Unit Testing",
    scope: "[ FULL-STACK ] [ SOFTWARE TESTING ] [ RESTAPI ]",
    techStack: ["TypeScript", "Python", "GitHub API", "FastAPI", "VS Code Extension API"],
    bullets: [
      "Engineered a full-stack VS Code extension utilising TypeScript for the frontend and a Python API backend to gamify developers' unit testing workflows.",
      "Implemented an asynchronous multiplayer game loop where an 'Attacker' writes failing tests to challenge a function, and a 'Defender' refactors the code to pass them.",
      "Integrated repository-specific leaderboards that dynamically track and display user experience points (XP) based on their testing and debugging actions.",
    ],
    demo: {
      type: "",
      url: "",
      label: "",
    },
    githubUrl: "https://github.com/5elym/TestBattle",
  },
  {
    id: "03",
    title: "Pseudo-3D Raycasting Engine Using the DDA Algorithm ",
    scope: "[ GRAPHICS ] [ ALGORITHMS ] [ GAME DEVELOPMENT ] [ IO ]",
    techStack: ["Java", "JFrame"],
    bullets: [
      "Developed a pseudo-3D raycasting engine from scratch using Java and JFrame to render a 3D environment from a 2D perspective.",
      "Implemented the Digital Differential Analyzer (DDA) algorithm to ensure highly efficient wall detection mechanics.",
      "Engineered a robust parsing system that generates a navigable 3D world based on a simple, user-editable. plain text file.",
    ],
    demo: {
      type: "java-modal",
      label: "Run in Browser",
    },
    githubUrl: "https://github.com/5elym/java-raycasting-engine",
  },
];

export default function Projects() {
  const [isJavaModalOpen, setIsJavaModalOpen] = useState(false);

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          variants={globalContainerVariants}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-32 text-center"
        >
          Featured <span className="text-primary text-glow">Projects</span>
        </motion.h2>

        {/* The Projects List */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={globalItemVariants}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start"
            >
              {/* Image box */}
              <div className="w-full lg:w-1/3 relative group">
                {/* Red glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full z-0 pointer-events-none transition-all duration-700 group-hover:bg-primary/40 group-hover:scale-110"></div>

                {/* Image container */}
                <div className="relative z-10 aspect-4/3 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-primary/50">
                  {/* PLACEHOLDER */}
                  <div className="text-zinc-600 font-mono text-sm flex flex-col items-center gap-2">
                    <span className="text-4xl text-zinc-800">{project.id}</span>
                    IMAGE PLACEHOLDER
                  </div>
                </div>
              </div>

              {/* The content */}
              <div className="w-full lg:w-2/3 flex flex-col pt-2">
                {/* Scope */}
                <span className="font-mono text-sm font-semibold tracking-widest text-primary mb-3">
                  {project.scope}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{project.title}</h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="space-y-4 mb-10 text-lg text-muted-foreground">
                  {project.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5 shrink-0 text-sm">▹</span> {/* Custom red bullet marker */}
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {/* website */}
                  {project.demo.type === "external-link" && (
                    <Button
                      nativeButton={false}
                      render={
                        <a href={project.demo.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                          {project.demo.label}
                        </a>
                      }
                      size="lg"
                      className="gap-2 font-semibold"
                    ></Button>
                  )}

                  {/* java */}
                  {project.demo.type === "java-modal" && (
                    <Button
                      onClick={() => {
                        setIsJavaModalOpen(true); // Open the modal
                      }}
                      size="lg"
                      className="gap-2 font-semibold"
                    >
                      <Terminal size={18} />
                      {project.demo.label}
                    </Button>
                  )}

                  <Button
                    nativeButton={false}
                    render={
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <SiGithub size={18} />
                        View Code
                      </a>
                    }
                    size="lg"
                    variant="outline"
                    className="gap-2"
                  ></Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <JavaModal
        isOpen={isJavaModalOpen}
        onClose={() => setIsJavaModalOpen(false)}
        jarUrl="/raycaster.jar" // Must match the name of your file in the public folder
      />
    </section>
  );
}

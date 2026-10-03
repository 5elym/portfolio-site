"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitBranch, Waypoints, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Your Name</span>.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          I'm a Frontend Developer specializing in React, TypeScript, and crafting beautiful user experiences.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          {/* shadcn Buttons automatically use your preset's primary and accent colors based on the variant */}
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            <GitBranch size={24} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Waypoints size={24} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </main>
  );
}

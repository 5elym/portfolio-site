"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitBranch, Waypoints, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-blue-500">Your Name</span>.
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
          I'm a Frontend Developer specializing in React, TypeScript, and crafting beautiful user experiences.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900">
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12 text-zinc-500">
          <a href="#" className="hover:text-zinc-300 transition-colors">
            <GitBranch size={24} />
          </a>
          <a href="#" className="hover:text-zinc-300 transition-colors">
            <Waypoints size={24} />
          </a>
          <a href="#" className="hover:text-zinc-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </main>
  );
}

"use client";

import AboutMe from "@/components/sections/aboutme";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
  return (
    <>
      <Hero />

      <AboutMe />

      <Separator className="w-2/3! mx-auto" />

      <Skills />

      <Separator className="w-2/3! mx-auto" />

      <Projects />

      <Separator className="w-2/3! mx-auto" />

      <Education />

      <Separator className="w-2/3! mx-auto" />

      <Contact />
    </>
  );
}

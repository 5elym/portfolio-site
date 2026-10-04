"use client";

import AboutMe from "@/components/sections/aboutme";
import Education from "@/components/sections/education";
import Hero from "@/components/sections/hero";
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

      <Education />

      <Separator className="w-2/3! mx-auto" />

      <AboutMe />
    </>
  );
}

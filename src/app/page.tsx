"use client";

import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import { ReactLenis } from "@studio-freight/react-lenis";
import { WorkExperience } from "@/components/timeline-work";

export default function Home() {
  return (
    <ReactLenis root>
      <>
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Contact />
      </>
    </ReactLenis>
  );
}

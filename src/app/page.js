"use client";
import Image from "next/image";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import { useRef } from "react";
import SectionDivider from "./components/section-divider";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 scroll-smooth">
      <Intro />
      <SectionDivider />
      <About />
      <ProjectSection />
      <ContactMe />
    </main>
  );
}

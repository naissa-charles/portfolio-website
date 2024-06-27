import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I'm a Software Developer with a passion for{" "}
        <span className="font-medium">Frontend Web Development</span>. My
        journey in tech began after participating in the Summer Immersion
        program with{" "}
        <a
          className="underline"
          href="https://girlswhocode.com/"
          target="_blank"
        >
          {" "}
          Girls Who Code
        </a>
        . During that summer, I learned about the significant impact technology
        can have on our everyday lives, and more importantly, the positive
        change it could bring in the future. Inspired by the desire to change
        the world through technology, I decided to pursue a degree in Computer
        Science.
      </p>
      <p>
        Fast forward eight years, my passion for technology's potential to
        benefit society and create effective social impact remains strong. Since
        graduating from college, I have been making contributions to the tech
        space as an <span className="italic">intrapreneur</span>, specifically
        working with Salesforce. However, I am open to full-time positions or
        freelance work in tech stacks such as{" "}
        <span className="font-medium">React, Next.js, Node.js. </span>
        Additionally, I am currently working on more open-source projects. As
        these projects are completed, they will be on my GitHub and updated on
        the project section.
      </p>

      <p className="mt-4 ">
        If you know or have opportunties that matches my skills, please
        don't hesitate to <span className="font-medium">contact</span> me.
      </p>
    </section>
  );
}

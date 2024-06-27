import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./section-heading";

export default function ProjectSection() {
  return (
    <section className="mb-20 scroll-mt-28 sm:mb-20" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags }: ProjectProps) {
  return (
    <section className=" bg-stone-100 mx-w-[42rem] border rounded-lg border-black/5 overflow-hidden sm:pr-8 md:h-[17rem] lg:h-[15rem] mb-3 sm:mb-8">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-3">
          {tags.map((tag, index) => (
            <li
              className="bg-rose-500 px-3 py-1 text-[0.7rem] uppercase text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

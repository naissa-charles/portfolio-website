"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-0 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center mt-28">
        <div>
          <Image
            src="/assets/personal-headshot.png"
            alt="NC Headshot"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-30 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
          />
        </div>
      </div>
      <p className="mb-5 mt-8">
        <span className="font-bold text-3xl sm:text-4xl">
          Hello, I'm Naïssa!
        </span>{" "}
      </p>
      <p className="mb-10 mt-4 font-medium !leading-[1.5] sm:text-3xl">
        {" "}
        Explore this site to learn more about my previous roles, client
        projects, and me. This website was built with React & Next.js. I will
        update this website as I develop new projects and add new features, so
        stay tuned!
      </p>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-700 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        {/* a tag because it will be an external link */}
        <a
          className="bg-stone-100 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition border border-black-black/10"
          href="https://www.linkedin.com/in/naissa-charles/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-stone-100 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black-black/10"
          href="https://github.com/naissa-charles"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full rounded-none border border-white h-[4.5rem] shadow-xl bg-white">
      <div className="flex justify-center items-center h-full w-full px-4 2xl:px-16">
        <div className="sm:flex hidden gap-3 md:gap-9">
          <Link href="/" className="uppercase hover:border-b hover:text-rose-500 font-semibold">
            Home
          </Link>
          <Link
            href={"#about"}
            className="uppercase hover:border-b hover:text-rose-500 font-semibold"
          >
            About
          </Link>
          <Link href={"#projects"} className="uppercase hover:border-b hover:text-rose-500 font-semibold">
            Projects
          </Link>
          <Link
            href={"#contact"}
            className="uppercase hover:border-b hover:text-rose-500 font-semibold"
          >
            Contact Me
          </Link>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-[20rem]"
        >
          <Image
            src={"menu-icon.svg"}
            width={40}
            height={40}
            alt="menu"
          ></Image>
        </div>
        <div
          className={
            menuOpen
              ? "fixed right-0 top-0 w-[100%] sm:hidden h-[45%] bg-white p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer ">
              <Image
                src={"icons8-close.svg"}
                width={40}
                height={40}
                alt="menu-close"
              ></Image>
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li className="py-4" onClick={() => setMenuOpen(false)}> Home</li>
              </Link>
              <Link href="#about">
                <li className="py-4" onClick={() => setMenuOpen(false)}>About</li>
              </Link>
              <Link href="#projects">
                <li className="py-4" onClick={() => setMenuOpen(false)}>Projects</li>
              </Link>
              <Link href="#contact">
                <li className="py-4" onClick={() => setMenuOpen(false)}>Contact Me</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

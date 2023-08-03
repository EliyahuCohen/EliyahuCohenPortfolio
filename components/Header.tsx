"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import ScrollTo from "./ScrollTo";

export default function Header() {
  return (
    <header className="z-[999] relative ">
      <ScrollTo />
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 h-[4.5rem] left-1/2  w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-3/4 flex justify-center items-center"
              key={link.hash}
            >
              <Link
                title={`to ${link.name} Section`}
                className="flex justify-center items-center p-3 hover:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

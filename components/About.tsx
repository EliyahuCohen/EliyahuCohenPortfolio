"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[55rem] text-center leading-8 mx-auto px-7 "
    >
      <SectionHeading heading="About me" />
      <p className="mb-3">
        As a software engineering enthusiast, I am on a constant journey of
        learning and growth. My fascination with Fullstack development has led
        me to master a core tech stack of React, Next.js, Node.js, and MongoDB.
        The problem-solving aspect of programming drives my passion, and I find
        great joy in unraveling complex challenges. Whether {"it's"} building
        dynamic user interfaces or crafting efficient backend systems, I am
        dedicated to delivering impactful solutions. Currently seeking new
        opportunities, I am eager to contribute my expertise and creativity to
        exciting projects.
        <p>
          <span className="italic">When {"I'm"} not coding</span>, I enjoy
          playing video games, watching movies and play the guitar.
        </p>
        <a href="#contact" className="underline">
          {"Let's"} connect
        </a>{" "}
        and explore how I can make a meaningful impact as a software developer.
      </p>
    </motion.section>
  );
}

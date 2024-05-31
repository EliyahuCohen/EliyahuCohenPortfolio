"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function Intro() {
  return (
    <section id="home">
      <div className="pt-[10rem] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
            delay: 0.7,
          }}
        >
          <div className="relative">
            <Image
              src={Logo}
              alt="main image"
              quality="95"
              height="195"
              width="195"
              priority={true}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-black/[0.7]"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
              className="text-4xl absolute bottom-0 right-0 "
            >
              👋
            </motion.span>
          </div>
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 max-w-[75rem] mx-auto mt-[5rem] text-center px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, {"I'm"} Eliyahu.</span> {"I'm"} a{" "}
        <span className="font-bold">Full-Stack Developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          title="Contact me title"
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none   hover:bg-black/[0.85]  hover:border-black active:scale-95 transition "
          onClick={() => {}}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group hover:bg-black hover:text-white bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-95 transition cursor-pointer  border-black  dark:bg-white/10 dark:border-2 "
          href="/EliyahuCohenResume.pdf"
          title="Download cv  title"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:text-white transition" />
        </a>

        <a
          title="linkedin profile site "
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.05] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/eliyahu-cohen-b3499716a/?originalSubdomain=il"
          target="_blank"
        >
          <BsLinkedin className="dark:text-black" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/EliyahuCohen"
          target="_blank"
          title="personal github page"
        >
          <FaGithubSquare className="dark:text-black" />
        </a>
      </motion.div>
    </section>
  );
}

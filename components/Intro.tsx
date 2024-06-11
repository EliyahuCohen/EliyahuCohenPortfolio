"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin, BsWhatsapp } from "react-icons/bs";
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
        <span className="font-bold">Hello there!</span> {"I'm"} Eliyahu Cohen, a
        passionate Full-Stack Developer. With{" "}
        <span className="font-bold">over 3.5 years</span> of experience,
        {"I've "}
        immersed myself in the dynamic world of software development, crafting
        innovative solutions and pushing boundaries. {"Let's"} collaborate and
        create remarkable software together!
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

        <div className="flex gap-2 items-center my-5 md:my-0 ">
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
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://api.whatsapp.com/send?phone=972585669183"
            target="_blank"
            title="personal whatsapp number"
          >
            <BsWhatsapp className="dark:text-black" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

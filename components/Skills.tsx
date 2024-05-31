"use client";
import SectionDivider from "./SectionDivider";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationVarient = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.3,
    },
  }),
};

export default function Skills() {
  function getColor(data:string){
    return data.toString()
  }
  return (
    <section id="skills">
      <div className="text-center my-28">
        <SectionDivider />
        <SectionHeading heading="My Skills" />
      </div>
      <div className="max-w-[55rem] mb-5 scroll-mt-28 mx-auto sm:mb-8 px-2">
        <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800 ">
          {skillsData.map((skill, index) => (
            <motion.li
              variants={fadeInAnimationVarient}
              className={`bg-white border border-black/[0.1] rounded-xl px-5 py-3 cursor-pointer duration-300 transition-all hover:font-semibold ${getColor(skill.color)}`}
              key={skill.name}
              initial="initial"
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileInView="animate"
              custom={index}
            >
              {skill.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

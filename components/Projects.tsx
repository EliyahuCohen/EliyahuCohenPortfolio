import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

export type ProjectType = (typeof projectsData)[number];
export type showProps = {
  show?: boolean;
  limit: number;
};

export default function Projects({ show, limit }: showProps) {
  return (
    <section id="projects" className="mx-auto">
      <div className="text-center">
        <SectionHeading heading="My Projects" />
      </div>
      <div className="flex flex-col items-center gap-5 p-5">
        {projectsData
          .filter((_, index) => index < limit - 1)
          .map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
      {show ? (
        <div className="text-center my-10">
          <Link
            href={"/projects"}
            className=" text-black font-bold py-3 px-4 bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-400 rounded-md "
          >
            More Projects
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  liveDemo,
}: ProjectType) {
  return (
    <section className="grid gap-5 md:text-left text-center md:grid-cols-2 items-center grid-cols-1 p-3 bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative rounded-md ">
      <div className="absolute top-0 right-0 p-4 flex gap-1">
        {liveDemo ? (
          <Link target="_blank" href={liveDemo}>
            <BsLink45Deg
              className="hover:text-gray-500 hover:cursor-pointer"
              title="live site link"
            />
          </Link>
        ) : null}
        {github ? (
          <Link target="_blank" href={github}>
            <AiOutlineGithub
              className="hover:text-gray-500 hover:cursor-pointer"
              title="github link"
            />
          </Link>
        ) : null}
      </div>
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10  ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 justify-center md:justify-start">
          {tags.map((tag) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {/* if the images are local we dont have to specify the height and width */}
      <Image
        src={imageUrl}
        alt={"Project I worked on"}
        quality={95}
        className="top-8 mx-auto w-[28.25rem] max-h-[30rem] md:translate-x-10 md:translate-y-10 rounded-t-lg shadow-2xl transition block md:rotate-6 md:hover:rotate-0 md:hover:translate-x-0 md:hover:translate-y-0"
      />
    </section>
  );
}

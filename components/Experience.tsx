"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { Timeline } from "./timeline";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="text-center my-20">
        <SectionHeading heading="My Experience" />
      </div>
      <Timeline />
    </section>
  );
}

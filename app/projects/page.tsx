import Projects from "@/components/Projects";
import ScrollTo from "@/components/ScrollTo";
import React from "react";

export default function ProjectsPage() {
  return (
    <div>
      <ScrollTo />
      <Projects limit={100} show={false} />
    </div>
  );
}

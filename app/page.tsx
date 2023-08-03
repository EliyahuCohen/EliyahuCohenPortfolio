import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <span id="about"></span>
      <SectionDivider />
      <About />
      <Projects limit={5} show={true} />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

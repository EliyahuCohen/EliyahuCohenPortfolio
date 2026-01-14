
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import Skills from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/custom-cursor";
import { PageLoader } from "@/components/page-loader";
import { WarpSpeed } from "@/components/warp-speed";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white font-sans relative">
        <CustomCursor />
        <PageLoader />
        <WarpSpeed />

        <div className="relative z-10 bg-background/80 md:bg-transparent mb-[100vh]">
          <Hero />
          <div className="bg-background/90 backdrop-blur-sm relative z-20 border-y border-white/5">
            <Timeline />
          </div>
          <Skills />
        </div>

        <div className="rotate-0">
          <Contact />
        </div>
      </div>
    </SmoothScroll>
  )
}

import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

const ProjectShowcase = dynamic(() =>
  import("@/components/sections/ProjectShowcase").then((mod) => mod.ProjectShowcase),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((mod) => mod.Process),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((mod) => mod.Services),
);
const TechStack = dynamic(() =>
  import("@/components/sections/TechStack").then((mod) => mod.TechStack),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ProjectShowcase />
        <Process />
        <Services />
        <TechStack />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
import About from "@/views/about";
import Contact from "@/views/contact";
import Projects from "@/views/projects";
import Skills from "@/views/skills";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden overflow-y-scroll snap-mandatory snap-y scroll-smooth">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

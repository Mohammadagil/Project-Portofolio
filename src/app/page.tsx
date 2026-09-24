import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <StackStrip />
        <Projects />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

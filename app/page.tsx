import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Page() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </div>
  );
}

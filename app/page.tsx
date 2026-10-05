import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Page() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </div>
  );
}

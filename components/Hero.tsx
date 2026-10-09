import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <div className="hero fade">
      <h1>Darrel Wihandi</h1>
      <p>
        Software engineer working on graphics, compilers, and GPU systems.
        3rd-year Software Engineering @ Waterloo.
      </p>
      <p className="hero-now">
        <span className="dot" />
        Currently SWE intern @ Carta · contributing to NVIDIA&apos;s Slang compiler
      </p>
      <div className="hero-links">
        <a
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-primary"
        >
          Resume ↗
        </a>
        <a
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pill"
        >
          GitHub ↗
        </a>
        <a
          href={contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pill"
        >
          LinkedIn ↗
        </a>
        <a href={`mailto:${contact.email}`} className="pill">
          Email
        </a>
      </div>
    </div>
  );
}

import { contact } from "@/lib/data";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-name">Darrel Wihandi</span>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href={contact.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

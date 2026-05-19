import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="fade">
      <div className="section-label">Projects</div>
      {projects.map((project) => (
        <div key={project.name} className="project-item">
          {project.image && (
            <div className="project-image-wrap">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={0}
                height={0}
                sizes="(max-width: 600px) 100vw, 680px"
                quality={100}
                className="project-image"
              />
            </div>
          )}
          <div className="project-header">
            <span className="project-name">
              {project.active && <span className="project-active-dot" />}
              {project.name}
            </span>
            <span className="project-type">{project.type}</span>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-live"
              >
                {project.liveLinkLabel ?? "Live Demo"} ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

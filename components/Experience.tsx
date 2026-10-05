import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="fade">
      <div className="section-label">Experience</div>
      {experience.map((item) => (
        <div key={item.company} className="exp-item">
          <div className="exp-date">{item.date}</div>
          <div>
            <div className="exp-role">
              {item.current && <span className="dot" />}
              {item.role}
            </div>
            <div className="exp-co">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.company} ↗
                </a>
              ) : (
                item.company
              )}
            </div>
            <p className="exp-desc">{item.desc}</p>
            <div className="exp-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

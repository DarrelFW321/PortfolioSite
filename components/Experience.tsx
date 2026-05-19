import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="fade">
      <div className="section-label">Experience</div>
      {experience.map((item, i) => (
        <div key={i} className="exp-item">
          <div className="exp-date">{item.date}</div>
          <div>
            <div className="exp-role">{item.role}</div>
            <div className="exp-co">{item.company}</div>
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

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="fade">
      <div className="section-label">Skills</div>
      <div className="skills-list">
        {Object.entries(skills).map(([group, tags]) => (
          <div key={group} className="skills-line">
            <span className="skills-group-label">{group}</span>
            <div className="skills-row">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

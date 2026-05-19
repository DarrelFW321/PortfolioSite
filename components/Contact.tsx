import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="fade">
      <div className="section-label">Contact</div>
      <p className="contact-intro">
        Open to internship opportunities and interesting conversations about AI,
        compilers, or developer tooling.
      </p>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`} className="contact-link">
          <div>
            <div className="contact-link-name">Email</div>
            <div className="contact-link-val">{contact.email}</div>
          </div>
          <span className="contact-link-arr">↗</span>
        </a>
        <a
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div>
            <div className="contact-link-name">GitHub</div>
            <div className="contact-link-val">{contact.github.label}</div>
          </div>
          <span className="contact-link-arr">↗</span>
        </a>
        <a
          href={contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div>
            <div className="contact-link-name">LinkedIn</div>
            <div className="contact-link-val">{contact.linkedin.label}</div>
          </div>
          <span className="contact-link-arr">↗</span>
        </a>
      </div>
    </section>
  );
}

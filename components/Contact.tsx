import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="fade">
      <div className="section-label">Contact</div>
      <p className="contact-intro">
        Open to internships and conversations about systems, compilers, or AI
        infrastructure. Best reached at{" "}
        <a href={`mailto:${contact.email}`} className="contact-email">
          {contact.email}
        </a>
        .
      </p>
    </section>
  );
}

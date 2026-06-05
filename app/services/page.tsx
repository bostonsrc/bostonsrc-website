import Link from "next/link";
import type { Metadata } from "next";
import { institution } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Boston Scientific Research Center offers research development consulting, faculty development programs, and methodology training for universities, healthcare institutions, and academic organizations."
};

const primaryServices = [
  {
    title: "Research Development and Consulting",
    text:
      "BSRC works with institutions to strengthen research infrastructure, raise scholarly output, and build the systems that support sustained academic growth. Areas of focus include research office development, publication capacity, grant readiness, supervisor training frameworks, and research culture development."
  },
  {
    title: "Faculty Development Programs",
    text:
      "BSRC supports the academic and scholarly development of faculty, clinicians, and postgraduate researchers through structured programs informed by international expertise. Programs are available online and in person, tailored to institutional needs across health sciences, education, management, and research methodology."
  },
  {
    title: "Methodology and Reporting Standards",
    text:
      "BSRC provides methodology guidance, reporting-standard training, and evidence-synthesis support for institutions and research teams. This work is grounded in internationally recognized reporting guidelines and evidence-based scholarly practice."
  }
];

const supportingAreas = [
  {
    title: "Research and Collaboration",
    text: "Co-branded studies, multi-site projects, and systematic reviews with partner institutions."
  },
  {
    title: "AI-enabled Scholarly Workflows",
    text: "Responsible integration of digital tools to support research processes and scholarly productivity."
  },
  {
    title: "Academic Mentorship",
    text: "Structured mentorship for clinicians, faculty, and postgraduate researchers."
  },
  {
    title: "Global Research Partnerships",
    text: "Cross-border academic collaborations built around shared scholarly priorities."
  },
  {
    title: "Academic Events and Convening",
    text: "Conferences, summits, and forums connecting researchers and institutions globally."
  },
  {
    title: "Educational Development",
    text: "Program design and pedagogical support for health and professional education environments."
  }
];

const partnerGroups = [
  "Universities and higher education institutions",
  "Medical and health professions education institutions",
  "Research institutes and scholarly networks",
  "Hospitals and healthcare organizations",
  "Professional bodies and academic associations",
  "Government and public sector organizations",
  "Non-governmental and development organizations",
  "Faculty development offices and academic leadership teams"
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section services-hero">
        <div className="shell page-hero__inner services-hero__inner">
          <div>
            <p className="eyebrow">What We Do</p>
            <h1 className="page-title">
              Advancing research capacity, scholarly excellence, and academic development for institutions worldwide.
            </h1>
            <p className="lead lead--page">
              BSRC partners with universities, healthcare institutions, hospitals, and academic
              organizations to strengthen research systems, develop faculty, and build lasting
              scholarly culture. Our work is informed by an international advisory council of
              distinguished scholars across health sciences, education, methodology, and research
              leadership.
            </p>
          </div>
          <div className="services-hero__action">
            <Link className="button" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell">
          <div className="primary-services-grid">
            {primaryServices.map((service) => (
              <article className="primary-service-card" key={service.title}>
                <h2 className="section-title section-title--small">{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Further Areas of Engagement</p>
              <h2 className="section-title">Additional areas we support.</h2>
            </div>
          </div>
          <div className="supporting-services-grid">
            {supportingAreas.map((area) => (
              <article className="supporting-service" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell partner-strip">
          <div>
            <p className="eyebrow">Who We Work With</p>
            <h2 className="section-title">Academic, healthcare, and research partners.</h2>
          </div>
          <ul className="partner-list" aria-label="Who BSRC works with">
            {partnerGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell cta-block services-cta">
          <div>
            <p className="eyebrow">Start a Conversation</p>
            <h2 className="section-title">Start a conversation with BSRC</h2>
            <p>
              Whether you are looking to strengthen research capacity, develop your faculty, or
              explore an academic partnership, we welcome the conversation.
            </p>
            <p className="services-cta__meta">
              <a href={`mailto:${institution.email}`}>{institution.email}</a>
              <span>{institution.website.replace("https://", "")}</span>
            </p>
          </div>
          <div className="cta-block__actions">
            <Link className="button" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

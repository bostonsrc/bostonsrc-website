import Image from "next/image";
import Link from "next/link";
import { collaborationPoints, homeHighlights, philosophyPoints } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="shell hero__grid hero__grid--editorial">
          <div className="hero__content">
            <p className="eyebrow">Boston Scientific Research Center</p>
            <h1 className="display-title">
              Advancing scientific inquiry, interdisciplinary scholarship, and evidence-driven
              innovation through globally connected research ecosystems.
            </h1>
            <p className="lead">
              Boston Scientific Research Center is a United States-based academic and scientific
              center devoted to research development, interdisciplinary scholarship, and
              internationally engaged knowledge production across science, education, and evidence
              studies.
            </p>
            <div className="hero__actions">
              <Link className="button" href="/about">
                Explore the center
              </Link>
              <Link className="button button--secondary" href="/contact">
                Contact BSR
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__image-frame">
              <Image
                alt="Architectural skyline with waterfront buildings"
                className="hero__image"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 38vw"
                src="/home-hero-boston.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell stats-row">
          <div>
            <span className="stat-label">Center profile</span>
            <strong>Research-centered and academically grounded</strong>
          </div>
          <div>
            <span className="stat-label">Scholarly model</span>
            <strong>Interdisciplinary, international, and evidence-led</strong>
          </div>
          <div>
            <span className="stat-label">Research emphasis</span>
            <strong>Scientific rigor, methodological depth, and scholarly integrity</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Center Overview</p>
            <h2 className="section-title">
              A scholarly environment designed for credibility, clarity, and enduring relevance.
            </h2>
          </div>
          <div className="prose">
            <p>
              BSR is designed to serve as a modern research center with a restrained,
              internationally legible identity. Its focus is not promotional spectacle, but the
              disciplined cultivation of scientific quality, thoughtful collaboration, and
              future-aware scholarly systems.
            </p>
            <p>
              The center brings together research development, editorial discipline, and
              interdisciplinary academic exchange to strengthen evidence-driven work across
              center-led and scholarly environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell split-panels">
          <article className="panel">
            <p className="eyebrow">Research Philosophy</p>
            <h2 className="section-title">Scientific seriousness begins with disciplined method.</h2>
            <ul className="editorial-list">
              {philosophyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <p className="eyebrow">Global Collaborations</p>
            <h2 className="section-title">Collaboration is approached as a durable scholarly practice.</h2>
            <ul className="editorial-list">
              {collaborationPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured Initiatives</p>
              <h2 className="section-title">Priority domains that define the center&apos;s academic agenda.</h2>
            </div>
          </div>
          <div className="card-grid">
            {homeHighlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell cta-block">
          <div>
            <p className="eyebrow">Center Contact</p>
            <h2 className="section-title">Engage BSR for research, collaboration, or center dialogue.</h2>
            <p className="lead lead--compact">
              We welcome inquiries from researchers, institutions, educational leaders, and
              internationally minded collaborators.
            </p>
          </div>
          <div className="cta-block__actions">
            <Link className="button" href="/contact">
              Start a conversation
            </Link>
            <Link className="button button--secondary" href="/leadership-team">
              View leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

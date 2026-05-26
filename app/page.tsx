import Link from "next/link";
import {
  advisoryProfiles,
  collaborationPoints,
  homeHighlights,
  institution,
  philosophyPoints,
  publicationPrograms
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="shell hero__grid">
          <div>
            <p className="eyebrow">Independent Research Institution</p>
            <h1 className="display-title">
              Advancing scientific inquiry, interdisciplinary scholarship, and evidence-driven
              innovation through globally connected research ecosystems.
            </h1>
            <p className="lead">
              Boston Scientific Research Center is a United States-based institutional platform for
              scholarly collaboration, research support, and academically serious innovation across
              science, education, and evidence development.
            </p>
            <div className="hero__actions">
              <Link className="button" href="/about">
                Explore the institution
              </Link>
              <Link className="button button--secondary" href="/contact">
                Contact BSR
              </Link>
            </div>
          </div>
          <aside className="hero-card">
            <p className="eyebrow">Official Details</p>
            <dl className="detail-list">
              <div>
                <dt>Legal name</dt>
                <dd>{institution.legalName}</dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>
                  {institution.addressLine1}
                  <br />
                  {institution.addressLine2}
                  <br />
                  {institution.country}
                </dd>
              </div>
              <div>
                <dt>Wyoming Original ID</dt>
                <dd>{institution.originalId}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>
                  <a href={institution.website} target="_blank" rel="noreferrer">
                    www.bostonsrc.org
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell stats-row">
          <div>
            <span className="stat-label">Institutional posture</span>
            <strong>Independent and editorially grounded</strong>
          </div>
          <div>
            <span className="stat-label">Operating model</span>
            <strong>Interdisciplinary and globally collaborative</strong>
          </div>
          <div>
            <span className="stat-label">Core emphasis</span>
            <strong>Research rigor, academic support, scientific integrity</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Institutional Overview</p>
            <h2 className="section-title">
              A scholarly environment designed for credibility, clarity, and enduring relevance.
            </h2>
          </div>
          <div className="prose">
            <p>
              BSR is designed to serve as a modern research institution with a restrained,
              internationally legible identity. Its focus is not promotional spectacle, but the
              disciplined cultivation of scientific quality, thoughtful collaboration, and
              future-aware scholarly systems.
            </p>
            <p>
              The organisation combines research consultation, editorial strength, and
              interdisciplinary partnership to support evidence-driven work across academic and
              professional settings.
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
              <h2 className="section-title">Priority domains that define the institutional agenda.</h2>
            </div>
            <Link className="text-link" href="/research-innovation">
              View all research areas
            </Link>
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
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Publications Highlight</p>
            <h2 className="section-title">An institutional record oriented toward rigor and impact.</h2>
          </div>
          <div className="stack-list">
            {publicationPrograms.slice(0, 3).map((item) => (
              <article className="stack-item" key={item.category}>
                <h3>{item.category}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Scientific Advisory Board</p>
              <h2 className="section-title">
                Governance designed for scholarly quality and international perspective.
              </h2>
            </div>
            <Link className="text-link" href="/advisory-board">
              Review advisory structure
            </Link>
          </div>
          <div className="board-grid">
            {advisoryProfiles.map((profile) => (
              <article className="board-card" key={`${profile.title}-${profile.country}`}>
                <p className="board-card__name">{profile.name}</p>
                <p className="board-card__meta">
                  {profile.title}
                  <br />
                  {profile.institution}
                  <br />
                  {profile.country}
                </p>
                <p>{profile.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell cta-block">
          <div>
            <p className="eyebrow">Institutional Contact</p>
            <h2 className="section-title">Engage BSR for research, collaboration, or academic support.</h2>
            <p className="lead lead--compact">
              We welcome inquiries from researchers, institutions, educational leaders, and
              internationally minded collaborators.
            </p>
          </div>
          <div className="cta-block__actions">
            <Link className="button" href="/contact">
              Start a conversation
            </Link>
            <Link className="button button--secondary" href="/services">
              Review services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

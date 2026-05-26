import { PageHero } from "@/components/page-hero";
import { publicationPrograms } from "@/lib/site-content";

export const metadata = {
  title: "Publications & Projects"
};

export default function PublicationsProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications & Projects"
        title="A publication and project architecture designed for scholarly depth and international collaboration."
        intro="This section is structured to present BSR's developing institutional record across publications, collaborative initiatives, and ongoing scholarly programmes."
      />

      <section className="section">
        <div className="shell publication-list">
          {publicationPrograms.map((item) => (
            <article className="publication-item" key={item.category}>
              <div>
                <p className="eyebrow">{item.category}</p>
                <h2 className="section-title section-title--small">{item.category}</h2>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Portfolio Note</p>
            <h2 className="section-title">Institutional records can expand without compromising restraint.</h2>
          </div>
          <div className="prose">
            <p>
              The page framework is intentionally designed so that published outputs, guidelines
              work, international collaborations, and ongoing projects can be added over time in a
              way that remains clean, measurable, and institutionally coherent.
            </p>
            <p>
              This avoids the common academic-template problem of visual clutter while preserving
              room for serious content density as the institutional portfolio grows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

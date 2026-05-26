import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Institutional support services for research, academic development, and scholarly communication."
        intro="BSR provides a focused service offering designed to strengthen research quality, educational development, and globally connected academic work."
      />

      <section className="section">
        <div className="shell services-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h2 className="section-title section-title--small">{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Engagement Model</p>
            <h2 className="section-title">Quietly premium, academically serious, operationally clear.</h2>
          </div>
          <div className="prose">
            <p>
              Services are presented as institutional capabilities rather than commercialised
              product packages. This keeps the tone aligned with globally respected academic and
              research organisations.
            </p>
            <p>
              The framework also supports future expansion into programme pages, consultation
              workflows, or CMS-driven service details without changing the site’s overall
              character.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

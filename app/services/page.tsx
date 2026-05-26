import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Center Areas"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Center Areas"
        title="Academic focus areas across research, faculty growth, scientific communication, and collaboration."
        intro="These areas reflect how BSR develops scholarly culture, supports faculty and research growth, and builds academically serious collaborations."
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
              These areas are presented as academic priorities rather than commercial offerings.
              This keeps the tone aligned with globally respected research centers and scholarly
              organisations.
            </p>
            <p>
              The framework can expand later into program pages, centers of focus, or CMS-driven
              detail without changing the center&apos;s overall character.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

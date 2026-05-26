import { PageHero } from "@/components/page-hero";
import { researchAreas } from "@/lib/site-content";

export const metadata = {
  title: "Research & Innovation"
};

export default function ResearchInnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Interdisciplinary work organised around rigor, clarity, and future-facing scholarship."
        intro="Our research and innovation agenda supports evidence development, scholarly operations, educational advancement, and internationally relevant academic collaboration."
      />

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Core Domains</p>
              <h2 className="section-title">Seven interlocking areas of institutional focus.</h2>
            </div>
          </div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell longform-grid">
          <div>
            <p className="eyebrow">Institutional Method</p>
            <h2 className="section-title">Innovation is treated as a scholarly discipline, not a visual style.</h2>
          </div>
          <div className="prose">
            <p>
              BSR’s understanding of innovation is practical and evidence-oriented. New methods,
              digital tools, and collaborative systems are evaluated for their ability to improve
              research quality, educational delivery, and scholarly communication without diluting
              academic standards.
            </p>
            <p>
              This approach enables the institution to remain future-facing while maintaining an
              editorially calm and intellectually serious identity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

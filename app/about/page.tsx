import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Boston Scientific Research Center, its research philosophy, global outlook, and commitment to evidence-driven interdisciplinary scholarship."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BSR"
        title="A research center shaped by scientific integrity and intellectual restraint."
        intro="Boston Scientific Research Center is designed to operate with the clarity, seriousness, and global orientation expected of a contemporary academic center."
      />

      <section className="section">
        <div className="shell narrative-grid">
          <article className="narrative-card">
            <p className="eyebrow">Vision</p>
            <h2 className="section-title">To strengthen globally connected scholarship through disciplined scholarly practice.</h2>
            <p>
              BSR envisions a research environment in which evidence, thoughtful methodology, and
              international collaboration converge to create enduring scholarly value.
            </p>
          </article>
          <article className="narrative-card">
            <p className="eyebrow">Mission</p>
            <h2 className="section-title">To advance research, education, and scientific communication with credibility and care.</h2>
            <p>
              Our mission is to advance evidence-driven scholarship through interdisciplinary
              research culture, editorial quality, and carefully governed innovation.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell longform-grid">
          <div>
            <p className="eyebrow">Research Philosophy</p>
            <h2 className="section-title">Method precedes momentum.</h2>
          </div>
          <div className="prose">
            <p>
              BSR approaches scientific work with a belief that credibility emerges from method,
              not speed. Inquiry must be reproducible where possible, transparent in its logic, and
              proportionate in its claims.
            </p>
            <p>
              This philosophy informs our work in evidence synthesis, research development,
              educational advancement, and carefully governed digital scholarship. Digital
              acceleration is useful only when it preserves academic judgment and strengthens the integrity of
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell longform-grid">
          <div>
            <p className="eyebrow">Global Outlook</p>
            <h2 className="section-title">International credibility requires clarity of standards.</h2>
          </div>
          <div className="prose">
            <p>
              BSR is built with a global outlook, recognizing that significant scholarship often
              emerges from distributed expertise, cross-border exchange, and coherent
              center-led collaboration.
            </p>
            <p>
              Our public language, organizational structure, and research posture are
              intentionally designed to be legible across international academic settings while
              remaining grounded in a disciplined United States-based legal and organizational
              framework.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell three-up">
          <article className="card">
            <h3>Commitment to Scientific Integrity</h3>
            <p>
              We prioritize methodological accountability, ethical scholarly conduct, and
              proportionate scientific communication in every center engagement.
            </p>
          </article>
          <article className="card">
            <h3>Interdisciplinary Collaboration Model</h3>
            <p>
              We support partnership structures that connect researchers, educators, clinicians,
              and academic leaders through clearly defined scholarly objectives.
            </p>
          </article>
          <article className="card">
            <h3>Editorial Culture</h3>
            <p>
              BSR values thoughtful language, measured presentation, and organizational coherence as
              part of scientific credibility rather than decoration around it.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell cta-block">
          <div>
            <p className="eyebrow">Learn More</p>
            <h2 className="section-title">Learn more about our work</h2>
            <p className="lead lead--compact">
              To explore how BSRC partners with institutions and research teams, visit our What We
              Do page.
            </p>
          </div>
          <div className="cta-block__actions">
            <Link className="button" href="/services">
              What We Do
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

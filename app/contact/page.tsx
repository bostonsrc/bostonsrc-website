import { PageHero } from "@/components/page-hero";
import { institution } from "@/lib/site-content";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Professional contact for center inquiries, collaboration, and scholarly engagement."
        intro="For collaboration, academic engagement, or scholarly partnership, please contact BSR directly by email or connect with the center on LinkedIn."
      />

      <section className="section">
        <div className="shell contact-single">
          <div className="contact-panel">
            <p className="eyebrow">Inquiries</p>
            <h2 className="section-title">Contact center</h2>
            <p className="statement-text statement-text--smaller">
              For inquiries, please feel free to email the center directly or connect
              with Boston Scientific Research Center on LinkedIn.
            </p>
            <div className="contact-actions">
              <a className="button button--primary" href={`mailto:${institution.email}`}>
                Email BSR
              </a>
              <a
                className="button button--secondary"
                href={institution.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="contact-direct">
              <p>
                <strong>Email</strong>
                <br />
                <a className="contact-link" href={`mailto:${institution.email}`}>
                  {institution.email}
                </a>
              </p>
              <p>
                <strong>LinkedIn</strong>
                <br />
                <a
                  className="contact-link"
                  href={institution.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Boston Scientific Research Center
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

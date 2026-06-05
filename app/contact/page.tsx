import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { institution } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Boston Scientific Research Center for research collaboration, institutional partnership, or academic engagement."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        intro="For research collaboration, academic engagement, or institutional partnership, reach us directly by email or connect with us on LinkedIn."
      />

      <section className="section">
        <div className="shell contact-single">
          <div className="contact-panel">
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

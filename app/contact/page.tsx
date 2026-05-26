import { ContactForm } from "@/components/contact-form";
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
        intro="Use the form below to contact BSR regarding center collaboration, academic engagement, leadership communication, or scholarly partnership."
      />

      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-panel">
            <p className="eyebrow">Inquiries</p>
            <h2 className="section-title">Contact center</h2>
            <ContactForm />
          </div>
          <aside className="contact-panel contact-panel--secondary">
            <p className="eyebrow">Registered Office</p>
            <h2 className="section-title section-title--small">{institution.legalName}</h2>
            <p>
              {institution.addressLine1}
              <br />
              {institution.addressLine2}
              <br />
              {institution.country}
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${institution.email}`}>{institution.email}</a>
            </p>
            <p>
              <strong>Website</strong>
              <br />
              <a href={institution.website} target="_blank" rel="noreferrer">
                www.bostonsrc.org
              </a>
            </p>
            <p>
              <strong>LinkedIn</strong>
              <br />
              <a href={institution.linkedin} target="_blank" rel="noreferrer">
                Boston Scientific Research Center
              </a>
            </p>
            <div className="map-frame">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=30%20N%20Gould%20St%20Ste%20N%2C%20Sheridan%2C%20WY%2082801&z=15&output=embed"
                title="Map showing the registered office of Boston Scientific Research Center"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { institution, navigation } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <div className="site-footer__brand">
            <Wordmark compact />
          </div>
          <p className="footer-copy">
            Scientific inquiry, interdisciplinary scholarship, and globally oriented academic collaboration.
          </p>
        </div>
        <div>
          <p className="footer-heading">Registered Office</p>
          <p className="footer-copy">
            {institution.legalName}
            <br />
            {institution.addressLine1}
            <br />
            {institution.addressLine2}
            <br />
            {institution.country}
          </p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <p className="footer-copy">
            <a href={`mailto:${institution.email}`}>{institution.email}</a>
            <br />
            <a href={institution.website} target="_blank" rel="noreferrer">
              www.bostonsrc.org
            </a>
            <br />
            <a href={institution.linkedin} target="_blank" rel="noreferrer">
              LinkedIn: Boston Scientific Research Center
            </a>
          </p>
        </div>
        <div>
          <p className="footer-heading">Navigate</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="shell site-footer__base">
        <p>© 2026 Boston Scientific Research Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

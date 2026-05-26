import Link from "next/link";
import { institution, navigation } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="eyebrow">Boston Scientific Research Center</p>
          <p className="footer-copy">
            Independent scientific research and academic support with an editorially driven,
            internationally oriented institutional posture.
          </p>
        </div>
        <div>
          <p className="footer-heading">Institution</p>
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
            Wyoming Original ID: {institution.originalId}
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

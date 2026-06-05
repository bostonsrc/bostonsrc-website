"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/wordmark";
import { institution, navigation } from "@/lib/site-content";

export function SiteFooter() {
  const pathname = usePathname();
  const showContactDetails = pathname !== "/contact";

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
        {showContactDetails ? (
          <div>
            <p className="footer-heading">Contact</p>
            <p className="footer-copy">
              <a className="contact-link" href={`mailto:${institution.email}`}>
                {institution.email}
              </a>
              <br />
              <a className="contact-link" href={institution.website} target="_blank" rel="noreferrer">
                www.bostonsrc.org
              </a>
              <br />
              <span>LinkedIn: </span>
              <a className="contact-link" href={institution.linkedin} target="_blank" rel="noreferrer">
                Boston Scientific Research Center
              </a>
            </p>
          </div>
        ) : null}
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

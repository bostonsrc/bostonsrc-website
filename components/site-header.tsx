"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/site-content";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Wordmark compact />
        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="site-header__toggle"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-nav ${isOpen ? "site-nav--open" : ""}`} aria-label="Primary">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                className={`site-nav__link ${isActive ? "site-nav__link--active" : ""}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

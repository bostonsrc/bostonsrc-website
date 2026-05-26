import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bostonsrc.org"),
  title: {
    default: "Boston Scientific Research Center",
    template: "%s | Boston Scientific Research Center"
  },
  description:
    "Boston Scientific Research Center is a United States-based scientific and academic center focused on evidence-driven inquiry, interdisciplinary scholarship, and globally connected collaboration.",
  openGraph: {
    title: "Boston Scientific Research Center",
    description:
      "Website for Boston Scientific Research Center, a globally connected scientific and academic center.",
    url: "https://www.bostonsrc.org",
    siteName: "Boston Scientific Research Center",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Scientific Research Center",
    description:
      "Scientific inquiry and interdisciplinary scholarship shaped by rigor, restraint, and global academic collaboration."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

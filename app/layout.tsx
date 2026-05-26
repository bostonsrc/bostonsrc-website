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
    "Boston Scientific Research Center is an independent United States-based scientific research and academic support organisation focused on evidence-driven inquiry, interdisciplinary scholarship, and globally connected collaboration.",
  openGraph: {
    title: "Boston Scientific Research Center",
    description:
      "Institutional website for Boston Scientific Research Center, a globally connected scientific research and academic support organisation.",
    url: "https://www.bostonsrc.org",
    siteName: "Boston Scientific Research Center",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Scientific Research Center",
    description:
      "Independent scientific research and academic support shaped by rigor, restraint, and global scholarly collaboration."
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

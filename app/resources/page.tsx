import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Academic tools and educational resources from Boston Scientific Research Center, including BloomRang, an interactive Bloom's taxonomy game trainer."
};

const resources = [
  {
    title: "BloomRang",
    subtitle: "Bloom's Taxonomy Game Trainer",
    text:
      "An interactive card-sorting game that helps educators understand revised Bloom's taxonomy, practise level recognition, and build stronger learning objectives.",
    href: "/resources/bloomrang",
    meta: "Featured resource"
  }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero section">
        <div className="shell page-hero__inner">
          <div>
            <p className="eyebrow">Resources</p>
            <h1 className="page-title">Practical tools for scholarly teaching and academic development.</h1>
            <p className="lead lead--page">
              BSRC resources are designed to make academic ideas easier to use in real teaching,
              assessment, and faculty development settings.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.title}>
              <p className="eyebrow">{resource.meta}</p>
              <img
                className="resource-brand-logo"
                src="/bloomrang/bloomrang-horizontal-light.png"
                alt={resource.title}
              />
              <p className="resource-card__subtitle">{resource.subtitle}</p>
              <p>{resource.text}</p>
              <Link className="button" href={resource.href}>
                Open BloomRang
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

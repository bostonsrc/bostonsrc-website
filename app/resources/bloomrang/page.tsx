import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BloomRang",
  description:
    "BloomRang is an interactive Bloom's taxonomy game trainer for educators, hosted as a Boston Scientific Research Center resource."
};

export default function BloomRangResourcePage() {
  return (
    <div className="bloomrang-app-page">
      <section className="page-hero section resource-tool-hero">
        <div className="shell resource-tool-hero__inner">
          <div>
            <p className="eyebrow">Featured Resource</p>
            <img
              className="resource-brand-logo resource-brand-logo--hero"
              src="/bloomrang/bloomrang-horizontal-light.png"
              alt="BloomRang"
            />
            <p className="lead lead--page">
              Learn revised Bloom&apos;s taxonomy by playing. Sort objective and question cards,
              read the reasons, and sharpen the way you design learning tasks.
            </p>
          </div>
          <div className="resource-tool-hero__actions">
            <a className="button" href="/bloomrang/index.html" target="_blank" rel="noopener noreferrer">
              Click here for mobile version
            </a>
            <a className="button button--secondary" href="#bloomrang-web-preview">
              Desktop version
            </a>
            <Link className="button button--secondary resource-back-link" href="/resources">
              Back to resources
            </Link>
          </div>
        </div>
      </section>

      <section id="bloomrang-web-preview" className="section section--tight-top resource-app-section">
        <div className="shell">
          <div className="resource-embed-card resource-embed-card--app">
            <div className="resource-app-chrome" aria-hidden="true">
              <img src="/bloomrang/bloomrang-horizontal-light.png" alt="" />
              <span>App preview</span>
            </div>
            <iframe
              className="resource-embed"
              src="/bloomrang/index.html"
              title="BloomRang Bloom's Taxonomy Game Trainer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

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
            <a className="button" href="/bloomrang/" target="_blank" rel="noopener noreferrer">
              Open BloomRang
            </a>
            <p className="resource-device-note">Opens automatically in the right layout for mobile or desktop.</p>
            <Link className="button button--secondary resource-back-link" href="/resources">
              Back to resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

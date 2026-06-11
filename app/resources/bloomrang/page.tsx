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
      <section className="section section--tight-top bloomrang-howto">
        <div className="shell bloomrang-howto__inner">
          <div className="bloomrang-howto__copy">
            <p className="eyebrow">How to use it</p>
            <h1 className="section-title">A quick guide for first-time users</h1>
            <p className="lead lead--compact">
              Share this short visual guide with educators before they open BloomRang.
              It shows the full flow: choose a mode, learn the levels, match cards, and use the toolkit.
            </p>
          </div>
          <div className="bloomrang-howto__media">
            <img
              src="/bloomrang/how-to-use-bloomrang.gif"
              alt="Animated guide showing how to use BloomRang"
            />
          </div>
          <div className="bloomrang-howto__steps" aria-label="BloomRang usage steps">
            <article>
              <span>1</span>
              <h2>Choose a mode</h2>
              <p>Start with Learn, Play/Test, or the Faculty Toolkit.</p>
            </article>
            <article>
              <span>2</span>
              <h2>Match the card</h2>
              <p>Tap a card, then tap the Bloom&apos;s Taxonomy level that fits.</p>
            </article>
            <article>
              <span>3</span>
              <h2>Read the reason</h2>
              <p>The feedback explains the thinking level, not just the answer.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

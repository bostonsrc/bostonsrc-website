import { PageHero } from "@/components/page-hero";
import { advisoryProfiles } from "@/lib/site-content";

export const metadata = {
  title: "Scientific Advisory Board"
};

export default function AdvisoryBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific Advisory Board"
        title="A governance structure intended to reflect scholarly quality, credibility, and range."
        intro="BSR is developing an advisory model that supports institutional judgement across evidence, methodology, education, and scientific communication."
      />

      <section className="section">
        <div className="shell board-grid">
          {advisoryProfiles.map((profile) => (
            <article className="board-card" key={`${profile.title}-${profile.bio}`}>
              <p className="board-card__name">{profile.name}</p>
              <p className="board-card__meta">
                {profile.title}
                <br />
                {profile.institution}
                <br />
                {profile.country}
              </p>
              <p>{profile.bio}</p>
              <p className="text-link">LinkedIn profile available on publication</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell longform-grid">
          <div>
            <p className="eyebrow">Board Structure</p>
            <h2 className="section-title">Minimal presentation, high trust signalling.</h2>
          </div>
          <div className="prose">
            <p>
              The board presentation is intentionally restrained: professional profile cards,
              concise credentials, and short biographies that foreground substance over ornament.
            </p>
            <p>
              As appointments are confirmed, this framework can accommodate institutional titles,
              affiliations, countries, biographies, and external professional profile links without
              disrupting the broader editorial character of the site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

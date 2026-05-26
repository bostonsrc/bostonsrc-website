import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { leadershipProfiles } from "@/lib/site-content";

export const metadata = {
  title: "Leadership & Team"
};

export default function LeadershipTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Team"
        title="Leadership, core team, and advisory participation."
        intro="This section presents the people guiding the direction, research culture, and academic identity of Boston Scientific Research Center."
      />

      <section className="section">
        <div className="shell">
          <div className="three-up">
            <article className="card">
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title section-title--small">Center direction and academic stewardship.</h2>
              <p>
                Senior leadership is presented with academic credentials, professional background,
                and selected scholarly highlights.
              </p>
            </article>
            <article className="card">
              <p className="eyebrow">Core Team</p>
              <h2 className="section-title section-title--small">Internal team members and operational contributors.</h2>
              <p>
                Core team appointments will appear here as the center expands its academic and
                operational structure.
              </p>
            </article>
            <article className="card">
              <p className="eyebrow">Advisors</p>
              <h2 className="section-title section-title--small">Advisory participation and scholarly guidance.</h2>
              <p>
                Advisory participation is being developed to support methodological depth,
                scholarly perspective, and international collaboration.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Scientific Director</p>
              <h2 className="section-title">Leadership profile</h2>
            </div>
          </div>
          <div className="profile-feature-list">
            {leadershipProfiles.map((profile) => (
              <article className="profile-feature" key={profile.role}>
                <div className="profile-feature__media">
                  {profile.image ? (
                    <div className="profile-photo-frame">
                      <Image
                        alt={profile.name}
                        className="profile-photo"
                        fill
                        sizes="(max-width: 820px) 100vw, 240px"
                        src={profile.image}
                      />
                    </div>
                  ) : (
                    <div className="profile-photo-placeholder" aria-hidden="true">
                      Photo
                    </div>
                  )}
                </div>
                <div className="profile-feature__content">
                  <p className="eyebrow">{profile.role}</p>
                  <h2 className="section-title section-title--small">{profile.name}</h2>
                  <p className="profile-meta">{profile.institution}</p>
                  {"credentials" in profile && profile.credentials ? (
                    <p className="profile-credentials">{profile.credentials}</p>
                  ) : null}
                  <p>{profile.bio}</p>
                  {"highlights" in profile && profile.highlights ? (
                    <ul className="editorial-list profile-highlights">
                      {profile.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {"linkedinUrl" in profile && profile.linkedinUrl ? (
                    <p>
                      <a
                        className="text-link"
                        href={profile.linkedinUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {profile.linkedinLabel}
                      </a>
                    </p>
                  ) : (
                    <p className="text-link">{profile.linkedinLabel}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Core Team</p>
              <h2 className="section-title">Core team appointments</h2>
            </div>
          </div>
          <div className="prose">
            <p>
              As the center grows, this section will introduce team members responsible for
              research coordination, academic operations, and program development.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Advisors</p>
              <h2 className="section-title">Advisory development</h2>
            </div>
          </div>
          <div className="prose">
            <p>
              The advisory structure is being developed to reflect scholarly seriousness,
              interdisciplinary perspective, and international academic trust. Advisor profiles
              will be introduced as appointments are finalized.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

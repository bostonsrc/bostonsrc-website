import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { advisoryProfiles, leadershipProfiles } from "@/lib/site-content";

export const metadata = {
  title: "Leadership & International Advisory Council"
};

function LinkedInIconLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return null;
  }

  return (
    <a
      aria-label={label}
      className="profile-social-link"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      LinkedIn
    </a>
  );
}

function getProfileImageStyle(profile: {
  [key: string]: unknown;
  imageFit?: string;
  imagePosition?: string;
}) {
  if (!profile.imageFit && !profile.imagePosition) {
    return undefined;
  }

  return {
    backgroundColor: "#fff",
    objectFit: profile.imageFit === "contain" ? "contain" : "cover",
    objectPosition: profile.imagePosition ?? "center top"
  } as const;
}

export default function LeadershipTeamPage() {
  const [primaryLeader, ...supportingLeadership] = leadershipProfiles;
  const [operationsLead, ...remainingLeadership] = supportingLeadership;

  return (
    <>
      <PageHero
        eyebrow="Leadership & International Advisory Council"
        title="Leadership and international academic guidance."
        intro="This section introduces the leadership of Boston Scientific Research Center and the international advisory expertise contributing to its scholarly vision, research culture, and global outlook."
        compact
      />

      <section className="section section--tight-top">
        <div className="shell">
          <div className="two-up">
            <article className="card">
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title section-title--small">Center direction and strategic stewardship.</h2>
              <p>
                Leadership profiles present the individuals guiding the center's academic
                direction, strategic operations, and developing collaborations.
              </p>
            </article>
            <article className="card">
              <p className="eyebrow">International Advisory Council</p>
              <h2 className="section-title section-title--small">International scholarly guidance and perspective.</h2>
              <p>
                Council members bring disciplinary depth, international perspective, and
                trusted academic insight to the center's evolving research agenda.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title">Leadership profiles</h2>
            </div>
          </div>
          {primaryLeader ? (
            <div className="profile-feature-list">
              <article className="profile-feature" key={primaryLeader.role}>
                <div className="profile-feature__media">
                  {primaryLeader.image ? (
                    <>
                      <div className="profile-photo-frame">
                        <Image
                          alt={primaryLeader.name}
                          className="profile-photo"
                          fill
                          sizes="(max-width: 820px) 100vw, 240px"
                          src={primaryLeader.image}
                          style={getProfileImageStyle(primaryLeader)}
                        />
                      </div>
                      <LinkedInIconLink
                        href={"linkedinUrl" in primaryLeader ? primaryLeader.linkedinUrl : undefined}
                        label={`${primaryLeader.name} LinkedIn profile`}
                      />
                    </>
                  ) : (
                    <div className="profile-photo-placeholder" aria-hidden="true">
                      Photo
                    </div>
                  )}
                </div>
                <div className="profile-feature__content">
                  <p className="eyebrow">{primaryLeader.role}</p>
                  <h2 className="section-title section-title--small">{primaryLeader.name}</h2>
                  <p className="profile-meta">
                    <span className="profile-affiliation">{primaryLeader.institution}</span>
                  </p>
                  {"credentials" in primaryLeader && primaryLeader.credentials ? (
                    <p className="profile-credentials">{primaryLeader.credentials}</p>
                  ) : null}
                  <p>{primaryLeader.bio}</p>
                  {"highlights" in primaryLeader && primaryLeader.highlights ? (
                    <ul className="editorial-list profile-highlights">
                      {primaryLeader.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </div>
          ) : null}

          {remainingLeadership.length ? (
            <div className="profile-feature-list">
              {remainingLeadership.map((profile) => (
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
                          style={getProfileImageStyle(profile)}
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
                    <h3 className="section-title section-title--small">{profile.name}</h3>
                    <p className="profile-meta">
                      <span className="profile-affiliation">{profile.institution}</span>
                    </p>
                    <p>{profile.bio}</p>
                    <LinkedInIconLink
                      href={"linkedinUrl" in profile ? profile.linkedinUrl : undefined}
                      label={`${profile.name} LinkedIn profile`}
                    />
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--accent">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">International Advisory Council</p>
            </div>
          </div>
          <div className="profile-grid">
            {advisoryProfiles.map((profile) => (
              <article className="card profile-card" key={profile.name}>
                {profile.image ? (
                  <div className="profile-card__photo-frame">
                    <Image
                      alt={profile.name}
                      className="profile-photo"
                      fill
                      sizes="(max-width: 820px) 100vw, 320px"
                      src={profile.image}
                      style={getProfileImageStyle(profile)}
                    />
                  </div>
                ) : null}
                <p className="eyebrow">{profile.country}</p>
                <h3 className="section-title section-title--small">{profile.name}</h3>
                <p className="profile-meta">
                  <span className="profile-title-line">{profile.title}</span>
                  <span className="profile-affiliation">{profile.institution}</span>
                </p>
                <p>{profile.bio}</p>
                <LinkedInIconLink
                  href={"linkedinUrl" in profile ? profile.linkedinUrl : undefined}
                  label={`${profile.name} LinkedIn profile`}
                />
                {"expertise" in profile && profile.expertise ? (
                  <ul className="expertise-list" aria-label={`${profile.name} areas of expertise`}>
                    {profile.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {operationsLead ? (
        <section className="section section--bordered">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Strategic Operations & Coordination</p>
              </div>
            </div>
            <div className="profile-feature-list">
              <article className="profile-feature" key={operationsLead.role}>
                <div className="profile-feature__media">
                  {operationsLead.image ? (
                    <div className="profile-photo-frame">
                      <Image
                        alt={operationsLead.name}
                        className="profile-photo"
                        fill
                        sizes="(max-width: 820px) 100vw, 240px"
                        src={operationsLead.image}
                        style={getProfileImageStyle(operationsLead)}
                      />
                    </div>
                  ) : (
                    <div className="profile-photo-placeholder" aria-hidden="true">
                      Photo
                    </div>
                  )}
                </div>
                <div className="profile-feature__content">
                  <p className="eyebrow">{operationsLead.role}</p>
                  <h3 className="section-title section-title--small">{operationsLead.name}</h3>
                  <p className="profile-meta">
                    <span className="profile-affiliation">{operationsLead.institution}</span>
                  </p>
                  <p>{operationsLead.bio}</p>
                  <LinkedInIconLink
                    href={"linkedinUrl" in operationsLead ? operationsLead.linkedinUrl : undefined}
                    label={`${operationsLead.name} LinkedIn profile`}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, intro, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero section${compact ? " page-hero--compact" : ""}`}>
      <div className="shell page-hero__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="lead lead--page">{intro}</p>
      </div>
    </section>
  );
}

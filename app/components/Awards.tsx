const awardsData = [
  {
    title: "Dean's Award for Academic Excellence",
    organization: "Dean's Office, AIUB",
    description:
      "Received the Dean's Award for Academic Excellence on three occasions in recognition of outstanding academic performance and consistent achievement throughout the undergraduate program.",
  },
  {
    title: "Gold Award — The Duke of Edinburgh's Award",
    organization: "Duke of Edinburgh",
    description:
      "Completed the highest level of the Duke of Edinburgh's Award by demonstrating leadership, community service, physical endurance, skill development, and teamwork through a rigorous multi-stage program.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section" aria-labelledby="awards-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Honors & Awards</p>
          <h2 id="awards-title" className="section-title">
            Academic &amp; Leadership <span>Recognition</span>
          </h2>
          <p className="section-sub">
            Awards and honors received for academic excellence, leadership, and community service.
          </p>
        </div>

        <div className="awards-grid">
          {awardsData.map((award, i) => (
            <div
              key={award.title}
              className={`glass-card award-card animate-in delay-${Math.min(i + 1, 5)}`}
            >
              <div className="award-icon-wrap" aria-hidden="true">
                {i === 0 ? "🏆" : "🎖️"}
              </div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-org">{award.organization}</p>
                <p className="award-desc">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

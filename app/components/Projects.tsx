const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  PHP: "#4F5D95",
  TypeScript: "#3178c6",
  "C#": "#178600",
  Java: "#b07219",
};

const REPO_ICONS: Record<string, string> = {
  "StudyHub v2": "📚",
  "StudyHub v1": "📖",
  RoutinePro: "📅",
  PasswordVault: "🔐",
  EliteJersey: "👕",
  AgroBridge: "🌾",
};

const repositories = [
  {
    name: "StudyHub v2",
    category: "web",
    description:
      "Academic note-sharing platform rebuilt with Next.js, API-driven architecture, and enhanced UX.",
    html_url: "https://github.com/MIHMahmudEli/StudyHub",
    homepage: "https://studyhubb.great-site.net",
    language: "TypeScript",
    stargazers_count: 2,
    forks_count: 1,
    localIcon: "/icons/studyhub.svg",
    localPreview: "/previews/StudyHub.png",
  },
  {
    name: "StudyHub v1",
    category: "web",
    description:
      "Original PHP version with full moderation, gamification, and role-based student access.",
    html_url: "https://github.com/MIHMahmudEli/StudyHub",
    homepage: "https://studyhubb.great-site.net",
    language: "PHP",
    stargazers_count: 2,
    forks_count: 1,
    localIcon: "/icons/studyhub.svg",
    localPreview: "/previews/StudyHub.png",
  },
  {
    name: "RoutinePro",
    category: "web",
    description:
      "Smart university class routine generator with conflict-free scheduling and gap optimization.",
    html_url: "https://github.com/MIHMahmudEli/RoutinePro",
    homepage: "https://routine-pro-fawn.vercel.app",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 1,
    localIcon: "/icons/RoutinePro.svg",
  },
  {
    name: "PasswordVault",
    category: "web",
    description:
      "Secure password manager built with Python for storing, generating, and managing credentials.",
    html_url: "https://github.com/MIHMahmudEli/PasswordVault",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "EliteJersey",
    category: "web",
    description:
      "Java Swing desktop app for admin login, product management, and account management.",
    html_url: "https://github.com/MIHMahmudEli/EliteJersey",
    language: "Java",
    stargazers_count: 1,
    forks_count: 1,
  },
  {
    name: "AgroBridge",
    category: "web",
    description:
      "Digital platform connecting farmers with resources, market data, and community support.",
    html_url: "https://github.com/MIHMahmudEli/AgroBridge",
    language: "C#",
    stargazers_count: 1,
    forks_count: 1,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Open Source</p>
          <h2 id="projects-title" className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-sub">
            Selected repositories spanning full-stack web, desktop, and security.
          </p>
        </div>

        <div className="projects-grid">
          {repositories.map((repo, i) => {
            const fallbackIcon = REPO_ICONS[repo.name] ?? "📁";
            const langColor = LANG_COLORS[repo.language ?? ""] ?? "#888";

            return (
              <article
                key={repo.name}
                className={`project-card animate-in delay-${Math.min(i % 5 + 1, 5)}`}
                aria-label={`Project: ${repo.name}`}
              >
                {repo.localPreview ? (
                  <a 
                    href={repo.homepage || repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-preview-link"
                    aria-label={`View ${repo.name} live project`}
                  >
                    <div className="project-preview-window">
                      <img 
                        src={repo.localPreview} 
                        alt={`${repo.name} preview`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div className="preview-overlay" />
                    </div>
                  </a>
                ) : repo.homepage ? (
                  <a 
                    href={repo.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-preview-link"
                    aria-label={`View ${repo.name} live project`}
                  >
                    <div className="project-preview-window">
                      <div className="iframe-scaler">
                        <iframe 
                          src={repo.homepage} 
                          title={`${repo.name} live preview`}
                          loading="lazy"
                          scrolling="no"
                          sandbox="allow-scripts allow-same-origin"
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="preview-overlay" />
                    </div>
                  </a>
                ) : null}
                
                <div className="project-card-top">
                  <div className="project-icon-wrapper">
                    {repo.localIcon ? (
                      <img 
                        src={repo.localIcon} 
                        alt={`${repo.name} icon`} 
                        style={{ width: "32px", height: "32px", borderRadius: "6px", objectFit: "contain" }}
                      />
                    ) : (
                      <span aria-hidden="true">{fallbackIcon}</span>
                    )}
                  </div>
                  <div className="project-links">
                    {repo.html_url && (
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="GitHub Repository"
                        aria-label={`Open ${repo.name} on GitHub`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="Live Demo"
                        aria-label={`Open ${repo.name} live project`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <a
                  href={repo.homepage || repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-name"
                  title="View Live Project"
                >
                  {repo.name}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <p className="project-desc">{repo.description}</p>

                <div className="project-footer">
                  {repo.language && (
                    <div className="project-lang-pill">
                      <span
                        className="lang-dot"
                        style={{ color: langColor, background: langColor }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </div>
                  )}
                  <div className="project-stars-group">
                    {repo.stargazers_count > 0 && (
                      <div className="project-stars" aria-label={`${repo.stargazers_count} stars`}>
                        ★ {repo.stargazers_count}
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="project-stars" style={{ color: "var(--accent-emerald)" }} aria-label={`${repo.forks_count} forks`}>
                        ⑂ {repo.forks_count}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

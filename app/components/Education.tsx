const educationData = [
  {
    level: "B.Sc. in Computer Science",
    name: "American International University – Bangladesh",
    icon: "🎓",
    year: "2023 – Present",
    cgpa: "CGPA: 3.81",
    link: "https://www.aiub.edu/",
    description:
      "Pursuing a Bachelor's degree in Computer Science with a focus on software engineering, data science, and machine learning.",
    highlights: [
      "Dean's Award recipient for academic excellence",
      "Active in research and project development",
    ],
  },
  {
    level: "Higher Secondary Certificate",
    name: "Cantonment Public School & College Saidpur",
    icon: "🏛️",
    year: "2019 – 2021",
    link: "https://cpscs.edu.bd/",
    description:
      "Higher Secondary Certificate in Science with a strong foundation in mathematics, physics, and computer fundamentals.",
    highlights: [
      "Science background with distinction",
    ],
  },
  {
    level: "Secondary School Certificate",
    name: "Amena-Baki Residential Model School & College",
    icon: "🏫",
    year: "2017 – 2019",
    link: "https://www.abrmsc.edu.bd/",
    description:
      "Completed secondary education with a strong academic foundation, excelling in science and mathematics.",
    highlights: [
      "Solid academic foundation",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Academic Journey</p>
          <h2 id="education-title" className="section-title">
            Education &amp; <span>Background</span>
          </h2>
          <p className="section-sub">
            A progressive academic path building the foundations for software engineering.
          </p>
        </div>

        <div className="edu-timeline">
          {educationData.map((edu, i) => (
            <div className={`edu-timeline-item animate-in delay-${i + 1}`} key={edu.name}>
              <div className="edu-timeline-marker">
                <div className="edu-timeline-dot"></div>
                <div className="edu-timeline-line"></div>
              </div>

              <div className="edu-glass-card">
                <div className="edu-card-top">
                  <div className="edu-icon-wrap" aria-hidden="true">{edu.icon}</div>
                  <div className="edu-info">
                    <div className="edu-level">{edu.level}</div>
                    <div className="edu-name">{edu.name}</div>
                  </div>
                  <div className="edu-year-badge">{edu.year}</div>
                </div>

                <p className="edu-desc">{edu.description}</p>

                {edu.cgpa && (
                  <div className="edu-cgpa-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>{edu.cgpa}</span>
                  </div>
                )}

                {edu.highlights.length > 0 && (
                  <ul className="edu-highlights">
                    {edu.highlights.map((h, j) => (
                      <li key={j}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {edu.link && (
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edu-link"
                    aria-label={`Visit ${edu.name} website`}
                  >
                    Visit website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}

                <div className="edu-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

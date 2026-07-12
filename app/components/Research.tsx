const papers = [
  {
    title: "Brain Tumor Classification from MRI Using CNN and Logistic Regression",
    status: "Completed",
    authors: "Md Yeahyea Jam et al.",
    description:
      "Researched brain tumor classification using MRI through literature review, deep learning analysis, and hybrid machine learning model design. Developed and evaluated a CNN–Logistic Regression framework for automated classification of glioma, meningioma, pituitary tumor, and no-tumor MRI images, achieving 92.07% test accuracy while improving model interpretability, stability, and clinical reliability.",
    tags: ["Deep Learning", "CNN", "Medical Imaging", "MRI"],
  },
  {
    title:
      "Uncovering Micro-Topics in Biomedical Literature: A Comparative Study of TF-IDF and BioBERT Embeddings for Disease Knowledge Mapping",
    status: "Completed",
    authors: "Mohsin Mahmud Eli et al.",
    description:
      "Comparative analysis of TF-IDF and BioBERT embeddings with KMeans, HDBSCAN, and hierarchical clustering for uncovering latent micro-topics in PubMed biomedical literature.",
    tags: ["BioBERT", "TF-IDF", "Topic Modeling", "Biomedical"],
  },
  {
    title:
      "An Empirical Study of Food Price Volatility in Bangladesh: A Data-Driven Analysis with AgroBridge Marketplace Framework",
    status: "In Progress",
    authors: "Mohsin Mahmud Eli et al.",
    description:
      "Analyzing monthly retail price trends (2020-2025) of key commodities in Bangladesh and proposing the AgroBridge digital marketplace to connect farmers directly with consumers.",
    tags: ["Data Science", "Economics", "Food Price", "AgriTech"],
  },
];

export default function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Research</p>
          <h2 id="research-title" className="section-title">
            Published &amp; Ongoing <span>Research</span>
          </h2>
          <p className="section-sub">
            Active research across deep learning, NLP, and data science.
          </p>
        </div>

        <div className="projects-grid">
          {papers.map((paper, i) => (
            <article
              key={paper.title}
              className={`project-card animate-in delay-${Math.min(i % 5 + 1, 5)}`}
              aria-label={`Research: ${paper.title}`}
            >
              <div className="project-card-top">
                <div className="project-icon-wrapper" style={{ fontSize: "1.2rem" }}>
                  <span aria-hidden="true">📄</span>
                </div>
                <div className="project-links">
                  {paper.status === "Completed" && (
                    <span className="project-lang-pill" style={{ borderColor: "var(--accent-emerald)", color: "var(--accent-emerald)" }}>
                      Completed
                    </span>
                  )}
                  {paper.status === "In Progress" && (
                    <span className="project-lang-pill" style={{ borderColor: "var(--accent-amber)", color: "var(--accent-amber)" }}>
                      In Progress
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project-name" style={{ cursor: "default", fontSize: "1.1rem" }}>
                {paper.title}
              </h3>

              <p className="project-desc" style={{ fontSize: "0.85rem", color: "var(--accent-blue)", marginBottom: "8px" }}>
                {paper.authors}
              </p>

              <p className="project-desc">{paper.description}</p>

              <div className="project-footer">
                <div className="project-stars-group" style={{ flexWrap: "wrap", gap: "6px" }}>
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-lang-pill"
                      style={{ fontSize: "0.7rem", cursor: "default" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

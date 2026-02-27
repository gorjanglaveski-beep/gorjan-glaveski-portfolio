import styles from './CVSection.module.css'

const workExperience = [
  {
    company: 'Rhino Entertainment',
    role: 'Senior Digital Designer',
    type: 'Full Time',
    period: '01.09.2022 — Present',
  },
  {
    company: 'Galeksia',
    role: 'Graphic Designer',
    type: 'Full Time',
    period: '02.02.2022 — 02.08.2022',
  },
  {
    company: 'Freelance',
    role: 'Graphic Designer',
    type: 'Self-employed',
    period: 'Ongoing',
  },
  {
    company: 'Monday',
    role: 'Graphic Designer',
    type: 'Contractor',
    period: '01.02.2020 — 01.04.2020',
  },
]

export default function CVSection() {
  return (
    <section id="cv" className={styles.section}>
      <div className={styles.container}>
        {/* ─── Profile ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>01</span>
          <h3 className={styles.sectionTitle}>Profile</h3>
          <p className={styles.profileText}>
            Senior Graphic Designer with advanced knowledge of UI/UX design and experience in the
            iGaming industry, focused on creating visual solutions and user interfaces that drive
            engagement and results. Proficient in modern and AI-powered design tools.
          </p>
        </div>

        {/* ─── Work Experience ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>02</span>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.experienceList}>
            {workExperience.map((item, i) => (
              <div key={i} className={styles.experienceItem}>
                <div>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.jobMeta}>
                    {item.role} · {item.type}
                  </p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Education ─── */}
        <div className={styles.block}>
          <span className={styles.sectionNumber}>03</span>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.educationList}>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>Google UX Design Professional Certificate</p>
              <p className={styles.eduDate}>Sep 27, 2024</p>
              <p className={styles.eduDesc}>
                Completed a 7-course program covering the full UX design process: user research,
                wireframing, prototyping, and usability testing.
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>Brainster — Graphic Design Academy</p>
              <p className={styles.eduDate}>October 2020 — May 2021</p>
              <p className={styles.eduDesc}>
                Part of the Dream Team · January Student of the Month
                <br />
                Winner of the projects &ldquo;Buchen Kozjak&rdquo; &amp; Vidi Vaka — redesign of existing
                logos.
              </p>
            </div>
            <div className={styles.eduItem}>
              <p className={styles.eduTitle}>
                University &quot;St. Kliment Ohridski&quot; — Bitola
              </p>
              <p className={styles.eduSubtitle}>
                Faculty of Information and Communication Technologies, Macedonia
              </p>
              <p className={styles.eduDate}>October 2011 — May 2017</p>
              <p className={styles.eduDesc}>Bachelor of Information Systems Management</p>
            </div>
          </div>
        </div>

        {/* ─── Skills ─── */}
        <div className={styles.skillsBlock}>
          <span className={styles.sectionNumber}>04</span>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {/* Figma */}
            <div className={styles.skillBadge}>
              <svg viewBox="0 0 38 57" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5z" fill="#1ABCFE" />
                <path d="M9.5 47.5a9.5 9.5 0 0 1 9.5-9.5v9.5a9.5 9.5 0 0 1-9.5 9.5 9.5 9.5 0 0 1 0-19z" fill="#0ACF83" />
                <path d="M9.5 9.5A9.5 9.5 0 0 1 19 0v19H9.5A9.5 9.5 0 0 1 0 9.5a9.5 9.5 0 0 1 9.5-9.5z" fill="#FF7262" />
                <path d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5 9.5 9.5 0 0 1 28.5 19H19V0z" fill="#F24E1E" />
                <path d="M38 28.5A9.5 9.5 0 0 1 28.5 38 9.5 9.5 0 0 1 19 28.5 9.5 9.5 0 0 1 28.5 19 9.5 9.5 0 0 1 38 28.5z" fill="#A259FF" />
              </svg>
              <span className={styles.skillLabel}>Figma</span>
            </div>

            {/* Photoshop */}
            <div className={styles.skillBadge}>
              <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="16" fill="#001E36" />
                <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#31A8FF" fontSize="44" fontFamily="serif" fontWeight="bold">Ps</text>
              </svg>
              <span className={styles.skillLabel}>Photoshop</span>
            </div>

            {/* After Effects */}
            <div className={styles.skillBadge}>
              <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="16" fill="#00005B" />
                <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#9999FF" fontSize="40" fontFamily="serif" fontWeight="bold">Ae</text>
              </svg>
              <span className={styles.skillLabel}>After Effects</span>
            </div>

            {/* Illustrator */}
            <div className={styles.skillBadge}>
              <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="16" fill="#330000" />
                <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FF9A00" fontSize="44" fontFamily="serif" fontWeight="bold">Ai</text>
              </svg>
              <span className={styles.skillLabel}>Illustrator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

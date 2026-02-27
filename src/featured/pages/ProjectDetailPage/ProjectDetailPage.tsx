import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { projectsMap } from '@/data/projects'
import styles from './ProjectDetailPage.module.css'

export default function ProjectDetailPage({ id }: { id: string }) {
  const project = projectsMap[id]

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundText}>Project not found.</p>
        <Link href="/" className={styles.notFoundLink}>
          Back to portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {/* ─── Top bar ─── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/#portfolio" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.meta}>
            {project.category} · {project.year}
          </span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Image gallery ─── */}
      <section className={styles.gallery}>
        <div className={styles.galleryInner}>
          {project.images.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <Image
                src={img}
                alt={`${project.title} — view ${i + 1}`}
                sizes="(max-width: 768px) 100vw, 1024px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer nav ─── */}
      <div className={styles.footerNav}>
        <div className={styles.footerNavInner}>
          <Link href="/#portfolio" className={styles.backLink}>
            <ArrowLeft size={16} />
            All Projects
          </Link>
          <Link href="/#contact" className={styles.contactLink}>
            Get in touch →
          </Link>
        </div>
      </div>
    </div>
  )
}

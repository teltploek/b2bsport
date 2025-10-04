import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
  dictionary: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    cta: {
      bookDemo: string
    }
  }
  locale: string
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className={styles.hero}>
<video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-01.webm" type="video/webm" />
        <source src="/videos/background-01.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
<div className={styles.heroContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {dictionary.hero.title}
          </h1>
          <p className={styles.subtitle}>
            {dictionary.hero.subtitle}
          </p>
          <div className={styles.ctaGroup}>
            <Link href={`/${locale}/contact`} className={styles.ctaPrimary}>
              {dictionary.hero.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
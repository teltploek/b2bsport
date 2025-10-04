import { cn } from '@/lib/utils';
import styles from '@/components/VideoHero/VideoHero.module.css';

interface ContactHeroProps {
  dict: any;
}

export default function ContactHero({ dict }: ContactHeroProps) {
  return (
    <section className={styles.heroSection}>
<video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-04.webm" type="video/webm" />
        <source src="/videos/background-04.mp4" type="video/mp4" />
      </video>
<div className={styles.overlay} />
<div className={styles.content}>
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className={cn(
            "font-display text-4xl md:text-5xl lg:text-6xl font-bold",
            "text-white mb-6 tracking-tight"
          )}>
            {dict.contactPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {dict.contactPage.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
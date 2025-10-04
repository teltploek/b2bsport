import Link from 'next/link'
import styles from './ContactCTA.module.css'
import { ArrowRight, Phone, Mail } from 'lucide-react'

interface ContactCTAProps {
  dictionary: {
    contactCTA?: {
      title: string
      subtitle: string
      primaryCTA: string
      secondaryCTA: string
      phone: string
      email: string
    }
  }
  locale: string
}

export default function ContactCTA({ dictionary, locale }: ContactCTAProps) {
  const content = dictionary.contactCTA || {
    title: "Klar til at revolutionere jeres klubadministration?",
    subtitle: "Book en uforpligtende demo og se hvordan vores system kan spare jer tid og penge",
    primaryCTA: "Book demo",
    secondaryCTA: "Kontakt os",
    phone: "+45 70 27 46 46",
    email: "info@b2bsport.dk"
  }

  return (
    <section className={styles.contactCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
<div className={styles.buttons}>
            <Link href={`/${locale}/contact`} className={styles.primaryButton}>
              {content.secondaryCTA}
              <ArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
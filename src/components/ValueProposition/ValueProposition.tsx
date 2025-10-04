import Link from 'next/link'
import styles from './ValueProposition.module.css'
import { CheckCircle, TrendingUp, Clock, Users } from 'lucide-react'

interface ValuePropositionProps {
  dictionary: {
    valueProposition?: {
      title: string
      subtitle: string
      mainCTA: string
      features: {
        digital: {
          title: string
          description: string
        }
        time: {
          title: string
          description: string
        }
        accuracy: {
          title: string
          description: string
        }
        support: {
          title: string
          description: string
        }
      }
    }
  }
  locale: string
}

export default function ValueProposition({ dictionary, locale }: ValuePropositionProps) {
  const content = dictionary.valueProposition || {
    title: "Digitalt klubsystem der erstatter Excel og email",
    subtitle: "Vi har bygget Danmarks første fuldt digitale platform for bestilling af sportsudstyr. Glem alt om Excel-ark, emails frem og tilbage, og uklare aftaler.",
    mainCTA: "Se hvordan vi gør det",
    features: {
      digital: {
        title: "100% Digital",
        description: "Alt samlet ét sted - ordrer, medlemmer, budgetter"
      },
      time: {
        title: "Spar 75% tid",
        description: "Automatiseret bestilling og godkendelse"
      },
      accuracy: {
        title: "90% færre fejl",
        description: "Forudindlæste aftaler og automatisk validering"
      },
      support: {
        title: "Fuld support",
        description: "Vi hjælper dig hele vejen fra start til mål"
      }
    }
  }

  const features = [
    { icon: TrendingUp, ...content.features.digital },
    { icon: Clock, ...content.features.time },
    { icon: CheckCircle, ...content.features.accuracy },
    { icon: Users, ...content.features.support },
  ]

  return (
    <section className={styles.valueProposition}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
<div className={styles.features}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            )
          })}
        </div>
<div className={styles.ctaWrapper}>
          <Link href={`/${locale}/what-we-do`} className={styles.mainCTA}>
            {content.mainCTA}
          </Link>
        </div>
      </div>
    </section>
  )
}
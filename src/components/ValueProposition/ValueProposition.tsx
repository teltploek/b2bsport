import Link from 'next/link'
import { TrendingUp, Clock, CheckCircle, Users, ArrowRight, Zap, Shield } from 'lucide-react'

interface ValuePropositionProps {
  dictionary: {
    valueProposition?: {
      tag?: string
      title: string
      subtitle: string
      mainCTA: string
      socialProof?: string
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
      cards?: {
        platform: {
          badge: string
          title: string
          description: string
          features: string[]
          cta: string
        }
        support: {
          badge: string
          title: string
          description: string
          features: string[]
          cta: string
        }
        partnership: {
          badge: string
          title: string
          description: string
          features: string[]
          cta: string
        }
      }
    }
  }
  locale: string
}

export default function ValueProposition({ dictionary, locale }: ValuePropositionProps) {
  const content = dictionary.valueProposition || {
    tag: 'Bygget til B2B sport',
    title: 'Struktur på partnerskaber, effektivitet i bestillinger',
    subtitle: 'Platform, support og partnerskab — bygget til den måde B2B sport faktisk fungerer.',
    mainCTA: 'Se hvordan vi gør det',
    socialProof: 'klubber',
    features: {
      digital: {
        title: '100% Digital',
        description: 'Alt samlet ét sted - ordrer, medlemmer, budgetter',
      },
      time: {
        title: 'Spar tid',
        description: 'Forenklet bestilling og godkendelse',
      },
      accuracy: {
        title: 'Færre fejl',
        description: 'Klare aftaler og nem validering',
      },
      support: {
        title: 'Fuld support',
        description: 'Vi hjælper dig hele vejen fra start til mål',
      },
    },
  }

  const cards = content.cards || {
    platform: {
      badge: 'Platform',
      title: 'Centraliseret platform',
      description: 'Alt hvad din klub behøver, samlet i én moderne platform',
      features: [
        'Aftaleskabeloner',
        'Rollebaseret adgang',
        'Ordresporing inden for aftaler',
        'Realtids-dashboards',
      ],
      cta: 'Se platformen',
    },
    support: {
      badge: 'Support',
      title: 'Personlig support',
      description: 'Dedikeret hjælp fra start til mål — vi kender jeres sport',
      features: [
        'Dedikeret kontaktperson',
        'Sportsspecifik rådgivning',
        'Onboarding-assistance',
        'Hurtig responstid',
      ],
      cta: 'Kontakt os',
    },
    partnership: {
      badge: 'Partnerskab',
      title: 'Skalerbart partnerskab',
      description: 'Mere end en leverandør — vi bliver jeres udstyrspartner',
      features: [
        'Håndter 50 eller 500 klubber',
        'Genbrugelige aftaleskabeloner',
        'Proaktive fornyelses-advarsler',
        'Brandede selvbetjeningsportaler',
      ],
      cta: 'Bliv partner',
    },
  }

  const cardData = [
    {
      ...cards.platform,
      icon: Zap,
      bgColor: 'bg-cream-100',
      textColor: 'text-forest-900',
      badgeColor: 'bg-forest-900/10 text-forest-800',
    },
    {
      ...cards.support,
      icon: Shield,
      bgColor: 'bg-cream-100',
      textColor: 'text-forest-900',
      badgeColor: 'bg-forest-900/10 text-forest-800',
    },
    {
      ...cards.partnership,
      icon: Users,
      bgColor: 'bg-cream-100',
      textColor: 'text-forest-900',
      badgeColor: 'bg-forest-900/10 text-forest-800',
    },
  ]

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-800 mb-6">
            {content.tag || 'Fordele'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12">
          {cardData.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-6 sm:p-8 ${card.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Badge */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${card.badgeColor} mb-6`}
                >
                  {card.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-forest-900 group-hover:bg-coral-600 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-cream-100" />
                </div>

                {/* Title */}
                <h3
                  className={`font-display text-xl lg:text-2xl font-bold ${card.textColor} mb-3`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base text-forest-700 mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-forest-700"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-coral-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - min-h-[44px] for touch-friendly tap target */}
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 min-h-[48px] rounded-full text-base font-bold transition-all duration-200 group/btn bg-forest-900 text-cream-100 hover:bg-forest-800"
                >
                  {card.cta}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>

              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/what-we-do`}
            className="inline-flex items-center text-forest-900 font-semibold hover:text-coral-600 transition-colors group"
          >
            {content.mainCTA}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

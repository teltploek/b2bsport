import Link from 'next/link'
import { sportsCategories } from '@/data/sports-data'
import { Locale } from '@/i18n/config'
import * as TablerIcons from '@tabler/icons-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SportsGridProps {
  dictionary: {
    sports: {
      title: string
      subtitle: string
    }
  }
  locale: Locale
}

export default function SportsGrid({ dictionary, locale }: SportsGridProps) {
  return (
    <section id="sports" className="section-padding bg-semantic-background-secondary">
      <div className="container-dynamic">
        <div className="text-center mb-12">
          <h2 className="font-display text-[2.5rem] md:text-[3rem] font-bold mb-4 leading-tight tracking-tight text-semantic-text-primary">
            {dictionary.sports.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {dictionary.sports.subtitle}
          </p>
        </div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {sportsCategories.map((sport) => {
            const IconComponent = TablerIcons[sport.icon as keyof typeof TablerIcons] as React.ComponentType<any>
            
            return (
              <div
                key={sport.id}
                className="block"
              >
                <Card className={cn(
                  "relative p-6 min-h-[8rem] flex flex-col items-center justify-center gap-3",
                  "transition-all duration-200",
                  sport.featured && "bg-gradient-to-br from-semantic-background-elevated to-semantic-brand-light border-semantic-brand-default"
                )}>
                  <div className="text-semantic-brand-default">
                    {IconComponent && <IconComponent size={48} stroke={1.5} />}
                  </div>
                  <span className="font-semibold text-semantic-text-primary text-center">
                    {sport.name[locale]}
                  </span>
                  {sport.featured && (
                    <span className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 bg-semantic-brand-default text-white rounded">
                      Populær
                    </span>
                  )}
                </Card>
              </div>
            )
          })}
        </div>
<div className="text-center pt-8 border-t border-semantic-border-subtle">
          <p className="text-semantic-text-secondary mb-4">
            Vi leverer til alle sportsgrene - og mange flere!
          </p>
          <Button asChild variant="cta" size="lg">
            <Link href={`/${locale}/contact`}>
              Kontakt os for dit specifikke behov
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
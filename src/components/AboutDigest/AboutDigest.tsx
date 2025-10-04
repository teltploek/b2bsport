import Link from 'next/link'
import { Rocket, BarChart3, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AboutDigestProps {
  dictionary: {
    about: {
      title: string
      subtitle: string
    }
    nav: {
      about: string
    }
  }
  locale: string
}

export default function AboutDigest({ dictionary, locale }: AboutDigestProps) {
  return (
    <section className="py-20 bg-semantic-background-primary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-6 tracking-tight">
              {dictionary.about.title}
            </h2>
            <p className="text-xl text-semantic-text-secondary mb-8 leading-relaxed">
              {dictionary.about.subtitle}
            </p>
            <div className="space-y-6 mb-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-semantic-brand-light rounded-lg">
                      <Rocket className="h-6 w-6 text-semantic-brand-default" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-semantic-text-primary mb-1">IT-drevet innovation</h3>
                      <p className="text-sm text-semantic-text-secondary">Vi bruger teknologi til at forenkle jeres hverdag</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-semantic-brand-light rounded-lg">
                      <BarChart3 className="h-6 w-6 text-semantic-brand-default" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-semantic-text-primary mb-1">Fuld transparens</h3>
                      <p className="text-sm text-semantic-text-secondary">Realtids-indsigt i ordrer, leverancer og økonomi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-semantic-brand-light rounded-lg">
                      <Zap className="h-6 w-6 text-semantic-brand-default" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-semantic-text-primary mb-1">Hurtig implementering</h3>
                      <p className="text-sm text-semantic-text-secondary">Op og køre på få timer - ikke dage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button asChild variant="link" className="p-0 h-auto text-semantic-brand-default hover:text-semantic-brand-hover">
              <Link href={`/${locale}/about`}>
                Læs mere om os →
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className={cn(
              "aspect-[4/3] rounded-xl overflow-hidden",
              "bg-gradient-to-br from-semantic-brand-default to-semantic-brand-hover",
              "flex items-center justify-center"
            )}>
              <div className="absolute inset-0 bg-black/20" />
              <span className="relative z-10 text-white text-2xl font-bold tracking-wide">
                Digital transformation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
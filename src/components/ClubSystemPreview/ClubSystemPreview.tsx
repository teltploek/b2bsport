import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ClubSystemPreviewProps {
  dictionary: {
    clubSystem: {
      title: string
      subtitle: string
      benefits: {
        realtime: string
        agreements: string
        simple: string
      }
      comparison: {
        before: string
        after: string
      }
      stats?: {
        timeSaved: string
        errorReduction: string
        clubs: string
        satisfaction: string
      }
    }
    cta: {
      learnMore: string
    }
  }
  locale: string
}

export default function ClubSystemPreview({ dictionary, locale }: ClubSystemPreviewProps) {
  return (
    <section className="py-20 bg-semantic-background-alt">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-4 tracking-tight">
            {dictionary.clubSystem.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {dictionary.clubSystem.subtitle}
          </p>
        </div>
<div className="flex flex-col gap-12">
          {dictionary.clubSystem.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center hover:-translate-y-1 transition-all hover:shadow-lg hover:border-semantic-brand-default">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-semantic-brand-default mb-2 font-display tracking-tight">75%</div>
                  <div className="text-sm text-semantic-text-secondary">{dictionary.clubSystem.stats.timeSaved}</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:-translate-y-1 transition-all hover:shadow-lg hover:border-semantic-brand-default">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-semantic-brand-default mb-2 font-display tracking-tight">90%</div>
                  <div className="text-sm text-semantic-text-secondary">{dictionary.clubSystem.stats.errorReduction}</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:-translate-y-1 transition-all hover:shadow-lg hover:border-semantic-brand-default">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-semantic-brand-default mb-2 font-display tracking-tight">50+</div>
                  <div className="text-sm text-semantic-text-secondary">{dictionary.clubSystem.stats.clubs}</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:-translate-y-1 transition-all hover:shadow-lg hover:border-semantic-brand-default">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-semantic-brand-default mb-2 font-display tracking-tight">4.9/5</div>
                  <div className="text-sm text-semantic-text-secondary">{dictionary.clubSystem.stats.satisfaction}</div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-red-500 relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{dictionary.clubSystem.comparison.before}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-secondary">Excel-ark sendt frem og tilbage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-secondary">Uopdaterede prislister</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-secondary">Manuel ordrehåndtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-secondary">Ingen overblik over status</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
<Card className="border-2 border-green-500 relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{dictionary.clubSystem.comparison.after}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-primary">{dictionary.clubSystem.benefits.realtime}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-primary">{dictionary.clubSystem.benefits.agreements}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-primary">{dictionary.clubSystem.benefits.simple}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-semantic-text-primary">Automatisk ordrebekræftelse</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
<div className="mb-8">
            <div className="bg-gradient-to-br from-semantic-brand-default/5 to-semantic-brand-default/10 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-100 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                  <div className="flex gap-6">
                    <div className="w-48 h-96 bg-semantic-background-secondary rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="h-24 bg-semantic-brand-default/10 rounded-lg animate-pulse"></div>
                        <div className="h-24 bg-semantic-brand-default/10 rounded-lg animate-pulse"></div>
                        <div className="h-24 bg-semantic-brand-default/10 rounded-lg animate-pulse"></div>
                      </div>
                      <div className="h-64 bg-semantic-background-secondary rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="text-center">
            <Button asChild variant="cta" size="xl">
              <Link href={`/${locale}/club-system`}>
                {dictionary.cta.learnMore}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
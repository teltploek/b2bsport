import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, ArrowRight, BarChart3, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureShowcaseProps {
  dictionary: any
  locale: string
}

export default function FeatureShowcase({ dictionary, locale }: FeatureShowcaseProps) {
  const features = dictionary.clubSystemPage.features

  return (
    <section className="py-20 bg-semantic-background-alt">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-4 tracking-tight">
            {features.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {features.subtitle}
          </p>
        </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="p-3 bg-semantic-brand-light rounded-lg w-fit mb-4">
                <Users className="h-12 w-12 text-semantic-brand-default" />
              </div>
              <CardTitle className="text-2xl">{features.superAdmin.title}</CardTitle>
              <CardDescription className="text-base">
                {features.superAdmin.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.superAdmin.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-semantic-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-white rounded shadow-sm">
                  <div className="bg-gray-200 px-3 py-2 text-xs font-medium text-gray-600">
                    Medlemsoversigt
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-3/5"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
<Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="p-3 bg-semantic-brand-light rounded-lg w-fit mb-4">
                <ArrowRight className="h-12 w-12 text-semantic-brand-default" />
              </div>
              <CardTitle className="text-2xl">{features.staffAdmin.title}</CardTitle>
              <CardDescription className="text-base">
                {features.staffAdmin.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.staffAdmin.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-semantic-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-white rounded shadow-sm">
                  <div className="bg-gray-200 px-3 py-2 text-xs font-medium text-gray-600">
                    Produktkatalog
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
<Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="p-3 bg-semantic-brand-light rounded-lg w-fit mb-4">
                <BarChart3 className="h-12 w-12 text-semantic-brand-default" />
              </div>
              <CardTitle className="text-2xl">{features.agreements.title}</CardTitle>
              <CardDescription className="text-base">
                {features.agreements.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.agreements.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-semantic-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-white rounded shadow-sm">
                  <div className="bg-gray-200 px-3 py-2 text-xs font-medium text-gray-600">
                    Priser & Aftaler
                  </div>
                  <div className="p-3 flex items-end justify-around h-20 gap-2">
                    <div className="bg-semantic-brand-default/30 rounded w-full animate-pulse" style={{ height: '60%' }}></div>
                    <div className="bg-semantic-brand-default/40 rounded w-full animate-pulse" style={{ height: '80%' }}></div>
                    <div className="bg-semantic-brand-default/50 rounded w-full animate-pulse" style={{ height: '100%' }}></div>
                    <div className="bg-semantic-brand-default/40 rounded w-full animate-pulse" style={{ height: '70%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
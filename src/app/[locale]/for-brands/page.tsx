import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Zap } from 'lucide-react'
import SubpageHero from '@/components/Hero/SubpageHero'
import Workflow from '@/components/Workflow/Workflow'

export default async function ForBrands({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  const page = (dictionary as Record<string, unknown>).forBrandsPage as {
    hero: { tag: string; title: string; subtitle: string }
    benefits: { tag: string; title: string; cards: { title: string; description: string }[] }
    workflow: { title: string; subtitle: string }
    features: { tag: string; title: string; items: { title: string; description: string }[] }
    cta: { title: string; subtitle: string; primaryCTA: string; secondaryCTA: string }
  } | undefined

  // Get Brand Admin workflow from audienceWorkflows
  const audienceWorkflows = (dictionary as Record<string, unknown>).audienceWorkflows as Array<{
    id: string
    title: string
    subtitle?: string
    steps: { label: string; iconKey: string }[]
  }> | undefined
  const brandWorkflow = audienceWorkflows?.find(w => w.id === 'brand-admin')

  const benefitIcons = [TrendingUp, Shield, Users, Zap]

  return (
    <main className="min-h-screen">
      {/* Section 1 - Hero */}
      <SubpageHero
        tag={page?.hero.tag || 'For brands & leverandører'}
        title={page?.hero.title || 'Stop med at administrere partnerskaber i regneark'}
        subtitle={page?.hero.subtitle || ''}
        videoSrc="/videos/background-01"
      />

      {/* Section 2 - Benefits Grid */}
      <section className="py-20 md:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-4">
              {page?.benefits.tag || 'Fordele'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              {page?.benefits.title || 'Hvorfor brands vælger B2B Sport'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {(page?.benefits.cards || []).map((card, index) => {
              const Icon = benefitIcons[index % benefitIcons.length]
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-forest-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral-600 transition-colors">
                    <Icon className="w-7 h-7 text-cream-100" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-forest-900">
                    {card.title}
                  </h3>
                  <p className="text-forest-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - Workflow */}
      <section className="bg-semantic-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
              {page?.workflow.title || 'Jeres workflow som brand-administrator'}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
              {page?.workflow.subtitle || 'Fra onboarding til skalering — alt i platformen'}
            </p>
          </div>
        </div>
        {brandWorkflow && (
          <Workflow
            dictionary={dictionary}
            locale={locale}
            workflows={[brandWorkflow]}
            hideHeader
          />
        )}
      </section>

      {/* Section 4 - Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-coral-600 text-white mb-4">
              {page?.features.tag || 'Platform-funktioner'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              {page?.features.title || 'Alt hvad I behøver for at drive partnerskaber'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {(page?.features.items || []).map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-cream-100 border border-forest-200">
                <CheckCircle className="w-6 h-6 text-coral-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg text-forest-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-forest-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="py-20 md:py-28 bg-forest-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-100/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight mb-6">
            {page?.cta.title || 'Klar til at skalere jeres klubnetværk?'}
          </h2>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto mb-10">
            {page?.cta.subtitle || 'Lad os vise jer hvordan B2B Sport kan transformere jeres partnerskaber.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-coral-600 rounded-full hover:bg-coral-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {page?.cta.primaryCTA || 'Book demo'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-cream-100 border border-cream-100/30 rounded-full transition-all duration-300 hover:border-cream-100/60 hover:bg-cream-100/5"
            >
              {page?.cta.secondaryCTA || 'Kontakt os'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

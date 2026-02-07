import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, Users, Eye, Database } from 'lucide-react'
import SubpageHero from '@/components/Hero/SubpageHero'
import Workflow from '@/components/Workflow/Workflow'

export default async function ForClubs({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  const page = (dictionary as Record<string, unknown>).forClubsPage as {
    hero: { tag: string; title: string; subtitle: string }
    benefits: { tag: string; title: string; cards: { title: string; description: string }[] }
    workflow: { title: string; subtitle: string }
    roles: {
      tag: string
      title: string
      subtitle: string
      admin: { title: string; description: string; capabilities: string[] }
      staff: { title: string; description: string; capabilities: string[] }
    }
    cta: { title: string; subtitle: string; primaryCTA: string; secondaryCTA: string }
  } | undefined

  // Get Club Admin and Coach/Staff workflows from audienceWorkflows
  const audienceWorkflows = (dictionary as Record<string, unknown>).audienceWorkflows as Array<{
    id: string
    title: string
    subtitle?: string
    steps: { label: string; iconKey: string }[]
  }> | undefined
  const clubWorkflows = audienceWorkflows?.filter(w => w.id === 'club-admin' || w.id === 'coach-staff') || []

  const benefitIcons = [Building2, Users, Eye, Database]

  return (
    <main className="min-h-screen">
      {/* Section 1 - Hero */}
      <SubpageHero
        tag={page?.hero.tag || 'For klubber'}
        title={page?.hero.title || 'Én platform for alle leverandørrelationer'}
        subtitle={page?.hero.subtitle || ''}
        videoSrc="/videos/background-02"
      />

      {/* Section 2 - Benefits Grid */}
      <section className="py-20 md:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-4">
              {page?.benefits.tag || 'Fordele'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              {page?.benefits.title || 'Hvorfor klubber vælger B2B Sport'}
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

      {/* Section 3 - Workflow (tabbed: Club Admin + Coach/Staff) */}
      <section className="bg-semantic-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
              {page?.workflow.title || 'Jeres workflow i platformen'}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
              {page?.workflow.subtitle || 'Se hvordan platformen understøtter jeres daglige arbejde — uanset jeres rolle'}
            </p>
          </div>
        </div>
        {clubWorkflows.length > 0 && (
          <Workflow
            dictionary={dictionary}
            locale={locale}
            workflows={clubWorkflows}
            hideHeader
          />
        )}
      </section>

      {/* Section 4 - Role Explanation */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-coral-600 text-white mb-4">
              {page?.roles.tag || 'Roller og adgang'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight mb-4">
              {page?.roles.title || 'Hvem gør hvad i platformen'}
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              {page?.roles.subtitle || 'Klar rollefordeling sikrer effektivitet og kontrol'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Club Admin Role */}
            <div className="bg-forest-900 rounded-2xl p-8 text-cream-100">
              <div className="w-14 h-14 bg-coral-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                {page?.roles.admin.title || 'Klubadministrator'}
              </h3>
              <p className="text-cream-300 mb-6">
                {page?.roles.admin.description || 'Har fuldt overblik og styringsansvar'}
              </p>
              <ul className="space-y-3">
                {(page?.roles.admin.capabilities || []).map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cream-200">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coach / Staff Role */}
            <div className="bg-cream-100 rounded-2xl p-8 border border-forest-200">
              <div className="w-14 h-14 bg-forest-900 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cream-100" />
              </div>
              <h3 className="font-display font-bold text-2xl text-forest-900 mb-2">
                {page?.roles.staff.title || 'Træner / Holdleder'}
              </h3>
              <p className="text-forest-600 mb-6">
                {page?.roles.staff.description || 'Bestiller hurtigt og enkelt inden for rammerne'}
              </p>
              <ul className="space-y-3">
                {(page?.roles.staff.capabilities || []).map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-600 flex-shrink-0 mt-0.5" />
                    <span className="text-forest-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="py-20 md:py-28 bg-forest-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-100/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight mb-6">
            {page?.cta.title || 'Klar til at tage kontrol over jeres udstyr?'}
          </h2>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto mb-10">
            {page?.cta.subtitle || 'Lad os vise jer hvordan B2B Sport kan forenkle jeres udstyrshåndtering og leverandørrelationer.'}
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

import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, Zap, Target, Users, Check, X, LogIn, ShoppingBag, Truck } from 'lucide-react'
import SubpageHero from '@/components/Hero/SubpageHero'

export default async function WhatWeDo({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <SubpageHero
        tag={dictionary.whatWeDoPage?.hero?.tag || 'Hvad vi gør'}
        title={dictionary.whatWeDoPage?.hero?.title || 'Din klub fortjener bedre'}
        subtitle={dictionary.whatWeDoPage?.hero?.subtitle || 'Slip for tidskrævende administration og få mere tid til det, der virkelig betyder noget - jeres sport'}
        videoSrc="/videos/background-02"
      />

      {/* Mission Section - Modern Solution */}
      <section className="py-20 md:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-4">
              {dictionary.whatWeDoPage?.mission?.tag || 'Moderne løsning'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight mb-4">
              {dictionary.whatWeDoPage?.mission?.title || 'Endelig en moderne løsning'}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 max-w-3xl mx-auto">
              {dictionary.whatWeDoPage?.mission?.subtitle || 'Tusindvis af timer spildes hvert år på manuel håndtering af klubbens udstyr. Det stopper nu.'}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Save Time Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-forest-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral-600 transition-colors">
                <Zap className="w-8 h-8 text-cream-100" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-forest-900">
                {dictionary.whatWeDoPage?.mission?.points?.saveTime?.title || 'Spar tid hver uge'}
              </h3>
              <p className="text-forest-600 leading-relaxed">
                {dictionary.whatWeDoPage?.mission?.points?.saveTime?.description || 'Ingen mere copy-paste mellem mails og Excel-ark'}
              </p>
            </div>

            {/* Right Prices Card */}
            <div className="group bg-forest-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-coral-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cream-100 transition-colors">
                <Target className="w-8 h-8 text-cream-100 group-hover:text-forest-900 transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-cream-100">
                {dictionary.whatWeDoPage?.mission?.points?.rightPrices?.title || 'Altid de rigtige priser'}
              </h3>
              <p className="text-cream-200 leading-relaxed">
                {dictionary.whatWeDoPage?.mission?.points?.rightPrices?.description || 'Jeres aftaler er allerede på plads - ingen overraskelser'}
              </p>
            </div>

            {/* Track Everything Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-forest-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-coral-600 transition-colors">
                <Users className="w-8 h-8 text-cream-100" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-forest-900">
                {dictionary.whatWeDoPage?.mission?.points?.trackEverything?.title || 'Hold styr på alt'}
              </h3>
              <p className="text-forest-600 leading-relaxed">
                {dictionary.whatWeDoPage?.mission?.points?.trackEverything?.description || 'Fra medlemsønsker til leverancer - alt samlet ét sted'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - See the Difference */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-coral-600 text-white mb-4">
              {dictionary.whatWeDoPage?.differentiator?.tag || 'Sammenligning'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight mb-4">
              {dictionary.whatWeDoPage?.differentiator?.title || 'Se forskellen selv'}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 max-w-3xl mx-auto">
              {dictionary.whatWeDoPage?.differentiator?.subtitle || 'Hvorfor bruge timer på noget, der kan tage minutter?'}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current Way - Problems Card */}
            <div className="bg-cream-100 rounded-3xl p-8 lg:p-10 border-2 border-coral-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-coral-600/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-coral-600" />
                </div>
                <h3 className="text-xl font-bold font-display text-forest-900">
                  {dictionary.whatWeDoPage?.differentiator?.currentWay || 'Sådan gør I nu'}
                </h3>
              </div>
              <ul className="space-y-4">
                {(dictionary.whatWeDoPage?.differentiator?.currentWayItems || [
                  'Regneark sendt frem og tilbage',
                  'Uendelige email-tråde om ordrer',
                  'Adskilte værktøjer uden sammenhæng',
                  'Manuel opfølgning på aftaler',
                  'Udløbne aftaler der falder mellem to stole'
                ]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-coral-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-coral-600" />
                    </span>
                    <span className="text-forest-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Way - Solutions Card */}
            <div className="bg-forest-900 rounded-3xl p-8 lg:p-10 ring-2 ring-forest-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-coral-600 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display text-cream-100">
                  {dictionary.whatWeDoPage?.differentiator?.ourWay || 'Sådan kan det være'}
                </h3>
              </div>
              <ul className="space-y-4">
                {(dictionary.whatWeDoPage?.differentiator?.ourWayItems || [
                  'Centraliseret platform til alt',
                  'Strukturerede aftaler med klare vilkår',
                  'Rollebaseret adgang for alle parter',
                  'Realtids-dashboards og overblik',
                  'Proaktive fornyelses-advarsler'
                ]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-coral-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-cream-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - How It Works */}
      <section className="py-20 md:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-4">
              {dictionary.whatWeDoPage?.process?.tag || 'Processen'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight mb-4">
              {dictionary.whatWeDoPage?.process?.title || 'Så nemt er det'}
            </h2>
            <p className="text-lg md:text-xl text-forest-700 max-w-3xl mx-auto">
              {dictionary.whatWeDoPage?.process?.subtitle || 'Bestil klubbens udstyr uden besvær'}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 - Log in */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-forest-900 rounded-2xl flex items-center justify-center mx-auto mb-6 relative transition-colors duration-300 group-hover:bg-coral-600">
                  <LogIn className="w-10 h-10 text-cream-100" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-coral-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-forest-900">
                  {dictionary.whatWeDoPage?.process?.steps?.login?.title || 'Log ind'}
                </h3>
                <p className="text-forest-600">
                  {dictionary.whatWeDoPage?.process?.steps?.login?.description || 'Jeres klub får egen adgang med alle aftaler klar'}
                </p>
              </div>
              {/* Connector Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-forest-400" />
              </div>
            </div>

            {/* Step 2 - Choose Equipment */}
            <div className="relative">
              <div className="bg-forest-900 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 md:-translate-y-4 hover:-translate-y-1 md:hover:-translate-y-5">
                <div className="w-20 h-20 bg-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                  <ShoppingBag className="w-10 h-10 text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-cream-100 rounded-full flex items-center justify-center text-sm font-bold text-forest-900">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-cream-100">
                  {dictionary.whatWeDoPage?.process?.steps?.select?.title || 'Vælg udstyr'}
                </h3>
                <p className="text-cream-200">
                  {dictionary.whatWeDoPage?.process?.steps?.select?.description || 'Find præcis det I skal bruge - priserne er allerede aftalt'}
                </p>
              </div>
              {/* Connector Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-forest-400" />
              </div>
            </div>

            {/* Step 3 - Receive Delivery */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-forest-900 rounded-2xl flex items-center justify-center mx-auto mb-6 relative transition-colors duration-300 group-hover:bg-coral-600">
                  <Truck className="w-10 h-10 text-cream-100" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-coral-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-forest-900">
                  {dictionary.whatWeDoPage?.process?.steps?.delivery?.title || 'Modtag levering'}
                </h3>
                <p className="text-forest-600">
                  {dictionary.whatWeDoPage?.process?.steps?.delivery?.description || 'Følg jeres ordre hele vejen og få besked ved levering'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-100/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-coral-600 text-white mb-6">
            {dictionary.whatWeDoPage?.goToMarket?.tag || 'Kom i gang'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight mb-6">
            {dictionary.whatWeDoPage?.goToMarket?.title || 'Start jeres digitale rejse i dag'}
          </h2>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mx-auto mb-10">
            {dictionary.whatWeDoPage?.goToMarket?.subtitle || 'Bliv en af de første klubber der slipper for tidsspilde og administration. Vi er klar til at vise jer hvordan.'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-coral-600 rounded-full hover:bg-coral-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {dictionary.whatWeDoPage?.goToMarket?.cta || 'Kontakt os'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}

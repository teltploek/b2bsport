import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import SubpageHero from '@/components/Hero/SubpageHero'

export default async function ForBrands({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <main className="min-h-screen">
      <SubpageHero
        tag={dictionary.nav.forBrands || 'For brands'}
        title={dictionary.nav.forBrands || 'For brands'}
        subtitle=""
        videoSrc="/videos/background-01"
      />
      <section className="py-20 md:py-28 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-forest-900">
            {dictionary.nav.forBrands || 'For brands'}
          </h2>
          <p className="text-lg text-forest-700 mt-4">Coming soon</p>
        </div>
      </section>
    </main>
  )
}

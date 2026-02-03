import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Hero from '@/components/Hero/Hero'
import Welcome from '@/components/Welcome/Welcome'
import ValueProposition from '@/components/ValueProposition/ValueProposition'
import SportsGrid from '@/components/SportsGrid/SportsGrid'
import BrandsGrid from '@/components/BrandsGrid/BrandsGrid'
import ContactCTA from '@/components/ContactCTA/ContactCTA'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <main>
      <Hero dictionary={dictionary} locale={locale} />
      <Welcome dictionary={dictionary} locale={locale} />
      <ValueProposition dictionary={dictionary} locale={locale} />
      <SportsGrid dictionary={dictionary} locale={locale} />
      <BrandsGrid dictionary={dictionary} />
      <ContactCTA dictionary={dictionary} locale={locale} />
    </main>
  )
}
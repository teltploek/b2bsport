import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import ClubSystemHero from '@/components/ClubSystem/ClubSystemHero'
import FeatureShowcase from '@/components/ClubSystem/FeatureShowcase'
import ComparisonTable from '@/components/ClubSystem/ComparisonTable'
import ROISection from '@/components/ClubSystem/ROISection'
import DemoBookingCTA from '@/components/ClubSystem/DemoBookingCTA'

export default async function ClubSystemPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  
  return (
    <main>
      <ClubSystemHero dictionary={dictionary} locale={locale} />
      <FeatureShowcase dictionary={dictionary} locale={locale} />
      <ComparisonTable dictionary={dictionary} locale={locale} />
      <ROISection dictionary={dictionary} locale={locale} />
      <DemoBookingCTA dictionary={dictionary} locale={locale} />
    </main>
  )
}
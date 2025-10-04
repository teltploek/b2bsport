import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import AboutHero from '@/components/About/AboutHero';
import MissionSection from '@/components/About/MissionSection';
import StorySection from '@/components/About/StorySection';
import ApproachSection from '@/components/About/ApproachSection';
import BenefitsSection from '@/components/About/BenefitsSection';
import ValuesSection from '@/components/About/ValuesSection';
import AboutCTA from '@/components/About/AboutCTA';

interface PageProps {
  params: { locale: Locale };
}

export default async function AboutPage({ params: { locale } }: PageProps) {
  const dict = await getDictionary(locale);

  return (
    <main>
      <AboutHero dict={dict} />
      <MissionSection dict={dict} />
      <StorySection dict={dict} />
      <ApproachSection dict={dict} />
      <BenefitsSection dict={dict} />
      <ValuesSection dict={dict} />
      <AboutCTA dict={dict} locale={locale} />
    </main>
  );
}
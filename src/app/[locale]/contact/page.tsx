import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import ContactHero from '@/components/Contact/ContactHero';
import ContactInfo from '@/components/Contact/ContactInfo';
import TeamSection from '@/components/TeamSection/TeamSection';

interface PageProps {
  params: { locale: Locale };
}

export default async function ContactPage({ params: { locale } }: PageProps) {
  const dict = await getDictionary(locale);

  return (
    <main>
      <ContactHero dict={dict} />
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <ContactInfo dict={dict} />
        </div>
      </section>
      <TeamSection dictionary={dict} locale={locale} />
    </main>
  );
}

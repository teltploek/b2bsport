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
      <section className="bg-semantic-background-secondary">
        <div className="max-w-7xl mx-auto py-12 lg:py-20 px-6">
          <ContactInfo dict={dict} />
        </div>
      </section>
      <TeamSection dictionary={dict} locale={locale} />
    </main>
  );
}
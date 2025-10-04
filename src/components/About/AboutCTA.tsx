import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n/config';

interface AboutCTAProps {
  dict: any;
  locale: Locale;
}

export default function AboutCTA({ dict, locale }: AboutCTAProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-500 to-green-700 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {dict.aboutPage.cta.title}
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8">
          {dict.aboutPage.cta.subtitle}
        </p>
        <Button
          asChild
          className="bg-white text-green-600 hover:bg-gray-50 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Link href={`/${locale}/club-system`}>
            {dict.aboutPage.cta.button}
          </Link>
        </Button>
      </div>
    </section>
  );
}
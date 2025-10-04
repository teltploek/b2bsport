import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  dict: any;
}

export default function BenefitsSection({ dict }: BenefitsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          {dict.aboutPage.benefits.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.aboutPage.benefits.list.map((benefit: string, index: number) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed flex-1">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
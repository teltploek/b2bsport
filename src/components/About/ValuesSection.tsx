import { Search, Rocket, HandHelping, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ValuesSectionProps {
  dict: any;
}

export default function ValuesSection({ dict }: ValuesSectionProps) {
  const values = ['transparency', 'innovation', 'partnership', 'simplicity'];
  const icons = {
    transparency: <Search className="w-12 h-12" />,
    innovation: <Rocket className="w-12 h-12" />,
    partnership: <HandHelping className="w-12 h-12" />,
    simplicity: <Sparkles className="w-12 h-12" />
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          {dict.aboutPage.values.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value) => (
            <Card 
              key={value}
              className={cn(
                "bg-white transition-transform duration-200",
                "hover:-translate-y-1"
              )}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="flex justify-center mb-4 text-semantic-brand-primary">
                  {icons[value as keyof typeof icons]}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                  {dict.aboutPage.values[value].title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {dict.aboutPage.values[value].description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
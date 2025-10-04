import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ApproachSectionProps {
  dict: any;
}

export default function ApproachSection({ dict }: ApproachSectionProps) {
  const approaches = ['technology', 'userFriendly', 'realtime', 'integration'];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
          {dict.aboutPage.approach.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12">
          {dict.aboutPage.approach.subtitle}
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((key) => (
            <Card 
              key={key}
              className={cn(
                "bg-white border-gray-200 transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-lg"
              )}
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {dict.aboutPage.approach.points[key].title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {dict.aboutPage.approach.points[key].description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
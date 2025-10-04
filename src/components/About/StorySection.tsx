import { HelpCircle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StorySectionProps {
  dict: any;
}

export default function StorySection({ dict }: StorySectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          {dict.aboutPage.story.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-800 text-center mb-12 font-medium leading-relaxed">
            {dict.aboutPage.story.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <HelpCircle className="w-12 h-12 text-semantic-brand-primary" />
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {dict.aboutPage.story.problem}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-12 h-12 text-semantic-brand-primary" />
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {dict.aboutPage.story.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface ROISectionProps {
  dictionary: any
  locale: string
}

export default function ROISection({ dictionary, locale }: ROISectionProps) {
  const roi = dictionary.clubSystemPage.roi

  return (
    <section className="py-20 bg-gradient-to-br from-semantic-brand-default to-semantic-brand-hover">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {roi.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {roi.subtitle}
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(roi.stats).map(([key, stat]: [string, any]) => (
            <Card key={key} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
<Card className="bg-white/10 backdrop-blur border-white/20 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-white/60 flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Hvad siger vores kunder?
                </h3>
                <blockquote className="text-lg text-white/90 italic mb-4">
                  &ldquo;Vi har halveret vores administrative tid og kan nu fokusere på det vigtigste - at udvikle vores spillere og klub.&rdquo;
                </blockquote>
                <cite className="text-white/70 text-sm not-italic">
                  — Thomas Nielsen, Formand Midtjylland Håndbold
                </cite>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
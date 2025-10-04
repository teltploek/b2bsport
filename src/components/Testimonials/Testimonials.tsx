import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TestimonialsProps {
  dictionary: {
    testimonials: {
      title: string
      subtitle: string
      items: {
        quote: string
        author: string
        role: string
        club: string
      }[]
    }
  }
}

export default function Testimonials({ dictionary }: TestimonialsProps) {
  return (
    <section className="py-20 bg-semantic-surface-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-semantic-text-primary mb-4">
            {dictionary.testimonials.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {dictionary.testimonials.subtitle}
          </p>
        </div>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {dictionary.testimonials.items.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl"
              )}
            >
              <CardContent className="p-10">
                <blockquote className="text-lg leading-relaxed text-semantic-text-primary mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-semantic-border-default pt-6">
                  <div className="font-bold text-semantic-text-primary mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-semantic-text-secondary">
                    {testimonial.role}, {testimonial.club}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
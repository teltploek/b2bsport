import Link from 'next/link'
import { Mail, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactSectionProps {
  dictionary: {
    cta: {
      getStarted: string
      bookDemo: string
    }
    contact?: {
      title?: string
      subtitle?: string
    }
  }
  locale: string
}

export default function ContactSection({ dictionary, locale }: ContactSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-semantic-brand-default to-semantic-brand-hover">
<div className="absolute -top-1/2 -left-1/4 w-1/2 h-[200%] bg-radial-gradient pointer-events-none opacity-10" />
<div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "font-display text-4xl md:text-5xl font-bold",
            "text-white mb-4 tracking-tight"
          )}>
            Klar til at revolutionere jeres klubadministration?
          </h2>
          <p className="text-xl text-white/85 mb-12 font-normal leading-relaxed">
            Kom i gang med Danmarks første fuldt digitale platform for sportsudstyr bestilling
          </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className={cn(
              "bg-black/15 backdrop-blur-md p-8 rounded-lg",
              "border border-white/10 transition-all duration-300",
              "hover:bg-black/20 hover:border-white/20 hover:-translate-y-0.5",
              "flex flex-col items-center text-center min-h-[140px]"
            )}>
              <Mail className="h-10 w-10 text-white/90 mb-4" />
              <h3 className="text-lg font-semibold text-white/95 mb-2">Email</h3>
              <a 
                href="mailto:kontakt@b2bsport.dk" 
                className="text-white/90 hover:text-white/80 hover:underline transition-all text-sm"
              >
                kontakt@b2bsport.dk
              </a>
            </div>
<div className={cn(
              "bg-black/15 backdrop-blur-md p-8 rounded-lg",
              "border border-white/10 transition-all duration-300",
              "hover:bg-black/20 hover:border-white/20 hover:-translate-y-0.5",
              "flex flex-col items-center text-center min-h-[140px]"
            )}>
              <Phone className="h-10 w-10 text-white/90 mb-4" />
              <h3 className="text-lg font-semibold text-white/95 mb-2">Telefon</h3>
              <a 
                href="tel:+4530507915" 
                className="text-white/90 hover:text-white/80 hover:underline transition-all text-sm"
              >
                +45 30 50 79 15
              </a>
            </div>
<div className={cn(
              "bg-black/15 backdrop-blur-md p-8 rounded-lg",
              "border border-white/10 transition-all duration-300",
              "hover:bg-black/20 hover:border-white/20 hover:-translate-y-0.5",
              "flex flex-col items-center text-center min-h-[140px]"
            )}>
              <Clock className="h-10 w-10 text-white/90 mb-4" />
              <h3 className="text-lg font-semibold text-white/95 mb-2">Åbningstider</h3>
              <p className="text-white/90 text-sm">
                Man-Fre: 8:00 - 16:00
              </p>
            </div>
          </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="cta"
              size="xl"
              className="shadow-xl w-full sm:w-auto"
            >
              <Link href={`/${locale}/contact`}>
                {dictionary.cta.bookDemo}
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              className={cn(
                "bg-white/90 text-semantic-brand-default hover:bg-white",
                "transform hover:-translate-y-0.5 transition-all",
                "w-full sm:w-auto"
              )}
            >
              <Link href={`/${locale}/club-system`}>
                {dictionary.cta.getStarted}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
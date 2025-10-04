import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ClubSystemHeroProps {
  dictionary: any
  locale: string
}

export default function ClubSystemHero({ dictionary, locale }: ClubSystemHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-semantic-brand-default to-semantic-brand-hover overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className={cn(
              "font-display text-4xl md:text-5xl lg:text-6xl font-bold",
              "text-white mb-6 tracking-tight"
            )}>
              {dictionary.clubSystemPage.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {dictionary.clubSystemPage.hero.subtitle}
            </p>
            <Button asChild variant="cta" size="xl" className="shadow-xl">
              <Link href={`/${locale}/demo`}>
                {dictionary.clubSystemPage.hero.cta}
              </Link>
            </Button>
          </div>
<div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  klubsystem.b2bsport.dk
                </div>
              </div>
              <div className="bg-gradient-to-b from-gray-50 to-white p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-400 animate-pulse">
                  Klubsystem Screenshot
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
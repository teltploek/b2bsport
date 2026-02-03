import Link from 'next/link'

interface HeroProps {
  dictionary: {
    hero: {
      tag?: string
      title: string
      subtitle: string
      cta: string
    }
    cta: {
      bookDemo: string
    }
  }
  locale: string
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-01.webm" type="video/webm" />
        <source src="/videos/background-01.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-forest-900/70" />

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
          {/* Overlapping Content Card */}
          <div className="max-w-2xl">
            <div className="bg-cream-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl transform translate-y-6 sm:translate-y-8 md:translate-y-12">
              {/* Pill-shaped Category Tag */}
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-forest-900 text-cream-100 mb-4 sm:mb-6">
                {dictionary.hero.tag || 'Digital sportsudstyr platform'}
              </span>

              {/* Large Headline with Dramatic Typography */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-3 sm:mb-4">
                {dictionary.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-forest-700 leading-relaxed mb-6 sm:mb-8">
                {dictionary.hero.subtitle}
              </p>

              {/* CTA Button in Coral - touch-friendly 48px min height */}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full text-base sm:text-lg font-bold bg-coral-600 text-white shadow-lg transition-all duration-200 hover:bg-coral-700 hover:-translate-y-0.5 hover:shadow-xl group"
              >
                {dictionary.hero.cta}
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

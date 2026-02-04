import Link from 'next/link'

interface HeroProps {
  dictionary: {
    hero: {
      tag?: string
      title: string
      subtitle: string
      cta: string
      ctaSecondary?: string
    }
    cta: {
      bookDemo: string
    }
  }
  locale: string
}

export default function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="relative h-[100svh] overflow-hidden flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-01.webm" type="video/webm" />
        <source src="/videos/background-01.mp4" type="video/mp4" />
      </video>

      {/* Sophisticated multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/70 to-forest-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-forest-900/20" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-coral-500 hidden lg:block" />

      {/* Content Container - flex-1 to fill available space */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="max-w-3xl">
            {/* Animated tag with accent */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="w-8 h-[2px] bg-coral-500" />
              <span className="text-coral-400 font-body text-sm tracking-[0.2em] uppercase">
                {dictionary.hero.tag || 'Digital sportsudstyr platform'}
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-8 animate-fade-in-up animation-delay-100"
            >
              <span className="block">Hele Danmarks</span>
              <span className="block text-cream-200/90">klubpartner</span>
            </h1>

            {/* Subtitle with refined styling */}
            <p
              className="text-lg sm:text-xl text-cream-200/80 leading-relaxed max-w-xl mb-12 animate-fade-in-up animation-delay-200"
            >
              {dictionary.hero.subtitle}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animation-delay-300">
              {/* Primary CTA - Refined coral button */}
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-coral-600 text-white overflow-hidden transition-all duration-300 hover:bg-coral-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {dictionary.hero.cta}
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary CTA - Ghost button */}
              <Link
                href={`/${locale}/what-we-do`}
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-cream-100 border border-cream-100/30 transition-all duration-300 hover:border-cream-100/60 hover:bg-cream-100/5"
              >
                <span>{dictionary.hero.ctaSecondary || 'Se hvordan'}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar - part of flex layout, always visible at bottom */}
      <div className="relative z-10 border-t border-cream-100/10 bg-forest-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-cream-200/70">
                <span className="text-2xl font-display font-bold text-white">50+</span>
                <span className="text-xs uppercase tracking-wider">Klubber</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-cream-200/70">
                <span className="text-2xl font-display font-bold text-white">100%</span>
                <span className="text-xs uppercase tracking-wider">Digital</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-cream-200/70">
                <span className="text-2xl font-display font-bold text-white">24/7</span>
                <span className="text-xs uppercase tracking-wider">Platform</span>
              </div>
            </div>
            <div className="hidden sm:block h-4 w-px bg-cream-100/20" />
            <div className="text-cream-200/50 text-xs tracking-wider uppercase hidden sm:block">
              Danmarks førende klubplatform
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

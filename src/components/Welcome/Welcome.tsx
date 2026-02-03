import Link from 'next/link'

interface WelcomeProps {
  dictionary: {
    welcome?: {
      tag: string
      title: string
      description: string
      cta: string
      leftCard: {
        tag: string
        title: string
      }
      rightCard: {
        tag: string
        title: string
      }
    }
  }
  locale: string
}

export default function Welcome({ dictionary, locale }: WelcomeProps) {
  const content = dictionary.welcome || {
    tag: 'Velkommen',
    title: 'Vi gør det nemt at være sportsklub',
    description: 'B2B Sport er Danmarks første fuldt digitale platform for bestilling af sportsudstyr. Vi hjælper klubber med at spare tid, undgå fejl og få fuld kontrol over deres udstyr.',
    cta: 'Kom i kontakt',
    leftCard: {
      tag: 'Digital platform',
      title: 'Alt samlet ét sted',
    },
    rightCard: {
      tag: '50+ klubber',
      title: 'Stolte partnere',
    },
  }

  return (
    <section className="bg-cream-200 py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Card - Image/Visual with offset */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-forest-900 rounded-2xl p-6 md:p-8 min-h-[240px] md:min-h-[280px] lg:aspect-[4/5] flex flex-col justify-between transform lg:-translate-y-8">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-cream-100" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  </svg>
                </div>

                {/* Pill Tag */}
                <span className="relative inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold bg-cream-100 text-forest-900">
                  {content.leftCard.tag}
                </span>

                {/* Card Content */}
                <div className="relative mt-auto">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-cream-100 leading-tight">
                    {content.leftCard.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left px-4 lg:px-8">
            {/* Welcome Label */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-6">
              {content.tag}
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.15] tracking-tight mb-6">
              {content.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {content.description}
            </p>

            {/* CTA Button with Arrow */}
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-bold bg-forest-900 text-cream-100 shadow-lg transition-all duration-200 hover:bg-forest-800 hover:-translate-y-0.5 hover:shadow-xl group"
            >
              {content.cta}
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

          {/* Right Card - Stats/Visual with offset */}
          <div className="lg:col-span-3 order-3">
            <div className="relative">
              <div className="bg-cream-100 border-2 border-forest-200 rounded-2xl p-6 md:p-8 min-h-[240px] md:min-h-[280px] lg:aspect-[4/5] flex flex-col justify-between transform lg:translate-y-12">
                {/* Decorative corners */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-coral-600 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-coral-600 rounded-bl-lg" />

                {/* Pill Tag */}
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold bg-coral-600 text-white">
                  {content.rightCard.tag}
                </span>

                {/* Card Content */}
                <div className="mt-auto">
                  {/* Icon/Avatars Stack */}
                  <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-forest-700 border-2 border-cream-100 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-coral-600 border-2 border-cream-100 flex items-center justify-center text-xs font-bold text-white">
                      +
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-forest-900 leading-tight">
                    {content.rightCard.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

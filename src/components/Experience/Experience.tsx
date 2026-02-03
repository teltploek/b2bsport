interface ExperienceProps {
  dictionary: {
    experience?: {
      tag: string
      title: string
      titleHighlight: string
      description: string
      descriptionHighlight: string
      stat: {
        value: string
        label: string
      }
      solutions: {
        title: string
        items: string[]
      }
      cta: string
    }
  }
  locale: string
}

export default function Experience({ dictionary, locale }: ExperienceProps) {
  const content = dictionary.experience || {
    tag: 'Erfaring & kvalitet',
    title: 'Vi styrker',
    titleHighlight: 'danske sportsklubber',
    description: 'Med års erfaring i sportsbranchen forstår vi klubbernes behov. Vores mission er at gøre det',
    descriptionHighlight: 'nemt, hurtigt og pålideligt',
    stat: {
      value: '50+',
      label: 'Stolte klubpartnere',
    },
    solutions: {
      title: 'Komplette løsninger',
      items: [
        'Digital platform til bestilling',
        'Forudindlæste prisaftaler',
        'Komplet sortiment af brands',
        'Personlig support',
      ],
    },
    cta: 'Bliv partner',
  }

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image Collage / Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main decorative card */}
            <div className="relative">
              {/* Background card (offset) */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-forest-200/30 rounded-3xl" />

              {/* Main image card */}
              <div className="relative bg-forest-900 rounded-3xl aspect-[4/3] overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
                    <pattern id="experience-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                      <circle cx="12.5" cy="12.5" r="2" fill="currentColor" className="text-cream-100" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#experience-grid)" />
                  </svg>
                </div>

                {/* Content within the card */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    {/* Large stat badge */}
                    <div className="inline-flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-cream-100 shadow-xl mb-6">
                      <span className="font-display text-4xl md:text-5xl font-extrabold text-forest-900">
                        {content.stat.value}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-forest-700 text-center px-2">
                        {content.stat.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping accent card (bottom right) */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 bg-coral-600 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl max-w-[200px] sm:max-w-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-display text-base md:text-lg font-bold text-white">
                    Verificeret partner
                  </span>
                </div>
              </div>

              {/* Overlapping element (top left) */}
              <div className="absolute -top-4 left-2 sm:-top-6 sm:-left-2 md:-top-8 md:-left-4 bg-cream-100 border-2 border-forest-200 rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  {/* Mini avatars */}
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-forest-700 border-2 border-cream-100 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-forest-900">1000+</span>
                    <span className="text-forest-600 block">Brugere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Tag */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-coral-600/10 text-coral-700 mb-6">
              {content.tag}
            </span>

            {/* Headline with highlighted word */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
              {content.title}{' '}
              <span className="text-coral-600">{content.titleHighlight}</span>
            </h2>

            {/* Description with highlighted text */}
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed mb-8">
              {content.description}{' '}
              <span className="font-semibold text-forest-900">{content.descriptionHighlight}</span>
              {' '}at håndtere klubbens udstyr.
            </p>

            {/* Solutions callout box */}
            <div className="bg-cream-100 border border-forest-200 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="font-display text-xl font-bold text-forest-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-forest-900 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {content.solutions.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.solutions.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-forest-700">
                    <svg className="w-5 h-5 text-coral-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
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
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

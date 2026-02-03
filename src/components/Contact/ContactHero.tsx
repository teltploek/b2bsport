interface ContactHeroProps {
  dict: any;
}

export default function ContactHero({ dict }: ContactHeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-04.webm" type="video/webm" />
        <source src="/videos/background-04.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-forest-900/75" />

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          {/* Overlapping Content Card */}
          <div className="max-w-2xl">
            <div className="bg-cream-100 rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl transform translate-y-8 md:translate-y-12">
              {/* Pill-shaped Category Tag */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900 text-cream-100 mb-6">
                {dict.contactPage?.hero?.tag || 'Kontakt os'}
              </span>

              {/* Large Headline with Dramatic Typography */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-4">
                {dict.contactPage?.hero?.title || 'Lad os tale om jeres klubs fremtid'}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
                {dict.contactPage?.hero?.subtitle || 'Vi er klar til at hjælpe jer med at revolutionere jeres udstyrshåndtering'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

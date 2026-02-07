interface SubpageHeroProps {
  tag: string
  title: string
  subtitle: string
  videoSrc?: string
}

export default function SubpageHero({
  tag,
  title,
  subtitle,
  videoSrc = '/videos/background-02'
}: SubpageHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] overflow-hidden flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={`${videoSrc}.webm`} type="video/webm" />
        <source src={`${videoSrc}.mp4`} type="video/mp4" />
      </video>

      {/* Multi-layer gradient overlay matching homepage */}
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
      <div className="absolute left-0 top-1/4 w-1 h-24 bg-coral-500 hidden lg:block" />

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="max-w-3xl">
            {/* Tag with accent */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="w-8 h-[2px] bg-coral-500" />
              <span className="text-coral-400 font-body text-sm tracking-[0.2em] uppercase">
                {tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-cream-200/80 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

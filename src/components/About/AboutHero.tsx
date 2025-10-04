interface AboutHeroProps {
  dict: any;
}

export default function AboutHero({ dict }: AboutHeroProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-green-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight">
          {dict.aboutPage.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {dict.aboutPage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
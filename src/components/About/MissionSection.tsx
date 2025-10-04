interface MissionSectionProps {
  dict: any;
}

export default function MissionSection({ dict }: MissionSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          {dict.aboutPage.mission.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {dict.aboutPage.mission.content}
        </p>
      </div>
    </section>
  );
}
interface TeamSectionProps {
  dictionary: {
    team?: {
      title: string
      subtitle: string
      tag?: string
      roles?: {
        clubConsultant: string
        projectAssistant: string
        marketing: string
        it: string
        accounting: string
        ceo: string
        chairman: string
      }
    }
  }
  locale: string
}

const teamMembers = [
  { name: 'Jonas Larholm', roleKey: 'clubConsultant', initials: 'JOL' },
  { name: 'Anders Heide-Andersen', roleKey: 'clubConsultant', initials: 'AND' },
  { name: 'Louise Krabbe Riis', roleKey: 'projectAssistant', initials: 'LKR' },
  { name: 'Christoffer Hjarnø', roleKey: 'marketing', initials: 'CHR' },
  { name: 'Sebastian H. Pedersen', roleKey: 'it', initials: 'SEB' },
  { name: 'Andreas D. Pedersen', roleKey: 'it', initials: 'ADP' },
  { name: 'Brian Frisch', roleKey: 'it', initials: 'BRF' },
  { name: 'Rikke Jørgensen', roleKey: 'accounting', initials: 'RIP' },
  { name: 'Casper Pedersen', roleKey: 'ceo', initials: 'CAS' },
  { name: 'Rasmus B. Lynddahl', roleKey: 'chairman', initials: 'RAS' },
]

export default function TeamSection({ dictionary, locale }: TeamSectionProps) {
  const content = dictionary.team || {
    title: 'Mød teamet',
    subtitle: 'Et dedikeret team af eksperter der arbejder for at revolutionere sportsudstyrsbranchen'
  }

  const roles = dictionary.team?.roles || {
    clubConsultant: 'Klubkonsulent',
    projectAssistant: 'Projektmedarbejder og salgsbackup',
    marketing: 'Marketing',
    it: 'IT',
    accounting: 'Bogholderi',
    ceo: 'Daglig leder',
    chairman: 'Bestyrelsesformand'
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-4 sm:mb-6">
            {dictionary.team?.tag || 'Vores team'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-forest-900 mb-4 sm:mb-6 leading-tight">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-forest-700 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Team Grid - responsive grid with better mobile spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Avatar Container - scales appropriately */}
              <div className="relative mb-3 sm:mb-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-2xl overflow-hidden bg-cream-200 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={`/employees/${member.initials}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-coral-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Name - responsive text */}
              <h3 className="font-bold font-display text-forest-900 text-sm sm:text-base md:text-lg mb-1 group-hover:text-coral-600 transition-colors line-clamp-2">
                {member.name}
              </h3>

              {/* Role Badge - wraps properly on small screens */}
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-cream-200 text-forest-700">
                {roles[member.roleKey as keyof typeof roles]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

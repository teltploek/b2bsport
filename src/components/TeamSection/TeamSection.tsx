interface TeamSectionProps {
  dictionary: {
    team?: {
      title: string
      subtitle: string
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-semantic-text-primary mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-semantic-brand-light">
                <img
                  src={`/employees/${member.initials}.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold font-display text-semantic-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-semantic-text-secondary">
                {roles[member.roleKey as keyof typeof roles]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
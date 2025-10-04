import { User } from 'lucide-react'

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
  { name: 'Jonas Larholm', roleKey: 'clubConsultant' },
  { name: 'Anders Heide-Andersen', roleKey: 'clubConsultant' },
  { name: 'Louise Krabbe Riis', roleKey: 'projectAssistant' },
  { name: 'Christoffer Hjarnø', roleKey: 'marketing' },
  { name: 'Sebastian H. Pedersen', roleKey: 'it' },
  { name: 'Andreas D. Pedersen', roleKey: 'it' },
  { name: 'Brian Frisch', roleKey: 'it' },
  { name: 'Rikke Jørgensen', roleKey: 'accounting' },
  { name: 'Casper Pedersen', roleKey: 'ceo' },
  { name: 'Rasmus B. Lynddahl', roleKey: 'chairman' },
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
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-semantic-brand-light flex items-center justify-center">
                <User className="w-12 h-12 text-semantic-brand-default" />
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
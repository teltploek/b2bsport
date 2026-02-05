interface WorkflowProps {
  dictionary: {
    workflow?: {
      title?: string
      subtitle?: string
    }
  }
  locale: string
}

export default function Workflow({ dictionary }: WorkflowProps) {
  const content = dictionary.workflow || {
    title: 'Fra bestilling til levering',
    subtitle: 'Følg jeres udstyr hele vejen - fra første klik til levering på døren',
  }

  return (
    <section className="bg-semantic-background-secondary py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.1] tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Placeholder for workflow visualization */}
        <div className="text-center text-forest-600">
          {/* Workflow visualization will be added in US-002 */}
        </div>
      </div>
    </section>
  )
}

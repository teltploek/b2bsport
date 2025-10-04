import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  className,
  align = 'center' 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={cn(alignmentClasses[align], 'mb-12', className)}>
      <h2 className="font-display text-[2.5rem] md:text-[3rem] font-bold mb-4 leading-tight tracking-tight text-semantic-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
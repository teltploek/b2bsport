import SubpageHero from '@/components/Hero/SubpageHero'

interface ContactHeroProps {
  dict: {
    contactPage?: {
      hero?: {
        tag?: string
        title?: string
        subtitle?: string
      }
    }
  }
}

export default function ContactHero({ dict }: ContactHeroProps) {
  return (
    <SubpageHero
      tag={dict.contactPage?.hero?.tag || 'Kontakt os'}
      title={dict.contactPage?.hero?.title || 'Lad os tale om jeres klubs fremtid'}
      subtitle={dict.contactPage?.hero?.subtitle || 'Vi er klar til at hjælpe jer med at revolutionere jeres udstyrshåndtering'}
      videoSrc="/videos/bg02"
    />
  )
}

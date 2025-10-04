import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react'
import styles from '@/components/VideoHero/VideoHero.module.css'
import SectionHeading from '@/components/SectionHeading/SectionHeading'

export default async function WhatWeDo({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  
  return (
    <main className="min-h-screen">
<section className={styles.heroSection}>
<video
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/background-02.webm" type="video/webm" />
          <source src="/videos/background-02.mp4" type="video/mp4" />
        </video>
<div className={styles.overlay} />
<div className={styles.content}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              {dictionary.whatWeDoPage?.hero?.title || 'Din klub fortjener bedre'}
            </h1>
<p className={styles.subtitle}>
              {dictionary.whatWeDoPage?.hero?.subtitle || 'Slip for tidskrævende administration og få mere tid til det, der virkelig betyder noget - jeres sport'}
            </p>
          </div>
        </div>
      </section>
<section className="section-padding bg-white">
        <div className="container-dynamic">
          <SectionHeading 
            title={dictionary.whatWeDoPage?.mission?.title || "Endelig en moderne løsning"}
            subtitle={dictionary.whatWeDoPage?.mission?.subtitle || "Tusindvis af timer spildes hvert år på manuel håndtering af klubbens udstyr. Det stopper nu."}
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-semantic-brand-default" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{dictionary.whatWeDoPage?.mission?.points?.saveTime?.title || 'Spar tid hver uge'}</h3>
              <p className="text-semantic-text-secondary">
                {dictionary.whatWeDoPage?.mission?.points?.saveTime?.description || 'Ingen mere copy-paste mellem mails og Excel-ark'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-semantic-brand-default" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{dictionary.whatWeDoPage?.mission?.points?.rightPrices?.title || 'Altid de rigtige priser'}</h3>
              <p className="text-semantic-text-secondary">
                {dictionary.whatWeDoPage?.mission?.points?.rightPrices?.description || 'Jeres aftaler er allerede på plads - ingen overraskelser'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-semantic-brand-default" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{dictionary.whatWeDoPage?.mission?.points?.trackEverything?.title || 'Hold styr på alt'}</h3>
              <p className="text-semantic-text-secondary">
                {dictionary.whatWeDoPage?.mission?.points?.trackEverything?.description || 'Fra medlemsønsker til leverancer - alt samlet ét sted'}
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-background-secondary">
        <div className="container-dynamic">
          <SectionHeading 
            title={dictionary.whatWeDoPage?.differentiator?.title || "Se forskellen selv"}
            subtitle={dictionary.whatWeDoPage?.differentiator?.subtitle || "Hvorfor bruge timer på noget, der kan tage minutter?"}
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-semantic-error-default/20">
              <h3 className="text-xl font-bold font-display mb-6 text-semantic-text-primary">
                {dictionary.whatWeDoPage?.differentiator?.currentWay || 'Sådan gør I nu'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-semantic-error-default mt-1">✕</span>
                  <span className="text-semantic-text-secondary">
                    Venter på Excel-ark fra leverandøren
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-error-default mt-1">✕</span>
                  <span className="text-semantic-text-secondary">
                    Sender lister rundt på mail til trænere
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-error-default mt-1">✕</span>
                  <span className="text-semantic-text-secondary">
                    Samler og retter fejl manuelt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-error-default mt-1">✕</span>
                  <span className="text-semantic-text-secondary">
                    Tjekker priser frem og tilbage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-error-default mt-1">✕</span>
                  <span className="text-semantic-text-secondary">
                    Håber på at ordren er rigtig
                  </span>
                </li>
              </ul>
            </div>
<div className="bg-semantic-brand-light rounded-lg shadow-sm p-8 border-2 border-semantic-brand-default">
              <h3 className="text-xl font-bold font-display mb-6 text-semantic-text-primary">
                {dictionary.whatWeDoPage?.differentiator?.ourWay || 'Sådan kan det være'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-semantic-brand-default mt-1">✓</span>
                  <span className="text-semantic-text-primary">
                    Log ind når det passer jer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-brand-default mt-1">✓</span>
                  <span className="text-semantic-text-primary">
                    Trænere bestiller direkte i systemet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-brand-default mt-1">✓</span>
                  <span className="text-semantic-text-primary">
                    Alt samles automatisk - ingen fejl
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-brand-default mt-1">✓</span>
                  <span className="text-semantic-text-primary">
                    Jeres priser er låst fra start
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-semantic-brand-default mt-1">✓</span>
                  <span className="text-semantic-text-primary">
                    Følg ordren hele vejen til levering
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-white">
        <div className="container-dynamic">
          <SectionHeading 
            title="Så nemt er det"
            subtitle="Bestil klubbens udstyr uden besvær"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-semantic-brand-default">1</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Log ind</h3>
              <p className="text-semantic-text-secondary">
                Jeres klub får egen adgang med alle aftaler klar
              </p>
            </div>
<div className="text-center">
              <div className="w-20 h-20 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-semantic-brand-default">2</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Vælg udstyr</h3>
              <p className="text-semantic-text-secondary">
                Find præcis det I skal bruge - priserne er allerede aftalt
              </p>
            </div>
<div className="text-center">
              <div className="w-20 h-20 bg-semantic-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-semantic-brand-default">3</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Modtag levering</h3>
              <p className="text-semantic-text-secondary">
                Følg jeres ordre hele vejen og få besked ved levering
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-background-secondary">
        <div className="container-dynamic text-center">
          <SectionHeading 
            title="Start jeres digitale rejse i dag"
            subtitle="Bliv en af de første klubber der slipper for tidsspilde og administration. Vi er klar til at vise jer hvordan."
            className="mb-8"
          />
          <Link 
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-semantic-brand-default rounded-lg hover:bg-semantic-brand-hover transition-colors shadow-lg hover:shadow-xl"
          >
            {dictionary.whatWeDoPage?.goToMarket?.cta || 'Kontakt os'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
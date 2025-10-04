import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/i18n/get-dictionary'
import { i18n, type Locale } from '@/i18n/config'
import { sportsCategories } from '@/data/sports-data'
import ProductConfigurator from '@/components/ProductConfigurator/ProductConfigurator'
import { IconShirt, IconBackpack, IconPencil, IconCheck } from '@tabler/icons-react'
import * as TablerIcons from '@tabler/icons-react'
import { brandsData } from '@/data/brands-data'

export async function generateStaticParams() {
  const paths = []
  
  for (const locale of i18n.locales) {
    for (const sport of sportsCategories) {
      paths.push({
        locale,
        sport: sport.id
      })
    }
  }
  
  return paths
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale; sport: string } 
}): Promise<Metadata> {
  const sport = sportsCategories.find(s => s.id === params.sport)
  if (!sport) return {}
  
  const sportName = sport.name[params.locale] || sport.name.en
  
  return {
    title: `B2BSport - ${sportName}`,
    description: `Complete equipment solution for ${sportName} clubs. Digital ordering platform with pre-loaded prices and fast delivery.`
  }
}

export default async function SportPage({
  params
}: {
  params: { locale: Locale; sport: string }
}) {
  const dictionary = await getDictionary(params.locale)
  const sport = sportsCategories.find(s => s.id === params.sport)
  
  if (!sport) {
    notFound()
  }
  
  const sportName = sport.name[params.locale] || sport.name.en

  return (
    <div className="min-h-screen">
<section className="bg-gradient-to-br from-semantic-brand-light to-semantic-brand-default text-semantic-on-brand py-16 md:py-24">
        <div className="container-dynamic">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-display-xl mb-4">
              {(() => {
                const IconComponent = TablerIcons[sport.icon as keyof typeof TablerIcons] as React.ComponentType<any>
                return IconComponent ? <IconComponent size={80} stroke={1.5} className="mx-auto text-semantic-on-brand" /> : null
              })()}
            </div>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-4">
              {sportName}
            </h1>
            <p className="text-body-lg md:text-body-xl mb-8">
              {dictionary.sportsPage.hero.subtitle} {sportName.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/contact`}
                className="button-primary px-8 py-3 text-body-lg"
              >
                {dictionary.sportsPage.cta.button} {sportName}
              </Link>
              <Link
                href={`/${params.locale}/klub-system`}
                className="button-secondary px-8 py-3 text-body-lg"
              >
                {dictionary.cta.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-background-primary">
        <div className="container-dynamic">
          <h2 className="text-display-lg md:text-display-xl font-display font-bold text-center mb-12">
            {dictionary.sportsPage.products.title} {sportName.toLowerCase()}
          </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="card-base card-hover p-6">
              <div className="mb-4 text-semantic-brand-default">
                <IconShirt size={48} stroke={1.5} />
              </div>
              <h3 className="text-display-xs font-semibold mb-2">
                {dictionary.sportsPage.products.teamWear.title}
              </h3>
              <p className="text-body-sm text-semantic-text-secondary">
                {dictionary.sportsPage.products.teamWear.description}
              </p>
            </div>
<div className="card-base card-hover p-6">
              <div className="mb-4 text-semantic-brand-default">
                {(() => {
                  const IconComponent = TablerIcons[sport.icon as keyof typeof TablerIcons] as React.ComponentType<any>
                  return IconComponent ? <IconComponent size={48} stroke={1.5} /> : null
                })()}
              </div>
              <h3 className="text-display-xs font-semibold mb-2">
                {dictionary.sportsPage.products.trainingGear.title}
              </h3>
              <p className="text-body-sm text-semantic-text-secondary">
                {dictionary.sportsPage.products.trainingGear.description}
              </p>
            </div>
<div className="card-base card-hover p-6">
              <div className="mb-4 text-semantic-brand-default">
                <IconBackpack size={48} stroke={1.5} />
              </div>
              <h3 className="text-display-xs font-semibold mb-2">
                {dictionary.sportsPage.products.accessories.title}
              </h3>
              <p className="text-body-sm text-semantic-text-secondary">
                {dictionary.sportsPage.products.accessories.description}
              </p>
            </div>
<div className="card-base card-hover p-6">
              <div className="mb-4 text-semantic-brand-default">
                <IconPencil size={48} stroke={1.5} />
              </div>
              <h3 className="text-display-xs font-semibold mb-2">
                {dictionary.sportsPage.products.customization.title}
              </h3>
              <p className="text-body-sm text-semantic-text-secondary">
                {dictionary.sportsPage.products.customization.description}
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-background-secondary">
        <div className="container-dynamic">
          <h2 className="text-display-lg md:text-display-xl font-display font-bold text-center mb-12">
            {dictionary.sportsPage.benefits.title}
          </h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="flex gap-4">
              <IconCheck className="text-semantic-success flex-shrink-0" size={28} stroke={2} />
              <div>
                <h3 className="text-display-xs font-semibold mb-2">
                  {dictionary.sportsPage.benefits.digitalOrdering.title}
                </h3>
                <p className="text-body-sm text-semantic-text-secondary">
                  {dictionary.sportsPage.benefits.digitalOrdering.description}
                </p>
              </div>
            </div>
<div className="flex gap-4">
              <IconCheck className="text-semantic-success flex-shrink-0" size={28} stroke={2} />
              <div>
                <h3 className="text-display-xs font-semibold mb-2">
                  {dictionary.sportsPage.benefits.fastDelivery.title}
                </h3>
                <p className="text-body-sm text-semantic-text-secondary">
                  {dictionary.sportsPage.benefits.fastDelivery.description}
                </p>
              </div>
            </div>
<div className="flex gap-4">
              <IconCheck className="text-semantic-success flex-shrink-0" size={28} stroke={2} />
              <div>
                <h3 className="text-display-xs font-semibold mb-2">
                  {dictionary.sportsPage.benefits.clubAgreements.title}
                </h3>
                <p className="text-body-sm text-semantic-text-secondary">
                  {dictionary.sportsPage.benefits.clubAgreements.description}
                </p>
              </div>
            </div>
<div className="flex gap-4">
              <IconCheck className="text-semantic-success flex-shrink-0" size={28} stroke={2} />
              <div>
                <h3 className="text-display-xs font-semibold mb-2">
                  {dictionary.sportsPage.benefits.support.title}
                </h3>
                <p className="text-body-sm text-semantic-text-secondary">
                  {dictionary.sportsPage.benefits.support.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-background-primary">
        <div className="container-dynamic">
          <ProductConfigurator dictionary={dictionary} sportName={sportName} />
        </div>
      </section>
<section className="section-padding bg-semantic-background-secondary">
        <div className="container-dynamic text-center">
          <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
            {dictionary.sportsPage.brands.title}
          </h2>
          <p className="text-body-lg text-semantic-text-secondary mb-12">
            {dictionary.sportsPage.brands.subtitle}
          </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-6xl mx-auto">
            {brandsData.slice(0, 8).map((brand) => (
              <div 
                key={brand.id} 
                className="group bg-semantic-background-elevated border border-semantic-border-subtle rounded-md p-6 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-semantic-border-default hover:bg-semantic-background-secondary w-[150px] h-[80px] md:w-[200px] md:h-[120px] flex items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="transition-all grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="section-padding bg-semantic-brand-default text-semantic-on-brand">
        <div className="container-dynamic text-center">
          <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
            {dictionary.sportsPage.cta.title}
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            {dictionary.sportsPage.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/contact`}
              className="button-primary-inverted px-8 py-3 text-body-lg"
            >
              {dictionary.sportsPage.cta.button} {sportName}
            </Link>
            <Link
              href={`/${params.locale}/klub-system`}
              className="button-secondary-inverted px-8 py-3 text-body-lg"
            >
              {dictionary.cta.learnMore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
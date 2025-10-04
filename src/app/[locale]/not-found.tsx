import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'
import { i18n } from '@/i18n/config'
import { IconSearch } from '@tabler/icons-react'

export default async function NotFound() {
  
  const locale = i18n.defaultLocale
  const dictionary = await getDictionary(locale)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-4 flex justify-center">
          <IconSearch size={80} stroke={1.5} className="text-semantic-text-secondary" />
        </div>
        <h1 className="text-display-xl font-display font-bold mb-4">
          {dictionary.notFound.heading}
        </h1>
        <p className="text-body-lg text-semantic-text-secondary mb-8">
          {dictionary.notFound.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="button-primary px-6 py-3"
          >
            {dictionary.notFound.backToHome}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="button-secondary px-6 py-3"
          >
            {dictionary.notFound.contactUs}
          </Link>
        </div>
      </div>
    </div>
  )
}
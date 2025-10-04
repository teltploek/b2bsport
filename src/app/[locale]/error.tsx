'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { IconAlertTriangle } from '@tabler/icons-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const params = useParams()
  const locale = params.locale as string || 'da'

  useEffect(() => {
    
    console.error(error)
  }, [error])

  
  const translations = {
    da: {
      heading: 'Beklager, der opstod en fejl',
      message: 'Vi arbejder på at løse problemet. Prøv venligst igen senere.',
      tryAgain: 'Prøv igen',
      backToHome: 'Tilbage til forsiden'
    },
    en: {
      heading: 'Sorry, an error occurred',
      message: "We're working on fixing the problem. Please try again later.",
      tryAgain: 'Try again',
      backToHome: 'Back to home'
    },
    de: {
      heading: 'Entschuldigung, ein Fehler ist aufgetreten',
      message: 'Wir arbeiten daran, das Problem zu beheben. Bitte versuchen Sie es später erneut.',
      tryAgain: 'Erneut versuchen',
      backToHome: 'Zurück zur Startseite'
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.da

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-4 flex justify-center">
          <IconAlertTriangle size={80} stroke={1.5} className="text-semantic-state-warning" />
        </div>
        <h1 className="text-display-xl font-display font-bold mb-4">
          {t.heading}
        </h1>
        <p className="text-body-lg text-semantic-text-secondary mb-8">
          {t.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="button-primary px-6 py-3"
          >
            {t.tryAgain}
          </button>
          <Link
            href={`/${locale}`}
            className="button-secondary px-6 py-3"
          >
            {t.backToHome}
          </Link>
        </div>
      </div>
    </div>
  )
}
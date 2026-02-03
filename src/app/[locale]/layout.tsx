import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Open_Sans } from 'next/font/google'
import '../globals.css'
import { i18n, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import Navigation from '@/components/Navigation/Navigation'
import { Footer } from '@/components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'B2B Sport - Hele Danmarks klubpartner',
  description: 'Danmarks første fuldt digitale platform for bestilling af sportsudstyr',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#ffffff',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'B2B Sport',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://b2bsport.dk',
    siteName: 'B2B Sport',
    title: 'B2B Sport - Hele Danmarks klubpartner',
    description: 'Danmarks første fuldt digitale platform for bestilling af sportsudstyr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Sport - Hele Danmarks klubpartner',
    description: 'Danmarks første fuldt digitale platform for bestilling af sportsudstyr',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(params.locale)
  
  return (
    <html lang={params.locale} className={`${plusJakartaSans.variable} ${openSans.variable}`}>
      <body className={openSans.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation dictionary={dictionary} locale={params.locale} />
          <main className="flex-1">
            {children}
          </main>
          <Footer dictionary={dictionary} lang={params.locale} />
        </div>
      </body>
    </html>
  )
}
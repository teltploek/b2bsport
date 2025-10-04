export const i18n = {
  defaultLocale: 'da',
  locales: ['da', 'en', 'de'] as const,
} as const

export type Locale = (typeof i18n)['locales'][number]
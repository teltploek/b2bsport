import 'server-only'
import type { Locale } from './config'
import { i18n } from './config'

const dictionaries: Record<Locale, () => Promise<any>> = {
  da: async () => {
    const dict = await import('../dictionaries/da.json')
    return dict.default || dict
  },
  en: async () => {
    const dict = await import('../dictionaries/en.json')
    return dict.default || dict
  },
  de: async () => {
    const dict = await import('../dictionaries/de.json')
    return dict.default || dict
  },
}

export const getDictionary = async (locale: Locale | string) => {
  if (!locale) {
    console.warn(`No locale provided, falling back to default: ${i18n.defaultLocale}`)
    return dictionaries[i18n.defaultLocale]()
  }

  const validLocale = i18n.locales.find(l => l === locale)
  if (!validLocale) {
    console.warn(`Invalid locale: "${locale}", falling back to default: ${i18n.defaultLocale}`)
    return dictionaries[i18n.defaultLocale]()
  }

  if (!dictionaries[validLocale]) {
    console.error(`Dictionary function not found for locale: ${validLocale}`)
    return dictionaries[i18n.defaultLocale]()
  }
  
  try {
    return await dictionaries[validLocale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale ${validLocale}:`, error)
    return dictionaries[i18n.defaultLocale]()
  }
}
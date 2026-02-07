'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { i18n } from '@/i18n/config'
import { cn } from '@/lib/utils'
import { Globe, ChevronDown } from 'lucide-react'

interface LanguageSwitcherProps {
  currentLocale: string
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    
    router.push(newPath)
    setIsOpen(false)
  }

  const getLanguageName = (locale: string) => {
    const names: Record<string, string> = {
      da: 'DA',
      en: 'EN',
      de: 'DE'
    }
    return names[locale] || locale.toUpperCase()
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
          "hover:bg-forest-800 text-cream-200 hover:text-white",
          "font-medium text-sm"
        )}
        aria-label="Change language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span>{getLanguageName(currentLocale)}</span>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>
      <div className={cn(
        "absolute top-full right-0 mt-2 py-1 bg-forest-800 rounded-xl shadow-lg border border-forest-700",
        "min-w-[100px] z-50",
        "transition-all duration-200",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      )}>
        {i18n.locales.map((locale) => (
          locale !== currentLocale && (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm",
                "hover:bg-forest-700 transition-colors",
                "text-cream-200 hover:text-white"
              )}
            >
              {getLanguageName(locale)}
            </button>
          )
        ))}
      </div>
    </div>
  )
}
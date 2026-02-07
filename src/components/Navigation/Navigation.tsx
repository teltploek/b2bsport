'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  dictionary: {
    nav: {
      home: string
      about: string
      whatWeDo?: string
      sports: string
      contact: string
      demo: string
      clubSystem: string
      forBrands?: string
      forClubs?: string
    }
  }
  locale: string
}

export default function Navigation({ dictionary, locale }: NavigationProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home || 'Forside', id: 'home' },
    { href: `/${locale}/what-we-do`, label: dictionary.nav.whatWeDo || 'Hvad vi gør', id: 'whatWeDo' },
    { href: `/${locale}/for-brands`, label: dictionary.nav.forBrands || 'For brands', id: 'forBrands' },
    { href: `/${locale}/for-clubs`, label: dictionary.nav.forClubs || 'For klubber', id: 'forClubs' },
    { href: `/${locale}/contact`, label: dictionary.nav.contact || 'Kontakt', id: 'contact' },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-40 bg-forest-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="52" fill="none">
              <path fill="#f5f2eb" d="M18.694 5.138c1.385 0 2.65.293 3.794.878 1.171.56 2.09 1.358 2.755 2.396a6.125 6.125 0 0 1 1.039 3.474c0 3.382-1.531 5.511-4.593 6.39v.16c3.488.798 5.231 3.087 5.231 6.868 0 1.437-.359 2.715-1.078 3.833-.692 1.092-1.65 1.944-2.875 2.556-1.224.612-2.569.918-4.033.918H.405V5.138h18.29ZM9.23 15.84h6.07c.586 0 1.065-.2 1.438-.6.399-.425.599-.944.599-1.556v-.4c0-.586-.2-1.078-.6-1.477-.399-.426-.878-.64-1.437-.64H9.23v4.673Zm0 10.382h6.709c.586 0 1.065-.2 1.438-.599.399-.426.599-.945.599-1.557v-.4c0-.612-.2-1.117-.6-1.517-.372-.426-.851-.639-1.437-.639H9.23v4.712ZM42.254 0c2.516 0 4.69.404 6.522 1.211 1.864.777 3.292 1.895 4.286 3.355 1.026 1.46 1.538 3.152 1.538 5.078 0 1.801-.45 3.432-1.351 4.891a15.455 15.455 0 0 1-3.401 3.867c-1.367 1.118-3.246 2.485-5.637 4.1a67.682 67.682 0 0 0-3.261 2.236h14.023v7.873H28.418v-2.236c0-1.646.372-3.106 1.118-4.379.776-1.304 1.894-2.609 3.354-3.913 1.49-1.305 3.634-3.075 6.429-5.311 2.236-1.77 3.804-3.122 4.706-4.053.9-.932 1.35-1.848 1.35-2.75 0-.962-.341-1.77-1.024-2.422-.653-.652-1.647-.978-2.982-.978-1.398 0-2.5.404-3.308 1.211-.807.808-1.211 1.864-1.211 3.168v.932h-8.293a8.745 8.745 0 0 1-.046-1.025c0-3.354 1.164-5.994 3.494-7.92C34.365.978 37.782 0 42.254 0ZM75.657 5.138c1.384 0 2.649.293 3.793.878 1.172.56 2.09 1.358 2.756 2.396a6.125 6.125 0 0 1 1.038 3.474c0 3.382-1.53 5.511-4.592 6.39v.16c3.487.798 5.23 3.087 5.23 6.868 0 1.437-.358 2.715-1.077 3.833-.692 1.092-1.65 1.944-2.875 2.556-1.225.612-2.57.918-4.033.918h-18.53V5.138h18.29ZM66.193 15.84h6.07c.585 0 1.065-.2 1.437-.6.4-.425.6-.944.6-1.556v-.4c0-.586-.2-1.078-.6-1.477-.399-.426-.878-.64-1.437-.64h-6.07v4.673Zm0 10.382h6.709c.585 0 1.065-.2 1.437-.599.4-.426.599-.945.599-1.557v-.4c0-.612-.2-1.117-.599-1.517-.372-.426-.852-.639-1.437-.639h-6.71v4.712ZM8.173 35.07c2.05 0 3.735.42 5.055 1.258 1.32.823 1.996 2.05 2.027 3.68v.28h-4.822v-.093c0-.466-.171-.854-.513-1.164-.341-.311-.862-.466-1.56-.466-.684 0-1.212.1-1.584.303-.358.201-.536.45-.536.745 0 .42.248.73.745.932.497.202 1.297.411 2.4.628 1.289.264 2.345.544 3.168.84.838.279 1.568.745 2.19 1.397.62.652.939 1.537.954 2.655 0 1.895-.644 3.3-1.933 4.217-1.274.916-2.982 1.374-5.125 1.374-2.5 0-4.449-.42-5.847-1.258C1.41 49.559.72 48.076.72 45.949h4.869c0 .807.21 1.35.629 1.63.419.265 1.071.396 1.956.396.652 0 1.188-.07 1.608-.21.434-.14.652-.426.652-.861 0-.388-.24-.676-.722-.862-.466-.202-1.235-.412-2.306-.63-1.305-.279-2.384-.566-3.238-.861a5.56 5.56 0 0 1-2.236-1.514c-.637-.699-.956-1.646-.956-2.842 0-1.755.676-3.044 2.027-3.867 1.367-.838 3.09-1.257 5.171-1.257ZM25.846 35.35c.993 0 1.878.233 2.655.699a4.724 4.724 0 0 1 1.817 1.887c.435.792.652 1.685.652 2.678v.303c0 .994-.217 1.895-.652 2.703a4.885 4.885 0 0 1-1.817 1.91c-.777.45-1.662.675-2.655.675h-3.844v5.171h-5.148V35.35h8.992Zm-3.844 7.105h2.12c.543 0 .947-.14 1.211-.42.28-.28.42-.66.42-1.14v-.187c0-.497-.14-.878-.42-1.142-.264-.28-.668-.419-1.211-.419h-2.12v3.308ZM40.234 35.07c2.764 0 4.9.707 6.406 2.12 1.506 1.413 2.259 3.471 2.259 6.173s-.753 4.76-2.26 6.173c-1.506 1.413-3.64 2.12-6.405 2.12-2.764 0-4.9-.699-6.406-2.097-1.49-1.413-2.236-3.478-2.236-6.196 0-2.718.745-4.775 2.236-6.173 1.506-1.413 3.642-2.12 6.406-2.12Zm0 3.844c-1.103 0-1.941.334-2.516 1.002-.575.667-.862 1.568-.862 2.702v1.49c0 1.134.288 2.035.862 2.703.575.667 1.413 1.001 2.516 1.001 1.102 0 1.94-.334 2.516-1.001.59-.668.885-1.569.885-2.703v-1.49c0-1.134-.295-2.035-.885-2.702-.575-.668-1.413-1.002-2.516-1.002ZM65.484 40.265a4.68 4.68 0 0 1-.792 2.655c-.528.793-1.296 1.375-2.306 1.747l3.564 6.71h-5.776l-2.843-5.848h-1.91v5.847h-5.148V35.35h9.807c1.15 0 2.128.225 2.935.676.823.434 1.437 1.032 1.84 1.793.42.746.63 1.56.63 2.446Zm-5.24.21c0-.42-.14-.769-.42-1.049-.28-.279-.621-.419-1.025-.419h-3.378v2.959H58.8c.404 0 .745-.14 1.025-.42.28-.295.42-.652.42-1.071ZM76.965 39.45v11.926h-5.148V39.45h-5.265v-4.1h15.654v4.1h-5.241Z"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <ul className="flex gap-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "text-cream-200 hover:text-white hover:bg-forest-800",
                      isActive(item.href) && "bg-forest-800 text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-4">
              <LanguageSwitcher currentLocale={locale} />
              <Button asChild variant="cta" size="default" className="rounded-full">
                <Link href={`/${locale}/contact`}>
                  {dictionary.nav.demo || 'Book demo'}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto p-2 rounded-full hover:bg-forest-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-cream-100" />
            ) : (
              <Menu className="h-6 w-6 text-cream-100" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-forest-900 border-t border-forest-800 shadow-lg",
          "transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}>
          <ul className="py-4 px-5 sm:px-6 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-full transition-colors",
                    "text-cream-200 font-medium hover:bg-forest-800 hover:text-white",
                    isActive(item.href) && "bg-forest-800 text-white"
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild variant="cta" size="lg" className="w-full rounded-full">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dictionary.nav.demo || 'Book demo'}
                </Link>
              </Button>
            </li>
          </ul>
          <div className="px-5 sm:px-6 pb-4 border-t border-forest-800 pt-4">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </nav>
  )
}
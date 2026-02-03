'use client'

import { useState } from 'react'
import Link from 'next/link'
import { sportsCategories, Sport } from '@/data/sports-data'
import { Locale } from '@/i18n/config'
import * as TablerIcons from '@tabler/icons-react'

interface SportsGridProps {
  dictionary: {
    sports: {
      tag: string
      title: string
      subtitle: string
      description: string
      viewAll: string
      exploreSport: string
    }
  }
  locale: Locale
}

export default function SportsGrid({ dictionary, locale }: SportsGridProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const sportsPerPage = 6
  const totalPages = Math.ceil(sportsCategories.length / sportsPerPage)

  // Get visible sports for current page
  const visibleSports = sportsCategories.slice(
    currentPage * sportsPerPage,
    (currentPage + 1) * sportsPerPage
  )

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="sports" className="bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="lg:max-w-2xl">
            {/* Pill Tag */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-forest-900/10 text-forest-900 mb-6">
              {dictionary.sports.tag}
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-[1.15] tracking-tight mb-4">
              {dictionary.sports.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-forest-700 leading-relaxed">
              {dictionary.sports.subtitle}
            </p>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full border-2 border-forest-200 flex items-center justify-center text-forest-700 transition-all duration-200 hover:border-forest-900 hover:bg-forest-900 hover:text-white"
              aria-label="Previous sports"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center text-white transition-all duration-200 hover:bg-forest-800 hover:shadow-lg"
              aria-label="Next sports"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleSports.map((sport, index) => (
            <SportCard
              key={sport.id}
              sport={sport}
              locale={locale}
              exploreText={dictionary.sports.exploreSport}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Navigation + Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx === currentPage
                    ? 'w-8 bg-coral-600'
                    : 'bg-forest-200 hover:bg-forest-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full border-2 border-forest-200 flex items-center justify-center text-forest-700 transition-all duration-200 hover:border-forest-900 hover:bg-forest-900 hover:text-white"
              aria-label="Previous sports"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center text-white transition-all duration-200 hover:bg-forest-800"
              aria-label="Next sports"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* View All Link */}
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center text-forest-900 font-semibold transition-all duration-200 hover:text-coral-600 group"
          >
            {dictionary.sports.viewAll}
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Description Text */}
        <div className="mt-12 pt-10 border-t border-forest-100">
          <p className="text-center text-forest-600 max-w-3xl mx-auto">
            {dictionary.sports.description}
          </p>
        </div>
      </div>
    </section>
  )
}

interface SportCardProps {
  sport: Sport
  locale: Locale
  exploreText: string
  index: number
}

function SportCard({ sport, locale, exploreText, index }: SportCardProps) {
  const IconComponent = TablerIcons[sport.icon as keyof typeof TablerIcons] as React.ComponentType<{
    size?: number
    stroke?: number
    className?: string
  }>

  // Alternate card backgrounds for visual variety
  const isAlt = index % 3 === 1

  return (
    <div className="group relative">
      <div
        className={`relative rounded-2xl p-6 h-full min-h-[200px] flex flex-col transition-all duration-300 cursor-pointer overflow-hidden ${
          isAlt
            ? 'bg-forest-900 text-cream-100'
            : 'bg-cream-100 border border-forest-100 text-forest-900'
        } hover:shadow-xl hover:-translate-y-1`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id={`dots-${sport.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#dots-${sport.id})`} />
          </svg>
        </div>

        {/* Category Tag */}
        <span
          className={`relative z-10 inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold mb-auto ${
            isAlt ? 'bg-cream-100 text-forest-900' : 'bg-forest-900/10 text-forest-900'
          }`}
        >
          {sport.name[locale]}
        </span>

        {/* Content */}
        <div className="relative z-10 mt-6">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
              isAlt
                ? 'bg-coral-600 text-white'
                : 'bg-forest-900 text-cream-100 group-hover:bg-coral-600'
            }`}
          >
            {IconComponent && <IconComponent size={28} stroke={1.5} />}
          </div>

          {/* Title */}
          <h3
            className={`font-display text-xl font-bold leading-tight mb-3 ${
              isAlt ? 'text-cream-100' : 'text-forest-900'
            }`}
          >
            {sport.name[locale]}
          </h3>

          {/* Explore Link */}
          <div className="flex items-center">
            <span
              className={`text-sm font-medium transition-all duration-200 ${
                isAlt
                  ? 'text-cream-200 group-hover:text-white'
                  : 'text-forest-600 group-hover:text-coral-600'
              }`}
            >
              {exploreText}
            </span>
            <svg
              className={`ml-2 w-4 h-4 transition-all duration-200 group-hover:translate-x-1 ${
                isAlt ? 'text-cream-200' : 'text-forest-600 group-hover:text-coral-600'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Decorative Corner */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full opacity-10 ${
            isAlt ? 'bg-cream-100' : 'bg-forest-900'
          }`}
        />
      </div>
    </div>
  )
}

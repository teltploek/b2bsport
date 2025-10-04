import { brandsData } from '@/data/brands-data'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface BrandsGridProps {
  dictionary: {
    brands: {
      title: string
      subtitle: string
    }
  }
}

export default function BrandsGrid({ dictionary }: BrandsGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-4 tracking-tight">
            {dictionary.brands.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {dictionary.brands.subtitle}
          </p>
        </div>
<div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brandsData.map((brand) => (
              <div 
                key={brand.id} 
                className={cn(
                  "bg-white rounded-lg p-8 flex items-center justify-center h-32",
                  "transition-all duration-300 hover:shadow-lg",
                  "group cursor-pointer border border-gray-100"
                )}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={80}
                  className="max-w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ maxHeight: '60px', width: 'auto' }}
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
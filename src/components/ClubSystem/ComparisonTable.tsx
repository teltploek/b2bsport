import { Card } from '@/components/ui/card'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComparisonTableProps {
  dictionary: any
  locale: string
}

export default function ComparisonTable({ dictionary, locale }: ComparisonTableProps) {
  const comparison = dictionary.clubSystemPage.comparison

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-4 tracking-tight">
            {comparison.title}
          </h2>
          <p className="text-xl text-semantic-text-secondary max-w-3xl mx-auto">
            {comparison.subtitle}
          </p>
        </div>
<div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 font-semibold text-semantic-text-primary"></th>
                <th className="p-4 bg-red-50 text-red-900 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <X className="h-5 w-5" />
                    {comparison.traditional}
                  </div>
                </th>
                <th className="p-4 bg-green-50 text-green-900 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5" />
                    {comparison.ourSystem}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(comparison.rows).map(([key, row]: [string, any]) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-semantic-text-primary">
                    {row.label}
                  </td>
                  <td className="p-4 text-center text-semantic-text-secondary bg-red-50/30">
                    {row.traditional}
                  </td>
                  <td className="p-4 text-center text-semantic-text-primary bg-green-50/30 font-medium">
                    {row.modern}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
<div className="lg:hidden space-y-6">
          {Object.entries(comparison.rows).map(([key, row]: [string, any]) => (
            <Card key={key} className="overflow-hidden">
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold text-semantic-text-primary">
                  {row.label}
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="p-4 bg-red-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-900">
                      {comparison.traditional}
                    </span>
                  </div>
                  <p className="text-semantic-text-secondary">
                    {row.traditional}
                  </p>
                </div>
                <div className="p-4 bg-green-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">
                      {comparison.ourSystem}
                    </span>
                  </div>
                  <p className="text-semantic-text-primary font-medium">
                    {row.modern}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
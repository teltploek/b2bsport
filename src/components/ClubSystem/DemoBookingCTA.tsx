'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface DemoBookingCTAProps {
  dictionary: any
  locale: string
}

export default function DemoBookingCTA({ dictionary, locale }: DemoBookingCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: '',
    phone: '',
    message: ''
  })

  const demoBooking = dictionary.clubSystemPage.demoBooking

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Demo booking submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-semantic-background-alt">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-semantic-text-primary mb-6 tracking-tight">
              {demoBooking.title}
            </h2>
            <p className="text-xl text-semantic-text-secondary mb-8">
              {demoBooking.subtitle}
            </p>
<div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-semantic-text-primary">30 minutters personlig gennemgang</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-semantic-text-primary">Se jeres priser i systemet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-semantic-text-primary">Få svar på alle spørgsmål</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-semantic-text-primary">Ingen forpligtelser</span>
              </div>
            </div>
          </div>
<Card>
            <CardHeader>
              <CardTitle>Book en demo</CardTitle>
              <CardDescription>Udfyld formularen, så kontakter vi dig inden for 24 timer</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{demoBooking.form.name}</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
<div className="space-y-2">
                  <Label htmlFor="email">{demoBooking.form.email}</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
<div className="space-y-2">
                  <Label htmlFor="club">{demoBooking.form.club}</Label>
                  <Input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleChange}
                    required
                  />
                </div>
<div className="space-y-2">
                  <Label htmlFor="phone">{demoBooking.form.phone}</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
<div className="space-y-2">
                  <Label htmlFor="message">{demoBooking.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="min-h-[100px]"
                  />
                </div>
<Button type="submit" variant="cta" size="lg" className="w-full">
                  {demoBooking.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
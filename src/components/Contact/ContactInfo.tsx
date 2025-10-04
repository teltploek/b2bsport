'use client';

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Building } from 'lucide-react';


const Map = dynamic(() => import('@/components/Map/SimpleMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-48 bg-semantic-background-secondary animate-pulse" />
  )
});

interface ContactInfoProps {
  dict: any;
}

export default function ContactInfo({ dict }: ContactInfoProps) {
  
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-display">{dict.contactInfo?.title || 'Kontakt os'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex gap-4">
            <Phone className="h-5 w-5 text-semantic-brand-default mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold font-display text-semantic-text-primary mb-1">
                {dict.contactInfo?.phone || 'Telefon'}
              </h3>
              <a 
                href="tel:+4569153545" 
                className="text-semantic-brand-default hover:text-semantic-brand-hover transition-colors text-lg font-medium"
              >
                {dict.contactCTA?.phone || '+45 69 15 35 45'}
              </a>
            </div>
          </div>
<div className="flex gap-4">
            <Mail className="h-5 w-5 text-semantic-brand-default mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold font-display text-semantic-text-primary mb-1">
                {dict.contactInfo?.email || 'Email'}
              </h3>
              <a 
                href="mailto:info@b2bsport.dk" 
                className="text-semantic-brand-default hover:text-semantic-brand-hover transition-colors text-lg font-medium"
              >
                {dict.contactCTA?.email || 'info@b2bsport.dk'}
              </a>
            </div>
          </div>
<div className="flex gap-4">
            <Clock className="h-5 w-5 text-semantic-brand-default mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold font-display text-semantic-text-primary mb-1">
                {dict.contactInfo?.openingHours || 'Åbningstider'}
              </h3>
              <p className="text-semantic-text-secondary">{dict.contactInfo?.weekdays || 'Mandag - Fredag: 10:00 - 18:00'}</p>
              <p className="text-semantic-text-secondary">{dict.contactInfo?.weekend || 'Weekend: Lukket'}</p>
            </div>
          </div>
<div className="flex gap-4">
            <Building className="h-5 w-5 text-semantic-brand-default mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold font-display text-semantic-text-primary mb-1">
                {dict.contactInfo?.company || 'Virksomhed'}
              </h3>
              <p className="text-semantic-text-secondary">{dict.contactInfo?.companyName || 'B2B Sport & Promotion Group ApS'}</p>
              <p className="text-semantic-text-secondary">{dict.contactInfo?.cvr || 'CVR: 40279695'}</p>
            </div>
          </div>
<div className="pt-4 border-t border-semantic-border-subtle">
            <h3 className="font-semibold text-semantic-text-primary mb-3">
              {dict.contactInfo?.followUs || 'Følg os'}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/b2b-sport-danmark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-semantic-text-secondary hover:text-semantic-brand-default transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://facebook.com/b2bsport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-semantic-text-secondary hover:text-semantic-brand-default transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/b2bsport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-semantic-text-secondary hover:text-semantic-brand-default transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
<div className="flex flex-col h-full gap-6">
        <Card className="border-0 shadow-md overflow-hidden flex-1">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-48 md:h-full">
              <Map 
                apiKey={googleMapsApiKey} 
                center={{ lat: 55.683526, lng: 12.464582 }}
                zoom={15}
                title={dict.contactInfo?.offices?.sjaelland?.name || "Sjælland Kontor"}
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-lg font-display font-semibold">{dict.contactInfo?.offices?.sjaelland?.name || 'Sjælland Kontor'}</h3>
                <p className="text-sm text-semantic-text-secondary">{dict.contactInfo?.offices?.sjaelland?.type || 'Hovedkontor'}</p>
              </div>
              <p className="text-semantic-text-primary">{dict.contactInfo?.offices?.sjaelland?.address1 || 'Rødovrevej 151'}</p>
              <p className="text-semantic-text-primary mb-3">{dict.contactInfo?.offices?.sjaelland?.address2 || '2610 Rødovre'}</p>
              <p className="text-sm text-semantic-text-secondary pt-3 border-t border-semantic-border-subtle">
                {dict.contactInfo?.offices?.sjaelland?.serves || 'Betjener: København og omegn'}
              </p>
            </div>
          </div>
        </Card>
<Card className="border-0 shadow-md overflow-hidden flex-1">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-48 md:h-full">
              <Map 
                apiKey={googleMapsApiKey} 
                center={{ lat: 55.353508, lng: 8.774580 }}
                zoom={15}
                title={dict.contactInfo?.offices?.jylland?.name || "Jylland & Fyn Kontor"}
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-lg font-display font-semibold">{dict.contactInfo?.offices?.jylland?.name || 'Jylland & Fyn Kontor'}</h3>
                <p className="text-sm text-semantic-text-secondary">{dict.contactInfo?.offices?.jylland?.type || 'Regional kontor'}</p>
              </div>
              <p className="text-semantic-text-primary">{dict.contactInfo?.offices?.jylland?.address1 || 'Industrivej 41'}</p>
              <p className="text-semantic-text-primary mb-3">{dict.contactInfo?.offices?.jylland?.address2 || '6760 Ribe'}</p>
              <p className="text-sm text-semantic-text-secondary pt-3 border-t border-semantic-border-subtle">
                {dict.contactInfo?.offices?.jylland?.serves || 'Betjener: Jylland og Fyn'}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
'use client';

import dynamic from 'next/dynamic';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Building, ArrowRight } from 'lucide-react';

const Map = dynamic(() => import('@/components/Map/SimpleMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 bg-forest-800/20 animate-pulse rounded-xl" />
  )
});

interface ContactInfoProps {
  dict: any;
}

export default function ContactInfo({ dict }: ContactInfoProps) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* Contact Details Card */}
      <div className="lg:col-span-1">
        <div className="bg-forest-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-xl">
          <h2 className="text-2xl font-display font-bold text-cream-100 mb-8">
            {dict.contactInfo?.title || 'Kontakt os'}
          </h2>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-forest-800/50 rounded-xl transition-colors group-hover:bg-coral-600">
                <Phone className="h-5 w-5 text-coral-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-cream-100 mb-1">
                  {dict.contactInfo?.phone || 'Telefon'}
                </h3>
                <a
                  href="tel:+4569153545"
                  className="text-cream-200 hover:text-coral-400 transition-colors text-lg font-medium"
                >
                  {dict.contactCTA?.phone || '+45 69 15 35 45'}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-forest-800/50 rounded-xl transition-colors group-hover:bg-coral-600">
                <Mail className="h-5 w-5 text-coral-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-cream-100 mb-1">
                  {dict.contactInfo?.email || 'Email'}
                </h3>
                <a
                  href="mailto:info@b2bsport.dk"
                  className="text-cream-200 hover:text-coral-400 transition-colors text-lg font-medium"
                >
                  {dict.contactCTA?.email || 'info@b2bsport.dk'}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-forest-800/50 rounded-xl transition-colors group-hover:bg-coral-600">
                <Clock className="h-5 w-5 text-coral-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-cream-100 mb-1">
                  {dict.contactInfo?.openingHours || 'Åbningstider'}
                </h3>
                <p className="text-cream-200/80">{dict.contactInfo?.weekdays || 'Mandag - Fredag: 10:00 - 18:00'}</p>
                <p className="text-cream-200/80">{dict.contactInfo?.weekend || 'Weekend: Lukket'}</p>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex gap-4 items-start group">
              <div className="p-3 bg-forest-800/50 rounded-xl transition-colors group-hover:bg-coral-600">
                <Building className="h-5 w-5 text-coral-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-cream-100 mb-1">
                  {dict.contactInfo?.company || 'Virksomhed'}
                </h3>
                <p className="text-cream-200/80">{dict.contactInfo?.companyName || 'B2B Sport & Promotion Group ApS'}</p>
                <p className="text-cream-200/80">{dict.contactInfo?.cvr || 'CVR: 40279695'}</p>
              </div>
            </div>
          </div>

          {/* Social Links - touch-friendly 44px min tap targets */}
          <div className="pt-6 mt-6 border-t border-cream-100/10">
            <h3 className="font-semibold text-cream-100 mb-4">
              {dict.contactInfo?.followUs || 'Følg os'}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/b2b-sport-danmark"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-200 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/b2bsport"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-200 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/b2bsport"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-200 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Office Location Cards */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Sjælland Office */}
        <div className="bg-cream-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex-1 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-48 sm:h-56 md:h-auto min-h-[180px]">
              <Map
                apiKey={googleMapsApiKey}
                center={{ lat: 55.683526, lng: 12.464582 }}
                zoom={15}
                title={dict.contactInfo?.offices?.sjaelland?.name || "Sjælland Kontor"}
              />
            </div>
            <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-forest-900/10 rounded-xl">
                  <MapPin className="h-5 w-5 text-coral-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-forest-900">
                    {dict.contactInfo?.offices?.sjaelland?.name || 'Sjælland Kontor'}
                  </h3>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-coral-600 text-white">
                    {dict.contactInfo?.offices?.sjaelland?.type || 'Hovedkontor'}
                  </span>
                </div>
              </div>
              <p className="text-forest-700 text-base sm:text-lg font-medium">{dict.contactInfo?.offices?.sjaelland?.address1 || 'Rødovrevej 151'}</p>
              <p className="text-forest-700 text-base sm:text-lg font-medium mb-4">{dict.contactInfo?.offices?.sjaelland?.address2 || '2610 Rødovre'}</p>
              <p className="text-forest-600 text-sm pt-4 border-t border-forest-200">
                {dict.contactInfo?.offices?.sjaelland?.serves || 'Betjener: København og omegn'}
              </p>
              <a
                href="https://maps.google.com/?q=Rødovrevej+151,+2610+Rødovre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-coral-600 font-semibold mt-4 group min-h-[44px] py-2"
              >
                {dict.contactInfo?.getDirections || 'Få rutevejledning'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Jylland & Fyn Office */}
        <div className="bg-cream-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex-1 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-48 sm:h-56 md:h-auto min-h-[180px]">
              <Map
                apiKey={googleMapsApiKey}
                center={{ lat: 55.353508, lng: 8.774580 }}
                zoom={15}
                title={dict.contactInfo?.offices?.jylland?.name || "Jylland & Fyn Kontor"}
              />
            </div>
            <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-forest-900/10 rounded-xl">
                  <MapPin className="h-5 w-5 text-coral-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-forest-900">
                    {dict.contactInfo?.offices?.jylland?.name || 'Jylland & Fyn Kontor'}
                  </h3>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-forest-900/10 text-forest-800">
                    {dict.contactInfo?.offices?.jylland?.type || 'Regional kontor'}
                  </span>
                </div>
              </div>
              <p className="text-forest-700 text-base sm:text-lg font-medium">{dict.contactInfo?.offices?.jylland?.address1 || 'Industrivej 41'}</p>
              <p className="text-forest-700 text-base sm:text-lg font-medium mb-4">{dict.contactInfo?.offices?.jylland?.address2 || '6760 Ribe'}</p>
              <p className="text-forest-600 text-sm pt-4 border-t border-forest-200">
                {dict.contactInfo?.offices?.jylland?.serves || 'Betjener: Jylland og Fyn'}
              </p>
              <a
                href="https://maps.google.com/?q=Industrivej+41,+6760+Ribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-coral-600 font-semibold mt-4 group min-h-[44px] py-2"
              >
                {dict.contactInfo?.getDirections || 'Få rutevejledning'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link'
import { Linkedin, Facebook, Instagram, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  dictionary: {
    footer: {
      company: {
        title: string
        description: string
      }
      quickLinks: {
        title: string
        home: string
        about: string
        clubSystem: string
        contact: string
      }
      sports: {
        title: string
        football: string
        golf: string
        tennis: string
        basketball: string
      }
      contact: {
        title: string
        phone: string
        email: string
        address: string
        address2?: string
      }
      bottom: {
        copyright: string
        privacy: string
        terms: string
      }
    }
  }
  lang: string
}

export function Footer({ dictionary, lang }: FooterProps) {
  return (
    <footer className="relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/background-03.webm" type="video/webm" />
        <source src="/videos/background-03.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay with forest green tint */}
      <div className="absolute inset-0 bg-forest-900/90" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-dynamic py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-5">
              {/* Logo */}
              <div className="mb-6">
                <svg width="120" height="75" viewBox="0 0 208 129" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cream-100">
                  <path d="M46.1841 12.7461C49.6183 12.7461 52.7553 13.4726 55.5951 14.9255C58.501 16.3124 60.7794 18.2936 62.4305 20.8693C64.1476 23.4449 65.0061 26.3178 65.0061 29.4878C65.0061 37.8751 61.2087 43.1585 53.6138 45.3378V45.7341C62.2654 47.7154 66.5911 53.395 66.5911 62.7729C66.5911 66.3392 65.6995 69.5092 63.9164 72.283C62.1993 74.9907 59.8218 77.1041 56.7839 78.623C53.7459 80.142 50.4108 80.9015 46.7785 80.9015H0.813232V12.7461H46.1841ZM22.7062 39.295H37.7637C39.2167 39.295 40.4054 38.7997 41.33 37.8091C42.3206 36.7524 42.816 35.4646 42.816 33.9456V32.955C42.816 31.502 42.3206 30.2803 41.33 29.2896C40.3394 28.233 39.1506 27.7046 37.7637 27.7046H22.7062V39.295ZM22.7062 65.0514H39.3488C40.8017 65.0514 41.9904 64.5561 42.915 63.5655C43.9057 62.5088 44.401 61.221 44.401 59.702V58.7114C44.401 57.1924 43.9057 55.9376 42.915 54.947C41.9904 53.8903 40.8017 53.362 39.3488 53.362H22.7062V65.0514Z" fill="currentColor"/>
                  <path d="M104.63 0C110.871 0 116.264 1.00164 120.81 3.00491C125.433 4.93114 128.977 7.7049 131.443 11.3262C133.986 14.9475 135.257 19.1467 135.257 23.9237C135.257 28.3926 134.14 32.4376 131.905 36.059C129.671 39.6803 126.859 42.8778 123.468 45.6516C120.078 48.4253 115.417 51.8155 109.484 55.822C106.171 57.9794 103.474 59.8286 101.394 61.3696H136.182V80.9015H70.3047V75.3539C70.3047 71.2703 71.2293 67.6491 73.0784 64.4901C75.0047 61.254 77.7784 58.0179 81.3997 54.7819C85.0981 51.5458 90.4144 47.154 97.3489 41.6065C102.896 37.2147 106.787 33.863 109.022 31.5516C111.256 29.2401 112.373 26.9672 112.373 24.7327C112.373 22.3442 111.526 20.3409 109.831 18.7229C108.213 17.1049 105.747 16.2959 102.434 16.2959C98.9669 16.2959 96.2316 17.2975 94.2284 19.3008C92.2251 21.3041 91.2235 23.9237 91.2235 27.1598V29.4713H70.6514C70.5743 28.8549 70.5358 28.0073 70.5358 26.9286C70.5358 18.6073 73.4252 12.0582 79.2038 7.28114C85.0596 2.42704 93.535 0 104.63 0Z" fill="currentColor"/>
                  <path d="M187.495 12.7461C190.93 12.7461 194.067 13.4726 196.906 14.9255C199.812 16.3124 202.091 18.2936 203.742 20.8693C205.459 23.4449 206.317 26.3178 206.317 29.4878C206.317 37.8751 202.52 43.1585 194.925 45.3378V45.7341C203.577 47.7154 207.902 53.395 207.902 62.7729C207.902 66.3392 207.011 69.5092 205.228 72.283C203.511 74.9907 201.133 77.1041 198.095 78.623C195.057 80.142 191.722 80.9015 188.09 80.9015H142.124V12.7461H187.495ZM164.017 39.295H179.075C180.528 39.295 181.717 38.7997 182.641 37.8091C183.632 36.7524 184.127 35.4646 184.127 33.9456V32.955C184.127 31.502 183.632 30.2803 182.641 29.2896C181.651 28.233 180.462 27.7046 179.075 27.7046H164.017V39.295ZM164.017 65.0514H180.66C182.113 65.0514 183.302 64.5561 184.226 63.5655C185.217 62.5088 185.712 61.221 185.712 59.702V58.7114C185.712 57.1924 185.217 55.9376 184.226 54.947C183.302 53.8903 182.113 53.362 180.66 53.362H164.017V65.0514Z" fill="currentColor"/>
                  <path d="M20.0832 87.0021C25.1684 87.0021 29.3483 88.0423 32.6229 90.1226C35.8975 92.1644 37.5733 95.2078 37.6504 99.2529V99.9464H25.6885V99.7152C25.6885 98.5595 25.2647 97.5964 24.4172 96.8259C23.5697 96.0554 22.2791 95.6701 20.5455 95.6701C18.8504 95.6701 17.5406 95.9205 16.616 96.4214C15.7299 96.9222 15.2869 97.5386 15.2869 98.2705C15.2869 99.3107 15.9033 100.081 17.1361 100.582C18.3689 101.083 20.3529 101.603 23.0881 102.142C26.2856 102.797 28.9053 103.491 30.9471 104.223C33.0274 104.916 34.8381 106.072 36.3791 107.69C37.92 109.308 38.7098 111.504 38.7483 114.277C38.7483 118.977 37.1496 122.464 33.952 124.737C30.793 127.01 26.5553 128.146 21.2389 128.146C15.0365 128.146 10.2017 127.106 6.73445 125.026C3.30577 122.945 1.59143 119.266 1.59143 113.989H13.6689C13.6689 115.992 14.1889 117.34 15.2291 118.034C16.2693 118.689 17.8873 119.016 20.0832 119.016C21.7012 119.016 23.0303 118.843 24.0705 118.496C25.1492 118.149 25.6885 117.436 25.6885 116.358C25.6885 115.395 25.0914 114.682 23.8971 114.22C22.7414 113.719 20.8344 113.199 18.1762 112.659C14.9402 111.966 12.2627 111.253 10.1439 110.521C8.02502 109.751 6.17585 108.499 4.59634 106.765C3.01683 105.032 2.22708 102.682 2.22708 99.7152C2.22708 95.3619 3.9029 92.1644 7.25453 90.1226C10.6447 88.0423 14.9209 87.0021 20.0832 87.0021Z" fill="currentColor"/>
                  <path d="M63.9249 87.6956C66.3904 87.6956 68.5863 88.2734 70.5125 89.4292C72.4388 90.5464 73.9412 92.1066 75.0199 94.1099C76.0986 96.0746 76.6379 98.2898 76.6379 100.755V101.507C76.6379 103.972 76.0986 106.207 75.0199 108.21C73.9412 110.213 72.4388 111.793 70.5125 112.948C68.5863 114.066 66.3904 114.624 63.9249 114.624H54.39V127.453H41.6191V87.6956H63.9249ZM54.39 105.321H59.6486C60.997 105.321 61.9986 104.974 62.6535 104.28C63.347 103.587 63.6937 102.643 63.6937 101.449V100.987C63.6937 99.7537 63.347 98.8099 62.6535 98.155C61.9986 97.4615 60.997 97.1148 59.6486 97.1148H54.39V105.321Z" fill="currentColor"/>
                  <path d="M99.6186 87.0021C106.476 87.0021 111.773 88.755 115.51 92.2607C119.247 95.7665 121.115 100.871 121.115 107.574C121.115 114.277 119.247 119.382 115.51 122.888C111.773 126.393 106.476 128.146 99.6186 128.146C92.7612 128.146 87.4641 126.413 83.7272 122.945C80.0288 119.44 78.1797 114.316 78.1797 107.574C78.1797 100.832 80.0288 95.7279 83.7272 92.2607C87.4641 88.755 92.7612 87.0021 99.6186 87.0021ZM99.6186 96.5369C96.8833 96.5369 94.803 97.3652 93.3776 99.0218C91.9522 100.678 91.2395 102.913 91.2395 105.725V109.423C91.2395 112.236 91.9522 114.47 93.3776 116.127C94.803 117.783 96.8833 118.611 99.6186 118.611C102.354 118.611 104.434 117.783 105.86 116.127C107.323 114.47 108.055 112.236 108.055 109.423V105.725C108.055 102.913 107.323 100.678 105.86 99.0218C104.434 97.3652 102.354 96.5369 99.6186 96.5369Z" fill="currentColor"/>
                  <path d="M162.26 99.8886C162.26 102.316 161.605 104.512 160.295 106.476C158.985 108.441 157.078 109.886 154.574 110.81L163.416 127.453H149.085L142.034 112.948H137.296V127.453H124.525V87.6956H148.853C151.704 87.6956 154.131 88.2542 156.134 89.3714C158.176 90.4501 159.698 91.9333 160.7 93.821C161.74 95.6701 162.26 97.6927 162.26 99.8886ZM149.258 100.409C149.258 99.3685 148.911 98.5017 148.218 97.8082C147.524 97.1148 146.677 96.7681 145.675 96.7681H137.296V104.107H145.675C146.677 104.107 147.524 103.76 148.218 103.067C148.911 102.335 149.258 101.449 149.258 100.409Z" fill="currentColor"/>
                  <path d="M190.74 97.866V127.453H177.969V97.866H164.909V87.6956H203.742V97.866H190.74Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Description */}
              <p className="text-cream-100/80 text-base mb-8 max-w-md leading-relaxed">
                {dictionary.footer.company.description}
              </p>

              {/* Office Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-forest-800/50 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-forest-800/70 hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-coral-600/20 rounded-lg transition-colors duration-200 group-hover:bg-coral-600/30">
                      <MapPin size={18} className="text-coral-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-display text-cream-100 text-sm mb-1">
                        Sjælland
                      </h4>
                      <p className="text-sm text-cream-100/60">
                        Rødovrevej 151<br />
                        2610 Rødovre
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-forest-800/50 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-forest-800/70 hover:-translate-y-0.5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-coral-600/20 rounded-lg transition-colors duration-200 group-hover:bg-coral-600/30">
                      <MapPin size={18} className="text-coral-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-display text-cream-100 text-sm mb-1">
                        Jylland & Fyn
                      </h4>
                      <p className="text-sm text-cream-100/60">
                        Industrivej 41<br />
                        6760 Ribe
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info - touch-friendly min-h-[44px] tap targets */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8">
                <a
                  href="tel:+4569153545"
                  className="flex items-center gap-3 text-cream-100/80 hover:text-coral-500 transition-colors group min-h-[44px] py-2"
                >
                  <Phone size={18} className="text-coral-500 group-hover:scale-110 transition-transform" />
                  <span className="text-base">+45 69 15 35 45</span>
                </a>
                <a
                  href="mailto:info@b2bsport.dk"
                  className="flex items-center gap-3 text-cream-100/80 hover:text-coral-500 transition-colors group min-h-[44px] py-2"
                >
                  <Mail size={18} className="text-coral-500 group-hover:scale-110 transition-transform" />
                  <span className="text-base">info@b2bsport.dk</span>
                </a>
              </div>

              {/* Social Icons - touch-friendly min 44px tap targets */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/b2b-sport-danmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-100/60 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com/b2bsport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-100/60 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/b2bsport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-forest-800/50 rounded-xl text-cream-100/60 hover:bg-coral-600 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Links - Right Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold font-display text-cream-100 text-lg mb-5">
                    {dictionary.footer.quickLinks.title}
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href={`/${lang}`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.quickLinks.home}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/what-we-do`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.quickLinks.about}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/contact`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.quickLinks.contact}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Sports */}
                <div>
                  <h3 className="font-semibold font-display text-cream-100 text-lg mb-5">
                    {dictionary.footer.sports.title}
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href={`/${lang}`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.sports.football}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.sports.golf}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.sports.tennis}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}`}
                        className="text-cream-100/70 hover:text-coral-500 transition-colors text-sm flex items-center gap-1 group min-h-[44px] py-2"
                      >
                        {dictionary.footer.sports.basketball}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Newsletter/CTA Card */}
                <div className="col-span-2 sm:col-span-1">
                  <div className="bg-cream-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="font-semibold font-display text-forest-900 text-lg mb-2">
                      Bliv partner
                    </h3>
                    <p className="text-forest-800/70 text-sm mb-4">
                      Klar til at digitalisere jeres klub?
                    </p>
                    <Link
                      href={`/${lang}/contact`}
                      className="inline-flex items-center justify-center gap-2 bg-coral-600 hover:bg-coral-700 text-white px-5 py-3 min-h-[44px] rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
                    >
                      Kontakt os
                      <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-100/10">
          <div className="container-dynamic py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-cream-100/50">
                © 2025 B2B Sport & Promotion Group ApS. Alle rettigheder forbeholdes.
              </p>

              {/* CO2 Certificate */}
              <a
                href={`https://www.ingenco2.dk/certificate/6994/${lang}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/regular_da.svg"
                  alt="CO2 Neutral Certificate"
                  width={76}
                  height={60}
                />
              </a>

              {/* Legal Links - touch-friendly tap targets */}
              <div className="flex gap-4 sm:gap-6">
                <Link
                  href={`/${lang}`}
                  className="text-sm text-cream-100/50 hover:text-coral-500 transition-colors min-h-[44px] flex items-center py-2"
                >
                  {dictionary.footer.bottom.privacy}
                </Link>
                <Link
                  href={`/${lang}`}
                  className="text-sm text-cream-100/50 hover:text-coral-500 transition-colors min-h-[44px] flex items-center py-2"
                >
                  {dictionary.footer.bottom.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

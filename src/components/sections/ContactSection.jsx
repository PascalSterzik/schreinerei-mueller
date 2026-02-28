import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactSection({
  title = 'Kontakt',
  subtitle = 'Wir freuen uns auf Sie',
  formType = 'contact',
  showForm = true,
}) {
  const b = brand.business

  return (
    <section id="kontakt" className="section-padding bg-brand-light">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-brand bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg mb-1">Adresse</h4>
                <p className="text-brand-muted">{b.address.street}</p>
                <p className="text-brand-muted">{b.address.zip} {b.address.city}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-brand bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg mb-1">Telefon</h4>
                <a href={`tel:${b.phone}`} className="text-brand-primary text-lg font-semibold no-underline hover:text-brand-primary-dark">
                  {b.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-brand bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg mb-1">E-Mail</h4>
                <a href={`mailto:${b.email}`} className="text-brand-primary no-underline hover:text-brand-primary-dark">
                  {b.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-brand p-6 shadow-brand-sm">
              <h4 className="text-lg mb-4">Öffnungszeiten</h4>
              <dl className="space-y-2">
                {b.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <dt className="text-brand-muted">{h.days}</dt>
                    <dd className={`font-medium ${h.hours === 'Geschlossen' ? 'text-red-500' : 'text-brand-dark'}`}>
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right column: Form + Map */}
          <div className="space-y-6">
            {/* Contact Form */}
            {showForm && (
              <ContactForm type={formType} />
            )}

            {/* OpenStreetMap embed (no API key needed) */}
            <div className="rounded-brand overflow-hidden shadow-brand-md h-64">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${brand.business.coordinates.lng - 0.005}%2C${brand.business.coordinates.lat - 0.003}%2C${brand.business.coordinates.lng + 0.005}%2C${brand.business.coordinates.lat + 0.003}&layer=mapnik&marker=${brand.business.coordinates.lat}%2C${brand.business.coordinates.lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title={`${b.name} Standort`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

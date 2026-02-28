import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function Footer() {
  const b = brand.business
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-secondary text-white/80">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            {brand.images.logo ? (
              <div className="inline-block bg-white rounded-md p-1.5 mb-4">
                <img src={brand.images.logo} alt={b.name} className="h-8 w-auto" />
              </div>
            ) : (
              <h3 className="text-white text-xl mb-4">{b.name}</h3>
            )}
            <p className="text-white/60 text-sm leading-relaxed">
              {b.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 font-body">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-white text-sm no-underline transition-colors">Startseite</Link></li>
              {brand.seo.servicePages.map(page => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="text-white/60 hover:text-white text-sm no-underline transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 font-body">Kontakt</h4>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>{b.address.street}</p>
              <p>{b.address.zip} {b.address.city}</p>
              <p className="pt-2">
                <a href={`tel:${b.phone}`} className="text-white/80 hover:text-white no-underline">
                  {b.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${b.email}`} className="text-white/80 hover:text-white no-underline">
                  {b.email}
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 font-body">Öffnungszeiten</h4>
            <dl className="space-y-1 text-sm">
              {b.openingHours.map((h, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <dt className="text-white/60">{h.days}</dt>
                  <dd className="text-white/80 text-right">{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} {b.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white/60 no-underline text-white/40">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/60 no-underline text-white/40">Datenschutz</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

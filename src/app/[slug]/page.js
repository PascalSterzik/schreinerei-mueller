import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/sections/ContactForm'
import ContactSection from '@/components/sections/ContactSection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABanner from '@/components/sections/CTABanner'
import ServiceCards from '@/components/sections/ServiceCards'
import GalleryGrid from '@/components/sections/GalleryGrid'
import { generateBreadcrumbs } from '@/lib/schema'

/**
 * Static generation for all programmatic SEO pages.
 * Pages are defined in brand.config.js > seo.servicePages.
 * Each page gets its own URL, meta tags, breadcrumbs, and content.
 */

export function generateStaticParams() {
  return (brand.seo.servicePages || []).map((page) => ({
    slug: page.slug,
  }))
}

export function generateMetadata({ params }) {
  const page = brand.seo.servicePages?.find((p) => p.slug === params.slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description || `${page.title} bei ${brand.business.name} in ${brand.business.address.city}. ${brand.business.tagline}`,
    openGraph: {
      title: `${page.title} | ${brand.business.name}`,
      description: page.description || `${page.title} bei ${brand.business.name}`,
    },
    alternates: {
      canonical: `/${page.slug}/`,
    },
  }
}

/**
 * Determines which sections to show on each page type.
 * Pages are mapped by slug to appropriate content blocks.
 */
function getPageSections(slug) {
  const sectionMap = {
    // Universal (every niche)
    'ueber-uns': ['heading', 'about-detail', 'gallery', 'cta'],
    'kontakt': ['contact-full'],
    'galerie': ['heading', 'gallery', 'cta'],
    'leistungen': ['heading', 'services', 'cta'],
    'preise': ['heading', 'services', 'faq', 'cta'],
    'termin': ['heading', 'callback-form', 'faq'],
    'anfrage': ['heading', 'contact-form'],
    'faq': ['heading', 'faq', 'cta'],

    // Restaurant / Gastro / Cafe
    'speisekarte': ['heading', 'services', 'gallery', 'cta'],
    'reservierung': ['heading', 'reservation-form', 'faq'],
    'catering': ['heading', 'services-detail', 'cta'],
    'mittagstisch': ['heading', 'services', 'cta'],
    'veranstaltungen': ['heading', 'services-detail', 'gallery', 'cta'],

    // Salon / Beauty / Friseur
    'behandlungen': ['heading', 'services', 'faq', 'cta'],
    'preisliste': ['heading', 'services', 'faq', 'cta'],
    'team': ['heading', 'about-detail', 'gallery', 'cta'],
    'haarschnitt': ['heading', 'services-detail', 'gallery', 'cta'],
    'coloration': ['heading', 'services-detail', 'gallery', 'cta'],
    'kosmetik': ['heading', 'services-detail', 'gallery', 'cta'],
    'nageldesign': ['heading', 'services-detail', 'gallery', 'cta'],
    'barbershop': ['heading', 'services-detail', 'gallery', 'cta'],

    // Ferienwohnung / Gaestehaus / Pension
    'zimmer': ['heading', 'services', 'gallery', 'cta'],
    'ferienwohnung': ['heading', 'services-detail', 'gallery', 'cta'],
    'ferienwohnungen': ['heading', 'services', 'gallery', 'cta'],
    'ausstattung': ['heading', 'services', 'gallery', 'cta'],
    'buchung': ['heading', 'contact-form', 'faq'],
    'anreise': ['heading', 'about-detail', 'contact-full'],
    'umgebung': ['heading', 'services', 'gallery', 'cta'],
    'aktivitaeten': ['heading', 'services', 'gallery', 'cta'],
    'verfuegbarkeit': ['heading', 'contact-form', 'faq'],

    // Weingut / Winery
    'weine': ['heading', 'services', 'gallery', 'cta'],
    'weinprobe': ['heading', 'services-detail', 'reservation-form', 'faq'],
    'weingut': ['heading', 'about-detail', 'gallery', 'cta'],
    'vinothek': ['heading', 'services', 'gallery', 'cta'],
    'weinberge': ['heading', 'about-detail', 'gallery', 'cta'],
    'online-shop': ['heading', 'services', 'cta'],
    'events': ['heading', 'services-detail', 'gallery', 'reservation-form'],

    // Handwerk
    'referenzen': ['heading', 'gallery', 'cta'],
    'projekte': ['heading', 'gallery', 'cta'],
    'reparatur': ['heading', 'services-detail', 'callback-form'],
    'wartung': ['heading', 'services-detail', 'callback-form'],
    'notdienst': ['heading', 'services-detail', 'callback-form'],
    'angebot': ['heading', 'contact-form', 'faq'],
    'materialien': ['heading', 'services', 'cta'],

    // Hotel
    'restaurant': ['heading', 'services', 'gallery', 'reservation-form'],
    'wellness': ['heading', 'services-detail', 'gallery', 'cta'],
    'tagungen': ['heading', 'services-detail', 'contact-form'],
    'arrangements': ['heading', 'services', 'faq', 'cta'],
    'lage': ['heading', 'about-detail', 'contact-full'],
  }
  return sectionMap[slug] || ['heading', 'services', 'cta']
}

export default function ServicePage({ params }) {
  const page = brand.seo.servicePages?.find((p) => p.slug === params.slug)
  if (!page) return null

  const sections = getPageSections(params.slug)
  const breadcrumbs = generateBreadcrumbs(brand, [
    { name: page.title, url: `/${page.slug}/` },
  ])

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-brand-secondary pt-28 pb-12">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-4">
            <a href="/" className="hover:text-white transition-colors">Startseite</a>
            <span className="mx-2">/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            {page.h1}
          </h1>
          {page.description && (
            <p className="text-lg text-white/80 mt-4 max-w-2xl">
              {page.description}
            </p>
          )}
        </Container>
      </div>

      {/* Dynamic Sections */}
      {sections.map((section) => {
        switch (section) {
          case 'heading':
            return null // Already rendered above as page hero

          case 'services':
            return <ServiceCards key={section} />

          case 'services-detail':
            return (
              <section key={section} className="section-padding">
                <Container>
                  <div className="prose prose-lg max-w-none reveal">
                    <p className="text-brand-muted text-lg leading-relaxed">
                      {brand.business.description}
                    </p>
                  </div>
                  <div className="mt-12">
                    <ServiceCards />
                  </div>
                </Container>
              </section>
            )

          case 'about-detail':
            return (
              <section key={section} className="section-padding">
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
                    <div>
                      <p className="text-brand-muted text-lg leading-relaxed mb-6">
                        {brand.content.about.text}
                      </p>
                      <p className="text-brand-muted leading-relaxed">
                        {brand.business.description}
                      </p>
                    </div>
                    {brand.images.about && (
                      <div className="rounded-brand overflow-hidden shadow-brand-lg">
                        <img
                          src={brand.images.about}
                          alt={`${brand.business.name} - ${page.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </Container>
              </section>
            )

          case 'gallery':
            return <GalleryGrid key={section} />

          case 'reservation-form':
            return (
              <section key={section} className="section-padding">
                <Container size="narrow">
                  <ContactForm type="reservation" />
                </Container>
              </section>
            )

          case 'contact-form':
            return (
              <section key={section} className="section-padding">
                <Container size="narrow">
                  <ContactForm type="contact" />
                </Container>
              </section>
            )

          case 'callback-form':
            return (
              <section key={section} className="section-padding">
                <Container size="narrow">
                  <ContactForm type="callback" />
                </Container>
              </section>
            )

          case 'contact-full':
            return <ContactSection key={section} />

          case 'faq':
            return <FAQAccordion key={section} />

          case 'cta':
            return <CTABanner key={section} />

          default:
            return null
        }
      })}
    </>
  )
}

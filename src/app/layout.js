import './globals.css'
import brand from '../../brand.config'
import { generateSchemaMarkup } from '@/lib/schema'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Analytics from '@/components/integrations/Analytics'
import ChatWidget from '@/components/integrations/ChatWidget'

const siteUrl = brand.seo.siteUrl || ''

export const metadata = {
  title: {
    default: brand.seo.title,
    template: `%s | ${brand.business.name}`,
  },
  description: brand.seo.description,
  openGraph: {
    title: brand.seo.title,
    description: brand.seo.description,
    locale: brand.seo.locale,
    type: 'website',
    siteName: brand.business.name,
    url: siteUrl,
    ...(brand.images.ogImage && { images: [{ url: brand.images.ogImage }] }),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  other: {
    'geo.region': 'DE-RP',
    'geo.placename': brand.business.address.city,
    'geo.position': `${brand.business.coordinates.lat};${brand.business.coordinates.lng}`,
    'ICBM': `${brand.business.coordinates.lat}, ${brand.business.coordinates.lng}`,
  },
}

export default function RootLayout({ children }) {
  const schemaData = generateSchemaMarkup(brand)

  return (
    <html lang={brand.seo.language} className="grain">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={brand.fonts.googleFontsUrl} rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  )
}

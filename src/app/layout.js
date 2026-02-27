import './globals.css'
import brand from '../../brand.config'
import { generateSchemaMarkup } from '@/lib/schema'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Analytics from '@/components/integrations/Analytics'
import ChatWidget from '@/components/integrations/ChatWidget'

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
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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

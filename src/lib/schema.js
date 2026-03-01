/**
 * JSON-LD Schema Markup Generator
 * Generates @graph-based structured data from brand.config
 * Includes: WebSite, LocalBusiness (and subtypes), FAQPage, BreadcrumbList
 */

export function generateSchemaMarkup(brand) {
  const b = brand.business
  const s = brand.schema
  const siteUrl = brand.seo.siteUrl || ''

  // Map opening hours to schema format
  const openingHours = (b.openingHours || [])
    .filter(h => h.hours !== 'Geschlossen' && h.hours !== 'Closed')
    .map(h => {
      const dayMap = {
        'Montag': 'Mo', 'Dienstag': 'Tu', 'Mittwoch': 'We',
        'Donnerstag': 'Th', 'Freitag': 'Fr', 'Samstag': 'Sa', 'Sonntag': 'Su',
        'Monday': 'Mo', 'Tuesday': 'Tu', 'Wednesday': 'We',
        'Thursday': 'Th', 'Friday': 'Fr', 'Saturday': 'Sa', 'Sunday': 'Su',
      }

      const dayParts = h.days.split(/\s*[-\u2013]\s*/)
      let dayAbbrevs = []

      if (dayParts.length === 2) {
        const allDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        const allDaysDE = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
        const startIdx = allDaysDE.indexOf(dayParts[0].trim())
        const endIdx = allDaysDE.indexOf(dayParts[1].trim())
        if (startIdx >= 0 && endIdx >= 0) {
          for (let i = startIdx; i <= endIdx; i++) {
            dayAbbrevs.push(allDays[i])
          }
        }
      } else {
        const mapped = dayMap[h.days.trim()]
        if (mapped) dayAbbrevs.push(mapped)
      }

      const timeRanges = h.hours.split(',').map(t => t.trim())

      return dayAbbrevs.flatMap(day =>
        timeRanges.map(range => {
          const parts = range.split(/\s*[-\u2013&]\s*/)
          if (parts.length < 2) return null
          return {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `https://schema.org/${getDayName(day)}`,
            opens: parts[0]?.trim(),
            closes: parts[1]?.trim(),
          }
        }).filter(Boolean)
      )
    })
    .flat()

  // Build LocalBusiness schema
  const localBusiness = {
    '@type': s.type || 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: b.name,
    description: b.description || brand.seo.description,
    url: siteUrl,
    telephone: b.phone,
    email: b.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      postalCode: b.address.zip,
      addressCountry: b.address.country,
    },
    openingHoursSpecification: openingHours,
    image: brand.images.hero,
  }

  if (b.coordinates?.lat && b.coordinates?.lng) {
    localBusiness.geo = {
      '@type': 'GeoCoordinates',
      latitude: b.coordinates.lat,
      longitude: b.coordinates.lng,
    }
    localBusiness.hasMap = `https://www.google.com/maps?q=${b.coordinates.lat},${b.coordinates.lng}`
  }

  if (s.priceRange) {
    localBusiness.priceRange = s.priceRange
  }

  if (brand.images.logo) {
    localBusiness.logo = brand.images.logo.startsWith('http')
      ? brand.images.logo
      : `${siteUrl}${brand.images.logo}`
  }

  if (s.type === 'Restaurant') {
    localBusiness.servesCuisine = s.servesCuisine
    localBusiness.acceptsReservations = s.acceptsReservations
  }

  if (brand.content.credibility?.rating) {
    localBusiness.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: brand.content.credibility.rating,
      reviewCount: brand.content.credibility.reviewCount,
      bestRating: 5,
    }
  }

  const sameAs = Object.values(b.socials || {}).filter(Boolean)
  if (sameAs.length > 0) {
    localBusiness.sameAs = sameAs
  }

  if (s.areaServed && s.areaServed.length > 0) {
    localBusiness.areaServed = s.areaServed.map(area => ({
      '@type': 'City',
      name: area,
    }))
  }

  if (s.knowsAbout && s.knowsAbout.length > 0) {
    localBusiness.knowsAbout = s.knowsAbout
  }

  // Build WebSite schema
  const webSite = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: b.name,
    description: brand.seo.description,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: brand.seo.language || 'de',
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      webSite,
      localBusiness,
    ],
  }
}

function getDayName(abbrev) {
  const map = {
    Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday',
    Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday',
  }
  return map[abbrev] || abbrev
}

/**
 * Generate BreadcrumbList schema for a page.
 * Uses absolute URLs for proper schema validation.
 */
export function generateBreadcrumbs(brand, items = []) {
  const siteUrl = brand.seo.siteUrl || ''
  const allItems = [
    { name: brand.business.name, url: `${siteUrl}/` },
    ...items.map(item => ({
      ...item,
      url: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate FAQPage schema from FAQ content
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

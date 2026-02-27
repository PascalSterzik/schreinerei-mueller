/**
 * JSON-LD Schema Markup Generator
 * Generates LocalBusiness (and subtypes) structured data from brand.config
 */

export function generateSchemaMarkup(brand) {
  const b = brand.business
  const s = brand.schema

  // Map opening hours to schema format
  const openingHours = b.openingHours
    .filter(h => h.hours !== 'Geschlossen' && h.hours !== 'Closed')
    .map(h => {
      const dayMap = {
        'Montag': 'Mo', 'Dienstag': 'Tu', 'Mittwoch': 'We',
        'Donnerstag': 'Th', 'Freitag': 'Fr', 'Samstag': 'Sa', 'Sonntag': 'Su',
        'Monday': 'Mo', 'Tuesday': 'Tu', 'Wednesday': 'We',
        'Thursday': 'Th', 'Friday': 'Fr', 'Saturday': 'Sa', 'Sunday': 'Su',
      }

      // Parse day ranges like "Dienstag - Freitag"
      const dayParts = h.days.split(/\s*[-–]\s*/)
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

      // Parse time ranges like "11:30 - 14:30, 17:30 - 22:00"
      const timeRanges = h.hours.split(',').map(t => t.trim())

      return dayAbbrevs.flatMap(day =>
        timeRanges.map(range => {
          const [open, close] = range.split(/\s*[-–]\s*/)
          return {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `https://schema.org/${getDayName(day)}`,
            opens: open?.trim(),
            closes: close?.trim(),
          }
        })
      )
    })
    .flat()

  const schema = {
    '@context': 'https://schema.org',
    '@type': s.type || 'LocalBusiness',
    name: b.name,
    description: b.description,
    telephone: b.phone,
    email: b.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      postalCode: b.address.zip,
      addressCountry: b.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: b.coordinates.lat,
      longitude: b.coordinates.lng,
    },
    openingHoursSpecification: openingHours,
    image: brand.images.hero,
    priceRange: s.priceRange,
  }

  // Add type-specific properties
  if (s.type === 'Restaurant') {
    schema.servesCuisine = s.servesCuisine
    schema.acceptsReservations = s.acceptsReservations
  }

  // Add aggregate rating if available
  if (brand.content.credibility?.rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: brand.content.credibility.rating,
      reviewCount: brand.content.credibility.reviewCount,
      bestRating: 5,
    }
  }

  // Add social profiles
  const sameAs = Object.values(b.socials).filter(Boolean)
  if (sameAs.length > 0) {
    schema.sameAs = sameAs
  }

  return schema
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
 * Always includes homepage as the first item.
 * @param {object} brand - The brand config
 * @param {Array} items - Additional breadcrumb items [{name, url}]
 */
export function generateBreadcrumbs(brand, items = []) {
  const allItems = [
    { name: brand.business.name, url: '/' },
    ...items,
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

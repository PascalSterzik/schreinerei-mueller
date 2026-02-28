/**
 * NICHE STARTER: Hotel / Landhotel / Hotel-Restaurant
 * =====================================================
 * Copy this to brand.config.js and fill in the lead/client data.
 * Covers: Hotels, Landhotels, Hotel-Restaurants, Gasthof mit Zimmern.
 */

module.exports = {
  business: {
    name: 'Hotel Name',
    tagline: 'Gastfreundschaft an der Mosel',
    description: 'Herzlich willkommen im Hotel [Name] in [Stadt]. Komfortable Zimmer, regionale Kueche und die Mosel direkt vor der Tuer.',
    phone: '+49 XXXX XXXXXX',
    email: 'info@hotel-name.de',
    address: {
      street: 'Musterstrasse 1',
      city: 'Bernkastel-Kues',
      zip: '54470',
      country: 'Germany',
    },
    coordinates: {
      lat: 49.9153,
      lng: 7.0756,
    },
    openingHours: [
      { days: 'Rezeption', hours: 'Mo-So 7:00 - 22:00' },
      { days: 'Restaurant', hours: 'Di-Sa 18:00 - 21:30' },
      { days: 'Fruehstueck', hours: 'Mo-So 7:30 - 10:00' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#1565C0',       // Rich blue (trust, hospitality)
    primaryDark: '#0D47A1',
    primaryLight: '#1E88E5',
    secondary: '#2C1810',     // Warm dark (wood, warmth)
    accent: '#FFD54F',        // Gold accent (premium, warmth)
    dark: '#1a1a1a',
    light: '#F8FAFE',         // Off-white with blue tint
    muted: '#6B7280',
  },

  fonts: {
    heading: 'DM Serif Display',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '400',
    headingTracking: '-0.01em',
    body: 'Inter',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600;700&display=swap',
  },

  style: {
    borderRadius: '0.5rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'warm',
    animations: 'subtle',
  },

  images: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Hotel Name | Ihr Hotel in [Stadt] an der Mosel',
    description: 'Hotel in [Stadt] an der Mosel. Komfortable Zimmer, regionale Kueche, zentrale Lage. Ideal fuer Urlaub, Weinreise oder Geschaeftsreise.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'zimmer', title: 'Zimmer', h1: 'Unsere Zimmer', description: 'Komfortable Einzel- und Doppelzimmer mit modernem Komfort und persoenlicher Note.' },
      { slug: 'restaurant', title: 'Restaurant', h1: 'Unser Restaurant', description: 'Regionale Kueche mit frischen Zutaten. Halbpension auf Wunsch verfuegbar.' },
      { slug: 'arrangements', title: 'Arrangements', h1: 'Unsere Arrangements', description: 'Pauschalen fuer Wanderer, Weinliebhaber und besondere Anlaesse.' },
      { slug: 'umgebung', title: 'Umgebung', h1: 'Ausflugsziele', description: 'Die Moselregion bietet Wanderwege, Weingueter, Burgen und historische Staedte.' },
      { slug: 'galerie', title: 'Galerie', h1: 'Impressionen', description: 'Bilder unserer Zimmer, des Restaurants und der Umgebung.' },
      { slug: 'kontakt', title: 'Kontakt & Buchung', h1: 'Kontakt & Buchung', description: 'Reservieren Sie Ihr Zimmer oder kontaktieren Sie uns fuer Fragen.' },
    ],
  },

  content: {
    hero: {
      headline: 'Willkommen an der Mosel',
      subheadline: 'Komfortable Zimmer, regionale Kueche und herzliche Gastfreundschaft. Ihr Urlaubszuhause in [Stadt].',
      cta: {
        primary: { text: 'Zimmer anfragen', href: '/kontakt' },
        secondary: { text: 'Zimmer ansehen', href: '/zimmer' },
      },
    },
    about: {
      headline: 'Unser Hotel',
      text: 'Im Herzen der Moselregion heissen wir Sie herzlich willkommen. Unser familiegefuehrtes Hotel verbindet modernen Komfort mit der Gemuetlichkeit eines Moselhauses.',
    },
    services: [
      {
        title: 'Komfortable Zimmer',
        description: 'Modern ausgestattete Zimmer mit Liebe zum Detail. Einige mit Moselblick.',
        icon: 'bed',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Regionale Kueche',
        description: 'Geniessen Sie Moseltypische Gerichte mit frischen, regionalen Zutaten in unserem Restaurant.',
        icon: 'utensils',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Zentrale Lage',
        description: 'Wanderwege, Weingueter und Sehenswuerdigkeiten direkt vor der Tuer.',
        icon: 'map-pin',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Christine L.',
        text: 'Ein wunderbares Hotel mit viel Charme. Das Fruehstueck ist hervorragend!',
        rating: 5,
      },
      {
        name: 'Wolfgang und Renate K.',
        text: 'Wir kommen jedes Jahr wieder. Freundlicher Service, gutes Essen und tolle Lage.',
        rating: 5,
      },
      {
        name: 'Bernd S.',
        text: 'Perfekt fuer einen Kurzurlaub an der Mosel. Saubere Zimmer und nette Gastgeber.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Wie kann ich ein Zimmer buchen?',
        answer: 'Sie koennen telefonisch, per E-Mail oder ueber unser Kontaktformular buchen. Wir bestaetigen umgehend.',
      },
      {
        question: 'Gibt es Parkmoeglickheiten?',
        answer: 'Ja, wir bieten kostenfreie Parkplaetze direkt am Hotel.',
      },
      {
        question: 'Bieten Sie Halbpension an?',
        answer: 'Ja, Halbpension ist gegen Aufpreis buchbar. Unser Restaurant bietet regionale Kueche.',
      },
      {
        question: 'Ist das Hotel barrierefrei?',
        answer: 'Unser Erdgeschoss ist barrierefrei zugaenglich. Bitte kontaktieren Sie uns fuer spezielle Anforderungen.',
      },
    ],
    credibility: {
      rating: 4.7,
      reviewCount: 186,
      reviewSource: 'Google',
      badges: [],
    },
  },

  schema: {
    type: 'Hotel',
    priceRange: '$$',
  },

  integrations: {
    ga4: {
      measurementId: null,
    },
    forms: {
      provider: 'web3forms',
      accessKey: null,
      recipientEmail: null,
    },
    chat: {
      provider: null,
      widgetId: null,
    },
    emailMarketing: {
      provider: null,
      formActionUrl: null,
    },
  },
}

/**
 * NICHE STARTER: Friseur / Salon / Beauty / Kosmetik / Nagelstudio
 * ================================================================
 * Copy this to brand.config.js and fill in the lead/client data.
 * Covers: Friseursalons, Beauty-Studios, Kosmetik, Nageldesign, Barbershops.
 */

module.exports = {
  business: {
    name: 'Salon Name',
    tagline: 'Ihr Friseur in [Stadt] seit [Jahr]',
    description: 'Professionelle Haar- und Beauty-Behandlungen in entspannter Atmosphaere. Beratung, Schnitt, Farbe und Styling von erfahrenen Meistern.',
    phone: '+49 XXXX XXXXXX',
    email: 'info@salon-name.de',
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
      { days: 'Montag', hours: 'Geschlossen' },
      { days: 'Dienstag - Freitag', hours: '9:00 - 18:00' },
      { days: 'Samstag', hours: '9:00 - 13:00' },
      { days: 'Sonntag', hours: 'Geschlossen' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#C2185B',       // Warm rose / magenta
    primaryDark: '#AD1457',
    primaryLight: '#E91E63',
    secondary: '#2C2C2C',     // Near-black for elegance
    accent: '#F8BBD0',        // Soft pink accent
    dark: '#1a1a1a',
    light: '#FFF8FA',         // Warm off-white with pink tint
    muted: '#6B7280',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '600',
    headingTracking: '-0.02em',
    body: 'Nunito Sans',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap',
  },

  style: {
    borderRadius: '0.75rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'elegant',
    animations: 'subtle',
  },

  images: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521590832167-7228fcb1c980?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Salon Name | Friseur & Beauty in [Stadt]',
    description: 'Professionelle Haarschnitte, Colorationen und Beauty-Behandlungen in [Stadt]. Beratung vom Meister, entspannte Atmosphaere, faire Preise.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'behandlungen', title: 'Behandlungen', h1: 'Unsere Behandlungen', description: 'Von Schnitt und Farbe bis Pflege und Styling. Professionelle Behandlungen fuer jeden Haartyp.' },
      { slug: 'preisliste', title: 'Preisliste', h1: 'Unsere Preise', description: 'Transparente Preise fuer alle Leistungen. Beratung inklusive.' },
      { slug: 'galerie', title: 'Galerie', h1: 'Unsere Arbeiten', description: 'Lassen Sie sich von unseren Ergebnissen inspirieren.' },
      { slug: 'termin', title: 'Termin buchen', h1: 'Termin vereinbaren', description: 'Buchen Sie Ihren Wunschtermin telefonisch oder ueber unser Kontaktformular.' },
      { slug: 'ueber-uns', title: 'Ueber uns', h1: 'Unser Team', description: 'Lernen Sie unser erfahrenes Team kennen.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'So finden Sie uns', description: 'Besuchen Sie uns vor Ort oder kontaktieren Sie uns.' },
    ],
  },

  content: {
    hero: {
      headline: 'Ihr Haar verdient das Beste',
      subheadline: 'Professionelle Beratung, meisterhafte Schnitte und Farbtechniken in entspannter Atmosphaere.',
      cta: {
        primary: { text: 'Termin buchen', href: '/termin' },
        secondary: { text: 'Behandlungen ansehen', href: '/behandlungen' },
      },
    },
    about: {
      headline: 'Willkommen bei uns',
      text: 'Mit Leidenschaft und Erfahrung verwandeln wir Ihre Haarwuensche in Realitaet. Unser Team beratet Sie individuell und findet den perfekten Look fuer Sie.',
    },
    services: [
      {
        title: 'Schnitt & Styling',
        description: 'Modische Schnitte fuer Damen und Herren, individuell auf Sie abgestimmt.',
        icon: 'scissors',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Coloration & Straehnen',
        description: 'Von natuerlichen Toenungen bis hin zu kreativen Farbtechniken wie Balayage und Highlights.',
        icon: 'palette',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Pflege & Behandlungen',
        description: 'Intensive Haarpflege, Keratinbehandlungen und individuelle Pflegeprogramme.',
        icon: 'sparkles',
        image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Petra M.',
        text: 'Endlich ein Friseur, der zuhoert! Meine Haare sahen noch nie so gut aus.',
        rating: 5,
      },
      {
        name: 'Julia S.',
        text: 'Tolle Beratung, angenehme Atmosphaere und ein Ergebnis, das mich jeden Tag freut.',
        rating: 5,
      },
      {
        name: 'Sabine K.',
        text: 'Das Team ist super freundlich und professionell. Mein Stammfriseur seit Jahren.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Muss ich einen Termin vereinbaren?',
        answer: 'Wir empfehlen eine Terminvereinbarung, damit wir uns ausreichend Zeit fuer Sie nehmen koennen. Kurzfristige Termine sind oft moeglich.',
      },
      {
        question: 'Welche Produkte verwenden Sie?',
        answer: 'Wir arbeiten mit hochwertigen Markenprodukten und beraten Sie gerne zu den passenden Pflegeprodukten fuer Ihren Haartyp.',
      },
      {
        question: 'Bieten Sie auch Herrenservice an?',
        answer: 'Ja, unser Team bietet professionelle Haarschnitte und Bartpflege fuer Herren.',
      },
      {
        question: 'Wie finde ich den richtigen Schnitt?',
        answer: 'Wir beginnen jeden Termin mit einer persoenlichen Beratung. Gemeinsam finden wir den Stil, der zu Ihnen passt.',
      },
    ],
    credibility: {
      rating: 4.8,
      reviewCount: 89,
      reviewSource: 'Google',
      badges: [],
    },
  },

  schema: {
    type: 'HairSalon',
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

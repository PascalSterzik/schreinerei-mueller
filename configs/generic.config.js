/**
 * NICHE STARTER: Generic / Fallback
 * ====================================
 * Copy this to brand.config.js for any business that doesn't fit
 * the specific niche configs (salon, ferienwohnung, weingut, handwerk, hotel).
 * Works for: Florists, photo studios, retail, wellness, tattoo, driving schools,
 * fitness, pet services, and any other local business.
 */

module.exports = {
  business: {
    name: 'Business Name',
    tagline: 'Kurzer Slogan hier',
    description: 'Beschreibung des Unternehmens. Was macht es besonders? Warum sollten Kunden hierher kommen?',
    phone: '+49 XXXX XXXXXX',
    email: 'info@business-name.de',
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
      { days: 'Montag - Freitag', hours: '9:00 - 18:00' },
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
    primary: '#2563EB',       // Clean blue (trustworthy, universal)
    primaryDark: '#1D4ED8',
    primaryLight: '#3B82F6',
    secondary: '#1E293B',     // Slate dark
    accent: '#F59E0B',        // Amber accent
    dark: '#1a1a1a',
    light: '#F8FAFC',
    muted: '#6B7280',
  },

  fonts: {
    heading: 'Inter',
    headingFallback: ['Arial', 'sans-serif'],
    headingWeight: '700',
    headingTracking: '-0.02em',
    body: 'Inter',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  },

  style: {
    borderRadius: '0.5rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'neutral',
    animations: 'subtle',
  },

  images: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Business Name | [Branche] in [Stadt]',
    description: 'Beschreibung fuer Google. Was bietet das Unternehmen, wo ist es, warum ist es die beste Wahl?',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'leistungen', title: 'Leistungen', h1: 'Unsere Leistungen', description: 'Alle Leistungen im Ueberblick.' },
      { slug: 'ueber-uns', title: 'Ueber uns', h1: 'Ueber uns', description: 'Lernen Sie uns kennen.' },
      { slug: 'galerie', title: 'Galerie', h1: 'Galerie', description: 'Impressionen aus unserem Unternehmen.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'Kontakt', description: 'So erreichen Sie uns.' },
    ],
  },

  content: {
    hero: {
      headline: 'Ueberschrift hier',
      subheadline: 'Kurzer, ueberzeugender Satz der den Hauptnutzen beschreibt.',
      cta: {
        primary: { text: 'Jetzt kontaktieren', href: '/kontakt' },
        secondary: { text: 'Mehr erfahren', href: '/leistungen' },
      },
    },
    about: {
      headline: 'Ueber uns',
      text: 'Erzaehlen Sie Ihre Geschichte. Was macht Sie besonders? Seit wann gibt es das Unternehmen? Was ist Ihre Mission?',
    },
    services: [
      {
        title: 'Leistung 1',
        description: 'Beschreibung der ersten Leistung. Was bekommt der Kunde?',
        icon: 'star',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Leistung 2',
        description: 'Beschreibung der zweiten Leistung. Welches Problem wird geloest?',
        icon: 'check-circle',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Leistung 3',
        description: 'Beschreibung der dritten Leistung. Was ist der Vorteil?',
        icon: 'thumbs-up',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Kundenname A.',
        text: 'Bewertungstext hier einfuegen.',
        rating: 5,
      },
      {
        name: 'Kundenname B.',
        text: 'Bewertungstext hier einfuegen.',
        rating: 5,
      },
      {
        name: 'Kundenname C.',
        text: 'Bewertungstext hier einfuegen.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Haeufige Frage 1?',
        answer: 'Antwort auf die erste Frage.',
      },
      {
        question: 'Haeufige Frage 2?',
        answer: 'Antwort auf die zweite Frage.',
      },
      {
        question: 'Haeufige Frage 3?',
        answer: 'Antwort auf die dritte Frage.',
      },
    ],
    credibility: {
      rating: 4.8,
      reviewCount: 0,
      reviewSource: 'Google',
      badges: [],
    },
  },

  schema: {
    type: 'LocalBusiness',
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

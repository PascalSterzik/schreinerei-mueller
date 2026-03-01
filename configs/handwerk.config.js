/**
 * NICHE STARTER: Handwerk / Trades
 * ==================================
 * Copy this to brand.config.js and fill in the lead/client data.
 * Covers: Maler, Heizung/Sanitaer, Schreiner, Dachdecker, Elektriker, KFZ,
 * Ofenbau, Solar, Reifenservice, Gartenbau, Glaserei, and similar trades.
 */

module.exports = {
  business: {
    name: 'Handwerk Name',
    tagline: 'Ihr Meisterbetrieb in [Stadt]',
    description: 'Zuverlaessiger Handwerksbetrieb in [Stadt] und Umgebung. Qualitaetsarbeit, faire Preise und persoenliche Betreuung.',
    phone: '+49 XXXX XXXXXX',
    email: 'info@handwerk-name.de',
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
      { days: 'Montag - Freitag', hours: '7:30 - 17:00' },
      { days: 'Samstag', hours: 'Nach Vereinbarung' },
      { days: 'Sonntag', hours: 'Geschlossen' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#D84315',       // Strong orange (craftsmanship, energy)
    primaryDark: '#BF360C',
    primaryLight: '#FF5722',
    secondary: '#263238',     // Dark blue-gray (professional, solid)
    accent: '#FFB74D',        // Warm amber accent
    dark: '#1a1a1a',
    light: '#FAFAFA',
    muted: '#6B7280',
  },

  fonts: {
    heading: 'Barlow',
    headingFallback: ['Arial', 'sans-serif'],
    headingWeight: '700',
    headingTracking: '-0.02em',
    body: 'DM Sans',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap',
  },

  style: {
    borderRadius: '0.375rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'bold',
    animations: 'subtle',
  },

  images: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1530124566582-a45a7e69c754?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530124566582-a45a7e69c754?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Handwerk Name | Meisterbetrieb in [Stadt]',
    description: 'Zuverlaessiger Handwerksbetrieb in [Stadt]. Qualitaetsarbeit vom Meister, faire Preise, termingerecht. Jetzt unverbindliches Angebot anfordern.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'leistungen', title: 'Leistungen', h1: 'Unsere Leistungen', description: 'Von der Beratung bis zur Umsetzung. Professionelle Handwerksarbeit aus einer Hand.' },
      { slug: 'referenzen', title: 'Referenzen', h1: 'Unsere Referenzen', description: 'Ueberzeugen Sie sich von unserer Arbeit. Ausgewaehlte Projekte im Ueberblick.' },
      { slug: 'angebot', title: 'Angebot anfordern', h1: 'Kostenloses Angebot', description: 'Beschreiben Sie Ihr Projekt und erhalten Sie ein unverbindliches Angebot.' },
      { slug: 'ueber-uns', title: 'Ueber uns', h1: 'Ueber unseren Betrieb', description: 'Meisterbetrieb mit [X] Jahren Erfahrung. Lernen Sie uns kennen.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'Kontakt & Anfahrt', description: 'Rufen Sie an oder schreiben Sie uns. Wir sind fuer Sie da.' },
    ],
  },

  content: {
    hero: {
      headline: 'Qualitaet, der Sie vertrauen koennen',
      subheadline: 'Meisterbetrieb in [Stadt] und Umgebung. Zuverlaessig, termingerecht und zu fairen Preisen.',
      cta: {
        primary: { text: 'Angebot anfordern', href: '/angebot' },
        secondary: { text: 'Unsere Leistungen', href: '/leistungen' },
      },
    },
    about: {
      headline: 'Ihr Handwerksbetrieb vor Ort',
      text: 'Als Meisterbetrieb in [Stadt] stehen wir fuer zuverlaessige Arbeit und persoenliche Betreuung. Jedes Projekt wird mit Sorgfalt und Sachverstand ausgefuehrt.',
    },
    services: [
      {
        title: 'Beratung & Planung',
        description: 'Wir besprechen Ihr Vorhaben vor Ort und erstellen ein massgeschneidertes Konzept.',
        icon: 'clipboard',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Ausfuehrung',
        description: 'Fachgerechte Umsetzung mit hochwertigen Materialien. Termingerecht und sauber.',
        icon: 'wrench',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Wartung & Service',
        description: 'Auch nach Abschluss der Arbeiten sind wir fuer Sie da. Regelmaessige Wartung auf Wunsch.',
        icon: 'shield-check',
        image: 'https://images.unsplash.com/photo-1530124566582-a45a7e69c754?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Stefan W.',
        text: 'Zuverlaessig, puenktlich und saubere Arbeit. Kann ich nur empfehlen!',
        rating: 5,
      },
      {
        name: 'Helga und Franz M.',
        text: 'Von der Beratung bis zur Abnahme alles top. Preis-Leistung stimmt.',
        rating: 5,
      },
      {
        name: 'Markus T.',
        text: 'Schnelle Reaktion, gute Kommunikation. Wir sind sehr zufrieden mit dem Ergebnis.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Wie schnell koennen Sie anfangen?',
        answer: 'Je nach Auftragslage koennen wir in der Regel innerhalb von 1-2 Wochen starten. Bei dringenden Faellen finden wir eine Loesung.',
      },
      {
        question: 'Erstellen Sie kostenlose Angebote?',
        answer: 'Ja, die Besichtigung vor Ort und das Angebot sind fuer Sie kostenlos und unverbindlich.',
      },
      {
        question: 'In welchem Umkreis sind Sie taetig?',
        answer: 'Wir sind in [Stadt] und im Umkreis von ca. 30 km taetig.',
      },
      {
        question: 'Geben Sie Garantie auf Ihre Arbeit?',
        answer: 'Ja, auf alle unsere Arbeiten erhalten Sie die gesetzliche Gewaehrleistung. Qualitaet ist unser Anspruch.',
      },
    ],
    credibility: {
      rating: 4.8,
      reviewCount: 67,
      reviewSource: 'Google',
      badges: ['Meisterbetrieb'],
    },
  },

  schema: {
    type: 'HomeAndConstructionBusiness',
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

/**
 * NICHE STARTER: Ferienwohnung / Gaestehaus / Pension / Ferienhaus
 * ================================================================
 * Copy this to brand.config.js and fill in the lead/client data.
 * Covers: Ferienwohnungen, Gaestehaeuser, Pensionen, Ferienhaeuser, B&Bs, Apartments.
 */

module.exports = {
  business: {
    name: 'Ferienwohnung Name',
    tagline: 'Ihr Zuhause an der Mosel',
    description: 'Gemuetliche Ferienwohnung mit Moselblick in [Stadt]. Ideal fuer Wanderer, Weinliebhaber und Ruhesuchende.',
    phone: '+49 XXXX XXXXXX',
    email: 'info@fewo-name.de',
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
      { days: 'Check-in', hours: '15:00 - 20:00' },
      { days: 'Check-out', hours: 'bis 10:00' },
      { days: 'Erreichbarkeit', hours: 'Mo-So 8:00 - 20:00' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#2E7D32',       // Forest green (nature, relaxation)
    primaryDark: '#1B5E20',
    primaryLight: '#4CAF50',
    secondary: '#3E2723',     // Warm dark brown (wood, cozy)
    accent: '#A5D6A7',        // Light green accent
    dark: '#1a1a1a',
    light: '#F9FBF7',         // Off-white with green tint
    muted: '#6B7280',
  },

  fonts: {
    heading: 'Lora',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '600',
    headingTracking: '-0.02em',
    body: 'Open Sans',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap',
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
    hero: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Ferienwohnung Name | Urlaub an der Mosel in [Stadt]',
    description: 'Gemuetliche Ferienwohnung in [Stadt] an der Mosel. Ruhige Lage, Moselblick, ideal fuer Wanderer und Weinliebhaber. Jetzt anfragen.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'ferienwohnung', title: 'Die Ferienwohnung', h1: 'Unsere Ferienwohnung', description: 'Gemuetlich eingerichtet mit allem Komfort. Entdecken Sie Ihr Zuhause auf Zeit an der Mosel.' },
      { slug: 'ausstattung', title: 'Ausstattung', h1: 'Ausstattung & Komfort', description: 'WLAN, voll ausgestattete Kueche, Terrasse mit Moselblick und mehr.' },
      { slug: 'umgebung', title: 'Umgebung', h1: 'Ausflugsziele & Umgebung', description: 'Wanderwege, Weingueter, historische Altstadt und mehr direkt vor der Tuer.' },
      { slug: 'galerie', title: 'Galerie', h1: 'Bilder', description: 'Impressionen unserer Ferienwohnung und der Umgebung.' },
      { slug: 'buchung', title: 'Anfrage & Buchung', h1: 'Jetzt anfragen', description: 'Senden Sie uns Ihre Anfrage mit Wunschzeitraum. Wir melden uns umgehend.' },
      { slug: 'anreise', title: 'Anreise', h1: 'So finden Sie uns', description: 'Anfahrtsbeschreibung, Parken und Check-in Informationen.' },
    ],
  },

  content: {
    hero: {
      headline: 'Ankommen und aufatmen',
      subheadline: 'Ihre Auszeit an der Mosel. Gemuetliche Ferienwohnung mit Blick auf Weinberge und Fluss.',
      cta: {
        primary: { text: 'Jetzt anfragen', href: '/buchung' },
        secondary: { text: 'Ferienwohnung entdecken', href: '/ferienwohnung' },
      },
    },
    about: {
      headline: 'Willkommen bei uns',
      text: 'Unsere Ferienwohnung bietet Ihnen den perfekten Rueckzugsort fuer Ihren Moselurlaub. Liebevoll eingerichtet, ruhig gelegen und mit allem ausgestattet, was Sie brauchen.',
    },
    services: [
      {
        title: 'Komfortable Raeume',
        description: 'Helle, modern eingerichtete Raeume mit hochwertiger Ausstattung fuer Ihren Komfort.',
        icon: 'home',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Moselblick',
        description: 'Geniessen Sie den Blick auf die Mosel und die Weinberge von Ihrer Terrasse.',
        icon: 'mountain',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Ideal gelegen',
        description: 'Wanderwege, Weingueter und die Altstadt sind in wenigen Minuten erreichbar.',
        icon: 'map-pin',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Andrea B.',
        text: 'Eine wunderbare Ferienwohnung! Sehr sauber, liebevoll eingerichtet und die Lage ist perfekt.',
        rating: 5,
      },
      {
        name: 'Klaus H.',
        text: 'Wir kommen seit drei Jahren hierher. Es fuehlt sich jedes Mal wie nach Hause kommen an.',
        rating: 5,
      },
      {
        name: 'Monika R.',
        text: 'Der Moselblick von der Terrasse ist unbezahlbar. Sehr nette Gastgeber!',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Wie buche ich die Ferienwohnung?',
        answer: 'Senden Sie uns einfach eine Anfrage mit Ihrem Wunschzeitraum ueber unser Kontaktformular oder rufen Sie uns an.',
      },
      {
        question: 'Wann kann ich an- und abreisen?',
        answer: 'Check-in ist ab 15:00 Uhr, Check-out bis 10:00 Uhr. Andere Zeiten nach Absprache moeglich.',
      },
      {
        question: 'Gibt es Parkmoeglichkeiten?',
        answer: 'Ja, ein kostenloser Parkplatz steht direkt am Haus zur Verfuegung.',
      },
      {
        question: 'Sind Haustiere erlaubt?',
        answer: 'Haustiere sind nach vorheriger Absprache willkommen. Bitte geben Sie dies bei der Buchung an.',
      },
    ],
    credibility: {
      rating: 4.9,
      reviewCount: 52,
      reviewSource: 'Google',
      badges: [],
    },
  },

  schema: {
    type: 'LodgingBusiness',
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

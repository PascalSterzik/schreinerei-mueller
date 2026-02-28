/**
 * NICHE STARTER: Weingut / Winery / Vinothek
 * ============================================
 * Copy this to brand.config.js and fill in the lead/client data.
 * Covers: Weingueter, Vinotheken, Weinproben, Gutsausschank.
 */

module.exports = {
  business: {
    name: 'Weingut Name',
    tagline: 'Weine von der Mosel seit [Jahr]',
    description: 'Familienweingut in [Stadt] an der Mosel. Wir keltern Riesling und andere Moselweine mit Leidenschaft und Tradition.',
    phone: '+49 XXXX XXXXXX',
    email: 'info@weingut-name.de',
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
      { days: 'Montag - Freitag', hours: '10:00 - 18:00' },
      { days: 'Samstag', hours: '10:00 - 16:00' },
      { days: 'Sonntag', hours: 'Nach Vereinbarung' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#6D4C41',       // Warm earthy brown (wine barrel, soil)
    primaryDark: '#4E342E',
    primaryLight: '#8D6E63',
    secondary: '#1B2631',     // Deep navy (elegance, premium)
    accent: '#C5A55A',        // Gold accent (wine labels, premium feel)
    dark: '#1a1a1a',
    light: '#FAF8F5',         // Warm parchment white
    muted: '#6B7280',
  },

  fonts: {
    heading: 'Playfair Display',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '700',
    headingTracking: '-0.03em',
    body: 'Source Sans 3',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap',
  },

  style: {
    borderRadius: '0.375rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'elegant',
    animations: 'subtle',
  },

  images: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516594915307-8f71a2f3a7d7?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Weingut Name | Moselweine aus [Stadt]',
    description: 'Familienweingut in [Stadt] an der Mosel. Riesling, Weinproben und Vinothek. Entdecken Sie unsere Weine.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'weine', title: 'Unsere Weine', h1: 'Unsere Weine', description: 'Riesling, Spaetburgunder und mehr. Entdecken Sie unser Sortiment.' },
      { slug: 'weinprobe', title: 'Weinprobe', h1: 'Weinprobe buchen', description: 'Erleben Sie unsere Weine bei einer gefuehrten Verkostung im Weingut.' },
      { slug: 'weingut', title: 'Das Weingut', h1: 'Unser Weingut', description: 'Tradition und Leidenschaft seit Generationen. Lernen Sie uns kennen.' },
      { slug: 'vinothek', title: 'Vinothek', h1: 'Unsere Vinothek', description: 'Besuchen Sie unsere Vinothek und probieren Sie unsere Weine vor Ort.' },
      { slug: 'galerie', title: 'Galerie', h1: 'Impressionen', description: 'Bilder aus dem Weingut, den Weinbergen und von unseren Veranstaltungen.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'Kontakt & Anfahrt', description: 'Besuchen Sie uns im Weingut oder kontaktieren Sie uns.' },
    ],
  },

  content: {
    hero: {
      headline: 'Wein aus Leidenschaft',
      subheadline: 'Familienweingut an der Mosel. Handverlesene Trauben, sorgfaeltig gekeltert, mit Liebe zum Detail.',
      cta: {
        primary: { text: 'Weinprobe buchen', href: '/weinprobe' },
        secondary: { text: 'Unsere Weine', href: '/weine' },
      },
    },
    about: {
      headline: 'Unser Weingut',
      text: 'Seit Generationen bewirtschaften wir unsere Weinberge an den Steillagen der Mosel. Unsere Weine erzaehlen von dieser Landschaft, von Schiefer und Sonne, von Handarbeit und Hingabe.',
    },
    services: [
      {
        title: 'Riesling',
        description: 'Unser Aushaegeschild. Mineralisch, fruchtig und mit der typischen Mosel-Eleganz.',
        icon: 'wine',
        image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Weinproben',
        description: 'Verkosten Sie unsere Weine bei einer gefuehrten Probe. Fuer Gruppen und Einzelpersonen.',
        icon: 'glass-water',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Vinothek & Verkauf',
        description: 'Besuchen Sie unsere Vinothek und nehmen Sie Ihre Lieblingsweine direkt mit nach Hause.',
        icon: 'store',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Werner K.',
        text: 'Der Riesling Spaetlese ist fantastisch. Man schmeckt die Mosel in jedem Schluck.',
        rating: 5,
      },
      {
        name: 'Ingrid und Hans F.',
        text: 'Die Weinprobe war ein Erlebnis. Sehr persoenlich, sehr informativ. Absolute Empfehlung!',
        rating: 5,
      },
      {
        name: 'Michael S.',
        text: 'Hervorragende Qualitaet zu fairen Preisen. Bestellen jedes Jahr unseren Vorrat hier.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Kann ich Weine direkt im Weingut kaufen?',
        answer: 'Ja, unsere Vinothek ist zu den Oeffnungszeiten geoeffnet. Sie koennen alle Weine probieren und direkt mitnehmen.',
      },
      {
        question: 'Wie buche ich eine Weinprobe?',
        answer: 'Rufen Sie uns an oder nutzen Sie unser Online-Formular. Wir bieten Proben ab 2 Personen an.',
      },
      {
        question: 'Liefern Sie Weine auch nach Hause?',
        answer: 'Ja, wir versenden deutschlandweit. Ab 12 Flaschen versandkostenfrei.',
      },
      {
        question: 'Welche Rebsorten bauen Sie an?',
        answer: 'Hauptsaechlich Riesling, dazu Weiss- und Grauburgunder, Spaetburgunder und saisonale Spezialitaeten.',
      },
    ],
    credibility: {
      rating: 4.9,
      reviewCount: 134,
      reviewSource: 'Google',
      badges: [],
    },
  },

  schema: {
    type: 'Winery',
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

/**
 * Schreinerei Müller — Zeltingen-Rachtig
 * ========================================
 * Traditional carpentry workshop in the Mosel region.
 * Custom furniture, doors, built-ins, outdoor structures.
 * Style: Warm Craftsman — rich wood tones, serif headings, textured feel.
 */

module.exports = {
  business: {
    name: 'Schreinerei Müller',
    tagline: 'Maßarbeit aus Meisterhand',
    description: 'Schreinerei Müller in Zeltingen-Rachtig: Ihr Meisterbetrieb für individuelle Möbel, Türen, Einbauschränke und Außenarbeiten. Handwerkskunst mit Leidenschaft seit Jahrzehnten.',
    phone: '+49 6532 2822',
    email: 'info@schreinerei-WMZ.de',
    address: {
      street: 'Kurfürstenstraße 88',
      city: 'Zeltingen-Rachtig',
      zip: '54492',
      country: 'Germany',
    },
    coordinates: {
      lat: 49.95358,
      lng: 7.01711,
    },
    openingHours: [
      { days: 'Montag - Donnerstag', hours: '7:00 - 12:00 & 13:30 - 17:00' },
      { days: 'Freitag', hours: '7:00 - 12:00' },
      { days: 'Samstag & Sonntag', hours: 'Geschlossen' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  colors: {
    primary: '#6D4C2E',       // Rich walnut brown
    primaryDark: '#4E3524',   // Deep dark oak
    primaryLight: '#8B6D4A',  // Lighter warm brown
    secondary: '#2C3E2D',    // Dark forest green (workshop, nature)
    accent: '#C8A96E',       // Warm brass/gold (hardware, warmth)
    dark: '#1C1714',         // Almost-black with warm undertone
    light: '#FAF6F0',        // Warm cream/parchment
    muted: '#7A7067',        // Warm gray-brown
  },

  fonts: {
    heading: 'Playfair Display',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '700',
    headingTracking: '-0.02em',
    body: 'Source Sans 3',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap',
  },

  style: {
    borderRadius: '0.25rem',
    heroStyle: 'overlay',
    sectionDivider: 'straight',
    mood: 'warm',
    animations: 'subtle',
  },

  images: {
    logo: '/images/logo.png',
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1400&h=800&fit=crop&q=80',
    about: '/images/referenzen/IMG_0270.jpg',
    interior: '/images/referenzen/IMG_0147.jpg',
    gallery: [
      '/images/referenzen/050.jpg',
      '/images/referenzen/051.jpg',
      '/images/referenzen/061.jpg',
      '/images/referenzen/IMG_0023-2.jpg',
      '/images/referenzen/IMG_0029.jpg',
      '/images/referenzen/IMG_0059.jpg',
      '/images/referenzen/IMG_0115.jpg',
      '/images/referenzen/IMG_0119.jpg',
      '/images/referenzen/IMG_0147.jpg',
      '/images/referenzen/IMG_0270.jpg',
      '/images/referenzen/IMG_0620.jpg',
      '/images/referenzen/IMG_0627.jpg',
      '/images/referenzen/P1010712.jpg',
      '/images/referenzen/P1020294.jpg',
    ],
    ogImage: null,
  },

  seo: {
    title: 'Schreinerei Müller | Meisterbetrieb in Zeltingen-Rachtig',
    description: 'Schreinerei Müller: Ihr Meisterbetrieb in Zeltingen-Rachtig an der Mosel. Individuelle Möbel, Türen, Einbauschränke und Außenarbeiten. Handwerk mit Herz.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'leistungen', title: 'Leistungen', h1: 'Unsere Leistungen', description: 'Individuelle Möbel, Türen, Einbauschränke, Treppen und mehr. Maßarbeit von Ihrem Schreinermeister in Zeltingen-Rachtig.' },
      { slug: 'referenzen', title: 'Referenzen', h1: 'Unsere Referenzen', description: 'Ausgewählte Projekte aus Jahrzehnten Schreinerarbeit. Von Möbeln bis zu Türen, von Innenausbau bis Außengestaltung.' },
      { slug: 'ueber-uns', title: 'Über uns', h1: 'Über die Schreinerei Müller', description: 'Familienbetrieb in Zeltingen-Rachtig. Lernen Sie unsere Werkstatt und unsere Arbeitsweise kennen.' },
      { slug: 'angebot', title: 'Angebot anfordern', h1: 'Kostenloses Angebot', description: 'Beschreiben Sie Ihr Projekt. Wir erstellen Ihnen ein unverbindliches Angebot.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'Kontakt & Anfahrt', description: 'Besuchen Sie unsere Werkstatt in Zeltingen-Rachtig oder rufen Sie uns an.' },
    ],
  },

  content: {
    hero: {
      headline: 'Holz in seiner schönsten Form',
      subheadline: 'Meisterbetrieb in Zeltingen-Rachtig. Individuelle Möbel, Türen und Innenausbau, gefertigt mit Leidenschaft und Präzision.',
      cta: {
        primary: { text: 'Angebot anfordern', href: '/angebot' },
        secondary: { text: 'Unsere Referenzen', href: '/referenzen' },
      },
    },
    about: {
      headline: 'Handwerk mit Tradition',
      text: 'Die Schreinerei Müller steht für hochwertige Handwerkskunst in Zeltingen-Rachtig an der Mosel. Ob individuell gefertigte Möbel, handwerklich gestaltete Türen oder durchdachter Innenausbau: Jedes Stück wird in unserer Werkstatt mit Sorgfalt und Sachverstand gefertigt. Wir verbinden traditionelles Schreinerhandwerk mit modernen Techniken und legen Wert auf persönliche Beratung von Anfang an.',
    },
    services: [
      {
        title: 'Möbel nach Maß',
        description: 'Einzelmöbel, Einbauschränke, Regale und Vitrinen. Passgenau für Ihren Wohnraum gefertigt, von der Planung bis zur Montage.',
        icon: 'sofa',
        image: '/images/referenzen/IMG_0023-2.jpg',
      },
      {
        title: 'Türen & Tore',
        description: 'Haustüren, Innentüren, Scheunentore und Kirchentüren. Individuell gestaltet in Eiche, Nussbaum oder Kirsche.',
        icon: 'door-open',
        image: '/images/referenzen/IMG_0115.jpg',
      },
      {
        title: 'Innenausbau',
        description: 'Treppen, Wandverkleidungen, Deckengestaltung und kompletter Innenausbau. Alles aus einer Hand.',
        icon: 'home',
        image: '/images/referenzen/IMG_0147.jpg',
      },
      {
        title: 'Außenarbeiten',
        description: 'Gartenmöbel, Terrassengestaltung, Carports und individuelle Holzkonstruktionen für den Außenbereich.',
        icon: 'tree-pine',
        image: '/images/referenzen/051.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Familie Schneider',
        text: 'Herr Müller hat für uns eine komplette Einbauküche und Garderobe gefertigt. Die Qualität ist erstklassig, jedes Detail stimmt. Absolute Empfehlung!',
        rating: 5,
      },
      {
        name: 'Weingut Becker',
        text: 'Unsere neue Eingangstür aus Eiche ist ein echtes Schmuckstück. Herr Müller hat unsere Vorstellungen perfekt umgesetzt. Handwerk, wie man es sich wünscht.',
        rating: 5,
      },
      {
        name: 'Peter K.',
        text: 'Zuverlässig, sauber und pünktlich. Die Einbauschränke passen wie angegossen. Preis-Leistung ist hervorragend.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Welche Holzarten verwenden Sie?',
        answer: 'Wir arbeiten mit regionalen und europäischen Hölzern: Eiche, Buche, Nussbaum, Kirsche, Esche und Fichte. Auf Wunsch auch exotische Hölzer. Wir beraten Sie gerne zur besten Wahl für Ihr Projekt.',
      },
      {
        question: 'Wie läuft eine Auftragsabwicklung ab?',
        answer: 'Nach einem persönlichen Beratungsgespräch bei Ihnen vor Ort erstellen wir ein detailliertes Angebot. Nach Auftragserteilung fertigen wir in unserer Werkstatt und montieren alles fachgerecht bei Ihnen.',
      },
      {
        question: 'Erstellen Sie kostenlose Angebote?',
        answer: 'Ja, die Beratung vor Ort und das Angebot sind kostenfrei und unverbindlich. Rufen Sie uns einfach an oder schreiben Sie uns.',
      },
      {
        question: 'In welchem Umkreis sind Sie tätig?',
        answer: 'Wir betreuen Kunden in Zeltingen-Rachtig und der gesamten Moselregion, einschließlich Bernkastel-Kues, Traben-Trarbach, Wittlich und Umgebung.',
      },
      {
        question: 'Reparieren Sie auch bestehende Möbel oder Türen?',
        answer: 'Selbstverständlich. Ob Aufarbeitung antiker Möbel, Reparatur beschädigter Türen oder Anpassungen an bestehenden Einbauten: Wir helfen gerne.',
      },
    ],
    credibility: {
      rating: 4.9,
      reviewCount: 48,
      reviewSource: 'Google',
      badges: ['Meisterbetrieb', 'Familienbetrieb'],
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

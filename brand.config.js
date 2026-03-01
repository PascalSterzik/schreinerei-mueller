/**
 * Schreinerei Müller, Zeltingen-Rachtig
 * ========================================
 * Traditional carpentry workshop in the Mosel region.
 * Custom furniture, doors, built-ins, outdoor structures.
 * Style: Warm Craftsman, rich wood tones, serif headings, textured feel.
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
      country: 'DE',
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
    logo: null,
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&q=80',
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
    siteUrl: 'https://schreinerei-mueller.vercel.app',
    title: 'Schreinerei Müller Zeltingen-Rachtig | Möbel, Türen & Innenausbau vom Meister',
    description: 'Schreinerei Müller in Zeltingen-Rachtig: Ihr Meisterbetrieb an der Mosel für individuelle Möbel, Türen, Einbauschränke und Außenarbeiten. Kostenlose Beratung vor Ort.',
    locale: 'de_DE',
    language: 'de',
    servicePages: [
      { slug: 'leistungen', title: 'Leistungen', h1: 'Unsere Leistungen', description: 'Individuelle Möbel, Türen, Einbauschränke, Treppen und mehr. Maßarbeit von Ihrem Schreinermeister in Zeltingen-Rachtig.' },
      { slug: 'referenzen', title: 'Referenzen', h1: 'Unsere Referenzen', description: 'Ausgewählte Projekte der Schreinerei Müller: Von Möbeln bis zu Türen, von Innenausbau bis Außengestaltung in Zeltingen-Rachtig.' },
      { slug: 'ueber-uns', title: 'Über uns', h1: 'Über die Schreinerei Müller', description: 'Familienbetrieb in Zeltingen-Rachtig an der Mosel. Lernen Sie unsere Werkstatt und unsere Arbeitsweise kennen.' },
      { slug: 'angebot', title: 'Angebot anfordern', h1: 'Kostenloses Angebot anfordern', description: 'Beschreiben Sie Ihr Projekt und erhalten Sie ein unverbindliches Angebot von der Schreinerei Müller in Zeltingen-Rachtig.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'Kontakt & Anfahrt', description: 'Besuchen Sie die Schreinerei Müller in Zeltingen-Rachtig oder rufen Sie uns an unter +49 6532 2822.' },
    ],
  },

  content: {
    hero: {
      headline: 'Ihre Schreinerei in Zeltingen-Rachtig',
      subheadline: 'Individuelle Möbel, Türen und Innenausbau vom Meisterbetrieb. Persönliche Beratung, handwerkliche Präzision, faire Preise.',
      cta: {
        primary: { text: 'Kostenloses Angebot anfordern', href: '/angebot' },
        secondary: { text: 'Unsere Referenzen ansehen', href: '/referenzen' },
      },
    },
    about: {
      headline: 'Handwerk mit Tradition',
      text: 'Die Schreinerei Müller steht für hochwertige Handwerkskunst in Zeltingen-Rachtig an der Mosel. Ob individuell gefertigte Möbel, handwerklich gestaltete Türen oder durchdachter Innenausbau: Jedes Stück wird in unserer Werkstatt mit Sorgfalt und Sachverstand gefertigt. Wir verbinden traditionelles Schreinerhandwerk mit modernen Techniken und legen Wert auf persönliche Beratung von Anfang an.',
    },
    aboutStats: [
      { value: 30, suffix: '+', label: 'Jahre Erfahrung' },
      { value: 48, suffix: '', label: 'zufriedene Kunden auf Google' },
    ],
    services: [
      {
        title: 'Möbel nach Maß',
        description: 'Einzelmöbel, Einbauschränke, Regale und Vitrinen. Passgenau für Ihren Wohnraum gefertigt, von der Planung bis zur Montage.',
        icon: 'sofa',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Türen & Tore',
        description: 'Haustüren, Innentüren, Scheunentore und Kirchentüren. Individuell gestaltet in Eiche, Nussbaum oder Kirsche.',
        icon: 'door-open',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Innenausbau',
        description: 'Treppen, Wandverkleidungen, Deckengestaltung und kompletter Innenausbau. Alles aus einer Hand.',
        icon: 'home',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=600&fit=crop&q=80',
      },
      {
        title: 'Außenarbeiten',
        description: 'Gartenmöbel, Terrassengestaltung, Carports und individuelle Holzkonstruktionen für den Außenbereich.',
        icon: 'tree-pine',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&q=80',
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
        question: 'Welche Holzarten verwendet die Schreinerei Müller?',
        answer: 'Wir arbeiten mit regionalen und europäischen Hölzern: Eiche, Buche, Nussbaum, Kirsche, Esche und Fichte. Auf Wunsch auch exotische Hölzer. Wir beraten Sie gerne zur besten Wahl für Ihr Projekt.',
      },
      {
        question: 'Wie läuft eine Auftragsabwicklung bei der Schreinerei Müller ab?',
        answer: 'Nach einem persönlichen Beratungsgespräch bei Ihnen vor Ort erstellen wir ein detailliertes Angebot. Nach Auftragserteilung fertigen wir in unserer Werkstatt in Zeltingen-Rachtig und montieren alles fachgerecht bei Ihnen.',
      },
      {
        question: 'Erstellt die Schreinerei Müller kostenlose Angebote?',
        answer: 'Ja, die Beratung vor Ort und das Angebot sind kostenfrei und unverbindlich. Rufen Sie uns einfach an unter +49 6532 2822 oder schreiben Sie uns eine E-Mail.',
      },
      {
        question: 'In welchem Umkreis ist die Schreinerei Müller tätig?',
        answer: 'Wir betreuen Kunden in Zeltingen-Rachtig und der gesamten Moselregion, einschließlich Bernkastel-Kues, Traben-Trarbach, Wittlich und Umgebung.',
      },
      {
        question: 'Repariert die Schreinerei Müller auch bestehende Möbel oder Türen?',
        answer: 'Selbstverständlich. Ob Aufarbeitung antiker Möbel, Reparatur beschädigter Türen oder Anpassungen an bestehenden Einbauten: Wir helfen gerne.',
      },
      {
        question: 'Wie lange dauert eine Maßanfertigung bei der Schreinerei Müller?',
        answer: 'Die Dauer hängt vom Umfang des Projekts ab. Einfache Einzelmöbel fertigen wir in wenigen Wochen, größere Projekte wie einen kompletten Innenausbau planen wir gemeinsam mit Ihnen. Sprechen Sie uns an, wir geben Ihnen eine realistische Einschätzung.',
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
    priceRange: '€€',
    areaServed: [
      'Zeltingen-Rachtig',
      'Bernkastel-Kues',
      'Traben-Trarbach',
      'Wittlich',
      'Moselregion',
    ],
    knowsAbout: [
      'Möbel nach Maß',
      'Einbauschränke',
      'Haustüren',
      'Innentüren',
      'Innenausbau',
      'Treppen',
      'Holzarbeiten',
      'Außenarbeiten',
      'Terrassengestaltung',
      'Carports',
    ],
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

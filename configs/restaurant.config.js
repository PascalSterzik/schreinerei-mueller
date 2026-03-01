/**
 * BRAND CONFIGURATION
 * ===================
 * This is the SINGLE SOURCE OF TRUTH for all brand-specific data.
 * When creating a new site, this is the ONLY file you need to change
 * to completely transform the look and feel.
 *
 * Every component reads from this config. Change colors here,
 * the entire site updates. Change fonts here, everything updates.
 */

module.exports = {
  // ============================================================
  // BUSINESS INFO
  // ============================================================
  business: {
    name: 'Restaurant Name',
    tagline: 'Authentic Italian Cuisine Since 1985',
    description: 'Experience the finest Italian dining in the heart of the city. Fresh ingredients, family recipes, and warm hospitality.',
    phone: '+49 6531 12345',
    email: 'info@restaurant-name.de',
    address: {
      street: 'Hauptstraße 42',
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
      { days: 'Dienstag - Freitag', hours: '11:30 - 14:30, 17:30 - 22:00' },
      { days: 'Samstag', hours: '17:30 - 23:00' },
      { days: 'Sonntag', hours: '11:30 - 21:00' },
    ],
    socials: {
      instagram: '',
      facebook: '',
      google: '',
    },
  },

  // ============================================================
  // COLORS
  // ============================================================
  colors: {
    primary: '#8B4513',       // Main brand color (buttons, links, accents)
    primaryDark: '#6B3410',   // Darker variant (hover states, headers)
    primaryLight: '#A0522D',  // Lighter variant (backgrounds, badges)
    secondary: '#2C1810',     // Secondary color (text, dark sections)
    accent: '#D4A574',        // Accent color (highlights, decorations)
    dark: '#1a1a1a',          // Near-black (headings, primary text)
    light: '#FAFAF5',         // Off-white (page background)
    muted: '#6B7280',         // Muted gray (secondary text, captions)
  },

  // ============================================================
  // TYPOGRAPHY
  // ============================================================
  fonts: {
    heading: 'Playfair Display',
    headingFallback: ['Georgia', 'serif'],
    headingWeight: '700',
    headingTracking: '-0.03em',
    body: 'Source Sans 3',
    bodyFallback: ['system-ui', 'sans-serif'],
    bodyWeight: '400',
    bodyLineHeight: '1.7',
    // Google Fonts URL (loaded in layout.js)
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap',
  },

  // ============================================================
  // STYLE VARIANTS
  // ============================================================
  style: {
    borderRadius: '0.5rem',
    // Hero section style: 'fullscreen' | 'split' | 'centered' | 'overlay'
    heroStyle: 'overlay',
    // Section transitions: 'wave' | 'angle' | 'curve' | 'straight'
    sectionDivider: 'straight',
    // Overall mood: 'warm' | 'cool' | 'neutral' | 'bold' | 'elegant'
    mood: 'warm',
    // Animation style: 'subtle' | 'playful' | 'dramatic' | 'none'
    animations: 'subtle',
  },

  // ============================================================
  // IMAGES (Unsplash CDN URLs or local paths)
  // ============================================================
  images: {
    logo: null,  // Path to logo file in /public/images/ or null for text logo
    hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=800&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
    interior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop&q=80',
    ],
    ogImage: null,  // Open Graph image (auto-generated if null)
  },

  // ============================================================
  // SEO
  // ============================================================
  seo: {
    title: 'Restaurant Name | Authentic Italian Cuisine in Bernkastel-Kues',
    description: 'Erleben Sie feinste italienische Kuche in Bernkastel-Kues. Frische Zutaten, Familienrezepte und herzliche Gastfreundschaft seit 1985.',
    locale: 'de_DE',
    language: 'de',
    // Programmatic SEO pages (auto-generated)
    servicePages: [
      { slug: 'speisekarte', title: 'Speisekarte', h1: 'Unsere Speisekarte', description: 'Entdecken Sie unsere Gerichte mit frischen, regionalen Zutaten und italienischen Familienrezepten.' },
      { slug: 'reservierung', title: 'Tisch reservieren', h1: 'Reservierung', description: 'Reservieren Sie Ihren Tisch bequem online. Wir freuen uns auf Ihren Besuch.' },
      { slug: 'catering', title: 'Catering Service', h1: 'Catering fur Ihre Veranstaltung', description: 'Professionelles Catering fur Events, Hochzeiten und Feiern in Bernkastel-Kues und Umgebung.' },
      { slug: 'ueber-uns', title: 'Uber uns', h1: 'Unsere Geschichte', description: 'Seit 1985 servieren wir authentische italienische Kuche in Bernkastel-Kues. Lernen Sie uns kennen.' },
      { slug: 'kontakt', title: 'Kontakt', h1: 'So erreichen Sie uns', description: 'Kontaktieren Sie uns per Telefon, E-Mail oder besuchen Sie uns vor Ort.' },
    ],
  },

  // ============================================================
  // CONTENT
  // ============================================================
  content: {
    hero: {
      headline: 'Wo Tradition auf Geschmack trifft',
      subheadline: 'Authentische italienische Kuche mit frischen, regionalen Zutaten. Seit 1985 in Bernkastel-Kues.',
      cta: {
        primary: { text: 'Tisch reservieren', href: '/reservierung' },
        secondary: { text: 'Speisekarte ansehen', href: '/speisekarte' },
      },
    },
    about: {
      headline: 'Unsere Geschichte',
      text: 'Seit uber drei Jahrzehnten servieren wir unseren Gasten die besten italienischen Gerichte. Unsere Kuche verbindet traditionelle Familienrezepte mit regionalen Zutaten der Mosel-Region.',
    },
    services: [
      {
        title: 'Restaurant',
        description: 'Geniessen Sie unsere Gerichte in warmem Ambiente mit Blick auf die Mosel.',
        icon: 'utensils',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Catering',
        description: 'Wir bringen unsere Kuche zu Ihrer Veranstaltung. Von der kleinen Feier bis zum grossen Event.',
        icon: 'truck',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&q=80',
      },
      {
        title: 'Events',
        description: 'Feiern Sie Ihren besonderen Anlass bei uns. Wir gestalten Ihr individuelles Menu.',
        icon: 'glass-cheers',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&q=80',
      },
    ],
    testimonials: [
      {
        name: 'Maria K.',
        text: 'Das beste italienische Restaurant an der Mosel. Die Pasta ist ein Traum!',
        rating: 5,
      },
      {
        name: 'Thomas W.',
        text: 'Hervorragender Service und eine Weinkarte, die ihresgleichen sucht. Immer wieder gerne.',
        rating: 5,
      },
      {
        name: 'Sandra M.',
        text: 'Perfekt fur besondere Anlasse. Das Catering fur unsere Hochzeit war fantastisch.',
        rating: 5,
      },
    ],
    faq: [
      {
        question: 'Brauche ich eine Reservierung?',
        answer: 'Wir empfehlen eine Reservierung, besonders am Wochenende. Sie konnen telefonisch oder uber unsere Website reservieren.',
      },
      {
        question: 'Bieten Sie vegetarische oder vegane Gerichte an?',
        answer: 'Ja, unsere Speisekarte enthalt eine Auswahl an vegetarischen und veganen Gerichten. Sprechen Sie uns gerne an.',
      },
      {
        question: 'Haben Sie eine Terrasse?',
        answer: 'Ja, bei schnem Wetter offnen wir unsere Terrasse mit Blick auf die Mosel.',
      },
      {
        question: 'Bieten Sie Catering an?',
        answer: 'Ja, wir bieten Catering fur Veranstaltungen jeder Grosse. Kontaktieren Sie uns fur ein individuelles Angebot.',
      },
    ],
    credibility: {
      rating: 4.8,
      reviewCount: 247,
      reviewSource: 'Google',
      badges: ['Tripadvisor 2024', 'Mosel-Empfehlung'],
    },
  },

  // ============================================================
  // INTEGRATIONS (analytics, forms, chat, email marketing)
  // ============================================================
  integrations: {
    // Google Analytics 4 (leave null for demo sites)
    ga4: {
      measurementId: null,  // e.g., 'G-XXXXXXXXXX'
    },
    // Form backend (Web3Forms recommended, free 250 submissions/month)
    forms: {
      provider: 'web3forms',  // 'web3forms' | 'basin' | null
      accessKey: null,        // Web3Forms access key or Basin endpoint
      recipientEmail: null,   // Where form submissions are sent (set by provider)
    },
    // Live chat widget (Tawk.to recommended, 100% free)
    chat: {
      provider: null,     // 'tawkto' | null
      widgetId: null,     // Tawk.to property ID (e.g., '1234567890/default')
    },
    // Email marketing (Mailchimp free tier: 500 contacts)
    emailMarketing: {
      provider: null,        // 'mailchimp' | null
      formActionUrl: null,   // Mailchimp form action URL
    },
  },

  // ============================================================
  // SCHEMA.ORG (auto-generated from above, but can override)
  // ============================================================
  schema: {
    type: 'Restaurant',  // Restaurant, HairSalon, AutoRepair, Hotel, etc.
    priceRange: '$$',
    servesCuisine: 'Italian',
    acceptsReservations: true,
  },
}

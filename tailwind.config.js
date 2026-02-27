/** @type {import('tailwindcss').Config} */
const brand = require('./brand.config')

module.exports = {
  content: [
    './src/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: brand.colors.primary,
          'primary-dark': brand.colors.primaryDark,
          'primary-light': brand.colors.primaryLight,
          secondary: brand.colors.secondary,
          accent: brand.colors.accent,
          dark: brand.colors.dark,
          light: brand.colors.light,
          muted: brand.colors.muted,
        },
      },
      fontFamily: {
        heading: [brand.fonts.heading, ...brand.fonts.headingFallback],
        body: [brand.fonts.body, ...brand.fonts.bodyFallback],
      },
      borderRadius: {
        brand: brand.style.borderRadius,
      },
      boxShadow: {
        'brand-sm': `0 1px 3px 0 ${brand.colors.primary}10, 0 1px 2px -1px ${brand.colors.primary}10`,
        'brand-md': `0 4px 6px -1px ${brand.colors.primary}15, 0 2px 4px -2px ${brand.colors.primary}15`,
        'brand-lg': `0 10px 15px -3px ${brand.colors.primary}20, 0 4px 6px -4px ${brand.colors.primary}20`,
        'brand-xl': `0 20px 25px -5px ${brand.colors.primary}25, 0 8px 10px -6px ${brand.colors.primary}25`,
      },
    },
  },
  plugins: [],
}

import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function HeroSection({ variant = 'overlay' }) {
  const hero = brand.content.hero
  const style = variant || brand.style.heroStyle

  if (style === 'overlay') {
    return (
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={brand.images.hero}
            alt={brand.business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/30" />
        </div>

        {/* Content */}
        <Container className="relative z-10 pt-24">
          <div className="max-w-2xl">
            {/* Tagline */}
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 hero-stagger hero-stagger-1">
              {brand.business.name}
            </p>
            <h1 className="text-white mb-6 hero-stagger hero-stagger-2">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light hero-stagger hero-stagger-3">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-stagger hero-stagger-4">
              <Button href={hero.cta.primary.href} variant="accent" size="lg">
                {hero.cta.primary.text}
              </Button>
              {hero.cta.secondary && (
                <Button href={hero.cta.secondary.href} variant="white-outline" size="lg">
                  {hero.cta.secondary.text}
                </Button>
              )}
            </div>

            {/* Quick credibility line */}
            {brand.content.credibility && (
              <div className="mt-10 flex items-center gap-3 text-white/60 text-sm hero-stagger hero-stagger-5">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>
                  {brand.content.credibility.rating} von 5 Sternen ({brand.content.credibility.reviewCount} Bewertungen auf {brand.content.credibility.reviewSource})
                </span>
              </div>
            )}
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    )
  }

  // Split hero variant
  if (style === 'split') {
    return (
      <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-xl">
            <h1 className="text-brand-dark mb-6 reveal">{hero.headline}</h1>
            <p className="text-xl text-brand-muted mb-10 leading-relaxed reveal">{hero.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button href={hero.cta.primary.href} size="lg">{hero.cta.primary.text}</Button>
              {hero.cta.secondary && (
                <Button href={hero.cta.secondary.href} variant="secondary" size="lg">{hero.cta.secondary.text}</Button>
              )}
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img src={brand.images.hero} alt={brand.business.name} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
    )
  }

  // Centered hero variant
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img src={brand.images.hero} alt={brand.business.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>
      <Container className="relative z-10 pt-24">
        <h1 className="text-white mb-6 max-w-4xl mx-auto reveal">{hero.headline}</h1>
        <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-2xl mx-auto reveal">{hero.subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Button href={hero.cta.primary.href} size="lg">{hero.cta.primary.text}</Button>
          {hero.cta.secondary && (
            <Button href={hero.cta.secondary.href} variant="white" size="lg">{hero.cta.secondary.text}</Button>
          )}
        </div>
      </Container>
    </section>
  )
}

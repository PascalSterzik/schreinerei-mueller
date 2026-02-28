import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTABanner({
  headline = 'Ihr Projekt verdient Handwerksqualität',
  text = 'Lassen Sie sich unverbindlich beraten. Wir finden gemeinsam die beste Lösung für Ihr Vorhaben.',
  ctaText = 'Jetzt anrufen',
  ctaHref,
  variant = 'primary',
}) {
  const bgClass = variant === 'primary'
    ? 'bg-brand-primary'
    : 'bg-brand-secondary'

  return (
    <section className={`${bgClass} section-padding`}>
      <Container size="narrow">
        <div className="text-center reveal">
          <h2 className="text-white mb-4">{headline}</h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            {text}
          </p>
          <Button
            href={ctaHref || `tel:${brand.business.phone}`}
            variant="white"
            size="lg"
          >
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  )
}

import brand from '../../../brand.config'
import Container from '@/components/ui/Container'

export default function AboutSection() {
  const about = brand.content.about

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative reveal">
            <div className="relative rounded-brand overflow-hidden shadow-brand-xl">
              <img
                src={brand.images.about}
                alt={about.headline}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-brand -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-brand-accent/30 rounded-brand -z-10" />
          </div>

          {/* Content */}
          <div className="reveal">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              {brand.business.name}
            </span>
            <h2 className="mb-6">{about.headline}</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              {about.text}
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-primary pl-4">
                <span className="text-3xl font-heading font-bold text-brand-primary">30+</span>
                <p className="text-brand-muted text-sm mt-1">Jahre Erfahrung</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <span className="text-3xl font-heading font-bold text-brand-accent">
                  {brand.content.credibility?.reviewCount || '200'}+
                </span>
                <p className="text-brand-muted text-sm mt-1">Zufriedene Kunden</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

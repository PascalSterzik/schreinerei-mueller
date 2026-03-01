import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ServiceCards({ title = 'Unsere Leistungen', subtitle }) {
  const services = brand.content.services

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-brand-light rounded-brand overflow-hidden shadow-brand-sm hover:shadow-brand-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

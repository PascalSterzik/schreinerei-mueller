import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ServiceCards({ title = 'Unsere Leistungen', subtitle }) {
  const services = brand.content.services

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-brand overflow-hidden shadow-brand-md hover:shadow-brand-xl card-lift border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                {/* Service number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-dark font-heading font-bold text-sm">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-[0.95rem]">
                  {service.description}
                </p>
              </div>

              {/* Accent line at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

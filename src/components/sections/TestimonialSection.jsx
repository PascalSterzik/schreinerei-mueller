'use client'

import { useState } from 'react'
import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TestimonialSection({ title = 'Was unsere Kunden sagen', light = false }) {
  const testimonials = brand.content.testimonials
  const [active, setActive] = useState(0)

  const bgClass = light
    ? 'bg-brand-secondary text-white'
    : 'bg-brand-light'

  return (
    <section className={`section-padding ${bgClass}`}>
      <Container size="narrow">
        <SectionHeading title={title} light={light} />

        <div className="relative reveal">
          {/* Quote mark decoration */}
          <div className={`absolute -top-8 left-0 text-8xl font-heading leading-none ${light ? 'text-white/10' : 'text-brand-primary/10'}`}>
            &ldquo;
          </div>

          {/* Active testimonial */}
          <div className="text-center py-8">
            <blockquote className={`text-xl md:text-2xl leading-relaxed mb-8 font-light italic ${light ? 'text-white/90' : 'text-brand-dark'}`}>
              &ldquo;{testimonials[active].text}&rdquo;
            </blockquote>

            {/* Rating stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <cite className={`not-italic font-semibold ${light ? 'text-white' : 'text-brand-dark'}`}>
              {testimonials[active].name}
            </cite>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === active
                    ? 'bg-brand-primary scale-125'
                    : light
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-brand-primary/20 hover:bg-brand-primary/40'
                }`}
                aria-label={`Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

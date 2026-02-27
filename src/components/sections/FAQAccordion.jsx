'use client'

import { useState } from 'react'
import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { generateFAQSchema } from '@/lib/schema'

export default function FAQAccordion({ title = 'Haufig gestellte Fragen' }) {
  const faqs = brand.content.faq
  const [openIndex, setOpenIndex] = useState(null)

  const faqSchema = generateFAQSchema(faqs)

  return (
    <section className="section-padding bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container size="narrow">
        <SectionHeading title={title} />

        <div className="space-y-3 reveal-children">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-brand overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-light/50 transition-colors duration-200"
              >
                <span className="font-semibold text-brand-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-brand-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

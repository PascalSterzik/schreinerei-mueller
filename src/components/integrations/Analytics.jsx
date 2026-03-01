'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import brand from '../../../brand.config'

const GA_ID = brand.integrations?.ga4?.measurementId

/**
 * Google Analytics 4 integration with automatic event tracking.
 * Tracks: page views (automatic), phone clicks, email clicks,
 * form submissions, map interactions, CTA button clicks.
 *
 * Only loads when a GA4 measurement ID is provided in brand.config.js.
 */
export default function Analytics() {
  if (!GA_ID) return null

  useEffect(() => {
    // Track phone number clicks (tel: links)
    const trackPhoneClicks = (e) => {
      const link = e.target.closest('a[href^="tel:"]')
      if (link) {
        window.gtag?.('event', 'phone_click', {
          event_category: 'contact',
          event_label: link.href.replace('tel:', ''),
          value: 1,
        })
      }
    }

    // Track email clicks (mailto: links)
    const trackEmailClicks = (e) => {
      const link = e.target.closest('a[href^="mailto:"]')
      if (link) {
        window.gtag?.('event', 'email_click', {
          event_category: 'contact',
          event_label: link.href.replace('mailto:', ''),
          value: 1,
        })
      }
    }

    // Track map interactions (Google Maps iframe clicks)
    const trackMapClicks = (e) => {
      const iframe = e.target.closest('iframe[src*="google.com/maps"]')
      if (iframe) {
        window.gtag?.('event', 'map_interaction', {
          event_category: 'contact',
          event_label: 'google_maps',
          value: 1,
        })
      }
    }

    // Track CTA button clicks
    const trackCTAClicks = (e) => {
      const btn = e.target.closest('[data-track-cta]')
      if (btn) {
        window.gtag?.('event', 'cta_click', {
          event_category: 'conversion',
          event_label: btn.dataset.trackCta || btn.textContent?.trim(),
          value: 1,
        })
      }
    }

    document.addEventListener('click', trackPhoneClicks)
    document.addEventListener('click', trackEmailClicks)
    document.addEventListener('click', trackMapClicks)
    document.addEventListener('click', trackCTAClicks)

    return () => {
      document.removeEventListener('click', trackPhoneClicks)
      document.removeEventListener('click', trackEmailClicks)
      document.removeEventListener('click', trackMapClicks)
      document.removeEventListener('click', trackCTAClicks)
    }
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}

/**
 * Track a form submission event in GA4.
 * Call this from form components after successful submission.
 */
export function trackFormSubmission(formName, formData = {}) {
  window.gtag?.('event', 'form_submission', {
    event_category: 'conversion',
    event_label: formName,
    form_type: formName,
    ...formData,
  })
}

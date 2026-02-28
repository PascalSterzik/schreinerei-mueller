'use client'

import { useState, useEffect, useCallback } from 'react'
import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

function StarRating({ rating, size = 'md' }) {
  const sizeClass = size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${sizeClass} ${
            i < fullStars
              ? 'text-yellow-400 fill-current'
              : i === fullStars && hasHalf
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300 fill-current'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function ReviewCard({ review, light }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text && review.text.length > 150

  const timeAgo = review.relative_time_description || ''

  return (
    <div className={`p-6 rounded-brand transition-all duration-300 ${
      light
        ? 'bg-white/10 backdrop-blur-sm'
        : 'bg-white shadow-brand-sm hover:shadow-brand-md'
    }`}>
      {/* Header: Author + Google logo */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {review.profile_photo_url ? (
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="w-10 h-10 rounded-full"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
              light ? 'bg-white/20 text-white' : 'bg-brand-primary/10 text-brand-primary'
            }`}>
              {(review.author_name || 'A').charAt(0)}
            </div>
          )}
          <div>
            <p className={`font-semibold text-sm ${light ? 'text-white' : 'text-brand-dark'}`}>
              {review.author_name}
            </p>
            {timeAgo && (
              <p className={`text-xs ${light ? 'text-white/50' : 'text-brand-muted'}`}>
                {timeAgo}
              </p>
            )}
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Stars */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      {review.text && (
        <p className={`text-sm leading-relaxed ${light ? 'text-white/80' : 'text-brand-muted'}`}>
          {isLong && !expanded ? review.text.slice(0, 150) + '...' : review.text}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className={`ml-1 font-medium ${light ? 'text-white' : 'text-brand-primary'}`}
            >
              {expanded ? 'Weniger' : 'Mehr'}
            </button>
          )}
        </p>
      )}
    </div>
  )
}

function FallbackTestimonials({ light }) {
  const testimonials = brand.content.testimonials
  const [active, setActive] = useState(0)

  if (!testimonials || testimonials.length === 0) return null

  return (
    <div className="relative reveal">
      <div className={`absolute -top-8 left-0 text-8xl font-heading leading-none ${light ? 'text-white/10' : 'text-brand-primary/10'}`}>
        &ldquo;
      </div>
      <div className="text-center py-8">
        <blockquote className={`text-xl md:text-2xl leading-relaxed mb-8 font-light italic ${light ? 'text-white/90' : 'text-brand-dark'}`}>
          &ldquo;{testimonials[active].text}&rdquo;
        </blockquote>
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
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === active
                ? 'bg-brand-primary scale-125'
                : light ? 'bg-white/30 hover:bg-white/50' : 'bg-brand-primary/20 hover:bg-brand-primary/40'
            }`}
            aria-label={`Bewertung ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function GoogleReviews({
  title = 'Was unsere Kunden sagen',
  subtitle,
  light = false,
}) {
  const config = brand.integrations?.googleReviews
  const hasApiKey = config?.apiKey && config?.placeId
  const [reviews, setReviews] = useState(null)
  const [placeData, setPlaceData] = useState(null)
  const [error, setError] = useState(false)

  const fetchReviews = useCallback(async () => {
    if (!hasApiKey) return

    try {
      // Dynamically load Google Maps JS API
      if (!window.google?.maps?.places) {
        await new Promise((resolve, reject) => {
          if (document.querySelector('script[src*="maps.googleapis.com"]')) {
            // Script already loading, wait for it
            const check = setInterval(() => {
              if (window.google?.maps?.places) {
                clearInterval(check)
                resolve()
              }
            }, 100)
            setTimeout(() => { clearInterval(check); reject(new Error('timeout')) }, 10000)
            return
          }
          const script = document.createElement('script')
          script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&libraries=places`
          script.async = true
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Google Maps'))
          document.head.appendChild(script)
        })
      }

      // Create a hidden map element (required by Places API)
      let mapDiv = document.getElementById('google-reviews-map')
      if (!mapDiv) {
        mapDiv = document.createElement('div')
        mapDiv.id = 'google-reviews-map'
        mapDiv.style.display = 'none'
        document.body.appendChild(mapDiv)
      }

      const service = new window.google.maps.places.PlacesService(mapDiv)

      service.getDetails(
        {
          placeId: config.placeId,
          fields: ['reviews', 'rating', 'user_ratings_total', 'name', 'url'],
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
            setPlaceData({
              rating: place.rating,
              totalReviews: place.user_ratings_total,
              name: place.name,
              url: place.url,
            })
            setReviews(place.reviews || [])
          } else {
            console.warn('Google Reviews: Could not load reviews, using fallback.')
            setError(true)
          }
        }
      )
    } catch (err) {
      console.warn('Google Reviews: API load failed, using fallback.', err)
      setError(true)
    }
  }, [hasApiKey, config?.apiKey, config?.placeId])

  useEffect(() => {
    fetchReviews()
  }, [fetchReviews])

  const bgClass = light ? 'bg-brand-secondary text-white' : 'bg-brand-light'

  // No API key or error: show fallback testimonials
  if (!hasApiKey || error) {
    return (
      <section className={`section-padding ${bgClass}`}>
        <Container size="narrow">
          <SectionHeading title={title} subtitle={subtitle} light={light} />
          <FallbackTestimonials light={light} />
        </Container>
      </section>
    )
  }

  // Loading state
  if (reviews === null) {
    return (
      <section className={`section-padding ${bgClass}`}>
        <Container>
          <SectionHeading title={title} subtitle={subtitle} light={light} />
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
          </div>
        </Container>
      </section>
    )
  }

  // No reviews found
  if (reviews.length === 0) {
    return (
      <section className={`section-padding ${bgClass}`}>
        <Container size="narrow">
          <SectionHeading title={title} subtitle={subtitle} light={light} />
          <FallbackTestimonials light={light} />
        </Container>
      </section>
    )
  }

  return (
    <section className={`section-padding ${bgClass}`}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} light={light} />

        {/* Overall rating summary */}
        {placeData && (
          <div className="flex flex-col items-center gap-2 mb-10 reveal">
            <div className="flex items-center gap-3">
              <span className={`text-4xl font-bold ${light ? 'text-white' : 'text-brand-dark'}`}>
                {placeData.rating?.toFixed(1)}
              </span>
              <div>
                <StarRating rating={placeData.rating} size="lg" />
                <p className={`text-sm mt-1 ${light ? 'text-white/60' : 'text-brand-muted'}`}>
                  {placeData.totalReviews} Bewertungen auf Google
                </p>
              </div>
            </div>
            {placeData.url && (
              <a
                href={placeData.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium mt-2 no-underline ${
                  light ? 'text-white/70 hover:text-white' : 'text-brand-primary hover:text-brand-primary-dark'
                }`}
              >
                <GoogleLogo />
                Alle Bewertungen auf Google ansehen
              </a>
            )}
          </div>
        )}

        {/* Review cards grid */}
        <div className={`grid gap-6 reveal ${
          reviews.length === 1
            ? 'grid-cols-1 max-w-lg mx-auto'
            : reviews.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {reviews
            .sort((a, b) => b.rating - a.rating)
            .map((review, i) => (
              <ReviewCard key={i} review={review} light={light} />
            ))
          }
        </div>

        {/* CTA to leave a review */}
        {placeData?.url && (
          <div className="text-center mt-10 reveal">
            <a
              href={placeData.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-brand text-sm font-semibold no-underline transition-all duration-300 ${
                light
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20'
              }`}
            >
              <GoogleLogo />
              Bewertung auf Google schreiben
            </a>
          </div>
        )}
      </Container>
    </section>
  )
}

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const observeElements = () => {
      document.querySelectorAll('.reveal, .reveal-children').forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el)
        }
      })
    }

    // Observe existing elements
    observeElements()

    // Watch for new elements added to the DOM (client-side navigation)
    const mutationObserver = new MutationObserver((mutations) => {
      let hasNewNodes = false
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          hasNewNodes = true
        }
      })
      if (hasNewNodes) {
        observeElements()
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}

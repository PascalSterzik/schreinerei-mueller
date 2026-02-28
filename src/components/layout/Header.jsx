'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import brand from '../../../brand.config'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = brand.seo.servicePages.map(page => ({
    href: `/${page.slug}`,
    label: page.title,
  }))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-brand-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            {brand.images.logo ? (
              <div className="inline-block bg-white rounded-md p-1.5">
                <img
                  src={brand.images.logo}
                  alt={brand.business.name}
                  className="h-8 w-auto"
                />
              </div>
            ) : (
              <span className={`font-heading text-xl md:text-2xl font-bold tracking-tight ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}>
                {brand.business.name}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase no-underline transition-colors duration-200 ${
                  isScrolled
                    ? 'text-brand-dark hover:text-brand-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href={`tel:${brand.business.phone}`} size="sm">
              {brand.business.phone}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-brand-primary/20 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium no-underline ${
                    isScrolled ? 'text-brand-dark' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={`tel:${brand.business.phone}`} size="md" className="mt-2">
                Jetzt anrufen
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

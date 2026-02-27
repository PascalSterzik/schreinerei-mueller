import Link from 'next/link'

const variants = {
  primary: 'bg-brand-primary hover:bg-brand-primary-dark text-white shadow-brand-md hover:shadow-brand-lg',
  secondary: 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  white: 'bg-white text-brand-dark hover:bg-gray-100 shadow-brand-md',
  ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-body font-semibold
    rounded-brand
    transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2
    active:scale-[0.97]
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim()

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  )
}

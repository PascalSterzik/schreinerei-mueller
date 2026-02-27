export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      <h2 className={`mb-4 ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-brand-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

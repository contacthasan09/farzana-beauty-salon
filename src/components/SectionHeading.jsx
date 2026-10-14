export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-prose ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h-section" style={{ color: light ? '#ffffff' : '#0d0d0d' }}>{title}</h2>
      <div className="gold-rule" />
      {subtitle && (
        <p className="body-text mt-3" style={{ color: light ? 'rgba(255,255,255,0.8)' : '#6e6e6e' }}>{subtitle}</p>
      )}
    </div>
  )
}
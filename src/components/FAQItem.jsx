import { useState } from 'react'

export default function FAQItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="card-soft mb-4 cursor-pointer p-6 md:p-7"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <p className="h-card flex-1">{item.q}</p>
        <span
          style={{
            color: '#ffc000',
            fontSize: 24,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.3s ease',
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>
      {open && (
        <p className="body-text mt-4 pt-4" style={{ borderTop: '1px solid #E0E0E0' }}>
          {item.a}
        </p>
      )}
    </div>
  )
}
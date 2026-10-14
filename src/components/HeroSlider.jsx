import { useEffect, useState } from 'react'

export default function HeroSlider({ slides }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goTo = (i) => setActive(i)
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)

  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.35) 40%, rgba(13,13,13,0.85) 100%)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max">
          <div className="max-w-2xl">
            <p
              key={`eyebrow-${active}`}
              className="eyebrow mb-4 animate-fade-up"
              style={{ color: '#ffc000' }}
            >
              {slides[active].eyebrow}
            </p>
            <h1
              key={`title-${active}`}
              className="h-display mb-6 animate-fade-up"
              style={{ color: '#ffffff' }}
            >
              {slides[active].title}
            </h1>
            <p
              key={`sub-${active}`}
              className="body-text mb-8 animate-fade-up"
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17 }}
            >
              {slides[active].subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-theme">Book Appointment</a>
              <a href="/services" className="btn-outline">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#ffffff',
          cursor: 'pointer',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#ffffff',
          cursor: 'pointer',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === active ? 32 : 10,
              height: 4,
              background: i === active ? '#ffc000' : 'rgba(255,255,255,0.4)',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
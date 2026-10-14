import { IMAGES, SERVICES } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <>
      {/* ============================================================
          PAGE HERO
         ============================================================ */}
      <section className="relative py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="container-max text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: '#ffc000' }}>Our All Service List</p>
            <h1 className="h-page mb-6">Premium Services at Farzana&apos;s</h1>
            <p className="body-text max-w-prose mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              From bridal makeup and hair treatments to spa and grooming — every service is delivered
              with care, hygiene and attention to detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          ALL SERVICES WITH IMAGES
         ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="container-max">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What We Offer"
              title="Our All Service List"
              subtitle="See details on any service by getting in touch with our team."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {SERVICES.map((service, i) => (
              <Reveal key={service.name} delay={i * 40}>
                <article className="card-soft overflow-hidden group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(255,192,0,0.35), transparent)' }}
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between gap-4">
                    <p className="h-card">{service.name}</p>
                    <a
                      href="/contact"
                      className="eyebrow whitespace-nowrap"
                      style={{ color: '#ffc000', fontSize: 13 }}
                    >
                      See More →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NAIL STYLING CTA
         ============================================================ */}
      <section className="py-20 md:py-28" style={{ background: '#f9f3f0' }}>
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={IMAGES.hairExtension}
              alt="Nail styling"
              className="w-full h-[440px] object-cover"
              style={{ borderRadius: 10, boxShadow: 'rgba(0, 38, 52, 0.06) 0px 6px 20px 0px' }}
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Nail Styling"
              title="Experience the Magic of Our Nail Styling Services"
            />
            <p className="body-text mt-6 mb-4">
              We are dedicated to delivering exceptional results and ensuring your nails make a bold
              and beautiful statement.
            </p>
            <div className="space-y-3 mt-6">
              <p className="body-text"><strong>Working Hours:</strong> Friday – Thursday 10:00 AM – 09:00 PM</p>
              <p className="body-text"><strong>Call:</strong> +880 1761-926788</p>
            </div>
            <Button to="/contact" variant="theme" className="mt-8">Make An Appointment</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
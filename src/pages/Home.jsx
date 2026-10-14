import { IMAGES, HERO_SLIDES, STATS, SERVICES, PRODUCTS, REVIEWS, CONTACT } from '../data/content'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import StatCard from '../components/StatCard'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import EnquiryForm from '../components/EnquiryForm'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO SLIDER
         ============================================================ */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* ============================================================
          ABOUT US INTRO
         ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow mb-5">About Us</p>
            <h2 className="h-section mb-6">We Are Put Beauty Above Everything</h2>
            <p className="body-text mb-5">
              We are dedicated to providing a memorable experience for each guest through exceptional
              and excellent service. We will go the extra mile to accomplish this mission with
              passion, utmost professionalism and courtesy.
            </p>
            <p className="body-text mb-8">
              At Farzana&apos;s Deluxe Beauty Salon our mission is to inspire every client in achieve
              her personal best through our personal best. We believe, there is something beautiful
              in everyone. It would be our dream, to make your dreams come true.
            </p>
            <Button to="/about" variant="outline">More About Us</Button>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <img
                src={IMAGES.about}
                alt="Farzana's Deluxe Beauty Salon"
                className="w-full h-[520px] object-cover"
                style={{ borderRadius: 10, boxShadow: 'rgba(0, 38, 52, 0.06) 0px 6px 20px 0px' }}
              />
              <div
                className="absolute -bottom-6 -left-6"
                style={{
                  background: '#ffc000',
                  color: '#ffffff',
                  padding: '24px 32px',
                  borderRadius: 10,
                  boxShadow: 'rgba(4, 6, 66, 0.1) 0px 2px 14px 0px',
                }}
              >
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, fontWeight: 700, lineHeight: 1 }}>
                  10+
                </p>
                <p style={{ fontSize: 14, marginTop: 4 }}>Years Experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          STATS
         ============================================================ */}
      <section className="py-16" style={{ background: '#f9f3f0' }}>
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================
          SERVICES PREVIEW (with images)
         ============================================================ */}
      <section className="py-20 md:py-32">
        <div className="container-max">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Premium Services"
              title="Professional Hair and Skin Care Services"
              subtitle="You Get More Services — Explore Now"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.name} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="theme">View All Services</Button>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US
         ============================================================ */}
      <section className="py-20 md:py-32" style={{ background: '#f9f3f0' }}>
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={IMAGES.choose}
              alt="Why choose us"
              className="w-full h-[440px] object-cover"
              style={{ borderRadius: 10 }}
            />
          </Reveal>

          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="We Are Experienced In Making You More Beautiful"
            />
            <p className="eyebrow mt-6 mb-4" style={{ color: '#ffc000' }}>Get Beauty Treatments Here Now</p>
            <p className="body-text mb-5">
              We have carefully designed our salon to provide a relaxing and welcoming atmosphere for
              our clients. As soon as you step through our door, you&apos;ll be greeted with a warm,
              friendly ambiance that allows you to unwind and escape from the hustle and bustle of
              daily life.
            </p>
            <p className="body-text mb-8">
              Your health &amp; safety are of the utmost importance to us, and we focus on hygiene.
            </p>
            <Button to="/contact" variant="theme">Book Now</Button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          PRODUCTS PREVIEW
         ============================================================ */}
      <section className="py-20 md:py-32">
        <div className="container-max">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Products"
              title="Our Latest Products"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
         ============================================================ */}
      <section className="py-20 md:py-32" style={{ background: '#f9f3f0' }}>
        <div className="container-max">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Testimonials"
              title="Our Customer Feedback"
            />
          </Reveal>

          <div className="mt-14 max-w-prose mx-auto">
            {REVIEWS.map((review, i) => (
              <Reveal key={i}>
                <div className="card-soft p-10 text-center">
                  <p className="body-text italic mb-6">&ldquo;{review.text}&rdquo;</p>
                  <p className="eyebrow" style={{ color: '#ffc000' }}>{review.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT TEASER + FORM
         ============================================================ */}
      <section className="py-20 md:py-32">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact Us"
              title="Need to Make An Enquiry"
              subtitle="Have an enquiry or some feedback for us? Fill out the form below to contact our team."
            />

            <div className="mt-10 space-y-6">
              <div>
                <p className="eyebrow mb-2">Our Address</p>
                {CONTACT.branches.map((b) => (
                  <p key={b} className="body-text">{b}</p>
                ))}
              </div>
              <div>
                <p className="eyebrow mb-2">Phone Number</p>
                <p className="body-text">Mobile: {CONTACT.phone}</p>
                <p className="body-text">Email: {CONTACT.email}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Hours of Operation</p>
                <p className="body-text">{CONTACT.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
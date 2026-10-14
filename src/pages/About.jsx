import { IMAGES, STATS, REVIEWS } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="container-max text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: '#ffc000' }}>About Us</p>
            <h1 className="h-page mb-6">We Are Put Beauty Above Everything</h1>
          </Reveal>
        </div>
      </section>

      {/* Intro with image */}
      <section className="py-20 md:py-28">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={IMAGES.about}
              alt="About Farzana's Deluxe Beauty Salon"
              className="w-full h-[520px] object-cover"
              style={{ borderRadius: 10, boxShadow: 'rgba(0, 38, 52, 0.06) 0px 6px 20px 0px' }}
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Our Story"
              title="A Space Built Around You"
            />
            <p className="body-text mt-6 mb-4">
              We are dedicated to providing a memorable experience for each guest through exceptional and excellent service. We will go the extra mile to accomplish this mission with passion, utmost professionalism and courtesy.
            </p>
            <p className="body-text mb-4">
              At Farzana&apos;s Deluxe Beauty Salon our mission is to inspire every client in achieve her personal best through our personal best. We believe, there is something beautiful in everyone. It would be our dream, to make your dreams come true.
            </p>
            <Button to="/contact" variant="outline" className="mt-4">Discover More</Button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#f9f3f0' }}>
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bridal expertise */}
      <section className="py-20 md:py-28">
        <div className="container-max max-w-prose mx-auto">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Why Choose Us"
              title="10+ Years of Impeccable Experience in Bridal Makeup"
            />
            <p className="body-text mt-6">
              Wedding is not just an event, it is a dreamy chapter of your life. With our 10 years of experience, we are committed to making your day perfect and memorable. The beauty of your personality will emerge with every touch of color and gentle touch of the brush.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: 'The Perfection of Perfect Beauty',
                desc: 'Every moment of your wedding — from the lights of the ceremony to the sparkle of the reception — makes you look absolutely beautiful.',
              },
              {
                title: 'Exclusive Style',
                desc: 'Our makeup services are specially customized to suit your preferences, personality, and needs. Your style should be as unique as you are.',
              },
              {
                title: 'Beauty That Lasts All Day Long',
                desc: 'Our high-quality products and professional techniques ensure that your makeup stays fresh and attractive all day long.',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="card-soft p-7 h-full">
                  <div className="gold-rule" />
                  <h3 className="h-card mb-3">{card.title}</h3>
                  <p className="body-text text-sm">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28" style={{ background: '#f9f3f0' }}>
        <div className="container-max">
          <Reveal>
            <SectionHeading align="center" eyebrow="Testimonials" title="Our Customer Feedback" />
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
    </>
  )
}
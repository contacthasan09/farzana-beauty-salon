import { CONTACT, FAQ,  } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import EnquiryForm from '../components/EnquiryForm'
import FAQItem from '../components/FAQItem'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="container-max text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: '#ffc000' }}>Our Contact Information</p>
            <h1 className="h-page mb-6">Get In Touch</h1>
            <p className="body-text max-w-prose mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Have an enquiry or some feedback for us? Fill out the form below to contact our team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 md:py-28">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <SectionHeading eyebrow="Reach Us" title="Our Contact Information" />

            <div className="mt-10 space-y-8">
              <div>
                <p className="eyebrow mb-3">Our Address</p>
                {CONTACT.branches.map((b) => (
                  <p key={b} className="body-text">{b}</p>
                ))}
              </div>
              <div>
                <p className="eyebrow mb-3">Phone Number</p>
                <p className="body-text">
                  Mobile: <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
                </p>
                <p className="body-text">
                  Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Hours of Operation</p>
                <p className="body-text">{CONTACT.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ background: '#f9f3f0' }}>
        <div className="container-max max-w-prose mx-auto">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Frequently Asked Any Question"
              title="Unveil Your True Beauty At Our Parlour"
            />
          </Reveal>
          <div className="mt-12">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <FAQItem item={item} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
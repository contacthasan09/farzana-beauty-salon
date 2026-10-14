import { Link } from 'react-router-dom'
import { LOGO, CONTACT } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0d0d0d', color: 'rgba(255,255,255,0.7)' }}>
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={LOGO}
              alt="Farzana's Deluxe Beauty Salon"
              className="h-12 w-auto mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: '26px' }}>
              Centric applications productize front end portals visualize front end is results and value added.
            </p>
            <p className="eyebrow mt-6" style={{ color: '#ffc000' }}>We Are Available:</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{CONTACT.hours}</p>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: '#ffc000' }}>Quick link</h4>
            <ul className="space-y-3">
              {['Our Services', 'About Us', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link to="/services" className="footer-link">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: '#ffc000' }}>Contact Details</h4>
            <div className="space-y-5">
              <div>
                <p style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }}>Phone Number</p>
                <a href={`tel:${CONTACT.phoneRaw}`} className="footer-link">{CONTACT.phone}</a>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }}>Email Address</p>
                <a href={`mailto:${CONTACT.email}`} className="footer-link">{CONTACT.email}</a>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }}>Office Location</p>
                {CONTACT.branches.map((b) => (
                  <p key={b} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 4 }}>{b}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}
        >
          <p>© 2022-{year} FDBS All Rights Reserved.</p>
          <p>services : Best Service</p>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover { color: #ffc000; }
      `}</style>
    </footer>
  )
}
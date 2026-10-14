import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <article className="card-soft overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(255,192,0,0.35), transparent)' }}
        />
      </div>
      <div className="p-6 flex items-center justify-between gap-4">
        <p className="h-card">{service.name}</p>
        <Link
          to="/contact"
          className="eyebrow whitespace-nowrap"
          style={{ color: '#ffc000', fontSize: 13 }}
        >
          See More →
        </Link>
      </div>
    </article>
  )
}
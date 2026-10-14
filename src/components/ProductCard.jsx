import Button from './Button'

export default function ProductCard({ product }) {
  return (
    <article className="card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className="absolute top-4 left-4"
            style={{
              background: '#ffc000',
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 600,
              padding: '4px 12px',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="h-card mb-2">{product.name}</h3>
        <p className="eyebrow" style={{ color: '#ffc000', marginBottom: 16 }}>{product.price}</p>
        <Button to="/contact" variant="theme" style={{ padding: '14px 24px', fontSize: 13 }}>
          Order Now
        </Button>
      </div>
    </article>
  )
}
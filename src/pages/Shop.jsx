import { PRODUCTS } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

export default function Shop() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-20 md:py-28" style={{ background: '#0d0d0d' }}>
        <div className="container-max text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: '#ffc000' }}>Our Products</p>
            <h1 className="h-page mb-6">Shop Our Collection</h1>
            <p className="body-text max-w-prose mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Hand-picked skincare, haircare and makeup essentials — available at both Uttara branches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 md:py-28">
        <div className="container-max">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Latest Products"
              title="Featured This Month"
              subtitle="Call or message us on WhatsApp to reserve any product before your visit."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default function StatCard({ value, suffix, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 64, fontWeight: 700, color: '#ffc000', lineHeight: 1 }}>
        {value}
        <span style={{ fontSize: 32 }}>{suffix}</span>
      </p>
      <p style={{ fontSize: 14, color: '#6e6e6e', marginTop: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
        {label}
      </p>
    </div>
  )
}
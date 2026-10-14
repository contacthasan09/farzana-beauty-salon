import { useState } from 'react'
import { SERVICES } from '../data/content'

export default function EnquiryForm({ className = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <form className={`card-soft p-8 ${className}`} onSubmit={onSubmit}>
      <h3 className="h-sub mb-6">Send Messages</h3>
      <div className="space-y-4">
        <input
          className="input"
          type="text"
          placeholder="Your Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="input"
          type="tel"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <select
          className="input"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          required
        >
          <option value="">Select Service</option>
          {SERVICES.map((s) => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
        </select>
        <textarea
          className="input"
          rows={5}
          placeholder="Your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="btn-theme w-full">
          {sent ? 'Message Sent ✓' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
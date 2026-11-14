import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 160, textAlign: 'center', minHeight: '60vh' }}>
      <div className="container">
        <h1>404</h1>
        <p style={{ margin: '12px 0 24px' }}>Page not found.</p>
        <Link to="/" className="btn-gold">Back to Home</Link>
      </div>
    </section>
  )
}

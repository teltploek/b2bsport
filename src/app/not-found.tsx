import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '1rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Page not found
            </h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Sorry, but the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link
                href="/da"
                style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
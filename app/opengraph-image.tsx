import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'BetterForm - Create Beautiful Forms'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          <span style={{ color: '#7c3aed' }}>Better</span>
          <span style={{ color: '#0f172a', fontWeight: 800 }}>Form</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: '#64748b',
            fontWeight: 500,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Create beautiful forms in minutes
        </div>

        {/* Beta badge */}
        <div
          style={{
            marginTop: 40,
            padding: '12px 24px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: 100,
            fontSize: 20,
            color: '#7c3aed',
            fontWeight: 600,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          ✨ Private Beta
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

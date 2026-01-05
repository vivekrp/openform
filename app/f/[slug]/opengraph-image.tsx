import { ImageResponse } from 'next/og'
import { createClient } from '@/lib/supabase/server'

export const runtime = 'edge'

export const alt = 'BetterForm'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Fetch form title
  let formTitle = 'Form'
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('forms')
      .select('title')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
    
    const form = data as { title: string } | null
    if (form?.title) {
      formTitle = form.title
    }
  } catch {
    // Use default title if fetch fails
  }

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
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          <span style={{ color: '#7c3aed' }}>Better</span>
          <span style={{ color: '#0f172a', fontWeight: 800 }}>Form</span>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: 40,
            marginBottom: 40,
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
            borderRadius: 2,
          }}
        />

        {/* Form Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: '#1e293b',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.3,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {formTitle}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

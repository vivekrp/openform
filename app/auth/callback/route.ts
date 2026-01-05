import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
    
    // Check if the error is because signups are disabled
    // Supabase returns "Signups not allowed for this instance" or similar
    if (error.message?.toLowerCase().includes('signup') || 
        error.message?.toLowerCase().includes('sign up') ||
        error.code === 'signup_disabled') {
      // Redirect new users to the waitlist form
      return NextResponse.redirect(`${origin}/f/waitlist?from=signup`)
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=auth`)
}

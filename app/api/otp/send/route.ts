import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 minutes

    // Delete any existing unused OTPs for this email first
    await supabase
        .from('email_otps')
        .delete()
        .eq('email', email)
        .eq('used', false)

    // Store the new code
    const { error: dbError } = await supabase
        .from('email_otps')
        .insert({ email, code, expires_at: expiresAt, used: false })

    if (dbError) {
        console.error('OTP DB error:', dbError)
        return NextResponse.json({ error: 'Failed to generate code', detail: dbError.message }, { status: 500 })
    }

    // Send via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

    if (!resendApiKey) {
        console.error('RESEND_API_KEY is not set')
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: `BARB <${fromEmail}>`,
            to: email,
            subject: 'Your BARB verification code',
            html: `
                <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px">
                    <h2 style="color:#1a3a61;margin-bottom:8px">Verify your email</h2>
                    <p style="color:#4b5563;font-size:15px;margin-bottom:24px">
                        Use the code below to complete your BARB application. It expires in <strong>10 minutes</strong>.
                    </p>
                    <div style="background:#f3f4f6;border-radius:12px;padding:28px;text-align:center;margin-bottom:24px">
                        <span style="font-size:44px;font-weight:bold;letter-spacing:16px;color:#1a3a61">${code}</span>
                    </div>
                    <p style="color:#9ca3af;font-size:13px">
                        If you did not request this, you can safely ignore this email.
                    </p>
                </div>
            `,
        }),
    })

    if (!res.ok) {
        const body = await res.json()
        console.error('Resend error:', body)
        return NextResponse.json({ error: 'Failed to send email', detail: body }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}

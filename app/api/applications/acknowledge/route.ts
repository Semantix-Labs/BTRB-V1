import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { firstName, surname, email } = await req.json()

    if (!firstName || !surname || !email) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

    if (!resendApiKey) {
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const fullName = `${firstName} ${surname}`

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: `Behaviour Analysis Registration Board <${fromEmail}>`,
            to: email,
            reply_to: 'info@barb.lk',
            subject: 'Application Acknowledgement – BARB',
            html: `
                <div style="font-family:Georgia,'Times New Roman',serif;max-width:600px;margin:0 auto;padding:40px 32px;background:#ffffff;color:#1a1a1a">

                    <!-- Header -->
                    <div style="border-bottom:3px solid #0A1E3B;padding-bottom:20px;margin-bottom:32px">
                        <p style="margin:0;font-size:13px;font-weight:600;color:#C1A033;letter-spacing:1px;text-transform:uppercase">
                            Behaviour Analysis Registration Board
                        </p>
                        <h1 style="margin:6px 0 0;font-size:22px;color:#0A1E3B;font-weight:700">
                            Application Acknowledgement
                        </h1>
                    </div>

                    <!-- Salutation -->
                    <p style="font-size:15px;line-height:1.7;margin:0 0 20px">Dear ${fullName},</p>

                    <!-- Body -->
                    <p style="font-size:15px;line-height:1.8;margin:0 0 16px">
                        Thank you for submitting your application to the Behaviour Analysis Registration Board (BARB).
                    </p>

                    <p style="font-size:15px;line-height:1.8;margin:0 0 16px">
                        We acknowledge receipt of your application and supporting documentation. Your application will now undergo a review process to verify eligibility and assess all submitted materials against the relevant registration requirements.
                    </p>

                    <p style="font-size:15px;line-height:1.8;margin:0 0 16px">
                        Should any additional information or documentation be required, we will contact you directly. You will also be notified once the Board has reached a decision regarding your application.
                    </p>

                    <p style="font-size:15px;line-height:1.8;margin:0 0 32px">
                        Please note that the review process may take approximately one to two business months, depending on the volume and complexity of applications received.
                    </p>

                    <!-- Divider -->
                    <div style="border-top:1px solid #e5e7eb;padding-top:24px;margin-bottom:24px">
                        <p style="font-size:15px;line-height:1.8;margin:0 0 16px">
                            We appreciate your patience and thank you for your interest in obtaining professional recognition through BARB.
                        </p>

                        <p style="font-size:15px;line-height:1.8;margin:0 0 4px">Kind regards,</p>
                        <p style="font-size:15px;font-weight:700;color:#0A1E3B;margin:0">
                            Behaviour Analysis Registration Board (BARB)
                        </p>
                    </div>

                    <!-- Footer -->
                    <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin-top:32px">
                        <p style="font-size:12px;color:#6b7280;margin:0 0 4px">
                            For enquiries, please reply to this email or contact us at
                            <a href="mailto:info@barb.lk" style="color:#0A1E3B;font-weight:600">info@barb.lk</a>.
                        </p>
                        <p style="font-size:12px;color:#9ca3af;margin:0">
                            This is an automated acknowledgement. Please do not reply directly to this email address.
                        </p>
                    </div>
                </div>
            `,
        }),
    })

    if (!res.ok) {
        const body = await res.text()
        console.error('Resend error:', body)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}

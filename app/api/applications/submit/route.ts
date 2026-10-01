import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
    const body = await req.json()

    // Basic required field check
    if (!body.first_name || !body.surname || !body.email) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Anon client — RLS policy "anon_can_submit_application" must allow INSERT
    const db = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await db.from('therapist_applications').insert([{
        review_status: 'pending',

        first_name: body.first_name,
        surname: body.surname,
        date_of_birth: body.date_of_birth,
        address_line: body.address_line,
        city: body.city,
        post_code: body.post_code,
        phone: body.phone,
        phone_optional: body.phone_optional,
        email: body.email,
        nic_or_passport: body.nic_or_passport,
        nic_front_file_name: body.nic_front_file_name,
        nic_back_file_name: body.nic_back_file_name,

        current_rbt: body.current_rbt ?? false,
        rbt_certification_no: body.rbt_certification_no,
        current_ibt: body.current_ibt ?? false,
        ibt_certification_no: body.ibt_certification_no,
        expired_rbt: body.expired_rbt ?? false,
        expired_rbt_file_name: body.expired_rbt_file_name,
        voluntary_inactive_rbt: body.voluntary_inactive_rbt ?? false,
        voluntary_inactive_rbt_certification_no: body.voluntary_inactive_rbt_certification_no,
        voluntary_inactive_rbt_reactivation_date: body.voluntary_inactive_rbt_reactivation_date,
        expired_ibt: body.expired_ibt ?? false,
        expired_ibt_file_name: body.expired_ibt_file_name,
        practicing_behavior_therapist: body.practicing_behavior_therapist ?? false,
        other_aba_qualifications: body.other_aba_qualifications ?? false,
        behaviour_analyst: body.behaviour_analyst ?? false,

        institution: body.institution,
        period_of_education: body.period_of_education,
        qualifications: body.qualifications,
        education_file_name: body.education_file_name,
        work_place_name: body.work_place_name,
        work_place_address: body.work_place_address,
        employment_period: body.employment_period,
        designation: body.designation,
        full_time_part_time: body.full_time_part_time,
        explanation_of_services: body.explanation_of_services,
        work_experience_file_name: body.work_experience_file_name,
        cv_file_name: body.cv_file_name,
        insurance_file_name: body.insurance_file_name,

        resident: body.resident ?? false,
        agree_objectives: body.agree_objectives ?? false,
        agree_maintenance: body.agree_maintenance ?? false,
        agree_license: body.agree_license ?? false,
        agree_update: body.agree_update ?? false,
        agree_malpractice: body.agree_malpractice ?? false,
        agree_ethics: body.agree_ethics ?? false,
        agree_police_clearance: body.agree_police_clearance ?? false,
    }])

    if (error) {
        console.error('Application insert error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    await notifyAdmin(body)

    return NextResponse.json({ success: true })
}

function getSpecialization(body: Record<string, unknown>) {
    const specs: string[] = []
    if (body.current_rbt) specs.push('RBT')
    if (body.current_ibt) specs.push('IBT')
    if (body.practicing_behavior_therapist) specs.push('Behavior Therapist')
    if (body.behaviour_analyst) specs.push('Behavior Analyst')
    if (body.other_aba_qualifications) specs.push('Other ABA')
    return specs.join(', ') || 'Not specified'
}

async function notifyAdmin(body: Record<string, any>) {
    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL ?? 'semantixlabs@gmail.com'

    if (!resendApiKey) {
        console.error('Admin notification skipped — RESEND_API_KEY not set')
        return
    }

    const fullName = `${body.first_name} ${body.surname}`
    const reviewUrl = 'https://barb.lk/admin/applications'

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: `BARB Website <${fromEmail}>`,
                to: adminEmail,
                subject: `New Application: ${fullName}`,
                html: `
                    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#ffffff">
                        <div style="border-left:4px solid #1a3a61;padding-left:16px;margin-bottom:28px">
                            <h2 style="color:#1a3a61;margin:0 0 4px">New Therapist Application</h2>
                            <p style="color:#6b7280;margin:0;font-size:14px">Submitted via barb.lk application form</p>
                        </div>

                        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
                            <tr style="background:#f9fafb">
                                <td style="padding:10px 14px;font-weight:600;color:#374151;width:140px">Name</td>
                                <td style="padding:10px 14px;color:#111827">${fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 14px;font-weight:600;color:#374151">Email</td>
                                <td style="padding:10px 14px;color:#111827"><a href="mailto:${body.email}" style="color:#1a3a61">${body.email}</a></td>
                            </tr>
                            <tr style="background:#f9fafb">
                                <td style="padding:10px 14px;font-weight:600;color:#374151">Phone</td>
                                <td style="padding:10px 14px;color:#111827">${body.phone ?? '—'}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 14px;font-weight:600;color:#374151">Address</td>
                                <td style="padding:10px 14px;color:#111827">${[body.address_line, body.city, body.post_code].filter(Boolean).join(', ') || '—'}</td>
                            </tr>
                            <tr style="background:#f9fafb">
                                <td style="padding:10px 14px;font-weight:600;color:#374151">NIC / Passport</td>
                                <td style="padding:10px 14px;color:#111827">${body.nic_or_passport ?? '—'}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 14px;font-weight:600;color:#374151">Specialization</td>
                                <td style="padding:10px 14px">
                                    <span style="background:#dbeafe;color:#1e40af;padding:2px 10px;border-radius:99px;font-size:13px;font-weight:600">${getSpecialization(body)}</span>
                                </td>
                            </tr>
                            <tr style="background:#f9fafb">
                                <td style="padding:10px 14px;font-weight:600;color:#374151">Institution</td>
                                <td style="padding:10px 14px;color:#111827">${body.institution ?? '—'}</td>
                            </tr>
                        </table>

                        <a href="${reviewUrl}" style="display:inline-block;background:#1a3a61;color:#ffffff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">
                            Review Application →
                        </a>

                        <p style="color:#9ca3af;font-size:12px;margin-top:28px">
                            This is an automated notification from BARB.
                        </p>
                    </div>
                `,
            }),
        })

        if (!res.ok) {
            const detail = await res.text()
            console.error('Admin notification failed:', detail)
        }
    } catch (err) {
        console.error('Admin notification failed:', err)
    }
}

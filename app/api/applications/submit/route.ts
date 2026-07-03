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

    return NextResponse.json({ success: true })
}

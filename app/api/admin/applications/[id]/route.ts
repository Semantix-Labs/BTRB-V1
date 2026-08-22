import { NextRequest, NextResponse } from 'next/server'
import { createAuthClient, getToken } from '@/lib/supabase/admin-client'

const FILE_FIELDS = [
    'nic_front_file_name',
    'nic_back_file_name',
    'expired_rbt_file_name',
    'expired_ibt_file_name',
    'education_file_name',
    'work_experience_file_name',
    'cv_file_name',
    'insurance_file_name',
]

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const db = createAuthClient(token)

    const { data, error } = await db
        .from('therapist_applications')
        .select('*')
        .eq('id', id)
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 404 })

    // Generate 1-hour signed URLs for every file that was uploaded
    const signedUrls: Record<string, string> = {}
    await Promise.all(
        FILE_FIELDS.map(async (field) => {
            const path = data[field]
            if (!path) return
            const { data: urlData } = await db.storage
                .from('application-documents')
                .createSignedUrl(path, 86400)
            if (urlData?.signedUrl) signedUrls[field] = urlData.signedUrl
        })
    )

    return NextResponse.json({ data: { ...data, signedUrls } })
}

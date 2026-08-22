import { NextRequest, NextResponse } from 'next/server'
import { createAuthClient, getToken } from '@/lib/supabase/admin-client'

const VALID_STATUSES = ['authorized_active', 'unauthorized_inactive', 'approved_non_certified']

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const db = createAuthClient(token)

    const { data: { user } } = await db.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const { status } = await req.json()

    if (!VALID_STATUSES.includes(status)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const { data: therapist, error: fetchErr } = await db
        .from('therapists')
        .select('status')
        .eq('id', id)
        .single()

    if (fetchErr || !therapist) {
        return NextResponse.json({ error: 'Therapist not found' }, { status: 404 })
    }

    const directory_visible = status === 'authorized_active'

    const { error: updateErr } = await db
        .from('therapists')
        .update({ status, directory_visible })
        .eq('id', id)

    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 })
    return NextResponse.json({ success: true })
}

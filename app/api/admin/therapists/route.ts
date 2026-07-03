import { NextRequest, NextResponse } from 'next/server'
import { createAuthClient, getToken } from '@/lib/supabase/admin-client'

export async function GET(req: NextRequest) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const db = createAuthClient(token)
    const { data, error } = await db
        .from('therapists')
        .select('id, first_name, surname, email, registration_number, city, designation, status, directory_visible, created_at')
        .order('created_at', { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ data })
}

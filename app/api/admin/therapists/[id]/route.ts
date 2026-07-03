import { NextRequest, NextResponse } from 'next/server'
import { createAuthClient, getToken } from '@/lib/supabase/admin-client'
import { getSupabaseAdmin } from '@/lib/supabase/server'

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // Verify the caller is a valid authenticated user
    const { data: { user } } = await createAuthClient(token).auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params

    // Use service role to bypass RLS for the delete
    const { error } = await getSupabaseAdmin()
        .from('therapists')
        .delete()
        .eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true })
}

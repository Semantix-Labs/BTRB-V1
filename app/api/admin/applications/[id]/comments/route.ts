import { NextRequest, NextResponse } from 'next/server'
import { createAuthClient, getToken } from '@/lib/supabase/admin-client'
import { createClient } from '@supabase/supabase-js'

async function getAdminUser(token: string) {
    const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
    const { data: { user } } = await client.auth.getUser(token)
    return user
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const db = createAuthClient(token)

    const { data, error } = await db
        .from('application_comments')
        .select('*')
        .eq('application_id', id)
        .order('created_at', { ascending: true })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ data })
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = getToken(req)
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const { comment } = await req.json()

    if (!comment?.trim()) {
        return NextResponse.json({ error: 'Comment cannot be empty' }, { status: 400 })
    }

    const user = await getAdminUser(token)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const adminEmail = user.email ?? 'unknown'
    const adminName = (user.user_metadata?.full_name as string) ?? adminEmail

    const db = createAuthClient(token)

    const { data, error } = await db
        .from('application_comments')
        .insert({
            application_id: id,
            comment: comment.trim(),
            admin_email: adminEmail,
            admin_name: adminName,
        })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ data })
}

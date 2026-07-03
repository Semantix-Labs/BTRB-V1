'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Loader2, LogOut, ShieldCheck, LayoutDashboard, MessageSquare, Users } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [checking, setChecking] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session && pathname !== '/admin/login') {
                router.replace('/admin/login');
            } else if (session) {
                setUserEmail(session.user.email ?? '');
                // Fetch unread inquiry count
                supabase
                    .from('inquiries')
                    .select('id', { count: 'exact', head: true })
                    .eq('status', 'new')
                    .then(({ count }) => setUnreadCount(count ?? 0));
            }
            setChecking(false);
        });
    }, [pathname, router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/admin/login');
    };

    if (checking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            </div>
        );
    }

    if (pathname === '/admin/login' || pathname === '/admin/reset-password') return <>{children}</>;

    const navLinks = [
        { href: '/admin', label: 'Applications', icon: <LayoutDashboard className="w-4 h-4" /> },
        { href: '/admin/therapists', label: 'Therapists', icon: <Users className="w-4 h-4" /> },
        { href: '/admin/inquiries', label: 'Inquiries', icon: <MessageSquare className="w-4 h-4" />, badge: unreadCount },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top nav */}
            <header className="bg-[var(--color-primary)] text-white shadow">
                <div className="max-w-7xl mx-auto px-6 h-14 grid grid-cols-3 items-center">
                    {/* Left — branding */}
                    <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-5 h-5 opacity-80" />
                        <span className="font-bold text-sm tracking-wide">BARB Admin</span>
                    </div>

                    {/* Centre — nav tabs */}
                    <nav className="flex items-center justify-center gap-1">
                        {navLinks.map(({ href, label, icon, badge }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                        isActive
                                            ? 'bg-white/15 text-white'
                                            : 'text-white/60 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {icon}
                                    {label}
                                    {badge != null && badge > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5">
                                            {badge > 9 ? '9+' : badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right — user + logout */}
                    <div className="flex items-center justify-end gap-3 text-sm">
                        <span className="text-white/50 text-xs truncate max-w-[160px]">{userEmail}</span>
                        <div className="w-px h-4 bg-white/20" />
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
                        >
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        </div>
    );
}

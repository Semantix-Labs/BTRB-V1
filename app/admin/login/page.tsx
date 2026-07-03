'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Loader2, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

type View = 'login' | 'forgot' | 'forgot_sent';

export default function AdminLoginPage() {
    const router = useRouter();
    const [view, setView] = useState<View>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);
        if (error) setError(error.message);
        else router.push('/admin');
    };

    const handleForgot = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const redirectTo = `${window.location.origin}/admin/reset-password`;
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
        setLoading(false);
        if (error) setError(error.message);
        else setView('forgot_sent');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg border border-gray-100 p-8">
                {/* Branding */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-[var(--color-primary)]">BARB Admin</h1>
                        <p className="text-xs text-gray-500">Restricted access</p>
                    </div>
                </div>

                {/* ── Sign in ── */}
                {view === 'login' && (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                                placeholder="admin@barb.lk"
                            />
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <button
                                    type="button"
                                    onClick={() => { setError(''); setView('forgot'); }}
                                    className="text-xs text-[var(--color-primary)] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                            />
                        </div>

                        {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 bg-[var(--color-primary)] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[var(--color-primary)]/90 transition-colors disabled:opacity-60"
                        >
                            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</> : 'Sign in'}
                        </button>
                    </form>
                )}

                {/* ── Forgot password ── */}
                {view === 'forgot' && (
                    <form onSubmit={handleForgot} className="space-y-4">
                        <button
                            type="button"
                            onClick={() => { setError(''); setView('login'); }}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 mb-2"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to sign in
                        </button>

                        <div>
                            <h2 className="text-base font-semibold text-gray-900 mb-1">Reset your password</h2>
                            <p className="text-sm text-gray-500">Enter your admin email and we&apos;ll send you a reset link.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                                placeholder="admin@barb.lk"
                            />
                        </div>

                        {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 bg-[var(--color-primary)] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[var(--color-primary)]/90 transition-colors disabled:opacity-60"
                        >
                            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : 'Send reset link'}
                        </button>
                    </form>
                )}

                {/* ── Sent confirmation ── */}
                {view === 'forgot_sent' && (
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-7 h-7 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-base font-semibold text-gray-900">Check your email</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                A password reset link has been sent to <strong>{email}</strong>. Click the link in the email to set a new password.
                            </p>
                        </div>
                        <button
                            onClick={() => { setError(''); setView('login'); }}
                            className="text-sm text-[var(--color-primary)] hover:underline"
                        >
                            Back to sign in
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

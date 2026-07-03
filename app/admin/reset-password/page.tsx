'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Loader2, ShieldCheck, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);  // true once Supabase picks up the recovery session
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Supabase Auth emits a PASSWORD_RECOVERY event when the page loads with
        // a valid recovery token in the URL hash. We wait for that before showing the form.
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') setReady(true);
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }
        if (password !== confirm) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.updateUser({ password });
        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setTimeout(() => router.push('/admin/login'), 3000);
        }
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
                        <p className="text-xs text-gray-500">Set new password</p>
                    </div>
                </div>

                {success ? (
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-7 h-7 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-base font-semibold text-gray-900">Password updated</h2>
                            <p className="text-sm text-gray-500 mt-1">Your password has been changed. Redirecting to sign in…</p>
                        </div>
                    </div>
                ) : !ready ? (
                    <div className="text-center space-y-4 py-4">
                        <Loader2 className="w-6 h-6 animate-spin text-gray-400 mx-auto" />
                        <p className="text-sm text-gray-500">Verifying reset link…</p>
                        <p className="text-xs text-gray-400">
                            If nothing happens, the link may have expired.{' '}
                            <a href="/admin/login" className="text-[var(--color-primary)] hover:underline">
                                Request a new one.
                            </a>
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleReset} className="space-y-4">
                        <div>
                            <h2 className="text-base font-semibold text-gray-900 mb-1">Choose a new password</h2>
                            <p className="text-sm text-gray-500">Must be at least 8 characters.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoFocus
                                    className="w-full px-4 py-2.5 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
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
                            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Updating…</> : 'Update password'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

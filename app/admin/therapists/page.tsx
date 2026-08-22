'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Loader2, Search, Trash2, X, AlertTriangle, Users } from 'lucide-react';

interface TherapistRow {
    id: string;
    first_name: string;
    surname: string;
    email: string;
    registration_number: string | null;
    city: string | null;
    designation: string | null;
    status: 'authorized_active' | 'unauthorized_inactive' | 'approved_non_certified';
    directory_visible: boolean;
}

const STATUS_LABELS: Record<string, string> = {
    authorized_active: 'Active',
    unauthorized_inactive: 'Inactive',
    approved_non_certified: 'Approved Professional',
};

const STATUS_STYLES: Record<string, string> = {
    authorized_active: 'bg-blue-100 text-blue-800 border-blue-300',
    unauthorized_inactive: 'bg-amber-100 text-amber-800 border-amber-300',
    approved_non_certified: 'bg-gray-100 text-gray-800 border-gray-300',
};

const DOT_STYLES: Record<string, string> = {
    authorized_active: 'bg-blue-600',
    unauthorized_inactive: 'bg-amber-500',
    approved_non_certified: 'bg-gray-500',
};

const CHANGEABLE_OPTIONS = [
    { value: 'authorized_active', label: 'Active' },
    { value: 'unauthorized_inactive', label: 'Inactive' },
    { value: 'approved_non_certified', label: 'Approved Professional' },
];

function StatusCell({
    therapist,
    token,
    onUpdated,
}: {
    therapist: TherapistRow;
    token: string;
    onUpdated: (id: string, newStatus: TherapistRow['status']) => void;
}) {
    const [loading, setLoading] = useState(false);

    const handleChange = async (newStatus: string) => {
        if (newStatus === therapist.status) return;
        setLoading(true);
        const res = await fetch(`/api/admin/therapists/${therapist.id}/status`, {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });
        setLoading(false);
        if (res.ok) {
            onUpdated(therapist.id, newStatus as TherapistRow['status']);
        } else {
            const { error } = await res.json();
            alert(`Failed to update: ${error}`);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-400 shrink-0" />}
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_STYLES[therapist.status]}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${DOT_STYLES[therapist.status]}`} />
                <select
                    value={therapist.status}
                    disabled={loading}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-transparent border-none outline-none cursor-pointer text-xs font-medium appearance-none"
                >
                    {CHANGEABLE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

function DeleteModal({
    therapist,
    onConfirm,
    onCancel,
    loading,
}: {
    therapist: TherapistRow;
    onConfirm: () => void;
    onCancel: () => void;
    loading: boolean;
}) {
    const [typed, setTyped] = useState('');
    const fullName = `${therapist.first_name} ${therapist.surname}`;
    const matches = typed.trim() === fullName;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl border border-red-100 w-full max-w-md mx-4 p-6">
                <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 text-base">Delete Therapist</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                            This will permanently remove <strong>{fullName}</strong> from the registry and directory. This cannot be undone.
                        </p>
                    </div>
                    <button onClick={onCancel} className="ml-auto text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Type <span className="font-mono bg-gray-100 px-1 rounded text-red-700">{fullName}</span> to confirm
                    </label>
                    <input
                        type="text"
                        value={typed}
                        onChange={(e) => setTyped(e.target.value)}
                        placeholder={fullName}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                        autoFocus
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={!matches || loading}
                        className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        Delete Permanently
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function TherapistsAdminPage() {
    const [therapists, setTherapists] = useState<TherapistRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [token, setToken] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<TherapistRow | null>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) return;
            const t = session.access_token;
            setToken(t);

            const res = await fetch('/api/admin/therapists', {
                headers: { Authorization: `Bearer ${t}` },
            });
            const json = await res.json();
            if (res.ok) setTherapists(json.data ?? []);
            else setError(json.error ?? 'Failed to load therapists');
            setLoading(false);
        };
        load();
    }, []);

    const handleStatusUpdated = useCallback((id: string, newStatus: TherapistRow['status']) => {
        setTherapists((prev) =>
            prev.map((t) => t.id === id ? { ...t, status: newStatus, directory_visible: newStatus === 'authorized_active' } : t)
        );
    }, []);

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleteLoading(true);
        const res = await fetch(`/api/admin/therapists/${deleteTarget.id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        setDeleteLoading(false);
        if (res.ok) {
            setTherapists((prev) => prev.filter((t) => t.id !== deleteTarget.id));
            setDeleteTarget(null);
        } else {
            const { error } = await res.json();
            alert(`Failed to delete: ${error}`);
        }
    };

    const filtered = therapists.filter((t) => {
        const matchStatus = statusFilter === 'all' || t.status === statusFilter;
        const q = search.toLowerCase();
        const matchSearch = !q ||
            `${t.first_name} ${t.surname}`.toLowerCase().includes(q) ||
            t.email.toLowerCase().includes(q) ||
            (t.registration_number ?? '').toLowerCase().includes(q) ||
            (t.city ?? '').toLowerCase().includes(q);
        return matchStatus && matchSearch;
    });

    const counts = {
        all: therapists.length,
        authorized_active: therapists.filter((t) => t.status === 'authorized_active').length,
        unauthorized_inactive: therapists.filter((t) => t.status === 'unauthorized_inactive').length,
        approved_non_certified: therapists.filter((t) => t.status === 'approved_non_certified').length,
    };

    return (
        <>
            {deleteTarget && (
                <DeleteModal
                    therapist={deleteTarget}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    loading={deleteLoading}
                />
            )}

            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Users className="w-6 h-6 text-gray-400" /> Therapist Registry
                    </h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {counts.all} total ·{' '}
                        <span className="text-blue-700">{counts.authorized_active} active</span> ·{' '}
                        <span className="text-amber-700">{counts.unauthorized_inactive} inactive</span> ·{' '}
                        <span className="text-gray-600">{counts.approved_non_certified} approved professional</span>
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2">
                    {[
                        { key: 'all', label: 'All', count: counts.all },
                        { key: 'authorized_active', label: 'Active', count: counts.authorized_active },
                        { key: 'unauthorized_inactive', label: 'Inactive', count: counts.unauthorized_inactive },
                        { key: 'approved_non_certified', label: 'Approved Professional', count: counts.approved_non_certified },
                    ].map(({ key, label, count }) => (
                        <button
                            key={key}
                            onClick={() => setStatusFilter(key)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                                statusFilter === key
                                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            {label} <span className="opacity-60 ml-1">({count})</span>
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search name, email, reg. no, city…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                    />
                </div>

                {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}

                {loading ? (
                    <div className="flex justify-center py-16">
                        <Loader2 className="w-6 h-6 animate-spin text-gray-300" />
                    </div>
                ) : (
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wide text-gray-500">
                                <tr>
                                    <th className="text-left px-5 py-3 font-semibold">Therapist</th>
                                    <th className="text-left px-5 py-3 font-semibold">Reg. No.</th>
                                    <th className="text-left px-5 py-3 font-semibold">City</th>
                                    <th className="text-left px-5 py-3 font-semibold">Designation</th>
                                    <th className="text-left px-5 py-3 font-semibold">Status</th>
                                    <th className="px-5 py-3 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-14 text-gray-400">
                                            No therapists found.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((t) => (
                                        <tr key={t.id} className="hover:bg-gray-50/60 transition-colors">
                                            <td className="px-5 py-3.5">
                                                <p className="font-semibold text-gray-900">{t.first_name} {t.surname}</p>
                                                <p className="text-gray-400 text-xs mt-0.5">{t.email}</p>
                                            </td>
                                            <td className="px-5 py-3.5 text-gray-500 font-mono text-xs">
                                                {t.registration_number ?? '—'}
                                            </td>
                                            <td className="px-5 py-3.5 text-gray-600">{t.city ?? '—'}</td>
                                            <td className="px-5 py-3.5 text-gray-600 max-w-[160px] truncate">
                                                {t.designation ?? '—'}
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <StatusCell
                                                    therapist={t}
                                                    token={token}
                                                    onUpdated={handleStatusUpdated}
                                                />
                                            </td>
                                            <td className="px-5 py-3.5 text-right">
                                                <button
                                                    onClick={() => setDeleteTarget(t)}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-100 transition-colors"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                <p className="text-xs text-gray-400">
                    Changing status to <strong>Active</strong> makes the therapist visible in the public directory. Deleting a therapist removes them permanently.
                </p>
            </div>
        </>
    );
}

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import {
    Loader2, CheckCircle2, XCircle, ArrowLeft,
    User, MapPin, Phone, Mail, Briefcase, GraduationCap,
    FileText, ShieldCheck, Clock, MessageSquare, Send,
    Paperclip, Download, FileX, ClipboardCheck,
} from 'lucide-react';
import Link from 'next/link';

interface Application {
    id: string;
    review_status: string;
    submitted_at: string;

    // Personal
    first_name: string;
    surname: string;
    date_of_birth: string;
    address_line: string;
    city: string;
    post_code: string;
    phone: string;
    phone_optional: string;
    email: string;
    nic_or_passport: string;
    nic_front_file_name: string | null;
    nic_back_file_name: string | null;

    // Criteria
    current_rbt: boolean;
    rbt_certification_no: string;
    current_ibt: boolean;
    ibt_certification_no: string;
    expired_rbt: boolean;
    expired_rbt_file_name: string | null;
    expired_ibt: boolean;
    expired_ibt_file_name: string | null;
    voluntary_inactive_rbt: boolean;
    voluntary_inactive_rbt_certification_no: string;
    voluntary_inactive_rbt_reactivation_date: string;
    practicing_behavior_therapist: boolean;
    other_aba_qualifications: boolean;
    behaviour_analyst: boolean;

    // Education
    institution: string;
    period_of_education: string;
    qualifications: string;
    education_file_name: string | null;

    // Work
    work_place_name: string;
    work_place_address: string;
    employment_period: string;
    designation: string;
    full_time_part_time: string;
    explanation_of_services: string;
    work_experience_file_name: string | null;
    cv_file_name: string | null;
    insurance_file_name: string | null;

    // Agreements
    resident: boolean;
    agree_objectives: boolean;
    agree_maintenance: boolean;
    agree_license: boolean;
    agree_ethics: boolean;
    agree_malpractice: boolean;
    agree_update: boolean;
    agree_police_clearance: boolean;

    signedUrls: Record<string, string>;
}

interface Comment {
    id: string;
    comment: string;
    admin_email: string;
    admin_name: string;
    created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
};

function Field({ label, value }: { label: string; value?: string | boolean | null }) {
    if (value === null || value === undefined || value === '') return null;
    return (
        <div className="py-2.5 border-b border-gray-50 last:border-0">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
            <p className="text-sm text-gray-800 mt-0.5">{String(value)}</p>
        </div>
    );
}

function BoolBadge({ label, value }: { label: string; value: boolean }) {
    return value ? (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 font-medium">
            <CheckCircle2 className="w-3 h-3" /> {label}
        </span>
    ) : null;
}

function AgreementRow({ label, value }: { label: string; value: boolean }) {
    return (
        <div className="flex items-center gap-2.5 py-2 border-b border-gray-50 last:border-0">
            {value
                ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                : <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
            <span className="text-sm text-gray-700">{label}</span>
        </div>
    );
}

function AttachmentLink({ label, url, fileName }: { label: string; url?: string; fileName?: string | null }) {
    const name = fileName ? fileName.split('/').pop() : label;
    if (!url) {
        return (
            <div className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                <FileX className="w-4 h-4 text-gray-300 shrink-0" />
                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-xs text-gray-400 italic">Not provided</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3 min-w-0">
                <Paperclip className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-xs text-gray-600 truncate max-w-[220px]">{name}</p>
                </div>
            </div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] border border-[var(--color-primary)]/30 rounded-lg hover:bg-blue-50 transition-colors shrink-0 ml-3"
            >
                <Download className="w-3.5 h-3.5" /> View
            </a>
        </div>
    );
}

export default function ApplicationDetailPage() {
    const { id } = useParams<{ id: string }>();

    const [app, setApp] = useState<Application | null>(null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<'approve' | 'reject' | 'in_progress' | null>(null);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [token, setToken] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [commentLoading, setCommentLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            const t = session?.access_token;
            if (!t) return;
            setToken(t);

            const [appRes, commentsRes] = await Promise.all([
                fetch(`/api/admin/applications/${id}`, { headers: { Authorization: `Bearer ${t}` } }),
                fetch(`/api/admin/applications/${id}/comments`, { headers: { Authorization: `Bearer ${t}` } }),
            ]);

            const appJson = await appRes.json();
            if (appRes.ok) setApp(appJson.data);
            else setError(appJson.error ?? 'Failed to load application');

            const commentsJson = await commentsRes.json();
            if (commentsRes.ok) setComments(commentsJson.data ?? []);

            setLoading(false);
        };
        load();
    }, [id]);

    const handleAction = async (action: 'approve' | 'reject' | 'in_progress') => {
        setActionLoading(action);
        setError('');
        const newStatus = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'in_progress';

        const res = await fetch(`/api/admin/applications/${id}/status`, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });
        const json = await res.json();
        setActionLoading(null);

        if (!res.ok) {
            setError(json.error ?? 'Action failed');
        } else {
            const msg = action === 'approve'
                ? `Approved! Registration number: ${json.registration_number}`
                : action === 'in_progress'
                ? 'Application marked as In Progress.'
                : 'Application marked as Not Approved.';
            setSuccessMsg(msg);
            setApp((prev) => prev ? { ...prev, review_status: newStatus } : prev);
        }
    };

    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        setCommentLoading(true);
        const res = await fetch(`/api/admin/applications/${id}/comments`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment: newComment }),
        });
        const json = await res.json();
        setCommentLoading(false);
        if (res.ok) {
            setComments((prev) => [...prev, json.data]);
            setNewComment('');
        } else {
            setError(json.error ?? 'Failed to add comment');
        }
    };

    if (loading) {
        return <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;
    }

    if (!app) {
        return <p className="text-red-500">{error || 'Application not found.'}</p>;
    }

    const isActionable = ['pending', 'under_review', 'in_progress'].includes(app.review_status);
    const urls = app.signedUrls ?? {};

    return (
        <div className="max-w-5xl space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <Link href="/admin" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-3">
                        <ArrowLeft className="w-4 h-4" /> Back to applications
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">{app.first_name} {app.surname}</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {app.email} · Submitted {new Date(app.submitted_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${STATUS_COLORS[app.review_status] ?? 'bg-gray-100 text-gray-700'}`}>
                    {app.review_status.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
            </div>

            {successMsg && (
                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-800 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> {successMsg}
                </div>
            )}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">{error}</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ── Left / main column ── */}
                <div className="md:col-span-2 space-y-4">

                    {/* Personal info */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <User className="w-4 h-4 text-gray-400" /> Personal Information
                        </h2>
                        <Field label="Date of Birth" value={app.date_of_birth} />
                        <Field label="NIC / Passport" value={app.nic_or_passport} />
                        <Field label="Phone" value={app.phone} />
                        <Field label="Phone (optional)" value={app.phone_optional} />
                    </section>

                    {/* Address */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-400" /> Address
                        </h2>
                        <Field label="Address" value={app.address_line} />
                        <Field label="City" value={app.city} />
                        <Field label="Post Code" value={app.post_code} />
                    </section>

                    {/* Certification criteria */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-4 h-4 text-gray-400" /> Certification Criteria
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <BoolBadge label="Current RBT" value={app.current_rbt} />
                            <BoolBadge label="Current IBT" value={app.current_ibt} />
                            <BoolBadge label="Expired RBT" value={app.expired_rbt} />
                            <BoolBadge label="Expired IBT" value={app.expired_ibt} />
                            <BoolBadge label="Voluntary Inactive RBT" value={app.voluntary_inactive_rbt} />
                            <BoolBadge label="Practicing Behaviour Therapist" value={app.practicing_behavior_therapist} />
                            <BoolBadge label="Behaviour Analyst" value={app.behaviour_analyst} />
                            <BoolBadge label="Other ABA Qualifications" value={app.other_aba_qualifications} />
                        </div>
                        <Field label="RBT Certification No." value={app.rbt_certification_no} />
                        <Field label="IBT Certification No." value={app.ibt_certification_no} />
                        <Field label="Voluntary Inactive RBT Cert. No." value={app.voluntary_inactive_rbt_certification_no} />
                        <Field label="Voluntary Inactive RBT Reactivation Date" value={app.voluntary_inactive_rbt_reactivation_date} />
                    </section>

                    {/* Education */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <GraduationCap className="w-4 h-4 text-gray-400" /> Education
                        </h2>
                        <Field label="Institution" value={app.institution} />
                        <Field label="Period of Education" value={app.period_of_education} />
                        <Field label="Qualifications" value={app.qualifications} />
                    </section>

                    {/* Work experience */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <Briefcase className="w-4 h-4 text-gray-400" /> Work Experience
                        </h2>
                        <Field label="Work Place" value={app.work_place_name} />
                        <Field label="Address" value={app.work_place_address} />
                        <Field label="Designation" value={app.designation} />
                        <Field label="Employment Period" value={app.employment_period} />
                        <Field label="Full / Part Time" value={app.full_time_part_time} />
                        <Field label="Explanation of Services" value={app.explanation_of_services} />
                    </section>

                    {/* Agreements */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <ClipboardCheck className="w-4 h-4 text-gray-400" /> Declarations &amp; Agreements
                        </h2>
                        <AgreementRow label="Resident in Sri Lanka" value={app.resident} />
                        <AgreementRow label="Agrees to BARB objectives" value={app.agree_objectives} />
                        <AgreementRow label="Agrees to maintain professional standards" value={app.agree_maintenance} />
                        <AgreementRow label="Agrees to licensing conditions" value={app.agree_license} />
                        <AgreementRow label="Agrees to code of ethics" value={app.agree_ethics} />
                        <AgreementRow label="Agrees to malpractice policy" value={app.agree_malpractice} />
                        <AgreementRow label="Agrees to update information" value={app.agree_update} />
                        <AgreementRow label="Agrees to provide police clearance if requested" value={app.agree_police_clearance} />
                    </section>
                </div>

                {/* ── Right column ── */}
                <div className="space-y-4">
                    {/* Decision */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sticky top-4">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
                            <FileText className="w-4 h-4 text-gray-400" /> Decision
                        </h2>
                        {isActionable ? (
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleAction('approve')}
                                    disabled={!!actionLoading}
                                    className="w-full h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                                >
                                    {actionLoading === 'approve' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                    Approve &amp; Add to Directory
                                </button>
                                {app.review_status !== 'in_progress' && (
                                    <button
                                        onClick={() => handleAction('in_progress')}
                                        disabled={!!actionLoading}
                                        className="w-full h-10 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                                    >
                                        {actionLoading === 'in_progress' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
                                        Mark as In Progress
                                    </button>
                                )}
                                <button
                                    onClick={() => handleAction('reject')}
                                    disabled={!!actionLoading}
                                    className="w-full h-10 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                                >
                                    {actionLoading === 'reject' ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
                                    Reject Application
                                </button>
                                <p className="text-xs text-gray-400 text-center">
                                    Approving will create a therapist record and publish to the directory.
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">
                                This application has already been <strong>{app.review_status.replace(/_/g, ' ')}</strong>.
                            </p>
                        )}
                    </section>

                    {/* Contact */}
                    <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                        <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                            <Mail className="w-4 h-4 text-gray-400" /> Contact Applicant
                        </h2>
                        <a href={`mailto:${app.email}`} className="text-sm text-[var(--color-primary)] hover:underline block">{app.email}</a>
                        <p className="text-sm text-gray-600 mt-1">
                            <Phone className="w-3.5 h-3.5 inline mr-1 text-gray-400" />{app.phone}
                        </p>
                    </section>
                </div>
            </div>

            {/* ── Attachments (full width) ── */}
            <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-5">
                    <Paperclip className="w-4 h-4 text-gray-400" /> Attachments
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                    <AttachmentLink label="NIC / Passport — Front" url={urls['nic_front_file_name']} fileName={app.nic_front_file_name} />
                    <AttachmentLink label="NIC / Passport — Back" url={urls['nic_back_file_name']} fileName={app.nic_back_file_name} />
                    <AttachmentLink label="Expired RBT Certificate" url={urls['expired_rbt_file_name']} fileName={app.expired_rbt_file_name} />
                    <AttachmentLink label="Expired IBT Certificate" url={urls['expired_ibt_file_name']} fileName={app.expired_ibt_file_name} />
                    <AttachmentLink label="Education Document" url={urls['education_file_name']} fileName={app.education_file_name} />
                    <AttachmentLink label="Work Experience Document" url={urls['work_experience_file_name']} fileName={app.work_experience_file_name} />
                    <AttachmentLink label="CV / Resume" url={urls['cv_file_name']} fileName={app.cv_file_name} />
                    <AttachmentLink label="Professional Indemnity Insurance" url={urls['insurance_file_name']} fileName={app.insurance_file_name} />
                </div>
            </section>

            {/* ── Internal Comments ── */}
            <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-gray-800 flex items-center gap-2 mb-5">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    Internal Notes &amp; Comments
                    <span className="ml-1 text-xs font-normal text-gray-400">(admin only — not visible to applicant)</span>
                </h2>

                <div className="space-y-3 mb-5">
                    {comments.length === 0 ? (
                        <p className="text-sm text-gray-400 italic">No comments yet.</p>
                    ) : (
                        comments.map((c) => (
                            <div key={c.id} className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-[var(--color-primary)]">{c.admin_name}</span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(c.created_at).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{c.comment}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="border-t border-gray-100 pt-4">
                    <textarea
                        rows={3}
                        placeholder="Add a note — e.g. pending documents, missing information, review observations..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 resize-none"
                    />
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={handleAddComment}
                            disabled={commentLoading || !newComment.trim()}
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-secondary)] transition-colors disabled:opacity-50"
                        >
                            {commentLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            Add Comment
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

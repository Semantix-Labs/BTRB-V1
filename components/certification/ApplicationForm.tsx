"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ApplicationForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            full_name: formData.get("full_name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            specialization: formData.get("specialization") as string,
            bio: formData.get("bio") as string,
            address: formData.get("address") as string,
            status: 'pending'
        };

        try {
            const { error: insertError } = await supabase
                .from("therapists")
                .insert([data]);

            if (insertError) throw insertError;

            setSuccess(true);
            e.currentTarget.reset();
        } catch (err: any) {
            console.error("Submission error:", err);
            setError(err.message || "Failed to submit application. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700 max-w-md mx-auto">
                    Thank you for applying. Your application has been received and is under review. You will receive a confirmation email shortly.
                </p>
                <Button
                    variant="outline"
                    className="mt-6 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                    onClick={() => setSuccess(false)}
                >
                    Submit Another Application
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-6">Therapist Registration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="full_name" className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                        required
                        name="full_name"
                        type="text"
                        placeholder="Dr. Jane Doe"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+94 77 123 4567"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="specialization" className="text-sm font-medium text-gray-700">Specialization *</label>
                    <select
                        required
                        name="specialization"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all bg-white"
                    >
                        <option value="">Select Specialization</option>
                        <option value="ABA Therapist">ABA Therapist</option>
                        <option value="Clinical Psychologist">Clinical Psychologist</option>
                        <option value="Educational Psychologist">Educational Psychologist</option>
                        <option value="Speech Therapist">Speech Therapist</option>
                        <option value="Occupational Therapist">Occupational Therapist</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-gray-700">Professional Address</label>
                <input
                    name="address"
                    type="text"
                    placeholder="Clinic or Office Address"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium text-gray-700">Professional Bio / Experience Summary</label>
                <textarea
                    name="bio"
                    rows={4}
                    placeholder="Briefly describe your qualifications and experience..."
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all resize-none"
                />
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {error}
                </div>
            )}

            <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-all"
                disabled={loading}
            >
                {loading ? "Submitting Application..." : "Submit Application"}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to the BTRB Code of Ethics and Terms of Service.
            </p>
        </form>
    );
}

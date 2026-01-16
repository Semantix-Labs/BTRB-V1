"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            inquiry_type: formData.get("inquiry_type") as string,
            message: formData.get("message") as string,
            status: 'new'
        };

        try {
            const { error: insertError } = await supabase
                .from("inquiries")
                .insert([data]);

            if (insertError) throw insertError;

            setSuccess(true);
            e.currentTarget.reset();
        } catch (err: any) {
            console.error("Submission error:", err);
            setError(err.message || "Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-500 h-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700 max-w-sm mx-auto mb-8">
                    Thank you for reaching out. A member of our team will review your inquiry and get back to you shortly.
                </p>
                <Button
                    variant="outline"
                    className="border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                    onClick={() => setSuccess(false)}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="inquiry_type" className="text-sm font-medium text-gray-700">Inquiry Type</label>
                    <select
                        required
                        name="inquiry_type"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all bg-white"
                    >
                        <option value="">Select a Topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="certification">Certification & Licensing</option>
                        <option value="training">Training & Events</option>
                        <option value="complaint">Report an Incident / Complaint</option>
                        <option value="sponsorship">Corporate Sponsorship</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="How can we help you?"
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
                    className="w-full h-12 text-base font-semibold bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-all gap-2"
                    disabled={loading}
                >
                    {loading ? "Sending..." : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}

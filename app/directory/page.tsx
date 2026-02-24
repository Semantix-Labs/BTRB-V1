import type { Metadata } from 'next';
import { Suspense } from 'react';
import { DirectorySearch } from "@/components/directory/DirectorySearch";
import { DirectoryList } from "@/components/directory/DirectoryList";
import { Loader2, FileText, ShieldAlert } from "lucide-react";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Therapist Directory - BARB',
    description: 'Find a certified behaviour therapist in Sri Lanka. All professionals listed here are verified by BARB.',
};

export default function DirectoryPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200 pt-20 pb-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)]" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-12 transform origin-top-right pointer-events-none opacity-50" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[var(--color-primary)] text-sm font-semibold mb-6 border border-blue-100">
                        Verified Practitioners
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-[var(--color-primary)] mb-6">
                        Need Support? Start With Someone You Can Trust.
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-4 mb-10">
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            This directory lists all BARB-certified professionals currently in good standing. Every individual listed here has been vetted, approved, and is held accountable to our Code of Ethics and certification standards.
                        </p>
                        <p className="text-lg text-[var(--color-secondary)] font-medium">
                            Whether you're a caregiver, educator, or healthcare provider; you deserve to work with someone qualified.
                        </p>
                    </div>

                    <Suspense fallback={<div className="h-14 bg-gray-100 rounded-full max-w-xl mx-auto mb-16 animate-pulse" />}>
                        <DirectorySearch />
                    </Suspense>
                </div>
            </section>

            {/* Functional Instructions & Status Note */}
            <section className="py-8 bg-[#f8f9fa] border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-8 justify-between max-w-5xl mx-auto items-start md:items-center">
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">Use the table below to:</h3>
                            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                                <li>Search by name, district, or designation</li>
                                <li>Filter by language or service setting (home/school/clinic)</li>
                                <li>Confirm current certification status</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex-1 md:max-w-xs w-full">
                            <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wider">Status Note</h3>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                <span className="text-sm text-gray-700 font-medium">Certified = Active</span>
                            </div>
                            <p className="text-xs text-gray-500 italic mt-2 border-t border-gray-100 pt-2">
                                <span className="font-semibold text-gray-700">Not Listed?</span> That provider is not currently certified through BARB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Area */}
            <section className="py-12 flex-grow bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto mb-6">
                        <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)]">Find a Certified Behaviour Therapist or Analyst in Sri Lanka</h2>
                    </div>
                    <Suspense fallback={
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
                        </div>
                    }>
                        <DirectoryList query={query} />
                    </Suspense>
                </div>
            </section>

            {/* Complaint & Ethics Section */}
            <section className="py-16 bg-blue-50 border-t border-blue-100">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Report a Concern or Complaint</h2>
                    <p className="text-gray-700 mb-2">
                        BARB holds certified professionals to strict ethical standards.
                    </p>
                    <p className="text-gray-700 mb-8">
                        If you’re concerned about misconduct or a breach of ethics, you can file a formal complaint.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors w-full sm:w-auto gap-2">
                            <ShieldAlert className="w-5 h-5" />
                            Submit a Complaint &rarr;
                        </Link>
                        <a href="/Code of Ethics.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-white text-[var(--color-primary)] border border-gray-200 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto gap-2 shadow-sm">
                            <FileText className="w-5 h-5" />
                            Download the Code of Ethics &rarr;
                        </a>
                    </div>

                    <p className="text-sm text-gray-500 italic bg-white inline-block px-4 py-2 rounded border border-gray-100 shadow-sm">
                        Please note: We only review concerns that fall within the scope of behaviour therapy practice.
                    </p>
                </div>
            </section>
        </div>
    );
}

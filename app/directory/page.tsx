import type { Metadata } from 'next';
import { Suspense } from 'react';
import { DirectorySearch } from "@/components/directory/DirectorySearch";
import { DirectoryList } from "@/components/directory/DirectoryList";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
    title: 'Therapist Directory',
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
            {/* Search Header */}
            <section className="bg-white border-b border-gray-200 pt-20 pb-12 shadow-sm relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)]" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-12 transform origin-top-right pointer-events-none opacity-50" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[var(--color-primary)] text-sm font-semibold mb-6 border border-blue-100">
                        Verified Practitioners
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-[var(--color-primary)] mb-6">
                        Find a Certified Therapist
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-light">
                        Browse our directory of qualified professionals dedicated to ethical behaviour therapy standards.
                    </p>

                    <Suspense fallback={<div className="h-14 bg-gray-100 rounded-full max-w-xl mx-auto mb-16 animate-pulse" />}>
                        <DirectorySearch />
                    </Suspense>
                </div>
            </section>

            {/* Results Area */}
            <section className="py-12 flex-grow">
                <div className="container mx-auto px-4 md:px-6">
                    <Suspense fallback={
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
                        </div>
                    }>
                        <DirectoryList query={query} />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}

import type { Metadata } from 'next';
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { BoardSection } from "@/components/about/BoardSection";
import { GovernanceSection } from "@/components/about/GovernanceSection";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about the Behaviour Therapy Regulatory Board, our mission to safeguard ethical practice, and our governance structure.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative bg-gradient-to-b from-[#f8f9fa] to-white py-24 border-b border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container relative mx-auto px-4 md:px-6 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-primary)] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            About BTRB
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-700 font-light mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                            BTRB was established to <span className="font-medium text-[var(--color-secondary)]">safeguard the quality, integrity, and ethical practice</span> of behaviour therapy in Sri Lanka.
                        </p>
                        <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-50 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                            <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-4">Our Purpose</h2>
                            <p className="text-lg text-gray-700">
                                To regulate behaviour therapy through certification, ethical oversight, and professional development, ensuring that every family receives safe, effective, and evidence-based support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <ValuesGrid />

            {/* Governance & Ethics */}
            <GovernanceSection />

            {/* Board Members (Async with Suspense) */}
            <Suspense fallback={<div className="py-20 text-center">Loading board members...</div>}>
                <BoardSection />
            </Suspense>
        </div>
    );
}

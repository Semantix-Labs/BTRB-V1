import type { Metadata } from 'next';
import { TrainingPrograms } from "@/components/training/TrainingPrograms";
import { TrainingBenefits } from "@/components/training/TrainingBenefits";
import { TrainingCTA } from "@/components/training/TrainingCTA";

export const metadata: Metadata = {
    title: 'Training & Professional Development',
    description: 'Advance your career with BTRB professional workshops, capacity building programs, and CPD opportunities.',
};

export default function TrainingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative w-full bg-gradient-to-br from-[#f8f9fa] via-[#eef2f6] to-[#dbe4ef] py-24 md:py-32 overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight drop-shadow-sm">
                            Training & <br className="hidden md:block" /> Professional Development
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            BTRB supports ongoing professional growth through structured training and skill development programs aligned with international standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <TrainingPrograms />

            {/* Benefits Content */}
            <TrainingBenefits />

            {/* CTA */}
            <TrainingCTA />
        </div>
    );
}

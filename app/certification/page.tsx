import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { EligibilityCards } from "@/components/certification/EligibilityCards";
import { ProcessSteps } from "@/components/certification/ProcessSteps";
import { FAQSection } from "@/components/certification/FAQSection";
import { ContentBlock } from "@/components/home/ContentBlock";

export const metadata: Metadata = {
    title: 'Certification',
    description: 'Become a certified behaviour therapist with BTRB. Review eligibility, understand the process, and apply online.',
};

export default function CertificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero / Header */}
            <section className="relative w-full bg-gradient-to-br from-[#f8f9fa] via-[#eef2f6] to-[#dbe4ef] py-24 md:py-32 overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight drop-shadow-sm">
                            Professional Certification
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Ensuring excellence and ethical standards in behaviour therapy across Sri Lanka.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <Button asChild size="lg" className="min-w-[200px] h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                            <Link href="/certification/apply">Start Application</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Certification Matters */}
            <ContentBlock
                title="Why Certification Matters"
                description="Certification is more than just a credential; it is a commitment to professional excellence. It ensures that practitioners meet nationally recognized standards for education, training, and ethical conduct, providing assurance to families, employers, and the public."
                buttonText="View Eligibility"
                buttonLink="#eligibility"
                align="right"
                className="bg-white"
            />

            {/* Eligibility Criteria */}
            <div id="eligibility">
                <EligibilityCards />
            </div>

            {/* Application Process */}
            <ProcessSteps />

            {/* FAQs */}
            <FAQSection />

            {/* Final CTA */}
            <section className="py-24 bg-[var(--color-primary)] text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="container relative mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold font-heading mb-6">Ready to get certified?</h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Join the community of recognized professionals dedicated to the highest standards of care.
                    </p>
                    <Button asChild size="lg" className="bg-[var(--color-accent)] hover:bg-[#b0902b] text-white px-8 py-6 text-lg shadow-lg">
                        <Link href="/certification/apply">Apply Now</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

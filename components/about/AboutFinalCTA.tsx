import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutFinalCTA() {
    return (
        <section className="bg-[#F8F9FA] text-[var(--color-primary)] py-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container relative mx-auto px-4 md:px-6 z-10">

                {/* Section 9: Learn More Link (Integrated visually) */}
                {/* Section 9: Learn More Link (Integrated visually) */}
                <div className="mb-16 text-center border-b border-gray-200 pb-12">
                    <h2 className="text-xl md:text-3xl font-bold font-heading mb-6">Why Behaviour Therapy Works</h2>
                    <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg md:text-lg leading-relaxed">Understanding behaviour therapy and how it works is essential for anyone engaging with this field.</p>
                    <Link href="/therapy" className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-accent)] font-semibold transition-colors text-base md:text-l">
                        Explore Behaviour Therapy <span className="ml-2">→</span>
                    </Link>
                </div>

                {/* Final CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold font-heading mb-6 leading-tight">
                        Join Us in Shaping the Future of <br /><span className="text-[var(--color-accent)]">Behavioural Health</span>
                    </h2>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 font-light">
                        BARB is at the beginning of a bold journey; establishing national standards, certifying a new generation of professionals, and collaborating with global partners to elevate care throughout Sri Lanka.
                    </p>

                    <p className="text-base text-gray-600 font-medium mb-8">
                        If you’re a therapist, an educator, a donor, or a policymaker, there’s a role for you in this mission.
                    </p>

                    <Button asChild size="lg" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 h-12 px-8 text-base font-bold shadow-lg">
                        <Link href="/contact">Reach out to explore how we can collaborate</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

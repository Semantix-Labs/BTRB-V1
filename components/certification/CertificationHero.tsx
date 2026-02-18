import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CertificationHero() {
    return (
        <section className="relative w-full bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#dbe4ef] to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                        Become a Certified Behaviour Therapist or Analyst in Sri Lanka
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-700 mb-10 leading-relaxed">
                        Join a new generation of professionals committed to ethical, evidence-based behavioural care. Whether you're new to the field or bringing years of experience, certification through the <span className="font-medium text-[var(--color-secondary)]">Behaviour Analysis Registration Board (BARB)</span> is your next step toward ethical, recognised, and impactful practice.
                    </p>

                    <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white shadow-xl h-14 px-8 text-lg font-semibold min-w-[240px]">
                        <Link href="/certification/apply">Start My Application</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

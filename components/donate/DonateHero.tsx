import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DonateHero() {
    return (
        <section className="relative bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E9F3FF] to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                        Help us raise the standard of behavioural care in Sri Lanka
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-700 mb-10 leading-relaxed">
                        Your support helps build a future where every child, caregiver, and therapist has access to ethical, effective, and science-backed behaviour therapy.
                    </p>

                    <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white h-14 px-10 text-lg font-bold shadow-xl transition-all hover:scale-105">
                        <Link href="/contact">Pledge to Donate</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                        We’re just getting started
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        And you’re invited to help shape the future of behaviour therapy in Sri Lanka.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
                    <Button asChild size="lg" className="min-w-[200px] h-12 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white">
                        <Link href="/certification/apply">Apply for Certification</Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="min-w-[200px] h-12 border-gray-200 hover:bg-gray-50 text-[var(--color-primary)]">
                        <Link href="/directory">Find a Therapist</Link>
                    </Button>

                    <Button asChild size="lg" variant="ghost" className="min-w-[200px] h-12 text-[var(--color-primary)] hover:text-[#b0902b] hover:bg-blue-50">
                        <Link href="/contact">Partner With Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

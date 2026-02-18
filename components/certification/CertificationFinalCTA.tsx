import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CertificationFinalCTA() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6 max-w-3xl mx-auto">
                    Ready to join the professionals shaping the future of behavioural care in Sri Lanka?
                </h2>

                <p className="text-lg text-gray-600 mb-10">Start your application and take your next step with confidence.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white h-14 px-8 text-lg font-semibold shadow-lg min-w-[200px]">
                        <Link href="/certification/apply">Start My Application</Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50">
                        {/* Placeholder link */}
                        <Link href="/training">Explore Training Opportunities</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

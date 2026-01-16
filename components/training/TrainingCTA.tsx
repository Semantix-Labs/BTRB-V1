import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TrainingCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[var(--color-primary)] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    {/* Abstract Decorative Blob (Optional) */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Ready to Advance Your Career?</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Express your interest in our upcoming workshops or request a custom training session for your organization.
                        </p>
                        <Button asChild size="lg" className="bg-[var(--color-secondary)] hover:bg-white text-[var(--color-primary)] px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TrainingHero() {
    return (
        <section className="relative w-full bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#dbe4ef] to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
            <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight uppercase">
                        Training That Builds Trust, Skill, and Standards
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-700 mb-10 leading-relaxed">
                        BARB offers access to <span className="font-semibold">local and international training opportunities</span> to help behaviour therapy professionals stay informed, ethical, and effective. Whether you're new to the field or looking to expand your skills, our approved programs and workshops are designed to keep you aligned with best practices in Applied Behaviour Analysis (ABA) and behaviour therapy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white shadow-xl h-14 px-8 text-lg font-semibold min-w-[240px]">
                            {/* Placeholder link, assuming training opportunities will be listed on this page or a sub-page */}
                            <Link href="#programs">Explore Current Training Opportunities</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-[var(--color-primary)] text-[var(--color-primary)] h-14 px-8 text-lg font-semibold min-w-[240px] hover:bg-blue-50">
                            <Link href="/contact">Request Training Approval</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative w-full bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/BTRB Hero image.jpg"
                    alt="BARB Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Strong Overlay for Text Readability */}
                <div className="absolute inset-0 bg-white/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-white/20 to-transparent" />
            </div>

            {/* Rich Gradient Background (Layered on top of image overlay) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70" />

            {/* Abstract Shapes (Reduced opacity) */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl translate-y-1/4" />

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight drop-shadow-sm tracking-tight">
                        The Behaviour Analysis <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-600">Registration Board</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold text-[var(--color-secondary)] mb-6 uppercase tracking-wider">
                        Raising the standard of behaviour therapy in Sri Lanka
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                        The Behaviour Analysis Registration Board (BARB) is Sri Lanka’s official regulatory body for behaviour therapy: certifying, guiding, and safeguarding professionals who transform lives through ethical, evidence-based care.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <Button asChild size="lg" className="min-w-[240px] h-14 text-lg font-semibold shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90">
                        <Link href="/certification/apply">Become a Certified Therapist</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

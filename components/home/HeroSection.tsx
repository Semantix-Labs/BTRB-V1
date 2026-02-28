import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative w-full bg-[#f8f9fa] pt-20 pb-28 md:pt-24 md:pb-36 overflow-hidden flex items-center justify-center min-h-[75vh]">
            {/* Modern Abstract Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30" />

            {/* Decorative Blur Circles */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none z-0" />

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-blue-100/50 text-[var(--color-secondary)] text-sm font-semibold mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                    Sri Lanka’s Official Regulatory Body
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 max-w-5xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[var(--color-primary)] mb-8 leading-[1.15] tracking-tight text-balance">
                        The Behaviour Analysis <br className="hidden md:block" />
                        Registration Board
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-[var(--color-secondary)] mb-8 uppercase tracking-widest opacity-90">
                        Raising the standard of behaviour therapy in Sri Lanka
                    </p>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light text-balance">
                        The Behaviour Analysis Registration Board (BARB) is Sri Lanka’s official regulatory body for behaviour therapy: certifying, guiding, and safeguarding professionals who transform lives through ethical, evidence-based care.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Button asChild size="lg" className="min-w-[200px] h-14 text-lg font-semibold shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-full">
                        <Link href="/certification/apply">Become Certified</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

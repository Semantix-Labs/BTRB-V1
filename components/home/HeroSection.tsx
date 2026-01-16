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
                    alt="BTRB Hero Background"
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
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-8 animate-in fade-in zoom-in duration-700 delay-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-primary)] tracking-wide uppercase">Official Regulatory Body</span>
                    </div> */}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[var(--color-primary)] mb-8 leading-tight drop-shadow-sm tracking-tight">
                        Elevating Standards in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-600">Behaviour Therapy</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        We safeguard the quality, integrity, and ethical practice of behaviour therapy across Sri Lanka through rigorous certification and oversight.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <Button asChild size="lg" className="min-w-[220px] h-14 text-lg font-semibold shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90">
                        <Link href="/certification/apply">Get Certified</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="min-w-[220px] h-14 text-lg font-semibold bg-white border-2 border-gray-100 hover:border-[var(--color-primary)]/20 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-[var(--color-primary)]">
                        <Link href="/directory">Find a Therapist</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

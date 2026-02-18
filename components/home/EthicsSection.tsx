import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function EthicsSection() {
    return (
        <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-accent)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                            <ShieldCheck className="w-4 h-4 text-[var(--color-secondary)]" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-blue-100">Ethics & Regulation</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 leading-tight">
                            Setting The Standard For <br />
                            <span className="text-yellow-400">Ethical Behaviour Therapy</span>
                        </h2>

                        <p className="text-lg md:text-xl text-blue-50 mb-6 leading-relaxed">
                            In the absence of regulation, anyone can call themselves a behaviour therapist. This leaves families vulnerable and the profession at risk.
                        </p>

                        <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed">
                            That’s where BARB comes in. Our role is to set the standard, hold professionals accountable, and protect the people who rely on us.
                        </p>

                        <Button asChild size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90 font-semibold h-14 px-8 text-lg">
                            {/* TODO: Link to PDF if available, or page */}
                            <Link href="/legal/ethical-standards">Explore Our Code of Ethics</Link>
                        </Button>
                    </div>

                    {/* Placeholder for Graphic/Image: ethics_standards_abstract */}
                    {/* Placeholder for Graphic/Image: ethics_standards_abstract */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className="absolute inset-0 bg-white/5 rounded-full blur-xl transform scale-90" />

                            {/* Inner Circle Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/BARB img 4.jpeg"
                                    alt="Ethical Standards"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

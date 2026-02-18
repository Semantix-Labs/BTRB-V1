import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function SponsorshipCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="relative z-10 md:w-2/3">
                        <div className="flex items-center gap-3 mb-4 text-[var(--color-secondary)]">
                            <Building2 className="w-6 h-6" />
                            <span className="font-bold uppercase tracking-wider text-sm">Corporate Giving</span>
                        </div>
                        <h2 className="text-3xl font-bold font-heading mb-4">Become a Corporate Sponsor</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Partner with BARB to demonstrate your organization's commitment to mental health, ethical standards, and community welfare in Sri Lanka.
                        </p>
                    </div>
                    <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
                        <Button asChild size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-100 border-none shadow-lg h-14 px-8 text-base font-semibold">
                            <Link href="/contact">Contact for Sponsorship</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function DonateFinalCTA() {
    return (
        <section className="py-24 bg-[#f8f9fa] border-t border-gray-200 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                        Create a future where every child receives safe, qualified, and ethical behavioural care.
                    </h2>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                        Support the work that supports everyone else. Whether you give once or join us long-term, your support fuels real change.
                    </p>

                    <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[#1a3a61]/90 text-white h-16 px-10 text-xl font-bold shadow-xl">
                        <Link href="/contact" className="flex items-center gap-2">
                            Contact for Sponsorship Info <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

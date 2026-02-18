import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2 } from "lucide-react";

export function TrainingPartners() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Training Partners & Accreditation</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            BARB works with a growing network of trusted organisations to deliver training that meets international standards. All training providers must meet BARB’s criteria for curriculum, supervision, and outcomes.
                        </p>

                        <h3 className="font-bold text-gray-900 mb-4">Currently approved provider:</h3>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl mb-8 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400">
                                {/* Placeholder for Logo */}
                                <Building2 className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[var(--color-primary)]">The Tree House International</div>
                                <div className="text-sm text-green-600 flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> Accredited by IBAO
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-[var(--color-primary)]/5 p-10 rounded-2xl border border-[var(--color-primary)]/10 text-center">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Become an Accredited Provider</h3>
                        <p className="text-gray-600 mb-8">
                            Interested in getting your program accredited by BARB? Submit your training program for review.
                        </p>
                        <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-8 py-6 text-lg">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

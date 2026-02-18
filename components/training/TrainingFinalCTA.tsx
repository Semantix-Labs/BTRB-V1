import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function TrainingFinalCTA() {
    return (
        <section className="py-16 bg-[#F4F1DE] relative overflow-hidden">
            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[var(--color-primary)]/5 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-primary)] mb-4 max-w-2xl mx-auto">
                        Better Training Leads to Better Care.
                    </h2>

                    <p className="text-lg font-medium text-gray-700 mb-8 max-w-2xl mx-auto">
                        Whether you're enrolling, applying for approval, or exploring CPD, you’re taking a step toward a stronger, more ethical profession.
                    </p>

                    <Button asChild size="lg" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white h-12 px-8 text-lg font-bold shadow-lg transition-all hover:-translate-y-1">
                        <Link href="/contact" className="flex items-center gap-2">
                            Contact the Training Team <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

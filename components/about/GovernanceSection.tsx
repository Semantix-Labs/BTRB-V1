import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function GovernanceSection() {
    return (
        <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold font-heading mb-6">Governance & Ethics</h2>
                        <p className="text-lg text-gray-200 leading-relaxed mb-6">
                            BTRB operates under a strictly defined Code of Ethics to ensure public trust, professional responsibility,
                            and the highest quality of care. All certified therapists are bound by these standards.
                        </p>
                        <p className="text-sm text-gray-400">
                            Violations of the code are taken seriously and reviewed by the Ethics Committee.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Button asChild size="lg" className="bg-[var(--color-accent)] hover:bg-[#b0902b] text-white h-auto py-4 px-6 gap-3">
                            <Link href="/resources/code-of-ethics.pdf" target="_blank">
                                <FileText className="w-5 h-5" />
                                <div className="text-left">
                                    <span className="block text-xs font-normal opacity-90">Download PDF</span>
                                    <span className="block font-semibold">Code of Ethics</span>
                                </div>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

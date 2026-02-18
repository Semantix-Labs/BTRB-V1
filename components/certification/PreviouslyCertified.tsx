import { CheckCircle2, RefreshCcw } from "lucide-react";

export function PreviouslyCertified() {
    return (
        <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] mb-8">
                            <RefreshCcw className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                            For Previously Certified Professionals
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            If you hold an expired ABA qualification (such as RBT, IBT, IBA, or BCBA) or have paused your professional practice, you can still apply through this pathway.
                        </p>
                        <p className="text-gray-600 text-sm italic">
                            Upon approval, you’ll receive Associate Membership with BARB and can work toward Full Membership by completing the required training within the 4-year period.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Requirements for Re-Certification</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[var(--color-secondary)] font-bold text-xs">1</span>
                                    </div>
                                    <span className="text-gray-700 text-sm leading-relaxed">Sit for a basic ABA knowledge examination to refresh and validate your expertise</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[var(--color-secondary)] font-bold text-xs">2</span>
                                    </div>
                                    <span className="text-gray-700 text-sm leading-relaxed">Complete an Ethics and Professional Conduct exam</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[var(--color-secondary)] font-bold text-xs">3</span>
                                    </div>
                                    <span className="text-gray-700 text-sm leading-relaxed">Attend an interview to review your practical experience and professional background</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

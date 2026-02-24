import { Award, CheckCircle2 } from "lucide-react";

export function ExperiencedPractitioners() {
    return (
        <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
                        <Award className="w-8 h-8 text-[#C1A033]" />
                    </div>

                    <h2 className="text-3xl font-bold font-heading mb-6 leading-tight">
                        For Experienced but Uncredentialed Practitioners
                    </h2>

                    <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
                        If you are currently working as a Behaviour Therapist, Special Needs Educator, or in a related discipline with substantial hands-on experience in behavioural interventions but without a formal ABA credential you may also apply through the Grandparenting Pathway.
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-left">
                        <h3 className="font-bold text-white mb-8 border-b border-white/10 pb-4 text-center">What You'll Need to Do</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-[#C1A033] flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-50 text-sm leading-relaxed">Demonstrate relevant work experience and supporting documentation</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-[#C1A033] flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-50 text-sm leading-relaxed">Pass the basic ABA knowledge and ethics exams</span>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-[#C1A033] flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-50 text-sm leading-relaxed">Attend an interview with BARB’s review panel</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-[#C1A033] flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-50 text-sm leading-relaxed">Complete a 40-hour ABA training course within the four-year period</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

export function EligibilityCards() {
    return (
        <section className="py-24 bg-gray-50" id="eligibility">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Who Can Apply?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        BARB currently certifies professionals under two designations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* RBT-SL Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border-t-4 border-[var(--color-secondary)] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Behaviour Therapist</h3>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">(RBT-SL)</div>
                            </div>
                        </div>

                        <p className="text-gray-700 italic mb-6 text-sm">For professionals who work directly with clients under supervision.</p>

                        <h4 className="font-bold text-gray-900 mb-4">You may qualify if you:</h4>
                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                Hold a certificate (active or expired) from BACB, IBAO, QABA
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                Have 2+ years of hands-on experience
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                Complete an accredited training programme
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                                Meet supervision and police clearance requirements
                            </li>
                        </ul>
                    </div>

                    {/* RBA-SL Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border-t-4 border-[var(--color-primary)] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Behaviour Analyst</h3>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">(RBA-SL)</div>
                            </div>
                        </div>

                        <p className="text-gray-700 italic mb-6 text-sm">For professionals who assess, design, and oversee interventions.</p>

                        <h4 className="font-bold text-gray-900 mb-4">You may qualify if you:</h4>
                        <ul className="space-y-3 mb-8 flex-grow">
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                Hold a Master’s degree in Behaviour Analysis or related field
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                Complete accredited ABA training and supervised practical hours
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                Pass a qualifying exam
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                                Maintain certification through CPD
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { AlertTriangle, Clock, Info } from "lucide-react";

export function GrandparentingPathway() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-bold uppercase tracking-widest mb-6">
                            <Clock className="w-4 h-4" />
                            Limited Time Only
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6">
                            Grandparenting Pathway
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed font-light">
                            During BARB’s initial rollout, experienced practitioners may be admitted via a review process. <span className="font-semibold text-[var(--color-primary)]">Apply early if you believe you qualify.</span>
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg text-gray-700 max-w-none text-center mb-12">
                        <p>
                            The Grandparenting Pathway has been introduced to recognise professionals who have contributed to the field of behaviour therapy but may not yet meet the full criteria for direct certification. This pathway is available for a limited period of <strong>four (4) years</strong> during BTRB’s initial rollout.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Progression */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-xl text-[var(--color-primary)] mb-4 flex items-center gap-3">
                                <Info className="w-5 h-5 text-[var(--color-secondary)]" />
                                Membership Progression
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                All applicants admitted via the Grandparenting Pathway will initially be granted <strong>Associate Membership</strong>.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Once you complete the 40-hour ABA course and obtain a recognized ABA credential, your status may be upgraded to <strong>Full Membership</strong>, following BARB’s review and approval process.
                            </p>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                            <h3 className="font-bold text-xl text-amber-800 mb-4 flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                                Important Notes
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-sm text-amber-900/80 leading-relaxed">
                                    <strong>Supervision:</strong> Not mandatory during the Grandparenting period; however, mandatory supervision applies once the four-year phase concludes.
                                </li>
                                <li className="text-sm text-amber-900/80 leading-relaxed">
                                    <strong>Deadline:</strong> After the four-year window closes, this pathway will no longer be available. Only professionals with active, recognised licenses will be eligible.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

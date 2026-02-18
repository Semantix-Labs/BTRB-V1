import { HandCoins, SearchCheck } from "lucide-react";

export function TransparencySection() {
    const helps = [
        "Host a caregiver awareness workshop",
        "Translate professional resources into local languages",
        "Fund CPD for rural therapists",
        "Develop digital directories and training materials"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-gray-50 rounded-2xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-bl-full" />
                            <div className="relative z-10">
                                <SearchCheck className="w-12 h-12 text-[var(--color-primary)] mb-6" />
                                <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">We Believe Transparency Builds Trust</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Every contribution is used to directly support programs and people that expand access to ethical, science-led care.
                                </p>
                                <p className="text-sm text-gray-400 italic">
                                    *Annual reports and program breakdowns will be published as BARB scales operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <HandCoins className="w-6 h-6 text-[var(--color-secondary)]" />
                            A typical donation helps:
                        </h3>
                        <ul className="space-y-4">
                            {helps.map((help, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-secondary)]/30 hover:bg-[var(--color-secondary)]/5 transition-all">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{help}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

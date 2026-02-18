import { CheckCircle2 } from "lucide-react";

export function ValueProposition() {
    const benefits = [
        "Nationally recognised credentials (RBT-SL, RBA-SL)",
        "Increased credibility with families, schools, and employers",
        "Access to exclusive training and CPD/CEU opportunities",
        "Listed in Sri Lanka’s official directory of certified professionals",
        "Support from a growing, like-minded professional community"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                        Stand out. Build trust. Lead with Integrity.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        In an unregulated environment, families and institutions often struggle to know whom to trust. Certification through BARB gives families, schools, and institutions the confidence that you're trained, ethical, and backed by a professional body.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-blue-50/50 rounded-2xl p-8 md:p-12 border border-blue-50">
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-8 text-center uppercase tracking-wide">Benefits of BARB Certification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

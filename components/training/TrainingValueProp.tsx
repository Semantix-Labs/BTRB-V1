import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, GraduationCap } from "lucide-react";

export function TrainingValueProp() {
    const benefits = [
        "Meet certification renewal and CPD requirements",
        "Stay aligned with global ethical standards",
        "Upskill in assessment, intervention, and supervision",
        "Access resources from BARB-approved partners"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl transform scale-90 -z-10" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500">
                                <Image
                                    src="/images/BARB img 5.jpeg"
                                    alt="Continuous Learning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-bold uppercase tracking-widest mb-6">
                            Continuous Learning
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                            Ethical Practice Doesn’t Stop at Certification
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            In behaviour therapy, what you know—and how you apply it—can directly shape a person’s future. That’s why BARB supports continued learning through accredited programs, skill-building workshops, and CPD pathways that align with both local needs and international best practices.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">We help professionals:</h3>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-800 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

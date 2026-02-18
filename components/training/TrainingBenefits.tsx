import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Learn from qualified, experienced trainers",
    "Gain practical skills compliant with international standards",
    "Stay updated on the latest ethical guidelines",
    "Network with other professionals in the field",
    "Receive official recognition and certification credits",
    "Enhance your career prospects and professional standing"
];

export function TrainingBenefits() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#1a3a61]">
                            {/* Abstract Visual Pattern */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">Excellence</h3>
                                    <p className="text-blue-200">in Practice</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Why Train with BARB?</h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Our training programs are rigorously developed to ensure you receive the highest quality education in behaviour therapy.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start group">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

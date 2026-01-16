import { Shield, Brain, Scale, Award } from "lucide-react";

const values = [
    {
        title: "Ethical Responsibility",
        description: "Upholding the highest standards of professional conduct and client welfare.",
        icon: Shield,
    },
    {
        title: "Evidence-Based Practice",
        description: "Promoting interventions grounded in scientific research and verified effectiveness.",
        icon: Brain,
    },
    {
        title: "Accountability",
        description: "Ensuring transparent, responsible, and liable practice across the profession.",
        icon: Scale,
    },
    {
        title: "Professional Integrity",
        description: "Fostering honesty, competence, and reliability in all professional interactions.",
        icon: Award,
    },
];

export function ValuesGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Our Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The core principles guiding our regulatory mission.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border-l-4 border-[var(--color-secondary)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <item.icon className="w-10 h-10 text-[var(--color-secondary)] mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

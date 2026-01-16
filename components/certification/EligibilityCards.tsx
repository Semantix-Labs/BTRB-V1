import { GraduationCap, Briefcase, Shield, CheckCircle2 } from "lucide-react";

const criteria = [
    {
        title: "Academic Qualifications",
        description: "A recognized master's degree or higher in behaviour analysis, psychology, or a related field from an accredited institution.",
        icon: GraduationCap,
    },
    {
        title: "Practical Experience",
        description: "Documented supervised fieldwork hours demonstrating competence in applied behaviour analysis techniques.",
        icon: Briefcase,
    },
    {
        title: "Ethical Standing",
        description: "A clear criminal record check and commitment to adhering to the BTRB Code of Ethics.",
        icon: Shield,
    },
];

export function EligibilityCards() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Eligibility Criteria</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        To ensure the highest standards of care, all applicants must meet these foundational requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {criteria.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--color-accent)]/30 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-green-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                Required
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

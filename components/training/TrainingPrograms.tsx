import { Award, BookOpen, Users } from "lucide-react";

const programs = [
    {
        title: "Certification-Aligned Training",
        description: "Accredited programs designed to prepare applicants for BARB certification as a Behaviour Therapist (RBT-SL) or Behaviour Analyst (RBA-SL).",
        icon: Award,
        color: "bg-blue-50 text-[var(--color-primary)]",
        details: [
            "Core concepts in ABA",
            "Supervised practice",
            "Ethics and professional standards",
            "Offered through BARB-approved providers only"
        ]
    },
    {
        title: "Capacity-Building Workshops",
        description: "Short-term workshops focused on core and advanced competencies for certified professionals seeking to sharpen or diversify their skillset.",
        icon: Users,
        color: "bg-purple-50 text-purple-600",
        details: [
            "Functional behaviour assessment",
            "Intervention design",
            "Case documentation & reporting",
            "Working with diverse populations"
        ]
    },
    {
        title: "Continuing Professional Development (CPD)",
        description: "All BARB-certified professionals are required to complete regular CPD hours to maintain their certification.",
        icon: BookOpen,
        color: "bg-amber-50 text-amber-600",
        details: [
            "Ethics & compliance",
            "Supervision best practices",
            "Diversity, equity, and inclusion in therapy",
            "Emerging ABA research"
        ]
    },
];

export function TrainingPrograms() {
    return (
        <section className="py-20 bg-gray-50" id="programs">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">What We Offer</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive learning opportunities designed for practitioners at every stage of their career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm min-h-[80px]">
                                {item.description}
                            </p>

                            <hr className="border-gray-100 mb-6" />

                            <ul className="space-y-3 flex-grow">
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-1.5 flex-shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

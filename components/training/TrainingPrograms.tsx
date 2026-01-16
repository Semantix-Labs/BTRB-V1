import { Album, Presentation, Award } from "lucide-react";

const programs = [
    {
        title: "Professional Workshops",
        description: "Intensive, day-long sessions covering specific behaviour therapy techniques, ethical guidelines, and case management strategies.",
        icon: Presentation,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Capacity Building",
        description: "Long-term programs designed for schools and organizations to integrate behaviour therapy principles into their daily operations.",
        icon: Album,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "CPD Credits",
        description: "Earn Continuing Professional Development credits required for certification renewal and career advancement.",
        icon: Award,
        color: "bg-orange-100 text-orange-600",
    },
];

export function TrainingPrograms() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">What We Offer</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive learning opportunities designed for practitioners at every stage of their career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 group">
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

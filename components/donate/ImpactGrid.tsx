import { GraduationCap, Users, BookOpen } from "lucide-react";

const impactItems = [
    {
        title: "Therapist Training",
        description: "Subsidizing advanced workshops and certification programs to increase the number of qualified practitioners in Sri Lanka.",
        icon: GraduationCap,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Public Education",
        description: "Funding awareness campaigns to help parents and schools understand evidence-based behaviour therapy.",
        icon: Users,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Resource Development",
        description: "Creating and translating essential clinical resources and ethical guidelines into local languages.",
        icon: BookOpen,
        color: "bg-orange-100 text-orange-600",
    },
];

export function ImpactGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">How Your Donation Helps</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Your support directly contributes to building a safer, more regulated, and accessible therapy landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impactItems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 h-full">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

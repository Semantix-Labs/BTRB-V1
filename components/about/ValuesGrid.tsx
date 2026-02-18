import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Scale, Users, Heart, MessageCircle } from "lucide-react";

const values = [
    {
        title: "Professionalism",
        description: "Upholding rigour and reliability in every standard we set.",
        icon: Shield,
    },
    {
        title: "Integrity",
        description: "Practising with transparency, fairness, and accountability.",
        icon: Scale,
    },
    {
        title: "Collaboration",
        description: "Working across sectors to create long-term impact.",
        icon: Users,
    },
    {
        title: "Evidence-Based Practice",
        description: "Grounding all decisions in data, science, and results.",
        icon: Brain,
    },
    {
        title: "Inclusion & Equity",
        description: "Championing access to ethical care for all communities.",
        icon: Heart,
    },
    {
        title: "Advocacy",
        description: "Promoting dignity and rights for both clients and certified professionals.",
        icon: MessageCircle,
    }
];

export function ValuesGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Our Core Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The foundation of our work is built on values that reflect both global best practices and local realities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border-t-4 border-[var(--color-secondary)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" asChild>
                        {/* Placeholder link */}
                        <Link href="/resources/code-of-ethics.pdf">Download Our Code of Ethics</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

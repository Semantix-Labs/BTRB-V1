import Link from "next/link";
import { Users, BookOpen, GraduationCap, Building2 } from "lucide-react";

const audiences = [
    {
        title: "Therapists",
        description: "Seeking certification, professional recognition, and career development.",
        icon: GraduationCap,
        label: "Apply for Certification",
        href: "/certification"
    },
    {
        title: "Parents & Caregivers",
        description: "Looking for qualified, ethical practitioners for trusted care.",
        icon: Users,
        label: "Find a Therapist",
        href: "/directory"
    },
    {
        title: "Institutions",
        description: "Shaping healthcare standards and policy for better outcomes.",
        icon: Building2,
        label: "View Standards",
        href: "/legal/ethical-standards"
    },
    {
        title: "Donors",
        description: "Supporting ethical therapy access and board initiatives.",
        icon: BookOpen, // Placeholder icon, maybe 'Heart' or 'HandCoins' better but sticking to installed
        label: "Support Us",
        href: "/donate"
    }
];

export function AudienceGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Who We Serve</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Connecting stakeholders to ensure quality and safety in behaviour therapy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {audiences.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[var(--color-accent)]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                {item.description}
                            </p>
                            <Link href={item.href} className="text-[var(--color-accent)] font-semibold text-sm hover:underline hover:text-[#b0902b] flex items-center gap-1 group-hover:gap-2 transition-all">
                                {item.label} &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { Users, BookOpen, GraduationCap, Building2 } from "lucide-react";

const audiences = [
    {
        title: "I’m a Therapist or Trainee",
        description: "Ready to grow your credentials with confidence? Get certified, join the professional community, and get access to trusted training.",
        icon: GraduationCap,
        label: "Get Certified",
        href: "/certification"
    },
    {
        title: "I’m a Parent or Caregiver",
        description: "Looking for someone you can trust with your child’s care? We’ll help you find a certified therapist trained in evidence-based practices.",
        icon: Users,
        label: "Find a Therapist",
        href: "/directory"
    },
    {
        title: "I Represent a Donor or Organisation",
        description: "Want to create meaningful, systemic change? Support training, fund our outreach programs, and partner on public initiatives.",
        icon: Building2,
        label: "Support the Mission",
        href: "/donate"
    }
];

export function AudienceGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Who We Serve</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">We’ve made it easy to find what you need: whether you're a therapist building your career, a caregiver seeking support, a policymaker, or a potential donor who wants to support our cause.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[var(--color-accent)]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">{item.title}</h3>
                            <p className="text-gray-600 mb-8 text-base leading-relaxed flex-grow">
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

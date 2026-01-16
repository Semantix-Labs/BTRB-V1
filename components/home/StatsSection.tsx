import { Users, BookOpen, ShieldCheck, Map } from "lucide-react";

const stats = [
    {
        label: "Certified Therapists",
        value: "500+",
        icon: Users,
    },
    {
        label: "Districts Covered",
        value: "25",
        icon: Map,
    },
    {
        label: "Training Hours",
        value: "10k+",
        icon: BookOpen,
    },
    {
        label: "Ethical Standards",
        value: "100%",
        icon: ShieldCheck,
    },
];

export function StatsSection() {
    return (
        <section className="bg-[var(--color-primary)] py-12 border-y border-white/10 relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-3 text-[var(--color-secondary)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-heading tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm text-blue-100 font-medium tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

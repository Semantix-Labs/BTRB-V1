export function DonateImpactSnapshot() {
    const stats = [
        {
            value: "30+",
            label: "Certified professionals trained in 2024 with donor support"
        },
        {
            value: "4",
            label: "Awareness programs hosted in underserved areas"
        },
        {
            value: "80%",
            label: "Of families reported improved confidence in accessing therapy"
        }
    ];

    return (
        <section className="py-6 bg-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="text-center mb-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-widest mb-4 border border-white/20">
                        Impact Snapshot
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-5xl md:text-6xl font-bold font-heading text-[#C1A033] mb-4">{stat.value}</div>
                            <p className="text-blue-100 text-lg leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

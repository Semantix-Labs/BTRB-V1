export function MissionVision() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Mission */}
                    <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[var(--color-primary)] flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-6 uppercase tracking-wider flex items-center gap-3">
                            <span className="w-8 h-1 bg-[var(--color-primary)] block"></span>
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                            To promote ethical, professional, and evidence-based behaviour therapy through the certification, regulation, and training of behaviour therapy professionals in Sri Lanka and beyond.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[var(--color-secondary)] flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold font-heading text-[var(--color-secondary)] mb-6 uppercase tracking-wider flex items-center gap-3">
                            <span className="w-8 h-1 bg-[var(--color-secondary)] block"></span>
                            Our Vision
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                            A future where every person receives care that is competent, compassionate, and grounded in science; delivered by certified professionals held to the highest ethical standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

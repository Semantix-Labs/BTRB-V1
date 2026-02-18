export function PurposeSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-8 leading-tight">
                        We’re Here to <span className="text-[var(--color-secondary)]">Protect</span>, <span className="text-[var(--color-secondary)]">Equip</span>, and <span className="text-[var(--color-secondary)]">Raise the Bar</span>
                    </h2>

                    <div className="bg-blue-50/50 p-8 md:p-12 rounded-2xl border border-blue-50 shadow-sm text-left md:text-center">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                            At BARB, we do more than issue credentials. We protect families from unregulated care, support therapists in delivering ethical practice, and raise the standards of behaviour therapy across Sri Lanka.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            By setting clear guidelines, offering continuous training, and holding professionals accountable, we’re building a system where quality care is the default, not the exception. We ensure every individual, especially the most vulnerable, has access to safe, qualified, and effective behavioural support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

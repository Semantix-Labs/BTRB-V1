export function ProblemSection() {
    return (
        <section className="py-24 bg-red-50 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-6">The Challenge</div>

                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8 leading-tight">
                        Unregulated Therapy Puts Lives at Risk
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed mb-10">
                        In the absence of formal oversight, anyone can call themselves a behaviour therapist regardless of training, accountability, or ethics. This creates confusion for families, risks poor outcomes, and damages the credibility of the entire profession.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px bg-red-200 w-16 md:w-32"></div>
                        <p className="text-lg font-bold text-[var(--color-primary)]">
                            That’s why we were created.
                        </p>
                        <div className="h-px bg-red-200 w-16 md:w-32"></div>
                    </div>
                    <p className="mt-4 text-gray-600">To bring clarity, structure, and trust to a growing and vital field.</p>
                </div>
            </div>
        </section>
    );
}

export function IntroductionSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">The Behaviour Analysis Registration Board</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                        Trustworthy, Qualified, and Science-Led Care
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-8">
                        At BARB, we believe therapy should be trustworthy, qualified, and science-led. That’s why we exist; to ensure every therapist practising behaviour therapy in Sri Lanka meets the standards of care that individuals and families deserve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-1">Certify</h4>
                            <p className="text-gray-600">We certify behaviour therapists and analysts to ensure qualification standards.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-1">Maintain</h4>
                            <p className="text-gray-600">We maintain a verified therapist directory for public access.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-1">Provide</h4>
                            <p className="text-gray-600">We provide professional development and ethical oversight.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.43.811 1.035.811 1.73 0 .695-.316 1.3-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-1">Advocate</h4>
                            <p className="text-gray-600">We advocate for safe, effective, evidence-based support.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="/about" className="inline-flex items-center justify-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)] transition-colors">
                        Learn More <span aria-hidden="true" className="ml-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

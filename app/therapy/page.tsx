import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'About Behaviour Therapy - BARB',
    description: "Behaviour therapy, explained. Learn about the science-backed approach to helping individuals develop meaningful skills and reduce behaviours that interfere with daily life.",
}

export default function AboutTherapyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#f8f9fa] py-24 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-transparent pointer-events-none" />
                <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight tracking-tight">
                            BEHAVIOUR THERAPY, EXPLAINED.
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-700 font-medium mb-10 max-w-3xl mx-auto">
                            Behaviour therapy is a structured, science-backed approach to helping individuals; especially children; develop meaningful skills and reduce behaviours that interfere with daily life. If you're new to the concept, you're not alone. This page is here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1 - What is Behaviour Therapy? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">What is Behaviour Therapy?</h2>
                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <p className="mb-4">
                            Behaviour Therapy is a form of psychotherapy that focuses on using the scientific principles of learning such as classical and operant conditioning to modify behaviour.
                        </p>
                        <p className="mb-6">
                            Instead of focusing on underlying psychological causes, this therapy zeros in on the observable behaviour itself and the environmental factors that trigger and reinforce it. The goal is to reduce unwanted symptoms and change maladaptive behaviour patterns.
                        </p>
                        <p className="font-semibold mb-3">Common techniques used within this broad approach include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Systematic Desensitisation</li>
                            <li>Behaviour Rehearsal</li>
                            <li>Modelling</li>
                            <li>Biofeedback</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 2 - What is ABA? */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">What is Applied Behaviour Analysis (ABA)?</h2>
                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <p className="mb-6">
                            Applied Behaviour Analysis (ABA) is a specific, scientific discipline that applies established principles of learning and motivation to improve socially significant behaviour.
                        </p>
                        <p className="mb-4">
                            ABA is heavily based on research and requires a rigorous, data-driven approach. It involves:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-[var(--color-secondary)] mb-2">Precise Assessment</h3>
                                <p className="text-sm">Identifying the function of a behaviour.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-[var(--color-secondary)] mb-2">Planned Intervention</h3>
                                <p className="text-sm">Developing specific strategies for change.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-[var(--color-secondary)] mb-2">Continuous Measurement</h3>
                                <p className="text-sm">Objectively tracking progress with data.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-[var(--color-secondary)] mb-2">Data-Based Decision Making</h3>
                                <p className="text-sm">Adjusting interventions based on measured results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - What Can Behaviour Therapy Help With? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8 font-heading text-[var(--color-primary)]">What Can Behaviour Therapy Help With?</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Behaviour therapy has proven effective in treating a wide range of challenges, including:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Autism Spectrum Disorder (ASD)",
                            "Developmental delays",
                            "ADHD and self-regulation difficulties",
                            "Communication and social skills challenges",
                            "Daily living skills",
                            "Aggression, tantrums, or disruptive behaviours",
                            "Academic and learning issues",
                            "Anxiety and avoidance behaviours (in some applications)"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-blue-50/50">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0" />
                                <span className="text-gray-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[var(--color-primary)]/5 p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                        <p className="text-lg text-[var(--color-primary)] font-medium">
                            ABA-based therapy is particularly effective for children and is often used in homes, schools, and clinical settings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4 - How Does It Work? */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">How Does Behaviour Therapy Work?</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Certified behaviour therapists or analysts begin with an assessment to understand what triggers a behaviour and what reinforces it.
                    </p>

                    <p className="text-lg text-gray-700 mb-6 font-medium">They then:</p>

                    <div className="relative border-l-2 border-blue-200 ml-4 md:ml-6 pl-8 py-2 space-y-8">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold shadow-md">1</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Design a personalised intervention plan</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold shadow-md">2</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Use reinforcement to increase desired behaviours</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold shadow-md">3</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Track progress with data</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold shadow-md">4</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Adjust interventions over time for long-term success</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - The Importance of Certification */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 font-heading text-[var(--color-primary)]">The Importance of Certification</h2>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                        Because behaviour therapy is powerful and highly technical it must be delivered by trained professionals. Unqualified providers can unintentionally cause harm. That’s why BARB exists: <span className="font-semibold text-[var(--color-secondary)]">to regulate, certify, and protect.</span>
                    </p>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="container relative mx-auto px-4 md:px-6 z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Have Questions or Need Support?</h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Whether you're a parent exploring options or a professional seeking training, we’re here to help you find the answers.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90 font-semibold h-14 px-8 text-lg">
                        <Link href="/contact">Get in Touch With Us →</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

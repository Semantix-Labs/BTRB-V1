import type { Metadata } from 'next';
import { ImpactGrid } from "@/components/donate/ImpactGrid";
import { BankDetailsCard } from "@/components/donate/BankDetailsCard";
import { SponsorshipCTA } from "@/components/donate/SponsorshipCTA";

export const metadata: Metadata = {
    title: 'Donate',
    description: 'Support the Behaviour Therapy Regulatory Board. Your contributions help fund training, public education, and ethical oversight.',
};

export default function DonatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative w-full bg-gradient-to-br from-[var(--color-primary)] to-[#1a3a61] py-24 text-white overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-100 text-sm font-semibold mb-6 border border-white/20">
                            Non-Profit Initiative
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Support Ethical <br className="hidden md:block" /> Behaviour Therapy
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Your contribution helps expand training, awareness, and ethical standards across Sri Lanka.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Grid */}
            <ImpactGrid />

            {/* Donation Methods */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Make a Direct Transfer</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We currently accept donations via direct bank transfer. Your support ensures we can continue our mission to regulate and improve behaviour therapy standards.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-700">100% of funds go to program initiatives</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-700">Transparent financial reporting</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-700">Official receipt provided for tax purposes</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-500 italic">
                                * Please email proof of transfer to donations@btrb.lk to receive your receipt.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <BankDetailsCard />
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Sponsorship */}
            <SponsorshipCTA />
        </div>
    );
}

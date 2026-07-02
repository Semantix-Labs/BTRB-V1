import type { Metadata } from 'next';
import { MembershipForm } from "@/components/features/membership-form/MembershipForm";
import Link from 'next/link';
import { ChevronRight, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Apply for Certification',
    description: 'Submit your application to become a certified behaviour therapist with BARB.',
};

export default function ApplyPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="bg-white border-b border-gray-200 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <Link href="/certification" className="hover:text-[var(--color-primary)]">Certification</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-[var(--color-primary)] font-medium">Apply</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-4">
                        Application to become Registered Behaviour Therapist or Registered Behaviour Analyst.
                    </h1>
                    <p className="text-gray-600 max-w-2xl">
                        Please ensure you have read the eligibility criteria before proceeding. All information submitted is treated with strict confidentiality.
                    </p>
                </div>
            </section>

            {/* Application Fee Notice */}
            <div className="border-b border-amber-200 bg-amber-50">
                <div className="container mx-auto px-4 md:px-6 py-5">
                    <div className="flex items-start gap-3 w-full">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-amber-900 mb-1">Application Fee Notice</p>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                A non-refundable application processing fee of <strong>LKR 5,000</strong> is required for all applications. Payment must be deposited into the BARB bank account and proof of payment attached to the application. Bank details will be provided upon request.
                            </p>
                            <p className="text-sm text-amber-800 leading-relaxed mt-2">
                                The LKR 5,000 fee covers both the application processing fee and the first year&apos;s annual membership fee. The annual membership fee thereafter is <strong>LKR 5,000</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar / Context */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                            <h3 className="font-bold text-[var(--color-primary)] mb-3">Before you start</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                    Have your professional registry number ready (if applicable).
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                    Prepare a summary of your clinical experience.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                    Ensure your contact details are up to date.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-[var(--color-primary)] mb-2">Need Help?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                If you encounter issues with the application form, please contact our support team.
                            </p>
                            <Link href="/contact" className="text-sm font-semibold text-[var(--color-secondary)] hover:underline">
                                Contact Support &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Main Form Area */}
                    <div className="lg:w-2/3">
                        <MembershipForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

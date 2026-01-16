import type { Metadata } from 'next';
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Behaviour Therapy Regulatory Board of Sri Lanka. We are here to answer your questions about certification, training, and ethics.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-[var(--color-primary)] text-white py-20 relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none" />

                <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        We are committed to transparency and accessibility. Reach out to us for any inquiries regarding behaviour therapy regulation in Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50 flex-grow">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column: Contact Info */}
                        <div className="order-2 lg:order-1">
                            <ContactInfo />
                        </div>

                        {/* Right Column: Form */}
                        <div className="order-1 lg:order-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import type { Metadata } from 'next';
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Behaviour Therapy Regulatory Board of Sri Lanka. We are here to answer your questions about certification, training, and ethics.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactHero />

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

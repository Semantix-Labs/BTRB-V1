import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Contact Details</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We are here to assist you with any questions or concerns.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1 border border-[var(--color-primary)]/10">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">General Inquiries</h3>
                        <a href="mailto:info@barb.lk" className="text-[var(--color-primary)] text-lg font-medium hover:underline hover:text-[var(--color-secondary)] transition-colors">info@barb.lk</a>
                    </div>
                </div>

                <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1 border border-[var(--color-primary)]/10">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                        <div className="space-y-1">
                            <a href="tel:+94766094212" className="text-gray-600 hover:text-[var(--color-primary)] block transition-colors">+94 76 609 4212</a>
                            <a href="tel:+94741022110" className="text-gray-600 hover:text-[var(--color-primary)] block transition-colors">+94 74 102 2110</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1 border border-[var(--color-primary)]/10">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Office Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Dehiwala, Sri Lanka
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1 border border-[var(--color-primary)]/10">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Monday to Friday <br /> 9:00 AM – 5:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


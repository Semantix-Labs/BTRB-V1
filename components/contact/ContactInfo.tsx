import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Have questions about certification, ethics, or our mission? We are here to assist you.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600 text-sm mb-1">For general inquiries:</p>
                        <a href="mailto:info@btrb.lk" className="text-[var(--color-secondary)] font-medium hover:underline">info@btrb.lk</a>

                        <p className="text-gray-600 text-sm mt-3 mb-1">For certification support:</p>
                        <a href="mailto:certification@btrb.lk" className="text-[var(--color-secondary)] font-medium hover:underline">certification@btrb.lk</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600 text-sm">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+94112345678" className="text-[var(--color-secondary)] font-medium hover:underline block mt-1">+94 11 234 5678</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-1">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            No. 123, Bauddhaloka Mawatha,<br />
                            Colombo 07,<br />
                            Sri Lanka.
                        </p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden relative shadow-md group">
                {/* Using a static map image or pattern as placeholder */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:animate-none transition-all" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm font-medium">
                    [ Interactive Map Embed ]
                </div>
            </div>
        </div>
    );
}

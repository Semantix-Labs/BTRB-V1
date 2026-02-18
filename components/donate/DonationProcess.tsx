import { Info } from "lucide-react";

export function DonationProcess() {
    return (
        <section className="py-16 bg-[#f8f9fa] border-y border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Donation Process</h2>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-gray-700 leading-relaxed flex flex-col items-center">
                        <Info className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
                        <p>
                            We currently do not accept online payments. Once you submit your pledge, our team will contact you with the bank transfer details and guide you through the donation process. Donation receipts and impact reports available on request.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { CheckCircle2 } from "lucide-react";

export function HowWeWork() {
    const activities = [
        "Certify and register qualified behaviour therapists and analysts.",
        "Set and enforce ethical guidelines and professional standards.",
        "Support ongoing training and continuing education.",
        "Investigate complaints and hold practitioners accountable.",
        "Collaborate with governments, training bodies, and NGOs.",
        "Educate the public about the importance of evidence-based care."
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                            How We’re Building a Safer, Smarter Future for Behavioural Care
                        </h2>
                        <div className="w-20 h-2 bg-[var(--color-secondary)] rounded-full mb-8"></div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <ul className="space-y-6">
                                {activities.map((activity, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                                        <span className="text-lg text-gray-700 leading-snug">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

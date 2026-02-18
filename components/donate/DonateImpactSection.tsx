import { ShieldAlert, Users, BookOpen, MapPin, Building2 } from "lucide-react";

export function DonateImpactSection() {
    const impacts = [
        {
            text: "Train and certify new behaviour therapists",
            icon: Users
        },
        {
            text: "Educate the public about ethical behavioural care",
            icon: BookOpen
        },
        {
            text: "Strengthen oversight and ethical accountability",
            icon: ShieldAlert
        },
        {
            text: "Expand access to underserved regions",
            icon: MapPin
        },
        {
            text: "Partner with institutions shaping the future of mental and developmental health",
            icon: Building2
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold uppercase tracking-widest mb-6">
                        The Need
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Why Your Contribution Matters</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Today, hundreds of families across Sri Lanka are unknowingly working with unqualified or unregulated therapists. This isn’t just a professional gap, it’s a public health risk. BARB works to regulate the field, train ethical practitioners, and ensure that therapy in Sri Lanka is safe, standardised, and effective. But we can’t do it alone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-3 text-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900">By contributing to BARB, you help:</h3>
                    </div>
                    {impacts.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

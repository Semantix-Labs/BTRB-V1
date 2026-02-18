import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wallet, Building, GraduationCap, HandHeart, ArrowRight } from "lucide-react";

export function WaysToSupport() {
    const ways = [
        {
            title: "Make a Donation",
            description: "Contribute as an individual or organisation—one-time or recurring. Every contribution helps us do more.",
            icon: Wallet,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Become a Corporate Partner",
            description: "Sponsor a training program, awareness campaign, or scholarship fund. Let’s align your CSR goals with long-term impact.",
            icon: Building,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Fund a Therapist",
            description: "Support a scholarship for trainees from low-income backgrounds to become certified professionals.",
            icon: GraduationCap,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Donate Your Time or Skills",
            description: "Are you a certified ABA professional or training provider? Volunteer to speak, train, or consult.",
            icon: HandHeart,
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Ways to Support</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {ways.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center flex flex-col h-full">
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-xl">
                    <div className="md:w-2/3 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2">Ready to Make an Impact?</h3>
                        <p className="text-blue-100">Contact our partnerships team to discuss how you can help.</p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Button asChild size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-100 border-none shadow-lg h-12 px-8 text-base font-semibold">
                            <Link href="/contact" className="flex items-center gap-2">
                                Contact Partnerships Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

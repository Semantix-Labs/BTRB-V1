import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsItems = [
    {
        id: "1",
        title: "Upcoming workshop on ethical ABA practice",
        type: "Workshop",
        action: "Register Now",
        href: "/training/workshops" // Placeholder link
    },
    {
        id: "2",
        title: "Now accepting applications for Grandparenting certification",
        type: "Certification",
        action: "Apply Now",
        href: "/certification/grandparenting" // Placeholder link
    },
    {
        id: "3",
        title: "Free webinar for caregivers this month",
        type: "Webinar",
        action: "Join Here",
        href: "/resources/webinars" // Placeholder link
    }
];

export function NewsWidget() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest mb-3">What’s New at BARB</h2>
                        <h3 className="text-3xl font-bold font-heading text-gray-900 leading-tight">
                            Latest Updates & Opportunities
                        </h3>
                    </div>
                    <p className="text-gray-600 max-w-md text-right md:text-left">
                        Stay up-to-date with upcoming events, certification news, and educational opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            <div className="mb-4 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide bg-blue-50 inline-block px-3 py-1 rounded-full w-fit">
                                {item.type}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-6 flex-grow leading-snug">
                                {item.title}
                            </h3>
                            <div className="mt-auto">
                                <Link href={item.href} className="text-[var(--color-accent)] font-semibold text-sm hover:underline hover:text-[#b0902b] flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {item.action} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

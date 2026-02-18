import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do I need a psychology degree to apply?",
        answer: "No. What matters is accredited training, relevant experience, and meeting BARB’s criteria."
    },
    {
        question: "What’s the difference between a therapist and an analyst?",
        answer: "Therapists implement plans. Analysts design, oversee, and supervise those plans."
    },
    {
        question: "Will my international certification be recognised?",
        answer: "Yes; certifications from BACB, IBAO, QABA and similar recognised bodies will be reviewed."
    },
    {
        question: "How long does the process take?",
        answer: "Timelines vary depending on volume and document verification. You’ll receive status updates throughout."
    },
];

export function FAQSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Common questions about eligibility, the application process, and maintaining your certification status.
                        </p>
                        <div className="bg-[var(--color-primary)] p-8 rounded-2xl text-white">
                            <h3 className="font-bold text-xl mb-4">Still Have Questions?</h3>
                            <p className="text-gray-200 mb-6">Our team is here to help you understand the process, evaluate your eligibility, or point you to approved training programs.</p>
                            <Link href="/contact" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/20">
                                Get in Touch →
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

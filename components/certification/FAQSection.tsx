import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does the certification process take?",
        answer: "Typically, the review process takes 4-6 weeks from the date of submission, provided all documents are in order."
    },
    {
        question: "Is there an application fee?",
        answer: "Yes, there is a non-refundable processing fee. Details on payment methods will be provided upon initial review of your application."
    },
    {
        question: "Do I need to renew my certification?",
        answer: "Yes, certification is valid for 2 years. Renewal requires proof of continuing professional development (CPD) credits."
    },
    {
        question: "Can I practice without BTRB certification?",
        answer: "While BTRB certification is voluntary at this stage, it is highly recommended as the recognized standard for ethical practice in Sri Lanka."
    },
];

export function FAQSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Common questions about eligibility, the application process, and maintaining your certification status.
                        </p>
                        <div className="bg-[var(--color-primary)] p-8 rounded-2xl text-white">
                            <h3 className="font-bold text-xl mb-4">Still have questions?</h3>
                            <p className="text-gray-200 mb-6">Our support team is here to help guide you through the process.</p>
                            <a href="/contact" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/20">
                                Contact Support
                            </a>
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

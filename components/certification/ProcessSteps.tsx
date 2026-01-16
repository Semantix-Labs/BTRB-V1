import { FileText, Send, Search, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        title: "Review Eligibility",
        description: "Ensure you meet the academic and practical requirements.",
        icon: Search,
    },
    {
        id: 2,
        title: "Submit Application",
        description: "Complete the online form and upload necessary documents.",
        icon: Send,
    },
    {
        id: 3,
        title: "Verification",
        description: "The board reviews your credentials and references.",
        icon: FileText,
    },
    {
        id: 4,
        title: "Certification",
        description: "Upon approval, receive your official BTRB certification.",
        icon: Award,
    },
];

export function ProcessSteps() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-4">Application Process</h2>
                    <p className="text-gray-600">Your journey to becoming a certified practitioner.</p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center text-center group">
                                <div className={cn(
                                    "w-20 h-20 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-gray-400 mb-6 relative z-10 transition-all duration-500",
                                    "group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:scale-110 shadow-sm"
                                )}>
                                    <step.icon className="w-8 h-8" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

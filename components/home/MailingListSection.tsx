import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function MailingListSection() {
    return (
        <section className="py-20 bg-[#F4F1DE]/30 border-y border-[var(--color-accent)]/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-[#fff] ring-1 ring-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold font-heading text-[var(--color-primary)] mb-3 flex items-center justify-center md:justify-start gap-3">
                            <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                            Stay Informed
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Get notified about training opportunities, certification windows, and public awareness events.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        {/* Using a simple button as requested by copy "Join the Mailing List ->" 
                             In a real implementation this might be a form input */}
                        <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white h-12 px-8 text-base shadow-md hover:shadow-lg transition-all">
                            Join the Mailing List &rarr;
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

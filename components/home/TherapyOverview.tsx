import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TherapyOverview() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">
                                Behaviour Therapy: <br />
                                <span className="text-[var(--color-secondary)]">Scientific. Applied. Individualised.</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Behaviour therapy helps individuals—especially children—build the skills they need to thrive. Rooted in the science of Applied Behaviour Analysis (ABA), it uses data-driven strategies to change behaviours that affect daily life, from social skills to emotional regulation.
                            </p>

                            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm mb-8">
                                <p className="font-medium text-[var(--color-primary)]">
                                    Want to learn more about ABA and how it works?
                                </p>
                            </div>

                            <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-8 h-12 text-base">
                                <Link href="/therapy">Explore Behaviour Therapy</Link>
                            </Button>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 lg:order-2 relative">
                            {/* Decorative blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-all duration-500">
                                {/* Placeholder for generated image: therapy_session_child */}
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/images/BARB img 2.jpeg"
                                        alt="Therapy Session"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

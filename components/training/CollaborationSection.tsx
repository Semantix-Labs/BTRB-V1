import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, School, Building } from "lucide-react";

export function CollaborationSection() {
    return (
        <section className="py-24 bg-[#f0f4f9] border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-[var(--color-primary)] mb-6">Collaboration & Custom Programs</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Are you part of a school, NGO, or government institution looking to upskill your staff or improve service delivery?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <School className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Custom Training Modules</h3>
                        <p className="text-sm text-gray-600">Tailored curriculums for your specific organizational needs.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Building className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Public Sector Programs</h3>
                        <p className="text-sm text-gray-600">Capacity building for government and public institutions.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Awareness & Outreach</h3>
                        <p className="text-sm text-gray-600">Community initiatives to promote better understanding.</p>
                    </div>
                </div>

                <div className="text-center">
                    <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-50 text-[var(--color-primary)] border-[var(--color-primary)] px-8 py-6 text-lg border-2">
                        <Link href="/contact">Contact Us to Collaborate</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

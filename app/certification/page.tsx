import type { Metadata } from 'next';
import { CertificationHero } from "@/components/certification/CertificationHero";
import { ValueProposition } from "@/components/certification/ValueProposition";
import { EligibilityCards } from "@/components/certification/EligibilityCards";
import { GrandparentingPathway } from "@/components/certification/GrandparentingPathway";
import { PreviouslyCertified } from "@/components/certification/PreviouslyCertified";
import { ExperiencedPractitioners } from "@/components/certification/ExperiencedPractitioners";
import { ProcessSteps } from "@/components/certification/ProcessSteps";
import { FAQSection } from "@/components/certification/FAQSection";
import { CertificationFinalCTA } from "@/components/certification/CertificationFinalCTA";

export const metadata: Metadata = {
    title: 'Certification | BARB',
    description: 'Become a certified behaviour therapist with BARB. Review eligibility, understand the process, and apply online.',
};

export default function CertificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <CertificationHero />

            <ValueProposition />

            <EligibilityCards />

            <GrandparentingPathway />

            <PreviouslyCertified />

            <ExperiencedPractitioners />

            <ProcessSteps />

            <FAQSection />

            <CertificationFinalCTA />
        </div>
    );
}

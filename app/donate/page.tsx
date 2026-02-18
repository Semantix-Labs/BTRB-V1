import type { Metadata } from 'next';
import { DonateHero } from "@/components/donate/DonateHero";
import { DonateMissionSection } from "@/components/donate/DonateMissionSection";
import { DonateImpactSection } from "@/components/donate/DonateImpactSection";
import { WaysToSupport } from "@/components/donate/WaysToSupport";
import { DonationProcess } from "@/components/donate/DonationProcess";
import { TransparencySection } from "@/components/donate/TransparencySection";
import { DonateImpactSnapshot } from "@/components/donate/DonateImpactSnapshot";
import { DonateFinalCTA } from "@/components/donate/DonateFinalCTA";

export const metadata: Metadata = {
    title: 'Donate | BTRB',
    description: 'Support the Behaviour Therapy Regulatory Board. Your contributions help fund training, public education, and ethical oversight.',
};

export default function DonatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <DonateHero />

            <DonateMissionSection />

            <DonateImpactSection />

            <WaysToSupport />

            <DonationProcess />

            <TransparencySection />

            <DonateImpactSnapshot />

            <DonateFinalCTA />
        </div>
    );
}

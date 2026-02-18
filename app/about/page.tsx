import type { Metadata } from 'next';
import { AboutHero } from "@/components/about/AboutHero";
import { PurposeSection } from "@/components/about/PurposeSection";
import { MissionVision } from "@/components/about/MissionVision";
import { ProblemSection } from "@/components/about/ProblemSection";
import { HowWeWork } from "@/components/about/HowWeWork";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { BoardSection } from "@/components/about/BoardSection";
import { EthicsCommittee } from "@/components/about/EthicsCommittee";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";

export const metadata: Metadata = {
    title: 'About Us | BARB',
    description: 'Learn about the Behaviour Analysis Registration Board, our mission to safeguard ethical practice, and our governance structure.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />

            <PurposeSection />

            <MissionVision />

            <ProblemSection />

            <HowWeWork />

            <ValuesGrid />

            <BoardSection />

            <EthicsCommittee />

            <AboutFinalCTA />
        </div>
    );
}

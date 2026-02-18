import type { Metadata } from 'next';
import { TrainingHero } from "@/components/training/TrainingHero";
import { TrainingValueProp } from "@/components/training/TrainingValueProp";
import { TrainingPrograms } from "@/components/training/TrainingPrograms";
import { UpcomingProgram } from "@/components/training/UpcomingProgram";
import { TrainingPartners } from "@/components/training/TrainingPartners";
import { CollaborationSection } from "@/components/training/CollaborationSection";
import { TrainingFinalCTA } from "@/components/training/TrainingFinalCTA";

export const metadata: Metadata = {
    title: 'Training & Professional Development | BARB',
    description: 'Advance your career with BTRB professional workshops, capacity building programs, and approved training courses.',
};

export default function TrainingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <TrainingHero />

            <TrainingValueProp />

            <TrainingPrograms />

            <UpcomingProgram />

            <TrainingPartners />

            <CollaborationSection />

            <TrainingFinalCTA />
        </div>
    );
}

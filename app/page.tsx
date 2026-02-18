import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { AudienceGrid } from "@/components/home/AudienceGrid";
import { NewsWidget } from "@/components/home/NewsWidget";
import { TherapyOverview } from "@/components/home/TherapyOverview";
import { EthicsSection } from "@/components/home/EthicsSection";
import { MailingListSection } from "@/components/home/MailingListSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <IntroductionSection />

      <TherapyOverview />

      <AudienceGrid />

      <EthicsSection />

      <Suspense fallback={<div className="py-20 text-center">Loading news...</div>}>
        <NewsWidget />
      </Suspense>

      <MailingListSection />

      <FinalCTA />
    </div>
  );
}

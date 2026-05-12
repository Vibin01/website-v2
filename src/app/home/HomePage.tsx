import React from "react";
import { HeroSection } from "./HeroSection";
import AlignmentChallenge from "./AlignmentChallenge";
import FlowCards from "./FlowCards";
import HiringSeams from "./HiringSeams";
import HiringAlignmentSection from "./HiringAlignmentSystem";
import AlignmentCompoundsSection from "./AlignmentComponentSection";
import ClosingVisionGapCard from "./CloseVissonGapCard";
import AchievementBanner from "./AchievementBanner";
import AAAActionBanner from "./AAAActionBanner";
import AlignmentBreaksDiagram from "./AlignmentBreaksDiagram";
import StrategyGapSection from "./StrategyGapSection";
import UnifiedOutcomeBanner from "./UnifiedOutComeBanner";
import UniversalBehaviorSection from "./UniversalBehaviorSection";
import AAAAlignmentMechanismSection from "./AAAAlignmentMechanismSection";
import AspirationToAchievementSection from "./AspirationToAchievementSection";
import { AAABehaviouralFramework } from "./AAABehaviouralFramework";

export const HomePage = () => {
  return (
    <>
      <main className="px-[5%] overflow-x-hidden">
          <div className=" -mx-[7%] bg-[url('/background/bg-hero-home-section.svg')] bg-no-repeat bg-cover bg-center">
            <HeroSection />
          </div>
          <div className="py-[5%]">
            <FlowCards />
          </div>

          <div className="py-[5%]">
            <AlignmentChallenge />
          </div>
        
         <div className="py-[5%]">
          <HiringSeams />
        </div>
        <div>
          <AlignmentBreaksDiagram />
        </div>
        <div className="py-[5%]">
          <StrategyGapSection />
        </div>
        <div className="-mx-[7%] -bg-[url('/background/bg-curve-divider.svg')] bg-no-repeat bg-cover bg-center">
          <UnifiedOutcomeBanner />
        </div>
        <div className="py-[5%]">
          <UniversalBehaviorSection />
        </div>
        <div className="py-[5%]">
          <AAABehaviouralFramework/>
          <AAAAlignmentMechanismSection />
        </div>
        <div className="py-[5%]">
          <AAAActionBanner />
        </div>
         <div>
          <ClosingVisionGapCard />
        </div>
         <div>
          <AlignmentCompoundsSection />
        </div>
         {/* <div className="-mx-[7%]">
          <AchievementBanner />
        </div> */}
       
        <div className="py-[5%]">
          <AspirationToAchievementSection />
        </div>
       {/* <div className="-mx-[7%] h-[0.2vh] w-[120%] bg-[#0668E1]"/>
        <div className="py-[5%]">
          <section className="">
            <HiringAlignmentSection />
          </section>
        </div> */}
      </main>
    </>
  );
};

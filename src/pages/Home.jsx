import React from "react";
import HeroSection from "../components/home/HeroSection";
import useIsMobile from "./../hook/useIsMobile";
import DeskUsesSection from "../components/home/desktop/DeskUsesSection";
import MobileUsesSection from "../components/home/mobile/MobileUsesSection";
import OfferSection from "../components/home/OfferSection";
import MobileFeatures from "../components/home/mobile/MobileFeatures";
import DeskFeatures from "../components/home/desktop/DeskFeatures";
import ReviewSection from "../components/home/ReviewSection";

function Home() {
  const isMobile = useIsMobile(1000);
  const isTablet = useIsMobile();
  return (
    <main>
      {/* Hero section */}
      <HeroSection />
      {/* Uses section */}
      {isMobile ? <MobileUsesSection /> : <DeskUsesSection />}
      {/* Features section */}
      {isTablet ? <MobileFeatures /> : <DeskFeatures />}
      {/* Review section */}
      <ReviewSection />
      {/* Offer section */}
      <OfferSection />
    </main>
  );
}

export default Home;

import React from "react";
import HeroSection from "../components/home/HeroSection";
import useIsMobile from "./../hook/useIsMobile";
import DeskUsesSection from "../components/home/desktop/DeskUsesSection";
import MobileUsesSection from "../components/home/mobile/MobileUsesSection";

function Home() {
  const isMobile = useIsMobile(1000);

  return (
    <div>
      {/* Hero section */}
      <HeroSection />
      {/* Uses section */}
      {isMobile ? <MobileUsesSection /> : <DeskUsesSection />}
    </div>
  );
}

export default Home;

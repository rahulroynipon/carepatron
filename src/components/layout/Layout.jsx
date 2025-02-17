import React from "react";
import { Outlet } from "react-router";
import DeskNavBar from "../global/desktop/DeskNavBar";
import Footer from "../global/Footer";
import useIsMobile from "./../../hook/useIsMobile";
import MobileNavBar from "../global/mobile/MobileNavBar";

function Layout() {
  const isMobile = useIsMobile(1000);

  return (
    <div className="font-poppins">
      {isMobile ? <MobileNavBar /> : <DeskNavBar />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

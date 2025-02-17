import React from "react";
import Container from "../Container";
import { RiMenuFill } from "react-icons/ri";
import logo from "../../../assets/logo-primary.svg";

function MobileNavBar() {
  return (
    <Container
      outContainer="bg-white sticky top-0 border-b border-gray-100 shadow-xs backdrop-blur z-40"
      className="py-0 md:py-0 lg:py-0"
    >
      <header className="h-[4.5rem] flex items-center justify-between px-5 md:px-8">
        <img src={logo} alt="carepatron-logo" className="h-8" />
        <button className="text-2xl text-gray-700 cursor-pointer">
          <RiMenuFill size={30} />
        </button>
      </header>
    </Container>
  );
}

export default MobileNavBar;

import React, { useEffect, useState } from "react";
import Container from "../Container";
import logo from "./../../../assets/logo-primary.svg";
import Button from "../../ui/Button";
import cn from "../../../utils/cn";

const navItems = [
  { _id: "features", label: "Features" },
  { _id: "who-we-serve", label: "Who we serve" },
  { _id: "resources", label: "Resources" },
  { _id: "pricing", label: "Pricing" },
];

function DeskNavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 200;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      outContainer={cn(
        "bg-white border-gray-100 transition-all duration-300 ease-in-out",
        isSticky && "sticky top-0 border-b shadow-xs backdrop-blur z-40"
      )}
      className="py-0 md:py-0 lg:py-0"
    >
      <header className="h-[4.5rem] flex items-center justify-between">
        <img src={logo} alt="carepatron-logo" className="h-8" />

        <nav className="flex items-center space-x-4">
          <ul className="flex items-center space-x-5">
            {/* nav items */}
            {navItems?.map((item) => (
              <li
                key={item?._id}
                className="text-sm font-medium text-gray-800 cursor-pointer py-5 px-3"
              >
                {item?.label}
              </li>
            ))}
          </ul>
          {/* login and get started buttons */}
          <div className="flex space-x-3">
            <Button variant="outline">Login</Button>
            <Button>Get started</Button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default DeskNavBar;

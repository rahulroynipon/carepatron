import React from "react";
import Container from "../global/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/hero.png";
import brand1 from "../../assets/brand/brand1.svg";
import brand2 from "../../assets/brand/brand2.svg";
import brand3 from "../../assets/brand/brand3.svg";
import brand4 from "../../assets/brand/brand4.svg";
import brand5 from "../../assets/brand/brand5.svg";

function HeroSection() {
  const BrandList = [brand1, brand2, brand3, brand4, brand5];

  return (
    <Container
      outContainer="bg-white"
      className="grid grid-cols-2 gap-x-5 gap-y-7 md:gap-y-12 lg:gap-y-16 xl:gap-y-20 2xl:gap-y-24 py-5"
    >
      {/* hero text */}
      <div className="order-1 col-span-2 lg:col-span-1 flex flex-col justify-center gap-5 md:gap-8 lg:gap-12">
        <h1 className="font-medium lg:font-semibold text-5xl md:text-6xl text-gray-800 font-roboto lg:max-w-lg">
          Where <span className="text-primary">care </span>happens
        </h1>
        <p className="text-gray-700 text-lg lg:text-xl max-w-lg">
          The practice management and EHR solution for health and wellness
        </p>
        <Button className="self-start text-base px-11 py-3">
          Get started for free
        </Button>
      </div>

      {/* hero image */}
      <div className="relative order-3 lg:order-2 col-span-2 lg:col-span-1 flex justify-center">
        <div className="lg:max-h-[32rem]">
          <img src={heroImage} alt="Hero Image" className="h-full w-full " />
        </div>
      </div>

      {/* brand images */}
      <div className="order-2 lg:order-3 col-span-2">
        <ul className="flex flex-wrap md:justify-between  gap-x-5 gap-y-3">
          {BrandList?.map((item, index) => (
            <li className="h-6 md:h-8 lg:h-10 lg:w-40" key={index}>
              <img
                src={item}
                alt={`brand-image-${index}`}
                className="h-full w-full opacity-85"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default HeroSection;

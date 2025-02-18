import React from "react";
import Container from "../global/Container";
import offerImage from "../../assets/offer.webp";
import Button from "../ui/Button";
import { MdOutlineArrowForward } from "react-icons/md";

function OfferSection() {
  return (
    <Container
      outContainer="bg-offer"
      className="flex flex-col lg:flex-row items-center"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-10 p-6">
        <h4 className="text-4xl md:text-6xl font-semibold text-gray-800 max-w-xl">
          Carepatron works wherever you do
        </h4>
        <div>
          <button className="flex items-center space-x-1 group">
            <span
              className="bg-white font-medium text-amber-600 px-8 py-4 rounded-full ansition-all duration-300 
                      group-hover:bg-primary group-hover:text-white cursor-pointer"
            >
              Get Carepatron for free
            </span>
            <span
              className="bg-white font-medium text-amber-600 p-3 rounded-full ansition-all duration-300 
                      group-hover:bg-primary group-hover:text-white cursor-pointer 
                      group-hover:rotate-[-45deg] group-hover:translate-x-2"
            >
              <MdOutlineArrowForward size={25} />
            </span>
          </button>
        </div>
      </div>

      <div className="hidden lg:w-1/2 lg:flex justify-center lg:justify-end p-6">
        <img
          src={offerImage}
          alt="Carepatron Offer"
          className="object-contain w-full max-w-lg"
        />
      </div>
    </Container>
  );
}

export default OfferSection;

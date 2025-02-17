import React, { useState } from "react";
import Container from "../../global/Container";
import { usesItems } from "../desktop/DeskUsesSection";
import cn from "./../../../utils/cn";
import { IoIosArrowDown } from "react-icons/io";

function MobileUsesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container outContainer="bg-uses py-7">
      <h4 className="font-roboto text-3xl font-medium text-gray-800">
        Use Carepatron for
      </h4>
      <section>
        <ul>
          {usesItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleActive(index)}
              className="cursor-pointer mt-7 rounded-xl  mx-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "flex items-center p-4 w-12 rounded-xl shrink-0",
                      item?.color
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={`icon-${index}`}
                      className="h-6 w-6"
                    />
                  </div>
                  <div className="flex flex-col text-gray-800">
                    <div className="flex items-center justify-between border w-full ">
                      <h5 className="font-semibold text-lg">{item.label}</h5>
                      <IoIosArrowDown className="" />
                    </div>
                    <p className="text-sm"> {item.description}</p>
                  </div>
                </div>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-sm text-gray-600">
                  <img src="" alt="" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default MobileUsesSection;

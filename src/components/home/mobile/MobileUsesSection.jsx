import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <section className="mt-8">
        <ul>
          {usesItems?.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleActive(index)}
              className="py-2 px-1 md:p-5 space-y-5 mt-3 cursor-pointer"
            >
              <div className="flex space-x-4 rounded-xl">
                <div
                  className={cn(
                    "p-4 rounded-xl flex items-center justify-center",
                    item?.color
                  )}
                >
                  <img
                    src={item.icon}
                    alt={`uses-ion-${index}`}
                    className="h-6 w-6"
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between text-gray-800">
                    <h5 className="font-medium text-lg">{item.label}</h5>
                    <IoIosArrowDown
                      className={cn(
                        "transition-transform duration-500 text-xl md:text-2xl",
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                  <p className="text-sm md:text-base">{item?.description}</p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: "auto", height: "auto" }}
                    exit={{ width: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ originX: 0.5, originY: 0.5 }}
                    className="flex items-center justify-center mx-auto"
                  >
                    <img
                      src={item?.image}
                      alt={`uses-image-${index}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default MobileUsesSection;

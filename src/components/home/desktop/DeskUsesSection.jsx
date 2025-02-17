import React, { useState } from "react";
import Container from "./../../global/Container";
import uses1 from "../../../assets/uses/uses1.webp";
import uses2 from "../../../assets/uses/uses2.webp";
import uses3 from "../../../assets/uses/uses3.webp";
import uses4 from "../../../assets/uses/uses4.webp";
import uses5 from "../../../assets/uses/uses5.webp";

import icon1 from "../../../assets/icons/icon1.svg";
import icon2 from "../../../assets/icons/icon2.svg";
import icon3 from "../../../assets/icons/icon3.svg";
import icon4 from "../../../assets/icons/icon4.svg";
import icon5 from "../../../assets/icons/icon5.svg";
import cn from "../../../utils/cn";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

export const usesItems = [
  {
    icon: icon1,
    label: "Easy scheduling",
    description: "Accept online bookings. Automate your reminders",
    image: uses1,
    color: "bg-[#D1C4E9]",
  },
  {
    icon: icon2,
    label: "Best documentation",
    description: "Streamline your intake, note-taking, and documentation",
    image: uses2,
    color: "bg-[#E1BEE7]",
  },
  {
    icon: icon3,
    label: "Secure billing & payments",
    description: "Simple, fast, and digital.",
    image: uses3,
    color: "bg-[#F1F8E9]",
  },
  {
    icon: icon4,
    label: "Professional client portal",
    description: "Seamless care with an easy-to-use client app.",
    image: uses4,
    color: "bg-[#FFE0B2]",
  },
  {
    icon: icon5,
    label: "Powerful AI & automations",
    description: "Reduce busy work so you can do your best work.",
    image: uses5,
    color: "bg-[#FFCCBC]",
  },
];

const DeskUsesSection = () => {
  const [selected, setSelected] = useState(0);

  const selectHandler = (index) => {
    setSelected(index);
  };

  return (
    <Container outContainer="bg-uses py-12">
      <h4 className="font-roboto text-3xl lg:text-4xl font-medium text-gray-800">
        Use Carepatron for
      </h4>

      <section className="flex space-x-20 px-5 mt-12">
        <div className="w-1/2">
          <LayoutGroup>
            <ul className="relative">
              {usesItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => selectHandler(index)}
                  className="relative"
                >
                  <div className="flex space-x-4 p-6 rounded-xl cursor-pointer transition-all duration-300 relative">
                    {selected === index && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 shadow-lg rounded-xl bg-white"
                        style={{ zIndex: 0 }}
                      />
                    )}

                    <div
                      className={cn(
                        "flex items-center p-4 rounded-xl relative z-10",
                        item?.color
                      )}
                    >
                      <img
                        src={item.icon}
                        alt={`icon-${index}`}
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="flex flex-col text-gray-800 relative z-10">
                      <h5 className="font-semibold text-lg">{item.label}</h5>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </LayoutGroup>
        </div>

        <div className="w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected}
              src={usesItems[selected]?.image}
              alt={`users-image-${selected}`}
              className="rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </section>
    </Container>
  );
};

export default DeskUsesSection;

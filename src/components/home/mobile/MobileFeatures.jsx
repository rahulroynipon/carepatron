import React from "react";
import featureM1 from "../../../assets/features/featureM1.webp";
import featureM2 from "../../../assets/features/featureM2.webp";
import featureM3 from "../../../assets/features/featureM3.webp";
import featureM4 from "../../../assets/features/featureM4.webp";
import Container from "../../global/Container";
import { motion } from "framer-motion";

const MobileFeatures = () => {
  return (
    <Container outContainer="bg-footer py-8">
      <ul className="flex flex-col space-y-16">
        {featureItems?.map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-5">
              <img
                src={item?.image}
                alt={item?.label}
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-6 px-3">
              <h4 className="text-gray-200 text-3xl max-w-sm font-medium">
                {item?.label}
              </h4>
              <p className="text-gray-300/85 text-sm max-w-lg">
                {item?.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

export default MobileFeatures;

export const featureItems = [
  {
    label: "Move faster with your tools in one place",
    description:
      "Carepatron is a true all-in-one experience designed for care providers. Automate tasks with AI, simplify your workflows, and access every tool you need for an optimized practice.",
    image: featureM1,
  },
  {
    label: "Bring everyone together",
    description:
      "Experience collaborative healthcare through meaningful connection. Connect patients, providers, and others involved in the care process to ensure a seamless and cohesive experience for all.",
    image: featureM2,
  },
  {
    label: "Work your way",
    description:
      "Customize tools to optimize your workflow and outcomes. Engage in a product that allows you to prioritize working the way that you want.",
    image: featureM3,
  },
  {
    label: "Give clients the best experience",
    description:
      "Support client success and accountability. Experience improved communication, frictionless interaction, and an end-to-end process that recognizes client needs.",
    image: featureM4,
  },
];

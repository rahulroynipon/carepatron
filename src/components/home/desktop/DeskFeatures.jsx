import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../global/Container";
import feature1 from "../../../assets/features/feature1.webp";
import feature2 from "../../../assets/features/feature2.webp";
import feature3 from "../../../assets/features/feature3.webp";

const DeskFeatures = () => {
  const [selected, setSelected] = useState(0);
  const featureRef = useRef(null);

  useEffect(() => {
    const listItems = featureRef.current.querySelectorAll("li");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setSelected(index);
        }
      });
    };

    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    listItems.forEach((item, index) => {
      item.setAttribute("data-index", index);
      observer.observe(item);
    });

    return () => {
      listItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <Container
      outContainer="bg-footer py-16"
      className="flex text-white space-x-10"
    >
      <div className="md:w-1/2 pt-20 pb-24">
        <ul
          ref={featureRef}
          className="border-l border-gray-300 pl-10 space-y-80"
        >
          {featureItems.map((item, index) => (
            <motion.li
              key={index}
              className="space-y-8 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h4 className="text-4xl font-semibold max-w-sm">{item.label}</h4>
              <p className="max-w-md text-gray-300">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="md:w-1/2 px-5">
        <AnimatePresence mode="wait">
          {featureItems[selected]?.image && (
            <motion.img
              key={selected}
              src={featureItems[selected].image}
              alt={`Feature ${selected}`}
              className="sticky top-32 object-contain w-full "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default DeskFeatures;

export const featureItems = [
  {
    label: "Move faster with your tools in one place",
    description:
      "Carepatron is a true all-in-one experience designed for care providers. Automate tasks with AI, simplify your workflows, and access every tool you need for an optimized practice.",
    image: feature1,
  },
  {
    label: "Bring everyone together",
    description:
      "Experience collaborative healthcare through meaningful connection. Connect patients, providers, and others involved in the care process to ensure a seamless and cohesive experience for all.",
    image: feature2,
  },
  {
    label: "Work your way",
    description:
      "Customize tools to optimize your workflow and outcomes. Engage in a product that allows you to prioritize working the way that you want.",
    image: feature3,
  },
  {
    label: "Give clients the best experience",
    description:
      "Support client success and accountability. Experience improved communication, frictionless interaction, and an end-to-end process that recognizes client needs.",
    image: feature1,
  },
];

import React from "react";
import Container from "./Container";
import logo from "../../assets/logo-secondary.svg";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const listWithHeader = (title, list) => (
    <div>
      <h5 className="font-semibold text-lg mb-3 md:mb-6">{title}</h5>
      <ul className="flex flex-col gap-2 md:gap-3 text-indigo-100/70 font-light text-sm ">
        {list?.map((item, index) => (
          <li
            className="cursor-pointer hover:text-indigo-50 duration-300 transition-colors"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Container outContainer="bg-footer text-white">
      <footer className="grid md:grid-cols-4 gap-12 px-5 lg:px-0">
        {listWithHeader("Features", FooterLink?.Features)}
        {listWithHeader("Who we serve", FooterLink?.Serves)}
        {listWithHeader("Popular resources", FooterLink?.Popular)}
        {listWithHeader("Company", FooterLink?.Company)}
        <section className="flex flex-col md:flex-row justify-between md:col-span-4 space-x-3 space-y-7">
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" />
            <p className="text-xs text-indigo-50/70 mt-2">
              Care Patron © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <ul className="flex items-center justify-center space-x-3">
            {contactIcons?.map((item, index) => (
              <li
                key={index}
                className="text-xl cursor-pointer hover:scale-115 transition-all duration-300 p-2 rounded-full hover:bg-indigo-200/20"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </Container>
  );
}

export default Footer;

export const contactIcons = [
  <FaLinkedin />,
  <IoLogoYoutube />,
  <FaFacebookF />,
  <FaPinterest />,
  <FaInstagram />,
  <FaTiktok />,
  <FaXTwitter />,
];

export const FooterLink = {
  Features: [
    "Health Records",
    "Practice Management",
    "Telehealth",
    "Clinical Notes",
    "Patient Portal",
    "Scheduling",
    "Billing",
    "Payments",
    "Documentation",
    "Transcription",
    "Electronic Signing",
    "Compliance",
    "Reminders",
    "Medical Dictation",
  ],
  Serves: [
    "Therapy",
    "Chiropractic",
    "Psychology",
    "Counseling",
    "General Practice",
    "Physical Therapy",
    "Health Coach",
    "Occupational Therapy",
    "Coaching",
    "Mental Health",
    "Nursing",
    "Psychiatry",
    "Personal Training",
    "Social Work Software",
    "Nutrition",
    "Speech Therapy",
  ],
  Popular: [
    "Superbill Template",
    "Nursing Notes Template",
    "SOAP Note Template",
    "HIPAA Release Form Template",
    "Mental Status Exam Template",
    "Physical Exam Template",
    "Treatment Plan Template",
    "Care Plan Template",
    "Biopsychosocial Assessment Template",
    "System Disorder ATI Template",
  ],
  Company: [
    "Partner With Us",
    "Affiliates",
    "Press Hub",
    "Carepatron AI",
    "About us",
    "Careers",
    "Pricing",
    "Help Center",
    "Business Associate Agreement",
    "Privacy Policy",
    "Terms of Service",
    "Contact us",
  ],
};

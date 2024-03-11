"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedToolTip";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const socialLinks = [
  {
    id: 1,
    name: "Github",
    designation: "Explore my code",
    icon: <TbBrandGithub size={24} />,
    href: "https://github.com/DigitalPotential",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "Connect with me!",
    icon: <SlSocialLinkedin size={24} />,
    href: "https://www.linkedin.com/in/carlos-digital-potential/",
  },
  {
    id: 3,
    name: "Email",
    designation: "Contact Me",
    icon: <TfiEmail size={24} />,
    href: "mailto:carlos@digitalpotential.se",
  },
];

export default function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4 ">
        <AnimatedTooltip items={socialLinks} />
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

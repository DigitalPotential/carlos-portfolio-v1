"use client";

import Brandroid from "./Experience/Brandroid";
import DigitalPotential from "./Experience/DigitalPotential";
import Nackademin from "./Experience/Nackademin";
import Pingloo from "./Experience/Pingloo";
import ScanrecoGroup from "./Experience/ScanrecoGroup";
import { Tabs } from "./ui/tabs";

export function ExperienceTabs() {
  const tabs = [
    {
      title: "Brandroid",
      value: "brandroid",
      content: (
        <div className="bg-bodyColor relative overflow-hidden max-w-containerxs p-4 xs:p-6 mx-auto w-full rounded-xl tab-content">
          <Brandroid />
        </div>
      ),
    },
    {
      title: "Nackademin",
      value: "nackademin",
      content: (
        <div className="bg-bodyColor relative overflow-hidden max-w-containerxs p-4 xs:p-6 mx-auto w-full rounded-xl tab-content">
          <Nackademin />
        </div>
      ),
    },
    {
      title: "Pingloo",
      value: "pingloo",
      content: (
        <div className="bg-bodyColor relative overflow-hidden max-w-containerxs p-4 xs:p-6 mx-auto w-full rounded-xl tab-content">
          <Pingloo />
        </div>
      ),
    },
    {
      title: "Digital Potential",
      value: "digitalPotential",
      content: (
        <div className="bg-bodyColor relative overflow-hidden max-w-containerxs p-4 xs:p-6 mx-auto w-full rounded-xl tab-content">
          <DigitalPotential />
        </div>
      ),
    },
    {
      title: "Scanreco Group",
      value: "scanrecoGroup",
      content: (
        <div className="bg-bodyColor relative overflow-hidden max-w-containerxs p-4 xs:p-6 mx-auto w-full rounded-xl tab-content">
          <ScanrecoGroup />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[10rem] [perspective:1000px] md:h-[10rem] relative b flex flex-col w-full mx-auto items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}

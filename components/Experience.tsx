import { useState } from "react";
import SectionTitle from "./SectionTitle";
import DigitalPotential from "./Experience/DigitalPotential";
import ScanrecoGroup from "./Experience/ScanrecoGroup";
import Nackademin from "./Experience/Nackademin";

const Experience = () => {
    const [workNackademin, setWorkNackademin] = useState(true);
  const [workDigitalPotential, setWorkDigitalPotential] = useState(false);
  const [workScanrecoGroup, setWorkScanrecoGroup] = useState(false);


  const handleNackademin = () => {
    setWorkNackademin(true);
    setWorkDigitalPotential(false);
    setWorkScanrecoGroup(false);
  }
  const handleDigital = () => {
    setWorkDigitalPotential(true);
    setWorkScanrecoGroup(false);
    setWorkNackademin(false);
  };

  const handleScanreco = () => {
    setWorkScanrecoGroup(true);
    setWorkDigitalPotential(false);
    setWorkNackademin(false);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-28 lgl:py-32 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col text-white">
          <li
            onClick={handleNackademin}
            className={`${
                workNackademin
                ? "border-l-textGreen border-l-2 text-textGreen"
                : "border-l-hoverColor text-textDark"
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Nackademin
          </li>
          <li
            onClick={handleDigital}
            className={`${
              workDigitalPotential
                ? "border-l-textGreen border-l-2 text-textGreen"
                : "border-l-hoverColor text-textDark"
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Digital Potential International
          </li>
          <li
            onClick={handleScanreco}
            className={`${
              workScanrecoGroup
                ? "border-l-textGreen border-l-2 text-textGreen"
                : "border-l-hoverColor text-textDark"
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Scanreco Group
          </li>
        </ul>
        {workDigitalPotential && <DigitalPotential  />}
        {workScanrecoGroup && <ScanrecoGroup />}
        {workNackademin && <Nackademin />}
      </div>
    </section>
  );
};

export default Experience;

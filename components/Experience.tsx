import { useState } from "react";
import SectionTitle from "./SectionTitle";
import DigitalPotential from "./Experience/DigitalPotential";
import ScanrecoGroup from "./Experience/ScanrecoGroup";

const Experience = () => {
    const [workDigitalPotential, setWorkDigitalPotential] = useState(true);
    const [workScanrecoGroup, setWorkScanrecoGroup] = useState(false);

    const handleDigital = () => {
        setWorkDigitalPotential(true);
        setWorkScanrecoGroup(false);
    };

    const handleScanreco = () => {
        setWorkScanrecoGroup(true);
        setWorkDigitalPotential(false);
    };

    return (
        <section
            id="experience"
            className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title="Where I have worked" titleNo="03" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col text-white">
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
                {workDigitalPotential && <DigitalPotential />}
                {workScanrecoGroup && <ScanrecoGroup />}
            </div>
        </section>
    );
};

export default Experience;

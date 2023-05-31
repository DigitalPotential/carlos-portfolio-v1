import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

const ArchiveCard = () => {
    return (
        <div>
            <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                <FaRegFolder />
                <RxOpenInNewWindow />
            </div>
        </div>
    );
};

export default ArchiveCard;

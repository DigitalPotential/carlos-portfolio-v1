import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

interface Props {
    title: string;
    des: string;
    listItem: string[];
    link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
    return (
        <a href={link} target="_blank">
            <div className="w-full h-auto rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="flex justify-between items-center">
                    <FaRegFolder className="text-4xl text-textGreen" />
                    <RxOpenInNewWindow className="text-white text-4xl hover:text-textGreen" />
                </div>
                <div>
                    <h2 className="text-white text-xl font-unbounded font-semibold tracking-wide group-hover:text-textGreen">
                        {title}
                    </h2>
                    <p className="text-white text-sm mt-3">{des}</p>
                </div>
                <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
                    {listItem.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </a>
    );
};

export default ArchiveCard;

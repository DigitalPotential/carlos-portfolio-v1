import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link?: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <>
      <div className="relative z-20">
        <div className="w-full min-h-[390px] rounded-2xl bg-[#112240] p-7 flex flex-col justify-center gap-6">
          <div className="flex justify-between items-center z-50 relative">
            <FaRegFolder className="text-4xl text-textGreen" />
            <RxOpenInNewWindow className="text-white text-4xl hover:text-textGreen" />
          </div>
          <div className="z-50 relative">
            <h2 className="text-white text-xl font-unbounded font-semibold tracking-wide group-hover:text-textGreen">
              {title}
            </h2>
            <p className="text-white text-sm mt-3">{des}</p>
          </div>
          <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap z-50 relative">
            {listItem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArchiveCard;

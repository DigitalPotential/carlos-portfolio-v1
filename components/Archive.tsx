import React from "react";
import { ArchiveCardsWithHover } from "./ArchiveCardsWithHover";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-white text-xl text-center font-unbounded font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-unbounded mt-2 text-textGreen">
          View the archive
        </p>
      </div>
      <ArchiveCardsWithHover />
    </div>
  );
};

export default Archive;

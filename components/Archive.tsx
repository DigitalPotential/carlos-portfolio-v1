import React from "react";
import ArchiveCard from "./ArchiveCard";

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                <ArchiveCard
                    title="Protectionmask"
                    des="Protectionmask is a company selling a Innovative Escape Mask
Expertly designed for protection in the event of a fire, our Protectionmask® absorbs up to 95% of the most dangerous fire gases and particulates. "
                    listItem={["Webflow", "Live site"]}
                    link="https://www.protectionmask.com/"
                />
                <ArchiveCard
                    title="Password Generator"
                    des="This password generator app allows users to
                    create secure and customized passwords based on
                    their preferences. Users can choose the length
                    of their passwords, character types, and receive
                    a strength assessment of the generated password."
                    listItem={["React", "TailwindCSS", "Vite"]}
                    link="https://password-generator-navy.vercel.app/"
                />
                <ArchiveCard
                    title="UVCSafe"
                    des="This is being built in webflow for a company selling UVC lights:Care222®: Revolutionizing UV light technology for safer indoor environments. Effective against virus and bacteria spread."
                    listItem={["Webflow", "In Production", "Live site"]}
                    link="https://uvc-safe.webflow.io/"
                />
            </div>
        </div>
    );
};

export default Archive;

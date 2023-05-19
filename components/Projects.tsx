import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { password } from "@/public/assets";

const Projects = () => {
    return (
        <section
            id="project"
            className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title="Some Things I have Built" titleNo="03" />
            {/* project 1 */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://password-generator-navy.vercel.app/"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={password}
                                alt="Password Generator"
                            />
                        </div>
                    </a>
                </div>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10"></div>
            </div>
            {/* project 2 */}
            {/* project 3 */}
        </section>
    );
};

export default Projects;

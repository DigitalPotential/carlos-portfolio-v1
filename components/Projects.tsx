import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { password } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

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
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Featured Project
                        </p>
                        <h3 className="text-2xl font-bold text-white">
                            Password Generator
                        </h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-sm text-white">
                            This password generator app allows users to create
                            secure and customized passwords based on their
                            preferences. The app features a responsive design
                            that works seamlessly on various screen sizes and
                            devices. Users can choose the length of their
                            passwords, character types, and receive a strength
                            assessment of the generated password. It was built
                            with 
                            <span className="text-textGreen">
                                React
                            </span> and{" "}
                            <span className="text-textGreen">Typescript</span>.{" "}
                            <span className="text-textGreen">Tailwind CSS</span>{" "}
                            was used for styling.
                        </p>
                        <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a
                                className="hover:text-textGreen duration-300"
                                href="https://github.com/DigitalPotential/password-generator"
                            >
                                <TbBrandGithub />
                            </a>
                            <a
                                className="hover:text-textGreen duration-300"
                                href="https://password-generator-navy.vercel.app/"
                            >
                                <RxOpenInNewWindow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project 2 */}
            {/* project 3 */}
        </section>
    );
};

export default Projects;

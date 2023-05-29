import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { password, restCountriesApi } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return (
        <section
            id="project"
            className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title="Some Things I have Built" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {/* Project 1 */}
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
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold text-white">
                                Spotify Clone
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-sm text-white">
                                The Spotify Clone is a web application that
                                mimics key functionalities of Spotify. Built
                                with React.js, TypeScript, and
                                styled-components, it allows users to interact
                                with their Spotify account, manage playlists,
                                and control music playback. Leveraging the
                                Spotify Web API and Web Playback SDK, this
                                project showcases a modern approach to
                                integrating third-party services into a robust
                                and type-safe frontend application.
                            </p>
                            <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Material UI</li>
                                <li>Spotify API</li>
                                <li>Spotify Playback SDK</li>
                            </ul>
                            <div className="text-white text-2xl flex gap-4">
                                <a
                                    className="hover:text-textGreen duration-300"
                                    href="https://github.com/DigitalPotential/Spotify-Clone-React-Typescript-API"
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
                {/* Project 2 */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a
                            className="w-full xl:w-1/2 h-auto relative group"
                            href="https://password-generator-navy.vercel.app/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    src={restCountriesApi}
                                    alt="Rest Countries API"
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold text-white">
                                Countries REST API
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-sm text-white">
                                {`This web application provides detailed data on countries worldwide using the REST Countries API. Users can browse, search, filter countries, and access more specific country information. The responsive design, light and dark modes, and smooth user experience are built with React.`}
                            </p>
                            <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Tailwind CSS</li>
                                <li>Countries API</li>
                                <li>React Router</li>
                                <li>Framer Motion</li>
                                <li>Vite</li>
                            </ul>
                            <div className="text-white text-2xl flex gap-4">
                                <a
                                    className="hover:text-textGreen duration-300"
                                    href="https://github.com/DigitalPotential/REST-Countries-API-Typescript"
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
                {/* project 3 */}
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
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold text-white">
                                Password Generator
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-sm text-white">
                                This password generator app allows users to
                                create secure and customized passwords based on
                                their preferences. The app features a responsive
                                design that works seamlessly on various screen
                                sizes and devices. Users can choose the length
                                of their passwords, character types, and receive
                                a strength assessment of the generated password.
                                It was built with
                                <span className="text-textGreen">
                                    React
                                </span>{" "}
                                and{" "}
                                <span className="text-textGreen">
                                    Typescript
                                </span>
                                .{" "}
                                <span className="text-textGreen">
                                    Tailwind CSS
                                </span>{" "}
                                was used for styling.
                            </p>
                            <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                                <li>Vite</li>
                            </ul>
                            <div className="text-white text-2xl flex gap-4">
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
            </div>
        </section>
    );
};

export default Projects;

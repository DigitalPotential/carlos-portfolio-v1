import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { countriesRestApi, spotify, DigitalWeb } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";


const Projects = () => {
    return (
        <section
            id="projects"
            className="max-w-container mx-auto lgl:px-20 py-24 xs:mt-48"
        >
            <SectionTitle title="Some Things I have Built" titleNo="02" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {/* Project 1 */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a
                            className="w-full xl:w-1/2 h-auto relative group"
                            href="https://spotify-clone-react-typescript-api.vercel.app/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain rounded-lg"
                                    src={spotify}
                                    alt="Spotify Clone"
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-xl xs:text-2xl font-bold text-white">
                                Spotify Clone
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-lg text-white">
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
                                    href="https://spotify-clone-react-typescript-api.vercel.app/"
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
                            href="https://rest-countries-api-xi-topaz.vercel.app/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain rounded-lg"
                                    src={countriesRestApi}
                                    alt="Rest Countries API"
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-xl xs:text-2xl font-bold text-white">
                                Countries REST API
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                                {`This web application provides detailed data on countries worldwide using the REST Countries API. Users can browse, search, filter countries, and access more specific country information. The responsive design, light and dark modes, and smooth user experience are built with React.`}
                            </p>
                            <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
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
                                    href="https://rest-countries-api-xi-topaz.vercel.app/"
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
                            href="https://www.digitalpotential.se/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain rounded-lg"
                                    src={DigitalWeb}
                                    alt="Digital Potential"
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-xl xs:text-2xl font-bold text-white">
                                Digital Potential
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-4 xl:-ml-16 md:p-6 rounded-lg text-white">
                                This website was built for my agency with Webflow, on this site you can see all the services we offer and the work we have done. For this site I used webflows native animations and interactions to create a smooth user experience aswell as custom code to style the scrollbar, add lottie animations and more.
                            </p>
                            <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>Webflow</li>
                                <li>Live site</li>
                            </ul>
                            <div className="text-white text-2xl flex gap-4">
                                <a
                                    className="hover:text-textGreen duration-300"
                                    href="https://www.digitalpotential.se/"
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

import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  spotify,
  DigitalWeb,
  netflixclone,
  geniusAiSaas,
  ecommerceDashboard,
  ecommerceStore,
} from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-container mx-auto lgl:px-20 pb-24 pt-32 xs:mt-48"
    >
      <SectionTitle title="Some Things I have Built" titleNo="02" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ai-by-genius.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={geniusAiSaas}
                  alt="Genius AI SaaS"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Genius AI SaaS
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                {`AI-SaaS: Powered by Open AI and Replicate AI APIs, this app generates varied content – Code, Conversation, Image, Video, and Music. Full-stack with Next.js, React, TailwindCSS, Shadcn/UI, and Prisma. Clerk handles authentication, Axios and Crisp manage communication. PRO version via Stripe. TypeScript, Zod, Zustand showcase my skills.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Typescript</li>
                <li>Next.js</li>
                <li>ShadcnUI</li>
                <li>Prisma</li>
                <li>Clerk</li>
                <li>Crisp</li>
                <li>Stripe</li>
                <li>Open AI</li>
                <li>Replicate AI</li>
              </ul>
              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/DigitalPotential/ai-saas"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://ai-by-genius.vercel.app/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}

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
                The Spotify Clone is a web application that mimics key
                functionalities of Spotify. Built with React.js, TypeScript, and
                styled-components, it allows users to interact with their
                Spotify account, manage playlists, and control music playback.
                Leveraging the Spotify Web API and Web Playback SDK, this
                project showcases a modern approach to integrating third-party
                services into a robust and type-safe frontend application.
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

        {/* Project 3 */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://fakeflix-web-app.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={netflixclone}
                  alt="Netflix Clone"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Netflix Clone - Full-stack
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                {`Netflix Clone is a full-stack web application mimicking Netflix's functionality and design. Built using Next.js, the project provides secure Google and GitHub authentication using NextAuth. Tailwind CSS and React Icons ensure a responsive, user-friendly interface. Data management employs Zustand, SWR, and Prisma Client, while Axios handles data fetching. The app showcases proficiency in modern web development practices and technologies.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>MongoDB</li>
                <li>Prisma</li>
                <li>SWR</li>
                <li>Zustand</li>
                <li>Axios</li>
                <li>Next Auth</li>
                <li>Next JS</li>
              </ul>
              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/DigitalPotential/netflix-clone"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://fakeflix-web-app.vercel.app/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 4 */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ecommerce-admin-six-delta.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={ecommerceDashboard}
                  alt="E-commerce Admin Dashboard"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Ecommerce Admin Dashboard
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-4 xl:-ml-16 md:p-6 rounded-lg text-white">
                {`Built with Next.js and TypeScript, this admin dashboard manages the e-commerce store's core functions. Clerk provides secure authentication, while Shadcn/UI offers a clear interface. Prisma oversees the data layer, streamlining tasks from product attribute definition to order monitoring.

The backend prioritizes TypeScript's robustness, enhancing type safety. Stripe simplifies financial transactions. Technologies like React Hook Form, Zustand, and Axios are integral, handling forms, state management, and HTTP requests respectively.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Webflow</li>
                <li>Live site</li>
              </ul>
              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://ecommerce-admin-six-delta.vercel.app/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 5 */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ecommerce-store-chi-black.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={ecommerceStore}
                  alt="E-commerce Store"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                E-commerce Frontend Store
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-4 xl:-ml-16 md:p-6 rounded-lg text-white">
                This straightforward e-commerce store, built using React and
                Next.js, provides visitors a simple interface to browse products
                by category, size, and color. Integrated with Stripe, it ensures
                a secure and seamless checkout process. The store maintains
                up-to-date product availability through its real-time connection
                with the backend, emphasizing core functionality.
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Next.JS</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>Headless UI</li>
                <li>Axios</li>
                <li>React Hot Toast</li>
                <li>Zustand</li>
                <li>Stripe</li>
              </ul>
              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://ecommerce-store-chi-black.vercel.app/"
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

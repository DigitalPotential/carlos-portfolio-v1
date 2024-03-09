import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  spotify,
  netflixclone,
  geniusAiSaas,
  ecommerceDashboard,
  discordClone,
  brandroidDesktop,
  pinglooDesktop,
} from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-container mx-auto lgl:px-20 pb-24 pt-32 xs:mt-48"
    >
      <SectionTitle title="Technical Contributions & Creations" titleNo="02" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 Brandroid */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <PinContainer
                title="/Brandroid.ai"
                href="https://www.brandroid.ai/"
              >
                <div className="flex flex-col basis-full w-[40rem] h-[25rem] ">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={brandroidDesktop}
                    alt="Brandroid.ai"
                  />
                </div>
              </PinContainer>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-[100]">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Brandroid.ai
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-lg text-white">
                {`Bridging AI with e-commerce, Brandroid empowers online merchants and dropshippers through seamless integration with Shopify and Facebook Ads. Built on the MERN stack, it offers robust backend support and a responsive React frontend. It provides analytics for optimizing product listings and ad strategies, AI-generated product descriptions, ad content, and email campaigns, simplifying e-commerce management and enabling effective scaling.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Shopify API</li>
                <li>Facebook API</li>
                <li>OpenAI</li>
                <li>Styled Components</li>
                <li>Adyen Checkout</li>
              </ul>

              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.brandroid.ai/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 Pingloo */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://www.pingloo.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={pinglooDesktop}
                  alt="Pingloo"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Pingloo
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-lg text-white">
                At Pingloo, I play a pivotal role in both mobile and web
                application development, employing React Native with Expo,
                Next.js, and integrating Mapbox for advanced mapping
                functionalities. This project highlights my proficiency in
                crafting cross-platform solutions that exceed user expectations
                with modern, cutting-edge tools. My work spans strategic tech
                stack planning, fostering an agile development environment, and
                collaborating with experienced project managers to deliver
                innovative event ticketing services.
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React Native</li>
                <li>Next.js</li>
                <li>Expo</li>
                <li>Mapbox</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Styled Components</li>
                <li>TailwindCSS</li>
                <li>Couchbase</li>
                <li>Axios</li>
                <li>JWT</li>
              </ul>

              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.pingloo.com/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 discord clone */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://discord-clone-production-b518.up.railway.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-lg"
                  src={discordClone}
                  alt="Discord Clone"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Discord Clone
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                {`A real-time Discord clone built using Next.js, TypeScript, TailwindCSS, and Prisma, featuring real-time messaging & video calls via Socket.io, dynamic channels (text, audio, video), member & server management tools, infinite message loading, an intuitive UI with light/dark modes, a MySQL backend with Prisma ORM, and secure authentication through Clerk.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Shadcn/UI</li>
                <li>Prisma</li>
                <li>Clerk</li>
                <li>Zustand</li>
                <li>Axios</li>
                <li>Tailwind CSS</li>
                <li>Socket.io</li>
              </ul>
              <div className="text-white text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/DigitalPotential/discord-clone"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://discord-clone-production-b518.up.railway.app/"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 ai saas */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Genius AI SaaS
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-lg text-white">
                {`AI-SaaS: Powered by Open AI and Replicate AI APIs, this app generates varied content – Code, Conversation, Image, Video, and Music. Full-stack with Next.js, React, TailwindCSS, Shadcn/UI, and Prisma. Clerk handles authentication, Axios and Crisp manage communication. PRO version via Stripe. TypeScript, Zod, Zustand showcase my skills.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Shadcn/UI</li>
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

        {/* Project 5 Spotify clone */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Spotify Clone
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                The Spotify Clone is a web application that mimics key
                functionalities of Spotify. Built with React.js, TypeScript, and
                styled-components, it allows users to interact with their
                Spotify account, manage playlists, and control music playback.
                Leveraging the Spotify Web API and Web Playback SDK, this
                project showcases a modern approach to integrating third-party
                services into a robust and type-safe frontend application.
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>TypeScript</li>
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

        {/* Project 6 Netflix clone */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xs:items-end xs:text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Netflix Clone
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-4 xl:-ml-16 md:p-6 rounded-lg text-white">
                {`Netflix Clone is a full-stack web application mimicking Netflix's functionality and design. Built using Next.js, the project provides secure Google and GitHub authentication using NextAuth. Tailwind CSS and React Icons ensure a responsive, user-friendly interface. Data management employs Zustand, SWR, and Prisma Client, while Axios handles data fetching. The app showcases proficiency in modern web development practices and technologies.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>TypeScript</li>
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

        {/* project 7 E-com dashboard */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:items-start text-left z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-xl xs:text-2xl font-bold text-white">
                Ecommerce Admin Dashboard
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-lg text-white">
                {`Built with Next.js and TypeScript, this admin dashboard manages the e-commerce store's core functions. Clerk provides secure authentication, while Shadcn/UI offers a clear interface. Prisma oversees the data layer, streamlining tasks from product attribute definition to order monitoring.

The backend prioritizes TypeScript's robustness, enhancing type safety. Stripe simplifies financial transactions. Technologies like React Hook Form, Zustand, and Axios are integral, handling forms, state management, and HTTP requests respectively.`}
              </p>
              <ul className="text-xs md:text-sm font-unbounded tracking-wide flex flex-wrap gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Clerk</li>
                <li>TailwindCSS</li>
                <li>Shadcn/UI</li>
                <li>Prisma</li>
                <li>Stripe</li>
                <li>Zustand</li>
                <li>Axios</li>
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
      </div>
    </section>
  );
};

export default Projects;

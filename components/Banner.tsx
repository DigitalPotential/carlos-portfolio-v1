"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/techLottie.json";
import Button3D from "./3DButton/Button3D";

const Banner = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div
      id="home"
      className="max-w-contentContainer xs:h-[90vh] flex flex-col items-center justify-center mdl:flex-row mx-auto z-40"
    >
      <div className="mx-auto py-10 mdl:py-24 flex flex-col gap-3 lgl:gap-8 mdl:pl-20 xl:px-8">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-unbounded tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-unbounded font-semibold text-white flex flex-col"
        >
          Carlos.{" "}
          <span className="text-textDark mt-2 lgl:mt-4">
            Sculpting the Digital Future.
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base flex flex-col md:max-w-[650px] text-textDark font-medium"
        >
          {`From the heart of Stockholm, my craft in web development bridges the gap between imagination and reality. My expertise in the MERN stack is the cornerstone of creating dynamic, responsive, and user-centric digital experiences. Whether it's revamping an existing site or building a new application from scratch, I'm here to bring your digital aspirations to life.`}
        </motion.p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link className="mt-4" href="#projects" onClick={handleScroll}>
            {/* <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="nav-link w-56 h-14 px-1 text-sm font-unbounded border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
                    >
                        Check out my Projects!
                    </motion.button> */}
            <div className="button-container w-64 h-16 ml-2 mt-5 lgl:mt-0 flex justify-center items-center">
              <Button3D />
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="flex items-start justify-center xs:py-0 mdl:py-24">
        <Lottie
          className="w-[400px] lgl:w-[450px]"
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default Banner;

// initial={{ y: 10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.9 }}

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/lottieDevelopment.json";

const Banner = () => {
    const ref = useRef<string | any>("");
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
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
        <div id="home" className="max-w-contentContainer xs:h-[90vh] flex flex-col mdl:flex-row mx-auto z-40">
            <div className="mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
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
                        I build things for the web.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-base flex flex-col md:max-w-[650px] text-textDark font-medium"
                >
                    I am a web developer based in Stockholm, Sweden specializing
                    in the Mern stack. I enjoy creating things that live on the
                    internet, whether that be websites, applications, or
                    anything in between. My goal is to always build products
                    that provide pixel-perfect, performant experiences.{""}
                    <a
                        href="https://digitalpotential.webflow.io/"
                        target="_blank"
                    >
                        <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                            Learn more
                            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                        </span>
                    </a>
                </motion.p>
                <Link href="#projects" onClick={handleScroll}>
                    <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="nav-link w-56 h-14 px-1 text-sm font-unbounded border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
                    >
                        Check out my Projects!
                    </motion.button>
                </Link>
            </div>
            <div className="flex items-start justify-center py-10 mdl:py-24">
                <Lottie className="w-[400px]" animationData={animationData} />
            </div>
        </div>
    );
};

export default Banner;

"use client"

import React from "react";
import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] bg-bodyColor sticky top-0 z-50 px-4">
            <div className="max-w-container font-titleFont mx-auto py-1 flex justify-between items-center h-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image className="w-14" src={logo} alt="logo" />
                </motion.div>
                <div>
                    <ul className="flex text-[13px] gap-7">
                        <Link
                            href="#home"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            >Home</motion.li>
                        </Link>
                        <Link
                            href="#projects"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                            >
                                <span className="text-textGreen">01.</span> Projects
                            </motion.li>
                        </Link>
                        <Link
                            href="#about"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.2 }}
                            >
                                <span className="text-textGreen">02.</span> About
                            </motion.li>
                        </Link>
                        <Link
                            href="#experience"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}
                            >
                                <span className="text-textGreen">03.</span> Experience
                            </motion.li>
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 }}
                            >
                                <span className="text-textGreen">04.</span> Contact
                            </motion.li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

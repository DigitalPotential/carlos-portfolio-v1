import React from "react";
import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] bg-bodyColor sticky top-0 z-50 px-4">
            <div className="max-w-container font-titleFont mx-auto py-1 flex justify-between items-center h-full">
                <div>
                    <Image className="w-14" src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="flex text[13px] gap-7" >
                        <Link
                            href="#home"
                            className="flex items-center gap-1 font-medium text-textdark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            href="#home"
                            className="flex items-center gap-1 font-medium text-textdark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <span>01.</span> About
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

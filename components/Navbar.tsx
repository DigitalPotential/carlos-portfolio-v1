import React from "react";
import Image from "next/image";
import { logo } from "@/public/assets";

const Navbar = () => {
    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] bg-bodyColor sticky top-0 z-50 px-4">
            <div className="max-w-container font-titleFont mx-auto py-1 flex justify-between items-center h-full">
                <div>
                    <Image className="w-14" src={logo} alt="logo" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;
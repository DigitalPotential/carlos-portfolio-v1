"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from 'framer-motion'
import Banner from "@/components/Banner";
import { use } from "react";


export default function Home() {
    return (
        <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
            <Navbar />
            <div className="w-full h-[88vh] lg:flex items-center gap-20 justify-between">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0">
                    <LeftSide />
                </motion.div>
                <div className="h-[88vh] w-full mx-auto lg:flex items-center gap-20 justify-between">
                   <Banner />
                   {/* About */}
                   {/* Experience */}
                   {/* Projects */}
                   {/* Archive */}
                   {/* Contact */}
                   {/* Footer */}
                </div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0">
                    <RightSide />
                </motion.div>
            </div>
        </main>
    );
}

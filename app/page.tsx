"use client";

import "./globals.css";
import Lottie from "lottie-react";
import animationDataMobile from "@/public/assets/lottieBackgroundMobile.json";
import animationData from "@/public/assets/lottieBackground.json";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Archive from "@/components/Archive";

export default function Home() {
  return (
    <main className="relative w-full h-[100vh] font-montserrat text-textLight overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <Lottie
            className="lgl:block hidden overflow-hidden"
            animationData={animationData}
            style={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              minHeight: "100%",
              minWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Lottie
            className="lgl:hidden block overflow-hidden"
            animationData={animationDataMobile}
            style={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              minHeight: "100%",
              minWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      </div>
      <div className="relative z-10 w-full h-full overflow-x-hidden overflow-y-auto">
        <Navbar />
        <div className="w-full overflow-x-hidden items-center gap-20 justify-between overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-full w-full mx-auto p-4">
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Archive />
            <Experience />
            <Contact />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

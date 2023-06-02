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
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Archive from "@/components/Archive";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen font-montserrat text-textLight overflow-x-hidden">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0">
                    <Lottie
                        className="lgl:block hidden"
                        animationData={animationData}
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            minHeight: "100%",
                            minWidth: "100%",
                        }}
                    />
                    <Lottie
                        className="lgl:hidden block"
                        animationData={animationDataMobile}
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            minHeight: "100%",
                            minWidth: "100%",
                        }}
                    />
                </div>
            </div>
            <div className="relative z-10 w-full h-full overflow-y-auto">
                <Navbar />
                <div className="w-full h-[90vh] flex items-center gap-20 justify-between">
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
                        {/* <Testimonials /> */}
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

// original code
// "use client";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import LeftSide from "@/components/LeftSide";
// import RightSide from "@/components/RightSide";
// import { motion } from 'framer-motion'
// import Banner from "@/components/Banner";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Testimonials from "@/components/Testimonials";
// import Skills from "@/components/Skills";
// import Archive from "@/components/Archive";
// import Lottie from "lottie-react";
// import animationData from "@/public/assets/lottieBackground.json";
// import { Player } from "@lottiefiles/react-lottie-player";

// export default function Home() {
//     return (
//         <main className="scrollGradient w-full h-screen font-montserrat text-textLight overflow-x-hidden overflow-y-scroll">
//             <Navbar />
//             <div className="w-full h-[88vh] lg:flex items-center gap-20 justify-between">
//                 <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0">
//                     <LeftSide />
//                 </motion.div>
//                 <div className="h-[88vh] w-full mx-auto p-4">
//                    <Banner />
//                    <About />
//                    <Skills />
//                    <Projects />
//                    <Archive />
//                    <Experience />
//                    {/* <Testimonials /> */}
//                    <Contact />

//                    {/* Footer */}
//                 </div>
//                 <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0">
//                     <RightSide />
//                 </motion.div>
//             </div>
//         </main>
//     );
// }

// "use client";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import LeftSide from "@/components/LeftSide";
// import RightSide from "@/components/RightSide";
// import { motion } from "framer-motion";
// import Banner from "@/components/Banner";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Testimonials from "@/components/Testimonials";
// import Skills from "@/components/Skills";
// import Archive from "@/components/Archive";
// import Lottie from "lottie-react";
// import animationData from "@/public/assets/lottieBackground.json";
// import { Player } from "@lottiefiles/react-lottie-player";

// export default function Home() {
//     return (
//         <main className="relative scrollGradient w-full h-screen font-montserrat text-textLight overflow-x-hidden">
//             {/* <Lottie animationData={animationData} className="absolute w-full h-full inset-0 z-0" /> */}
//             <div className="sticky top-0 left-0 w-full min-h-screen z-0 overflow-hidden">
//                 <Player
//                     autoplay
//                     loop
//                     src={animationData}
//                     style={{ height: "100%", width: "100%" }}
//                 />
//             </div>
//             <div className="contentWrapper relative z-30 overflow-y-scroll">
//                 <Navbar />
//                 <div className="w-full h-[88vh] lg:flex items-center gap-20 justify-between relative z-40">
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1.5 }}
//                         className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
//                     >
//                         <LeftSide />
//                     </motion.div>
//                     <div className="h-[88vh] w-full mx-auto p-4">
//                         <Banner />
//                         <About />
//                         <Skills />
//                         <Projects />
//                         <Archive />
//                         <Experience />
//                         {/* <Testimonials /> */}
//                         <Contact />

//                         {/* Footer */}
//                     </div>
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1.5 }}
//                         className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
//                     >
//                         <RightSide />
//                     </motion.div>
//                 </div>
//             </div>
//         </main>
//     );
// }

// best so far
// export default function Home() {
//     return (
//         <div className="relative w-full min-h-screen font-montserrat text-textLight overflow-x-hidden overflow-y-auto">
//             <div className="relative">
//                 <div className="absolute inset-0 z-0">
//                     <Player
//                         autoplay
//                         loop
//                         src={animationData}
//                         style={{ width: "100%", height: "100%" }}
//                     />
//                 </div>
//                 <main className="relative z-10">
//                     <div className="contentWrapper">
//                         <Navbar />
//                         <div className="w-full h-[88vh] lg:flex items-center gap-20 justify-between">
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 1.5 }}
//                                 className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
//                             >
//                                 <LeftSide />
//                             </motion.div>
//                             <div className="h-[88vh] w-full mx-auto p-4">
//                                 <Banner />
//                                 <About />
//                                 <Skills />
//                                 <Projects />
//                                 <Archive />
//                                 <Experience />
//                                 {/* <Testimonials /> */}
//                                 <Contact />

//                                 {/* Footer */}
//                             </div>
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 1.5 }}
//                                 className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
//                             >
//                                 <RightSide />
//                             </motion.div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

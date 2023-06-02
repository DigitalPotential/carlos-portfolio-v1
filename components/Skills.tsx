import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
    cssLogo,
    expressLogo,
    framerMotionLogo,
    gitLogo,
    htmLogo,
    javascriptLogo,
    mongodbLogo,
    nextjsLogo,
    nodejsLogo,
    reactLogo,
    tailwindcssLogo,
    typescriptLogo,
    webflowLogo,
    MUILogo,
} from "@/public/assets";
import { ImageProps } from "next/image";
import Lottie from "lottie-react";
import animationData from "../public/assets/lottieBlob.json";

interface SkillProps {
    name: string;
    x: string;
    y: string;
    imageSrc: ImageProps["src"];
}

const Skill: React.FC<SkillProps> = ({ name, imageSrc, x, y }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            className="flex items-center justify-center rounded-full font-semibold w-12 h-12 xs:w-14 xs:h-14 lgl:w-20 lgl:h-20 xl:w-32 xl:h-32 xs:bg-textGreen text-textDark p-2 xs:p-3 xl:p-6 shadow-black cursor-pointer absolute"
            whileHover={{ scale: 1.3 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
            transition={{ duration: 1.2 }}
        >
            <Image src={imageSrc} alt={name} />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="max-w-container mx-auto">
            <h2 className="font-unbounded text-white font-bold text-3xl w-full text-center">
                Technologies I like to use
            </h2>
            <div className="flex justify-center items-center mt-10">
                <div className="w-full h-[200px] xs:h-[600px] relative flex items-center justify-center">
                    <motion.div className="flex items-center justify-center rounded-full font-semibold text-textDark shadow-black cursor-pointer">
                        <Lottie
                            className="w-20 xs:w-12 sm:w-16 md:w-24 lgl:w-36 xl:w-72 "
                            animationData={animationData}
                        />
                    </motion.div>
                    <Skill imageSrc={cssLogo} name="css" x="30vw" y="10vw" />
                    <Skill
                        imageSrc={javascriptLogo}
                        name="Javascript"
                        x="-15vw"
                        y="0vw"
                    />
                    <Skill imageSrc={reactLogo} name="React" x="15vw" y="0vw" />
                    <Skill
                        imageSrc={typescriptLogo}
                        name="Typescript"
                        x="0vw"
                        y="10vw"
                    />
                    <Skill
                        imageSrc={mongodbLogo}
                        name="MongoDB"
                        x="-30vw"
                        y="0vw"
                    />
                    <Skill
                        imageSrc={expressLogo}
                        name="Express"
                        x="-30vw"
                        y="-10vw"
                    />
                    <Skill
                        imageSrc={nodejsLogo}
                        name="Node.JS"
                        x="-15vw"
                        y="10vw"
                    />
                    <Skill
                        imageSrc={nextjsLogo}
                        name="Next.JS"
                        x="0vw"
                        y="-10vw"
                    />
                    <Skill imageSrc={MUILogo} name="MUI" x="-30vw" y="10vw" />
                    <Skill
                        imageSrc={webflowLogo}
                        name="Webflow"
                        x="15vw"
                        y="10vw"
                    />
                    <Skill imageSrc={gitLogo} name="Git" x="30vw" y="0vw" />
                    <Skill
                        imageSrc={tailwindcssLogo}
                        name="Tailwindcss"
                        x="15vw"
                        y="-10vw"
                    />
                    <Skill
                        imageSrc={framerMotionLogo}
                        name="FramerMotion"
                        x="-15vw"
                        y="-10vw"
                    />
                    <Skill imageSrc={htmLogo} name="HTML" x="30vw" y="-10vw" />
                </div>
            </div>
        </div>
    );
};

export default Skills;

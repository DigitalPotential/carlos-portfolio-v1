import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
    skillsCircle,
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
    webLogo,
    webflowLogo,
    MUILogo
} from "@/public/assets";
import { ImageProps } from "next/image";

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
            className="flex items-center justify-center rounded-full font-semibold xs:bg-textGreen text-textDark p-3 shadow-black cursor-pointer absolute"
            whileHover={{ scale: 1.3 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
            transition={{ duration: 1.2 }}
        >
            <Image src={imageSrc} alt={name} width={40} height={40} />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="max-w-container h-screen mx-auto">
            <h2 className="font-unbounded text-white font-bold text-5xl mt-10 w-full text-center">
                Skills
            </h2>
            <div className="flex justify-center items-center h-[80vh] mt-14">
                <div className="w-full h-[80vh] mt-14 relative flex items-center justify-center">
                    <Image
                        src={skillsCircle}
                        alt="skillsCircle"
                        fill={true}
                        style={{ objectFit: "fill" }}
                        // className="w-full h-[80vh] items-center justify-center absolute"
                    />

                    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-textGreen text-textDark py-3 px-3 shadow-black cursor-pointer">
                        <Image src={webLogo} alt="weblogo" className="w-12" />
                    </motion.div>
                    <Skill
                        imageSrc={cssLogo}
                        name="css"
                        x="-20vw"
                        y="2vw"
                    />
                    <Skill imageSrc={javascriptLogo} name="Javascript" x="-7vw" y="-5vw" />
                    <Skill imageSrc={reactLogo} name="React" x="8vw" y="0vw" />
                    <Skill imageSrc={typescriptLogo} name="Typescript" x="0vw" y="8vw" />
                    <Skill imageSrc={mongodbLogo} name="MongoDB" x="-20vw" y="-15vw" />
                    <Skill imageSrc={expressLogo} name="Express" x="15vw" y="-12vw" />
                    <Skill imageSrc={nodejsLogo} name="Node.JS" x="23vw" y="-5vw" />
                    <Skill imageSrc={nextjsLogo} name="Next.JS" x="-9vw" y="4vw" />
                    <Skill imageSrc={MUILogo} name="MUI" x="0%" y="-240%" />
                    <Skill imageSrc={webflowLogo} name="Webflow" x="-90%" y="80%" />
                    <Skill imageSrc={gitLogo} name="Git" x="10vw" y="7vw" />
                    <Skill imageSrc={tailwindcssLogo} name="Tailwindcss" x="5vw" y="-8vw" />
                    <Skill imageSrc={framerMotionLogo} name="FramerMotion" x="10vw" y="12vw" />
                    <Skill imageSrc={htmLogo} name="HTML" x="-11vw" y="13vw" />
                </div>
            </div>
        </div>
    );
};

export default Skills;

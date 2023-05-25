import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { skillsCircle } from "@/public/assets";

interface SkillProps {
    name: string;
    x: string;
    y: string;
  }
  

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
    const { ref, inView } = useInView({
       threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            className="flex items-center justify-center rounded-full font-semibold bg-textGreen text-textDark p-8 shadow-black cursor-pointer absolute"
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: inView ? x : 0, y: inView ? y : 0 }}
            transition={{ duration: 1.2 }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="max-w-container h-screen mx-auto">
            <h2 className="font-unbounded text-white font-bold text-5xl mt-32 w-full text-center">
                Skills
            </h2>
            <div
                className="w-full h-screen mt-14 relative flex items-center justify-center rounded-full"
                >
                    <Image src={skillsCircle} alt="skillsCircle" className="w-full h-screen items-center justify-center absolute"/>
                
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-textGreen text-textDark py-3 px-6 shadow-black cursor-pointer">
                    Web
                    
                </motion.div>
                <Skill name="CSS" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="-5vw" y="-10vw" />
                <Skill name="React" x="20vw" y="6vw" />
                <Skill name="Typescript" x="0vw" y="12vw" />
                <Skill name="MongoDB" x="-20vw" y="-15vw" />
                <Skill name="Express" x="15vw" y="-12vw" />
                <Skill name="Node.JS" x="32vw" y="-5vw" />
                <Skill name="Next.JS" x="-20vw" y="20vw" />
                <Skill name="MUI" x="0vw" y="-22vw" />
                <Skill name="Webflow" x="-25vw" y="12vw" />
                <Skill name="Github" x="22vw" y="18vw" />
            </div>
        </div>
    );
};

export default Skills;

import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { carlos } from "@/public/assets";

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-28 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title="About me" titleNo="01" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        I am a self-taught developer with a passion for learning
                        and a love for programming. I have a background in sales
                        and customer service, which has given me a unique
                        perspective on how to build{" "}
                        <span className="text-textGreen">
                            user-friendly applications.
                        </span>
                    </p>
                    <p>
                        I am currently working as a freelance developer,
                        building websites and applications for small businesses
                        and startups. I am also working on my own projects,{" "}
                        <span className="text-textGreen">
                            which I hope to launch soon.
                        </span>
                    </p>
                    <p>
                        Here are a few technologies I have been working with
                        recently:
                    </p>
                    <ul className="max-w[450px] text-sm font-unbounded grid xs:grid-cols-3 grid-cols-2 gap-2 mt-6 flex-wrap">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Javascript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            React
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Typescript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            TailwindCSS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            MongoDB
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            Express.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                            </span>
                            MUI
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 xs:-left-6 xs:-top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex justify-center xs:pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-cover"
                                src={carlos}
                                alt="profileimg"
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    );
};

export default About;

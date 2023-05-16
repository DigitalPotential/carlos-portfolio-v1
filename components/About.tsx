import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
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
                        Here are a few technologies I've been working with
                        recently:
                    </p>
                    <ul className="max-w[450px] text-sm font-unbounded grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                Javascript
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                React
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                Next.js
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                Typescript
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                Tailwindcss
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen">
                                <AiFillThunderbolt />
                                MongoDB
                            </span>
                        </li>

                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default About;

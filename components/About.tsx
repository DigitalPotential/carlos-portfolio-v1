import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { carlos } from "@/public/assets";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const About = () => {
  const imageUrl = "/assets/images/carlos.png";
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-28 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            <span className="text-textGreen">
              Welcome to my corner of the internet.{" "}
            </span>
            {`I'm Carlos, a passionate web developer and entrepreneur driven by
            the challenge of transforming ideas into reality through digital
            solutions. My technical journey navigates through the intricacies of
            the MERN stack, including React, React Native, TypeScript,
            JavaScript, and beyond. At the helm of Digital Potential, I lead
            projects that span across Webflow, WordPress, Shopify, and Wix,
            showcasing the versatility and depth of my development skills.`}
          </p>
          <p>
            My experience at Brandroid exemplifies my commitment to enhancing
            app functionality and seamless integration with external services.
            Moreover, my roles as a teacher at Nackademin and co-founder of
            Pingloo underscore my dedication to knowledge sharing and
            innovation. Always on the lookout for cutting-edge technologies,{" "}
            <span className="text-textGreen">
              I aim to optimize user experiences and web solutions.
            </span>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
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
              React Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Prisma
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
              GraphQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Zustand
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Expo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Shadcn/UI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Styled Components
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-96 relative group">
          <div className="absolute w-full h-80 xs:-left-6 xs:-top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex justify-center xs:pl-6 lgl:pl-0">
              <DirectionAwareHover imageUrl={imageUrl}>
                Passionate individual
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

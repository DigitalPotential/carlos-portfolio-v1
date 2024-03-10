import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Brandroid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="p-2 xs:p-6 mx-auto w-full"
    >
      <h3 className="flex text-white gap-1 font-medium text-xl font-unbounded">
        Full-stack Developer Consultant
        <span className="text-textGreen tracking-wide">@Brandroid</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Januari 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <div>
            <span className="font-bold">Development and Integration</span>{" "}
            <br /> In my role with Brandroid, I leverage my expertise in the
            MERN stack to lead development efforts, focusing on enhancing app
            functionality and integration with external services like Shopify,
            Facebook, and Adyen. My responsibilities include refining AI-driven
            content generation using OpenAI, troubleshooting integration
            challenges, and steering strategic app improvements.
          </div>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <div>
            <span className="font-bold">
              Strategic Management and Compliance
            </span>{" "}
            <br /> I actively negotiate platform permissions, ensure policy
            compliance, and engage with stakeholders to align on strategic
            decisions. My commitment is to enhance the user experience and
            expand app capabilities through innovative solutions and strategic
            partnerships.
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Brandroid;

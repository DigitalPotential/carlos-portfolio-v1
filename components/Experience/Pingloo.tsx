import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Pingloo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex text-white gap-1 font-medium text-xl font-unbounded">
        Founder & Full-stack developer
        <span className="text-textGreen tracking-wide">@Pingloo</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <div>
            <span className="font-bold">Technological Leadership</span> <br />{" "}
            At Pingloo, I lead the technology strategy, implementing React
            Native with Expo for mobile and Next.js for web, integrated with
            Mapbox. This ensures a unified user experience across platforms,
            highlighted by interactive mapping features.
          </div>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <div>
            <span className="font-bold">Collaboration and Innovation</span>
            <br />
            {`I collaborate with seasoned project managers and founders, promoting an agile culture. Together, we tackle the tech landscape's complexities, ensuring Pingloo's innovations meet our audience's needs.`}
          </div>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <div>
            <span className="font-bold">Architectural Excellence</span> <br />{" "}
            My focus on a robust, scalable architecture positions Pingloo as a
            leader in event ticketing, delivering unmatched service and user
            satisfaction.
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default Pingloo;

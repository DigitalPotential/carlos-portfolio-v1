import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ScanrecoGroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="p-2 xs:p-6 mx-auto w-full"
    >
      <h3 className="flex text-white gap-1 font-medium text-xl font-unbounded">
        Quality Assurance
        <span className="text-textGreen tracking-wide">@Scanreco Group</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2016 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          At Scanreco Group, my responsibilities center around quality assurance
          for our diverse range of radio remote systems for industrial
          machinery.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {`My profound understanding of the product construction and functionality bolsters our commitment to 'Never-Stop Technology' and optimized human-machine interactions.`}
        </li>
      </ul>
    </motion.div>
  );
};

export default ScanrecoGroup;

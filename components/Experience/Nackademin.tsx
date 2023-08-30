import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Nackademin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex text-white gap-1 font-medium text-xl font-unbounded">
        Teacher / Full-stack developer
        <span className="text-textGreen tracking-wide">@Nackademin</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Sep 2023 - Oct 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I will be providing TypeScript instruction over a span of 6 weeks
          during the months of September and October. This freelance engagement
          involves conducting classes for 2 days per week, where I will be
          imparting foundational knowledge of TypeScript programming. The aim is
          to enhance participants abilities in developing robust and type-safe
          applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The students will study the subject in a full-time capacity, and will be expected to complete a Full-stack TypeScript e-commerce project by the end of the course.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Course name: Backend 3 - TypeScript
        </li>
      </ul>
    </motion.div>
  );
};

export default Nackademin;

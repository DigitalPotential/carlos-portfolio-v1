import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const DigitalPotential = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="p-2 xs:p-6 mx-auto w-full"
    >
      <h3 className="flex text-white gap-1 font-medium text-xl font-unbounded">
        Full-stack developer
        <span className="text-textGreen tracking-wide">@Digital Potential</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2020 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Throughout my journey with Digital Potential, I built a diverse skill
          set by creating websites using tools like Webflow, Shopify, Wix, and
          Wordpress, as well as expanding my expertise into SEO and graphic
          design.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I managed digital marketing campaigns with Facebook Ads Manager,
          catering to various client needs, be it website development,
          marketing, or both.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This hands-on experience provided me a holistic understanding of the
          digital landscape.
        </li>
      </ul>
    </motion.div>
  );
};

export default DigitalPotential;

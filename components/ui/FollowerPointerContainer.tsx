import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../public/assets/techLottie.json"; // Ensure this path is correct

export const FollowerPointerContainer = ({
  className,
}: {
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  return (
    <div
      onMouseLeave={() => setIsInside(false)}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={className}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} />}
      </AnimatePresence>
      <Lottie
        className="w-[400px] lgl:w-[450px]"
        animationData={animationData}
      />
    </div>
  );
};

export const FollowPointer = ({ x, y }: { x: any; y: any }) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full relative z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
        cursor: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-textGreen transform -rotate-[90deg] -translate-x-[12px] stroke-textGreen"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: "#212E4F",
          cursor: "none",
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          "p-3 mt-3 bg-neutral-200 text-textGreen min-w-72 text-xs rounded-md shadow-[0_4px_14px_0_rgb(100,255,218,39%)] "
        }
      >
        From eye-catching animations to robust backends, my expertise ensures
        smooth and immersive user experiences.
      </motion.div>
    </motion.div>
  );
};

<button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] rounded-md text-textGreen font-light ">
  Next.js Blue
</button>;

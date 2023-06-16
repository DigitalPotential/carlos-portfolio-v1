import { Suspense, useState, useEffect } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./buttonSettings";
import useMeasure from "react-use-measure";

const Button3D = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        className="appearance-none border cursor-pointer border-textGreen text-white rounded-md m-0 px-6 py-1 font-bold text-3xl leading-none tracking-tighter relative flex items-center"
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-md bg-gradient-to-r from-[#1B2545] to-textGreen"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
        >
          <div className="absolute bottom-0 h-8 w-48 filter blur-xl bg-textGreen right-10" />
          <div className="absolute bottom-0 h-8 w-48 filter blur-xl bg-bodyColor left-10" />
          <div className="absolute top-[-100px] bottom-[-100px] left-[-100px] right-[-100px] pointer-events-none" style={{ width: 'calc(100% + 200px)' }}>
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          className="w-56 py-5 font-semibold z-10"
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
        >
          Say Hello
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default Button3D;

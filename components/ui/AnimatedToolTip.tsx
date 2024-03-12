"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    icon: JSX.Element;
    href: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 5 };
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-60, 60]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    x.set(offsetX);
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative inline-block w-10 h-10 text-xl bg-hoverColor rounded-full items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            className="flex items-center justify-center h-full"
          >
            {item.icon}
          </a>
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1.2,
                  transition: {
                    type: "tween",
                    stiffness: 500,
                    damping: 15,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute w-32 z-50 px-2 py-2 text-xs bg-[#212E4F] rounded-md shadow-xl -top-16 -left-1/2 flex flex-col items-center justify-center"
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  x: "50%", // Center tooltip horizontally
                }}
              >
                <div className="text-base font-bold text-textGreen">
                  {item.name}
                </div>
                <div className="text-white text-center">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

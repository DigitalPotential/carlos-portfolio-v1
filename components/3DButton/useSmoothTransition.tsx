import { useSpring, useTransform, MotionValue } from "framer-motion";

type SpringOptions = {
  stiffness: number;
  damping: number;
};

export function useSmoothTransform(
  value: MotionValue<number>,
  springOptions: SpringOptions,
  transformer: (value: number) => number
): any {
  return useSpring(useTransform(value, transformer), springOptions);
}

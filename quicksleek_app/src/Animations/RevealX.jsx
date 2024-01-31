import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const RevealX = ({
  once,
  duration,
  startPos,
  delay,
  children,
  width = "fit-content" || "100%",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateX(${startPos}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      <motion.div>{children}</motion.div>
    </div>
  );
};

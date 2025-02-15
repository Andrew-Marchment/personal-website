"use client";

import { motion, MotionConfig } from "motion/react";
import { useState } from "react";

export default function AnimatedHamburgerButton() {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => {
          setActive((previous) => !previous);
        }}
        className="hamburger-button"
        aria-controls="primary-nav"
        aria-expanded={active}
      >
        <span className="sr-only">Menu</span>
        <motion.span
          variants={VARIANTS.top}
          className="hamburger-button__line"
          style={{ top: "35%", left: "50%", x: "-50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="hamburger-button__line"
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="hamburger-button__line"
          style={{
            top: "65%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["65%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "65%"],
      left: "50%",
    },
  },
};

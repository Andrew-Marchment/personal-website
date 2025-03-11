"use client";

import { motion } from "framer-motion";
import React from "react";

type linkButtonProps = {
  children: string;
  href: string;
};

export default function LinkButton({ children, href }: linkButtonProps) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="button"
    >
      <div aria-hidden>
        {children.split("").map((char, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ display: "inline-block" }}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div style={{ position: "absolute" }} aria-hidden>
        {children.split("").map((char, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ display: "inline-block" }}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <span className="sr-only">{children}</span>
    </motion.a>
  );
}
